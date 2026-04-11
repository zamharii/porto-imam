type FadeInOptions = {
  delay?: number
  threshold?: number
  rootMargin?: string
}

type FadeInEl = HTMLElement & {
  __fadeInObserver?: IntersectionObserver
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade-in', {
    mounted(el: FadeInEl, binding) {
      const options: FadeInOptions =
        binding.value && typeof binding.value === 'object' ? (binding.value as FadeInOptions) : {}

      el.classList.add('fade-in')

      if (typeof options.delay === 'number' && options.delay > 0) {
        el.style.transitionDelay = `${options.delay}ms`
      }

      const reveal = () => {
        requestAnimationFrame(() => {
          el.classList.add('is-visible')
        })
      }

      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('is-visible')
        return
      }

      if (!('IntersectionObserver' in window)) {
        reveal()
        return
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            reveal()
            obs.unobserve(entry.target)
          }
        },
        {
          threshold: typeof options.threshold === 'number' ? options.threshold : 0.12,
          rootMargin: typeof options.rootMargin === 'string' ? options.rootMargin : '0px 0px -10% 0px'
        }
      )

      el.__fadeInObserver = observer
      observer.observe(el)
    },
    beforeUnmount(el: FadeInEl) {
      el.__fadeInObserver?.disconnect()
      delete el.__fadeInObserver
    }
  })
})

