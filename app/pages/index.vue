<template>
  <main class="min-h-screen bg-[#FBFAF5]">
    
    <!-- HERO SECTION -->
    <section
      class="relative min-h-screen w-full bg-[#FBFAF5] 
            bg-no-repeat bg-cover bg-[center_top] 
            md:bg-cover md:bg-center"
      style="background-image: url('/img/hero/background-header.svg')"
    > 

      <div class="absolute inset-0 flex items-center justify-center group -translate-y-6 sm:-translate-y-10 md:-translate-y-20">

        <!-- TYPEWRITER -->
        <div class="flex justify-center">
          <div class="w-fit typewriter-wrapper">

            <div class="animate-typewriter py-10 sm:py-12">

              <h1
                class="whitespace-nowrap leading-none tracking-tight flex items-end"
                style="font-family: 'Philosopher', serif; color:#2B384C;"
              >

                <!-- Port -->
                <span
                  class="relative 
                        top-[-10px] sm:top-[0px] md:top-[-18px]
                        text-[88px] sm:text-[100px] md:text-[140px] lg:text-[200px] xl:text-[230px]"
                >
                  Port
                </span>

                <!-- f -->
                <span
                  class="inline-block font-bold relative 
                        -top-[24px] sm:-top-[28px] md:-top-[35px]
                        text-[100px] sm:text-[120px] md:text-[200px] lg:text-[210px] xl:text-[250px]"
                  style="
                    font-family: 'Playball', cursive;
                    color:#FFC700;
                    text-shadow: 0px 14px 6px rgba(43,56,76,0.52);
                  "
                >
                  f
                </span>

                <!-- olio -->
                <span
                  class="relative 
                        top-[-10px] sm:top-[0px] md:top-[-18px]
                        text-[88px] sm:text-[100px] md:text-[140px] lg:text-[200px] xl:text-[230px]"
                >
                  olio
                </span>

              </h1>

            </div>

            <!-- CURSOR -->
            <span class="cursor-bar"></span>

          </div>
        </div>

        <!-- UIUX -->
        <img
          src="/img/hero/uiux-design-text.svg"
          class="absolute z-10
                w-[25%] sm:w-[25%] md:w-[20%] lg:w-[15%]
                top-[35%] sm:top-[32%] md:top-[27%]
                left-[22%] sm:left-[23%] md:left-[25%]
                animate-float-slow
                transition-all duration-[800ms]
                group-hover:translate-x-6"
        />

        <!-- FIGMA -->
        <img
          src="/img/hero/figma.svg"
          class="absolute z-10
                w-[25%] sm:w-[20%] md:w-[14%] lg:w-[11%]
                bottom-[8%] sm:bottom-[18%] md:bottom-[5%]
                left-[-1%] sm:left-[7%] md:left-[6%]
                rotate-[-12deg]
                animate-float-slow
                transition-all duration-[800ms]
                group-hover:-translate-y-6
                group-hover:scale-110
                group-hover:rotate-[-18deg]"
        />

        <!-- PHOTOSHOP -->
        <img
          src="/img/hero/photoshop.svg"
          class="absolute z-10
                w-[22%] sm:w-[16%] md:w-[12%] lg:w-[9%]
                bottom-[5%] sm:bottom-[11%] md:bottom-[8%]
                right-[-2%] sm:right-[6%]
                rotate-[8deg]
                animate-float-slow
                transition-all duration-[800ms]
                group-hover:-translate-y-6
                group-hover:scale-110
                group-hover:rotate-[12deg]"
        />

        <!-- 🔥 GROUP: PEN + BRUSH -->
        <div
          class="absolute z-10
                top-[10%] sm:top-[8%] md:top-[5%]
                left-[-20%] sm:left-[-32%] md:left-[-30%]
                w-[40%] sm:w-[45%] md:w-[43%] lg:w-[40%]
                animate-float-slow
                transition-all duration-[800ms]
                group-hover:translate-y-4"
        >

          <!-- BRUSH -->
          <img
            src="/img/hero/Brush.svg"
            class="w-full rotate-[12deg]"
          />

          <!-- PEN -->
          <img
            src="/img/hero/Pen.svg"
            class="absolute
                  w-[25%]
                  top-[5%]
                  left-[105%] sm:left-[100%] md:left-[105%]
                  rotate-[-10deg]
                  transition-all duration-[800ms]
                  group-hover:translate-y-10
                  group-hover:rotate-[-14deg]"
          />

        </div>

        <!-- ILLUSTRATOR -->
        <img
          src="/img/hero/illustrator.svg"
          class="absolute z-10
                w-[15%] sm:w-[10%] md:w-[11%] lg:w-[6%]
                top-[10%] sm:top-[15%] md:top-[15%]
                right-[30%] sm:right-[32%] md:right-[35%]
                rotate-[6deg]
                animate-float-slow
                transition-all duration-[800ms]
                group-hover:-translate-y-5
                group-hover:scale-110
                group-hover:rotate-[-10deg]"
        />

        <!-- CANVA -->
        <img
          src="/img/hero/canva.svg"
          class="absolute z-10
                w-[15%] sm:w-[12%] md:w-[11%] lg:w-[8%]
                top-[25%] sm:top-[29%] md:top-[30%]
                right-[6%] sm:right-[8%] md:right-[10%]
                rotate-[35deg]
                animate-float-slow
                transition-all duration-[800ms]
                group-hover:translate-x-4
                group-hover:scale-105
                group-hover:rotate-[18deg]"
        />

      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="bg-slate-100/70">
      <div class="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-12 pb-12 sm:pb-20 -mt-20 sm:-mt-32 md:-mt-52 lg:-mt-60">
        
        <ClientOnly>
          <div
            class="relative z-30 rounded-3xl bg-white/90 backdrop-blur p-6 sm:p-10 lg:p-12 shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200/60"
          >

            <!-- GRID -->
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">

              <!-- IMAGE -->
              <div class="flex justify-center lg:justify-start -mt-6 lg:-mt-8">
                <div class="w-full max-w-[320px] sm:max-w-sm lg:max-w-md">
                  <img
                    class="h-auto w-full object-contain"
                    src="/img/about/Asli Hover.png"
                    alt="About picture"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <!-- TEXT -->
              <div>

                <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  About Me
                </h2>

                <p class="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Hai, saya Imam Zamhari, seorang Desainer Produk / Desainer UI/UX yang berbasis di Indonesia.
                  Saya senang mengeksplorasi ide dan mengubahnya menjadi pengalaman digital yang intuitif dan ramah pengguna.
                </p>

                <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Saya bersemangat tentang desain yang berpusat pada pengguna dan selalu ingin belajar, berkembang,
                  dan berkolaborasi di industri kreatif.
                </p>

                <!-- WORK EXPERIENCE -->
                <div class="mt-8">
                  <h3 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Work experience
                  </h3>

                  <div class="mt-5 space-y-6">

                    <div>
                      <div class="font-semibold text-slate-900">
                        PT. Sustainable Living Lab
                      </div>
                      <div class="text-xs text-slate-400">
                        May 2024 - April 2026 • UI UX Design
                      </div>
                      <p class="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                        Bandung Institute of Technology (ITB) Science and Techno Park (STP) Building, 3rd Floor
                      </p>
                    </div>

                    <div>
                      <div class="font-semibold text-slate-900">
                        PT. Satria Nusa Enjinering
                      </div>
                      <div class="text-xs text-slate-400">
                        Dec 2023 - May 2024 • UI UX Design
                      </div>
                      <p class="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                        Jl. R.A Kartini II, No. 11 Madras Hulu Medan, Sumatera Utara 20152
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <!-- STATS -->
            <div class="mt-8 flex justify-center">
              <div class="w-full max-w-md flex overflow-hidden rounded-xl border border-white">

                <div class="flex-1 bg-[#FCF7E9] px-5 py-5 text-center border-l-4 border-[#FFD45A]">
                  <div class="text-lg sm:text-xl font-extrabold text-slate-900">4+ Y.</div>
                  <div class="text-xs text-slate-500 mt-1">Experience</div>
                </div>

                <div class="flex-1 bg-[#FCF7E9] px-5 py-5 text-center border-l border-white">
                  <div class="text-lg sm:text-xl font-extrabold text-slate-900">8+</div>
                  <div class="text-xs text-slate-500 mt-1">Project</div>
                </div>

                <div class="flex-1 bg-[#FCF7E9] px-5 py-5 text-center border-l border-white">
                  <div class="text-lg sm:text-xl font-extrabold text-slate-900">3+</div>
                  <div class="text-xs text-slate-500 mt-1">Client</div>
                </div>

              </div>
            </div>

            <!-- BUTTON -->
            <div class="absolute left-1/2 -bottom-5 -translate-x-1/2">
              <a
                href="/cv/cv-imam-zamhari.pdf"
                download="CV-Imam-Zamhari.pdf"
                class="inline-flex items-center gap-6 rounded-md bg-[#FFD45A] px-6 py-3 text-sm font-semibold text-white shadow-lg transition md:hover:bg-[#FFC83A]"
              >
                <span class="material-symbols-outlined text-[18px] leading-none">
                  download
                </span>
                Download CV
              </a>
            </div>

          </div>
        </ClientOnly>

      </div>
    </section>

    <!-- WORK PROCESS -->
    <ClientOnly>
      <section class="relative z-10 bg-slate-100/70 pt-10 sm:pt-5 pb-20 sm:pb-24">
        <div class="mx-auto max-w-6xl px-6">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

            <!-- LEFT -->
            <div class="pt-2 lg:pt-0 flex flex-col justify-center">
              <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Work Process
              </h3>

              <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Proses kerja saya dimulai dengan memahami kebutuhan pengguna dan tujuan produk secara menyeluruh.
                Setiap tahap dilakukan secara terstruktur untuk memastikan solusi yang dihasilkan relevan dan mudah digunakan.
              </p>

              <p class="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Pendekatan yang saya gunakan berfokus pada pengguna, mulai dari riset hingga implementasi,
                dengan tujuan menghasilkan desain yang fungsional dan konsisten.
              </p>
            </div>

            <!-- RIGHT -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col group">

              <div class="rounded-2xl bg-white p-6 ring-1 ring-slate-100 transition-all duration-300 md:group-hover:opacity-40 md:group-hover:scale-[0.98] md:hover:!opacity-100 md:hover:!scale-100 md:hover:-translate-y-2 md:hover:shadow-xl">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A]">
                  <span class="material-symbols-outlined text-[22px]">calendar_month</span>
                </div>
                <h4 class="mt-5 font-extrabold text-slate-900">1. Research</h4>
                <p class="mt-2 text-sm text-slate-600">Mengumpulkan kebutuhan pengguna dan tujuan produk secara terstruktur.</p>
              </div>

              <div class="rounded-2xl bg-white p-6 ring-1 ring-slate-100 transition-all duration-300 md:group-hover:opacity-40 md:group-hover:scale-[0.98] md:hover:!opacity-100 md:hover:!scale-100 md:hover:-translate-y-2 md:hover:shadow-xl">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A]">
                  <span class="material-symbols-outlined text-[22px]">brush</span>
                </div>
                <h4 class="mt-5 font-extrabold text-slate-900">2. Design</h4>
                <p class="mt-2 text-sm text-slate-600">Menyusun wireframe dan desain visual yang sederhana dan konsisten.</p>
              </div>

              <div class="rounded-2xl bg-white p-6 ring-1 ring-slate-100 transition-all duration-300 md:group-hover:opacity-40 md:group-hover:scale-[0.98] md:hover:!opacity-100 md:hover:!scale-100 md:hover:-translate-y-2 md:hover:shadow-xl">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A]">
                  <span class="material-symbols-outlined text-[22px]">monitoring</span>
                </div>
                <h4 class="mt-5 font-extrabold text-slate-900">3. Analyze</h4>
                <p class="mt-2 text-sm text-slate-600">Mengevaluasi desain melalui feedback dan pengujian secara berkala.</p>
              </div>

              <div class="rounded-2xl bg-white p-6 ring-1 ring-slate-100 transition-all duration-300 md:group-hover:opacity-40 md:group-hover:scale-[0.98] md:hover:!opacity-100 md:hover:!scale-100 md:hover:-translate-y-2 md:hover:shadow-xl">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2D880] text-[#FFD45A]">
                  <span class="material-symbols-outlined text-[22px]">rocket_launch</span>
                </div>
                <h4 class="mt-5 font-extrabold text-slate-900">4. Launch</h4>
                <p class="mt-2 text-sm text-slate-600">Menyiapkan desain untuk pengembangan dan implementasi.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </ClientOnly>

    <!-- ✅ PORTFOLIO FIX -->
    <ClientOnly>
      <section class="bg-white py-20 sm:py-24">
        <div class="mx-auto max-w-6xl px-6">
          
          <!-- HEADER -->
          <div class="text-center">
            <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Portfolio
            </h3>
            <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Menampilkan beberapa proyek desain yang telah dikerjakan, dengan fokus pada pengalaman pengguna,
              tampilan yang jelas, dan solusi yang sesuai kebutuhan.
            </p>
          </div>

          <!-- GRID -->
          <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <article
              v-for="(item, index) in portfolioItems.slice(0, 6)"
              :key="item.title"
              class="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100
                    transition-all duration-300

                    md:hover:-translate-y-2
                    md:hover:shadow-xl md:hover:shadow-slate-200/70"
            >
              <!-- IMAGE -->
              <div class="aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                  :src="item.image"
                  :alt="item.title"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <!-- CONTENT -->
              <div class="p-6">
                <div class="text-xs font-semibold tracking-widest text-slate-400">
                  {{ item.category }}
                </div>

                <h4 class="mt-2 text-lg font-extrabold text-slate-900">
                  {{ item.title }}
                </h4>

                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {{ item.description }}
                </p>

                <!-- BUTTON -->
                <div class="mt-6">
                  <a
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-md bg-[#FFD45A] px-5 py-3 text-sm font-semibold text-white
                          transition-all duration-300

                          md:group-hover:translate-x-1
                          hover:bg-[#FFD45A]
                          focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2"
                  >
                    {{ item.buttonLabel ?? 'View' }}
                    <span class="material-symbols-outlined text-[18px] leading-none">
                      arrow_forward
                    </span>
                  </a>
                </div>

              </div>
            </article>

          </div>
        </div>
      </section>
    </ClientOnly>

    <!-- ✅ FREELANCE FIX -->
    <ClientOnly>
      <section class="bg-gradient-to-r from-[#FBFAF5] via-white to-[#FFF5CC] py-24 sm:py-28 lg:py-32">
        <div class="relative mx-auto max-w-6xl px-6">

          <!-- HEADER -->
          <div class="text-center">
            <h3 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Freelance
            </h3>
            <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Beberapa proyek freelance yang telah dikerjakan, mencakup desain aplikasi dan website dengan berbagai
              kebutuhan pengguna.
            </p>
          </div>

          <!-- GRID -->
          <div class="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">

            <article
              v-for="(item, index) in freelanceItems"
              :key="item.name"
              class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition

                    md:hover:-translate-y-1 md:hover:shadow-lg"
            >
              <!-- IMAGE -->
              <div class="aspect-[424/250] overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="item.image"
                  :alt="`Preview ${item.name}`"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <!-- CONTENT -->
              <div class="flex flex-1 flex-col p-7">
                <div class="text-sm text-slate-400">
                  {{ item.name }}
                </div>

                <h4 class="mt-2 text-base font-extrabold text-slate-900 sm:text-lg">
                  {{ item.title }}
                </h4>

                <p class="mt-3 text-sm leading-relaxed text-slate-600">
                  {{ item.description }}
                </p>

                <!-- BUTTON -->
                <div class="mt-auto flex justify-end pt-8">
                  
                  <!-- INTERNAL -->
                  <NuxtLink
                    v-if="item.to"
                    :to="item.to"
                    :aria-label="`Lihat detail ${item.name}`"
                    class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD45A] text-white shadow-sm transition
                          md:hover:bg-[#FFC83A]
                          focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2 sm:h-12 sm:w-12"
                  >
                    <span class="material-symbols-outlined text-[20px] leading-none">
                      arrow_forward
                    </span>
                  </NuxtLink>

                  <!-- EMAIL -->
                  <a
                    v-else
                    :href="`mailto:zamhariimam0@gmail.com?subject=${encodeURIComponent('Freelance - ' + item.name)}`"
                    :aria-label="`Kontak untuk proyek ${item.name}`"
                    class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD45A] text-white shadow-sm transition
                          md:hover:bg-[#FFC83A]
                          focus:outline-none focus:ring-2 focus:ring-[#FFD45A] focus:ring-offset-2 sm:h-12 sm:w-12"
                  >
                    <span class="material-symbols-outlined text-[20px] leading-none">
                      arrow_forward
                    </span>
                  </a>

                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </ClientOnly>

    <!-- ✅ WHAT I DO -->
    <ClientOnly>
      <section class="bg-slate-100/70 py-20 sm:py-24">
        <div class="mx-auto max-w-6xl px-6">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

            <!-- LEFT -->
            <div class="pt-2 lg:pt-0 flex flex-col justify-center">
              <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What I do?
              </h3>

              <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Berfokus pada perancangan pengalaman pengguna dan tampilan antarmuka yang sederhana, jelas, dan mudah digunakan.
              </p>

              <p class="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Mengerjakan berbagai proyek desain digital, mulai dari website hingga dashboard, dengan perhatian pada detail,
                konsistensi, dan kemudahan penggunaan.
              </p>
            </div>

            <!-- RIGHT -->
            <div class="space-y-6 group">

              <!-- UX -->
              <div
                class="relative rounded-2xl bg-white py-7 pl-12 pr-7
                      border border-[#E6E8EB]

                      transition-all duration-300

                      md:group-hover:opacity-40 md:group-hover:scale-[0.98]

                      md:hover:!opacity-100 md:hover:!scale-100
                      md:hover:bg-white md:hover:-translate-y-1
                      md:hover:shadow-xl md:hover:shadow-slate-200/60

                      md:hover:[box-shadow:inset_4px_0_0_0_#FFD45A,0_10px_25px_rgba(15,23,42,0.08)]"
              >
                <h4 class="text-lg font-extrabold text-slate-900 sm:text-xl">
                  User Experience (UX)
                </h4>
                <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Berfokus pada perancangan alur penggunaan yang intuitif melalui riset, struktur informasi,
                  dan pemahaman kebutuhan pengguna.
                </p>
              </div>

              <!-- UI -->
              <div
                class="relative rounded-2xl bg-white py-7 pl-12 pr-7
                      border border-[#E6E8EB]

                      transition-all duration-300

                      md:group-hover:opacity-40 md:group-hover:scale-[0.98]

                      md:hover:!opacity-100 md:hover:!scale-100
                      md:hover:bg-white md:hover:-translate-y-1
                      md:hover:shadow-xl md:hover:shadow-slate-200/60

                      md:hover:[box-shadow:inset_4px_0_0_0_#FFD45A,0_10px_25px_rgba(15,23,42,0.08)]"
              >
                <h4 class="text-lg font-extrabold text-slate-900 sm:text-xl">
                  User Interface (UI)
                </h4>
                <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Mendesain tampilan visual yang konsisten, sederhana, dan mudah dipahami
                  untuk meningkatkan kenyamanan pengguna.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </ClientOnly>

    <!-- ✅ CLIENTS -->
    <ClientOnly>
      <section class="bg-white pt-20 sm:pt-24">
        <div class="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">

          <!-- TITLE -->
          <div class="text-center">
            <h3 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Clients
            </h3>
            <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Client yang telah bekerja sama dalam berbagai proyek desain.
            </p>
          </div>

          <!-- MARQUEE WRAPPER -->
          <div class="relative mt-12 overflow-hidden">

            <!-- FADE KIRI -->
            <div class="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent"></div>

            <!-- FADE KANAN -->
            <div class="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent"></div>

            <!-- MARQUEE -->
            <div class="flex w-max items-center gap-4 sm:gap-10 md:gap-16 animate-marquee">

              <!-- LOOP 3x (NO GAP, SUPER SMOOTH) -->
              <template v-for="n in 3">
                <img
                  v-for="(client, index) in clientLogos"
                  :key="n + '-' + client.name"
                  class="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain opacity-90 transition duration-300 hover:opacity-100 hover:scale-110"
                  :src="client.src"
                  :alt="client.name"
                  loading="lazy"
                  decoding="async"
                />
              </template>

            </div>
          </div>

        </div>
      </section>
    </ClientOnly>

    <!-- ✅ FOOTER -->
    <ClientOnly>
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
    </ClientOnly>

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
    description: 'Dashboard admin untuk monitoring data dan pengelolaan program terpusat dalam satu sistem terintegrasi.',
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

<style>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-25px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>


<style>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
  will-change: transform;
}

/* Pause saat hover (opsional, hapus kalau mau selalu jalan) */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>


<style>
/* ================= WRAPPER ================= */
.typewriter-wrapper {
  position: relative;
  display: inline-block;
}

/* ================= TYPEWRITER ================= */
@keyframes typing {
  0% { max-width: 0 }
  50% { max-width: 100% }
  70% { max-width: 100% }
  100% { max-width: 0 }
}

.animate-typewriter {
  display: inline-block;
  max-width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s steps(25, end) infinite;
}

/* ================= CURSOR MOVE ================= */
@keyframes cursorMove {
  0% { left: 0% }
  50% { left: 100% }
  70% { left: 100% }
  100% { left: 0% }
}

/* ================= CURSOR BLINK ================= */
@keyframes blink {
  0%, 100% { opacity: 0 }
  50% { opacity: 1 }
}

/* ================= CURSOR ================= */
.cursor-bar {
  position: absolute;

  /* posisi default */
  top: 50%;
  transform: translateY(-50%);

  /* ukuran default */
  width: 3px;
  height: 9.5em;

  background: #2B384C;

  animation:
    cursorMove 4s steps(25, end) infinite,
    blink 1s ease-in-out infinite;
}

/* ================= MOBILE ================= */
@media (max-width: 640px) {
  .cursor-bar {
    top: 50%;
    height: 6em;
    width: 2px;
  }
}

/* ================= TABLET ================= */
@media (min-width: 641px) and (max-width: 1023px) {
  .cursor-bar {
    top: 52%;
    height: 8em;
    width: 2.5px;
  }
}

/* ================= DESKTOP ================= */
@media (min-width: 1024px) {
  .cursor-bar {
    top: 50%;
    height: 9.5em;
    width: 3px;
  }
}
</style>