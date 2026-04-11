<template>
  <main class="min-h-screen bg-white">
    <div class="px-4 sm:px-6">
      <div class="project-hero" :style="themeStyles.heroVars">
        <header class="mx-auto max-w-6xl pt-10">
          <NuxtLink
            :to="backTo"
            class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            <span class="material-symbols-outlined text-[18px] leading-none">arrow_back</span>
            Back
          </NuxtLink>
        </header>

        <section class="mx-auto max-w-6xl pb-32 pt-10 sm:pb-40 sm:pt-14">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-3xl font-bold tracking-tight sm:text-6xl" :style="themeStyles.titleStyle">
              {{ title }}
            </h1>
            <p class="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
              {{ description }}
            </p>
          </div>
        </section>
      </div>
    </div>

    <section class="relative z-10 mx-auto max-w-6xl -mt-20 px-4 pb-24 sm:-mt-28 sm:px-6 sm:pb-28">
      <div class="rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200/70 sm:p-8">
        <div class="flex justify-center">
          <span
            class="rounded-full px-5 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white shadow-sm sm:px-6 sm:text-[12px]"
            :style="themeStyles.badgeStyle"
          >
            {{ activeBadge }}
          </span>
        </div>

        <div class="relative mt-6">
          <div class="px-8 sm:px-10">
            <div class="overflow-hidden rounded-2xl bg-white">
              <div
                class="flex transition-transform duration-500 ease-out"
                :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
              >
                <div v-for="slide in slides" :key="slide.src" class="w-full shrink-0">
                  <img
                    class="h-auto w-full object-contain"
                    :src="slide.src"
                    :alt="slide.alt"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="absolute -left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-md ring-1 ring-slate-200/70 transition hover:brightness-105 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:-left-5 sm:h-11 sm:w-11"
            :class="[themeStyles.arrowBgClass, themeStyles.focusRingClass]"
            :disabled="slides.length <= 1"
            aria-label="Previous slide"
            @click="prevSlide"
          >
            <span class="material-symbols-outlined block text-[20px] leading-none">chevron_left</span>
          </button>

          <button
            type="button"
            class="absolute -right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-md ring-1 ring-slate-200/70 transition hover:brightness-105 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:-right-5 sm:h-11 sm:w-11"
            :class="[themeStyles.arrowBgClass, themeStyles.focusRingClass]"
            :disabled="slides.length <= 1"
            aria-label="Next slide"
            @click="nextSlide"
          >
            <span class="material-symbols-outlined block text-[20px] leading-none">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type Theme = 'sparring' | 'padel' | 'gis'
type Slide = { src: string; alt: string; badge?: string }

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    slides: Slide[]
    badge?: string
    theme?: Theme
    backTo?: string
  }>(),
  {
    badge: 'HOMEPAGE',
    theme: 'sparring',
    backTo: '/'
  }
)

useHead(() => ({
  title: props.title
}))

const themeStyles = computed(() => {
  switch (props.theme) {
    case 'padel':
      return {
        badgeStyle: { backgroundImage: 'linear-gradient(90.66deg, #D0E9FF 0%, #65ACE9 100%)' },
        arrowBgClass: 'bg-[#65ACE9]',
        focusRingClass: 'focus:ring-[#6AA5FF]',
        titleStyle: { color: '#65ACE9' },
        heroVars: {
          '--hero-top': '#ffffff',
          '--hero-mid': '#dff2ff',
          '--hero-bottom': '#65ACE9',
          '--hero-grid-opacity': '0.55',
        },
      }
    case 'gis':
      return {
        badgeStyle: { backgroundImage: 'linear-gradient(90.66deg, #FFE497 0%, #FFC92F 100%)' },
        arrowBgClass: 'bg-[#FFD45A]',
        focusRingClass: 'focus:ring-[#FFB020]',
        titleStyle: { color: '#FFD45A' },
        heroVars: {
          '--hero-top': '#ffffff',
          '--hero-mid': '#fff3cc',
          '--hero-bottom': '#FFD45A',
          '--hero-grid-opacity': '0.45',
        },
      }
    case 'sparring':
    default:
      return {
        badgeStyle: { backgroundImage: 'linear-gradient(90.66deg, #E9E9E9 0%, #7D8B98 100%)' },
        arrowBgClass: 'bg-[#7D8B98]',
        focusRingClass: 'focus:ring-[#FFD45A]',
        titleStyle: { color: '#7D8B98' },
        heroVars: {
          '--hero-top': '#ffffff',
          '--hero-mid': '#f1f4f7',
          '--hero-bottom': '#9aa6b2',
          '--hero-grid-opacity': '0.35',
        },
      }
  }
})

const activeSlide = ref(0)

const activeBadge = computed(() => props.slides[activeSlide.value]?.badge ?? props.badge)

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + props.slides.length) % props.slides.length
}

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % props.slides.length
}
</script>

<style scoped>
.project-hero {
  --hero-top: #ffffff;
  --hero-mid: #dff2ff;
  --hero-bottom: #65ace9;
  --hero-grid-opacity: 0.55;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  background: linear-gradient(180deg, var(--hero-top) 0%, var(--hero-mid) 45%, var(--hero-bottom) 100%);
}

@media (min-width: 640px) {
  .project-hero {
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
  }
}

.project-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    1100px 320px at 50% 0%,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.55) 30%,
    rgba(255, 255, 255, 0) 72%
  );
  z-index: 0;
}

.project-hero::after {
  content: '';
  position: absolute;
  inset: -1px;
  background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.22) 0px,
      rgba(255, 255, 255, 0.22) 1px,
      transparent 1px,
      transparent 56px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.18) 0px,
      rgba(255, 255, 255, 0.18) 1px,
      transparent 1px,
      transparent 56px
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 48%);
  opacity: var(--hero-grid-opacity);
  pointer-events: none;
  z-index: 0;
}

.project-hero > * {
  position: relative;
  z-index: 1;
}
</style>
