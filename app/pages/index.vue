<template>
  <main class="min-h-screen bg-[#FBFAF5]">
    <section class="relative isolate overflow-hidden bg-gradient-to-r from-[#FBFAF5] via-white to-[#FFF5CC]">
      <div
        class="pointer-events-none absolute -left-40 -bottom-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#FFD45A]/25 blur-3xl"
      />
      <div
        class="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 pb-56"
        :style="{ paddingBottom: `${heroBottomPadding}px` }"
      >
        <div class="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 class="relative inline-block text-slate-900">
              <span
                class="absolute -left-6 top-4 z-10 inline-flex -rotate-6 items-center rounded-sm bg-[#FFD45A] px-4 py-2 text-sm font-medium tracking-wide text-white shadow-sm sm:-left-10 sm:top-7 md:-left-12 md:top-8 lg:-left-14 lg:top-8"
              >
                Product Designer
              </span>

              <span class="relative block pt-12 font-extrabold leading-[0.92] tracking-tight sm:pt-14">
                <span class="block text-6xl sm:text-7xl lg:text-8xl">PORT</span>
                <span class="block text-6xl sm:text-7xl lg:text-8xl">FOLIO.</span>

                <span
                  class="pointer-events-none absolute left-[92%] top-[56%] -translate-x-1/2 -translate-y-1/2 select-none text-6xl italic text-[#FFD45A]/70 sm:text-7xl lg:text-8xl"
                  style="font-family: 'Dancing Script', cursive"
                  aria-hidden="true"
                >
                  Portfolio
                </span>
              </span>
            </h1>

            <p class="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Saya adalah Product Designer atau UI/UX Designer lepas berbasis di Medan, Indonesia. Berfokus pada
              perancangan pengalaman pengguna yang intuitif dan antarmuka yang menarik melalui pendekatan design
              thinking, serta mengembangkan solusi desain menggunakan Figma yang berpusat pada pengguna.
            </p>

            <div
              class="mt-10 inline-grid grid-cols-3 overflow-hidden border border-white/60 bg-[#FFF2D880] shadow-sm backdrop-blur"
            >
              <div class="border-l-4 border-[#FFD45A] px-8 py-6 text-center">
                <div class="text-2xl font-bold text-slate-800">4+ Y.</div>
                <div class="mt-1 text-xs tracking-wide text-slate-500">Experience</div>
              </div>
              <div class="border-l border-white/70 px-8 py-6 text-center">
                <div class="text-2xl font-bold text-slate-800">10+</div>
                <div class="mt-1 text-xs tracking-wide text-slate-500">Project</div>
              </div>
              <div class="border-l border-white/70 px-8 py-6 text-center">
                <div class="text-2xl font-bold text-slate-800">3+</div>
                <div class="mt-1 text-xs tracking-wide text-slate-500">Client</div>
              </div>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end">
            <div class="w-full max-w-sm sm:max-w-md lg:translate-y-8">
              <img
                class="h-auto w-full object-contain drop-shadow-2xl"
                src="/img/hero/hero-imam.webp"
                alt="Foto Imam Zamhari"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-100/70">
      <div class="mx-auto max-w-6xl px-6 pb-24 sm:pb-28 lg:pb-32">
        <div
          ref="aboutCard"
          class="relative z-20 rounded-3xl bg-white p-6 shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200/60 sm:p-10"
          :style="{ marginTop: `${-aboutCardOverlap}px` }"
        >
          <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div class="flex justify-center lg:justify-start">
              <div class="w-full max-w-xs sm:max-w-sm">
                <img
                  class="h-auto w-full object-contain drop-shadow-xl"
                  src="/img/about/about-picture-social-media.webp"
                  alt="About picture"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div>
              <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>

              <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Berfokus pada perancangan tampilan dan alur penggunaan yang sederhana, jelas, dan mudah dipahami.
                Memiliki minat dalam pengembangan situs web dan produk digital dengan pendekatan yang terstruktur.
              </p>

              <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Mengerjakan desain untuk website dan layanan digital, mulai dari tahap perencanaan hingga hasil
                akhir. Terus belajar untuk meningkatkan kualitas desain agar lebih sesuai dengan kebutuhan pengguna.
              </p>

              <div class="mt-7">
                <a
                  href="/cv/cv-imam-zamhari.pdf"
                  download="CV-Imam-Zamhari.pdf"
                  class="inline-flex items-center gap-2 rounded-md bg-[#FFD45A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#FFD45A] focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2"
                >
                  <span class="material-symbols-outlined text-[18px] leading-none">download</span>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative z-10 bg-slate-100/70 py-20 sm:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div class="pt-2">
            <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Work Process</h3>
            <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Proses kerja saya dimulai dengan memahami kebutuhan pengguna dan tujuan produk secara menyeluruh.
              Setiap tahap dilakukan secara terstruktur untuk memastikan solusi yang dihasilkan relevan dan mudah
              digunakan.
            </p>
            <p class="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Pendekatan yang saya gunakan berfokus pada pengguna, mulai dari riset hingga implementasi, dengan
              tujuan menghasilkan desain yang fungsional dan konsisten.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col">
            <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A] transition-colors hover:bg-[#FFD45A] hover:text-white"
              >
                <span class="material-symbols-outlined text-[22px] leading-none">calendar_month</span>
              </div>
              <h4 class="mt-5 text-base font-extrabold text-slate-900">1. Research</h4>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                Mengumpulkan kebutuhan pengguna dan tujuan produk secara terstruktur.
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A] transition-colors hover:bg-[#FFD45A] hover:text-white"
              >
                <span class="material-symbols-outlined text-[22px] leading-none">brush</span>
              </div>
              <h4 class="mt-5 text-base font-extrabold text-slate-900">2. Design</h4>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                Menyusun wireframe dan desain visual yang sederhana dan konsisten.
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A] transition-colors hover:bg-[#FFD45A] hover:text-white"
              >
                <span class="material-symbols-outlined text-[22px] leading-none">monitoring</span>
              </div>
              <h4 class="mt-5 text-base font-extrabold text-slate-900">3. Analyze</h4>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                Mengevaluasi desain melalui feedback dan pengujian secara berkala.
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A] transition-colors hover:bg-[#FFD45A] hover:text-white"
              >
                <span class="material-symbols-outlined text-[22px] leading-none">rocket_launch</span>
              </div>
              <h4 class="mt-5 text-base font-extrabold text-slate-900">4. Launch</h4>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                Menyiapkan desain untuk pengembangan dan implementasi yang sesuai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Portfolio</h3>
          <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Menampilkan beberapa proyek desain yang telah dikerjakan, dengan fokus pada pengalaman pengguna,
            tampilan yang jelas, dan solusi yang sesuai kebutuhan.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in portfolioItems.slice(0, 6)"
            :key="item.title"
            class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
          >
            <div class="aspect-[16/10] overflow-hidden bg-slate-200">
              <img
                class="h-full w-full object-cover"
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="p-6">
              <div class="text-xs font-semibold tracking-widest text-slate-400">{{ item.category }}</div>
              <h4 class="mt-2 text-lg font-extrabold text-slate-900">{{ item.title }}</h4>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                {{ item.description }}
              </p>

              <div class="mt-6">
                <a
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-md bg-[#FFD45A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#FFD45A] focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2"
                >
                  {{ item.buttonLabel ?? 'View' }}
                  <span class="material-symbols-outlined text-[18px] leading-none">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-r from-[#FBFAF5] via-white to-[#FFF5CC] py-24 sm:py-28 lg:py-32">
      <div class="relative mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h3 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Freelance</h3>
          <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Beberapa proyek freelance yang telah dikerjakan, mencakup desain aplikasi dan website dengan berbagai
            kebutuhan pengguna.
          </p>
        </div>

        <div class="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article
            v-for="item in freelanceItems"
            :key="item.name"
            class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="aspect-[424/250] overflow-hidden">
              <img
                class="h-full w-full object-cover"
                :src="item.image"
                :alt="`Preview ${item.name}`"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="flex flex-1 flex-col p-7">
              <div class="text-sm text-slate-400">{{ item.name }}</div>
              <h4 class="mt-2 text-base font-extrabold text-slate-900 sm:text-lg">{{ item.title }}</h4>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">
                {{ item.description }}
              </p>

              <div class="mt-auto flex justify-end pt-8">
                <NuxtLink
                  v-if="item.to"
                  :to="item.to"
                  :aria-label="`Lihat detail ${item.name}`"
                  class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD45A] text-white shadow-sm transition hover:bg-[#FFC83A] focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2 sm:h-12 sm:w-12"
                >
                  <span class="material-symbols-outlined text-[20px] leading-none">arrow_forward</span>
                </NuxtLink>

                <a
                  v-else
                  :href="`mailto:zamhariimam0@gmail.com?subject=${encodeURIComponent('Freelance - ' + item.name)}`"
                  :aria-label="`Kontak untuk proyek ${item.name}`"
                  class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD45A] text-white shadow-sm transition hover:bg-[#FFC83A] focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2 sm:h-12 sm:w-12"
                >
                  <span class="material-symbols-outlined text-[20px] leading-none">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-100/70 py-20 sm:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div class="pt-2">
            <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What I do?</h3>
            <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Berfokus pada perancangan pengalaman pengguna dan tampilan antarmuka yang sederhana, jelas, dan mudah
              digunakan. Setiap desain dibuat dengan pendekatan terstruktur agar sesuai dengan kebutuhan pengguna dan
              tujuan produk.
            </p>
            <p class="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Mengerjakan berbagai proyek desain digital, mulai dari website hingga dashboard, dengan perhatian pada
              detail, konsistensi, dan kemudahan penggunaan.
            </p>
          </div>

          <div class="space-y-6">
            <div
              class="relative overflow-hidden rounded-sm bg-white py-7 pl-12 pr-7 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100"
            >
              <div class="absolute bottom-0 left-0 top-0 w-1 bg-[#FFD45A]" />
              <div>
                <h4 class="text-lg font-extrabold text-slate-900 sm:text-xl">User Experience (UX)</h4>
                <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Berfokus pada perancangan alur penggunaan yang intuitif melalui riset, struktur informasi, dan
                  pemahaman kebutuhan pengguna.
                </p>
              </div>
            </div>

            <div class="rounded-sm bg-white p-7 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">
              <div>
                <h4 class="text-lg font-extrabold text-slate-900 sm:text-xl">User Interface (UI)</h4>
                <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Mendesain tampilan visual yang konsisten, sederhana, dan mudah dipahami untuk meningkatkan
                  kenyamanan pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section class="bg-white pt-20 sm:pt-24">
        <div class="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
          <div class="text-center">
            <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Clients</h3>
          <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Client yang telah bekerja sama dalam berbagai proyek desain.
          </p>
        </div>

        <div class="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          <img
            v-for="client in clientLogos"
            :key="client.name"
            class="h-24 w-auto object-contain opacity-95 sm:h-28"
            :src="client.src"
            :alt="client.name"
            loading="lazy"
            decoding="async"
          />
          </div>
        </div>
      </section>

      <section class="relative overflow-hidden bg-[#2F3F55] text-white">
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <div class="absolute inset-0 bg-gradient-to-b from-[#2F3F55] to-[#27364A]" />
          <div
            class="absolute inset-x-0 bottom-0 h-72 bg-[url('/img/bg/footer-pattern.png')] bg-bottom bg-repeat bg-[length:240px_240px] opacity-[0.10] filter invert [-webkit-mask-image:linear-gradient(to_top,black_75%,transparent)] [mask-image:linear-gradient(to_top,black_75%,transparent)]"
          />
        </div>

        <div class="relative mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-center px-6 text-center">
          <h3 class="text-4xl font-extrabold tracking-tight sm:text-5xl">Thankyou!</h3>
          <p class="mt-4 text-sm tracking-wide text-white/70 sm:text-base">Let's Get in Touch!</p>

          <a
            href="mailto:zamhariimam0@gmail.com"
            class="mt-10 inline-flex items-center gap-3 rounded-md bg-[#FFD45A] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#FFC83A] focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2 focus:ring-offset-[#2F3F55]"
          >
            <span class="material-symbols-outlined text-[20px] leading-none">mail</span>
            zamhariimam0@gmail.com
          </a>
        </div>
      </section>
    </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const aboutCard = ref<HTMLElement | null>(null)
const aboutCardHeight = ref(0)

const aboutCardOverlap = computed(() => Math.round(aboutCardHeight.value * 0.75))
const heroBottomPadding = computed(() => Math.max(260, aboutCardOverlap.value + 140))

let resizeObserver: ResizeObserver | null = null

const updateCardHeight = () => {
  if (!aboutCard.value) return
  aboutCardHeight.value = aboutCard.value.getBoundingClientRect().height
}

type PortfolioItem = {
  category: string
  title: string
  description: string
  image: string
  href: string
  buttonLabel?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    category: 'UI-UX DESIGN',
    title: 'SL2 Website',
    description: 'Website organisasi yang menampilkan program, proyek, dan inisiatif di bidang keberlanjutan.',
    image: '/img/portfolio/sl2-website.webp',
    href: 'https://sustainablelivinglab.org/',
    buttonLabel: 'View',
  },
  {
    category: 'UI-UX DESIGN',
    title: 'Satria Nusa Engineering',
    description: 'Website perusahaan yang menyediakan informasi layanan energi, profil perusahaan, dan proyek.',
    image: '/img/portfolio/satria-nusa-enjinering.webp',
    href: 'https://satrianusa.group/',
    buttonLabel: 'View',
  },
  {
    category: 'UI-UX DESIGN',
    title: 'Intel AI4FW SS',
    description: 'Dashboard admin untuk monitoring data dan manajemen program secara terpusat.',
    image: '/img/portfolio/intel-ai4fw-ss.webp',
    href: 'https://intel-digital-readiness-support.sustainablelivinglab.org/',
    buttonLabel: 'View',
  },
  {
    category: 'UI-UX DESIGN',
    title: 'True Rice',
    description: 'Platform digital dengan fokus pada penyajian data dan informasi produksi beras secara terstruktur.',
    image: '/img/portfolio/true-rice.webp',
    href: 'https://truerice.sustainablelivinglab.org/',
    buttonLabel: 'View',
  },
  {
    category: 'UI-UX DESIGN',
    title: 'Annaunna Trust',
    description: 'Website organisasi yang menampilkan program sosial dan pemberdayaan masyarakat secara terstruktur.',
    image: '/img/portfolio/annaunna-trust.webp',
    href: 'https://www.annaunnatrust.org/',
    buttonLabel: 'View',
  },
  {
    category: 'UI-UX DESIGN',
    title: 'AI Tutor Web App',
    description: 'Platform pembelajaran berbasis AI dengan materi interaktif, pelacakan progres, dan pengalaman belajar yang personal.',
    image: '/img/portfolio/ai-tutor-web.webp',
    href: 'https://www.figma.com/proto/GONWQ8FYZGNcEVJAH7Atao/AI-Tutor-Web-App-SL2?node-id=132-242&viewport=788%2C684%2C0.08&t=naGdUiT81dUEYr7K-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=132%3A242&page-id=132%3A240',
    buttonLabel: 'Show Prototype',
  }
]

type FreelanceItem = {
  name: string
  title: string
  description: string
  image: string
  to?: string
}

const freelanceItems: FreelanceItem[] = [
  {
    name: "Let's Sparring",
    title: 'Aplikasi pemesanan lapangan olahraga',
    description: 'Dengan fokus pada kemudahan pencarian, pemilihan jadwal, dan proses reservasi.',
    image: '/img/freelance/ayosparing.svg',
    to: '/lets-sparring'
  },
  {
    name: 'Roemah Padel',
    title: 'Aplikasi pemesanan lapangan padel',
    description: 'Memudahkan pengguna dalam mengatur waktu bermain.',
    image: '/img/freelance/roemah-padel.svg',
    to: '/roemah-padel'
  },
  {
    name: 'GIS',
    title: 'Aplikasi e-commerce sederhana',
    description: 'Dengan fitur pencarian produk, pembelian, serta dukungan voucher dan event.',
    image: '/img/freelance/gis.svg',
    to: '/gis'
  }
]

const clientLogos = [
  { name: 'SL2', src: '/img/clients/sl2.webp' },
  { name: 'True Rice', src: '/img/clients/true-rice.webp' },
  { name: 'Satria Nusa Engineering', src: '/img/clients/sne.webp' },
  { name: 'AUCT', src: '/img/clients/auct.webp' }
] as const

onMounted(() => {
  updateCardHeight()
  if (!aboutCard.value) return

  resizeObserver = new ResizeObserver(() => updateCardHeight())
  resizeObserver.observe(aboutCard.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
})
</script>
