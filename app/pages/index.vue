<template>
  <main class="min-h-screen bg-[#FBFAF5]">

    <!-- NAVBAR -->
    <header
      class="sticky top-0 z-50 w-full border-b border-[#D1D5DB] bg-white/60 backdrop-blur-xl"
    >
      <nav class="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        
        <!-- NAME -->
        <NuxtLink
          to="/"
          class="text-[24px] font-reguler leading-none text-[#BC0003]"
          style="font-family: 'Geist Mono', monospace;"
        >
          Zamhari
        </NuxtLink>

        <!-- DESKTOP MENU -->
        <div
          class="hidden items-center gap-10 text-[16px] font-reguler text-[#2B384C] md:flex"
          style="font-family: 'Geist Mono', monospace;"
        >
          <a href="#about" class="transition hover:text-[#FF2D20]">About</a>
          <a href="#works" class="transition hover:text-[#FF2D20]">Works</a>
          <a href="#what-i-do" class="transition hover:text-[#FF2D20]">What I Do</a>
          <a href="#contact" class="transition hover:text-[#FF2D20]">Contact</a>
        </div>

        <!-- DESKTOP ACTION -->
        <div class="hidden items-center gap-5 md:flex">
          <!-- LINKEDIN -->
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="flex h-9 w-9 items-center justify-center rounded-md border border-[#465366] text-[15px] font-reguler text-[#465366] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]"
            style="font-family: 'Geist Mono', monospace;"
          >
            in
          </a>

          <!-- RESUME -->
          <a
            href="/cv/cv-imam-zamhari.pdf"
            download="CV-Imam-Zamhari.pdf"
            class="inline-flex items-center gap-3 rounded-full bg-[#FF2D20] px-6 py-3 text-[16px] font-reguler text-white transition hover:bg-[#FF6258]"
            style="font-family: 'Inter', sans-serif;"
          >
            <span class="material-symbols-outlined text-[18px] leading-none">
              download
            </span>
            My Resume
          </a>
        </div>

        <!-- MOBILE BUTTON -->
        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D1D5DB] text-[#2B384C] md:hidden"
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="material-symbols-outlined">
            {{ isMobileMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </nav>

      <!-- MOBILE MENU -->
      <div
        v-if="isMobileMenuOpen"
        class="absolute left-0 top-full z-50 w-full border-t border-[#D1D5DB] bg-white px-6 py-8 md:hidden"
      >
        <!-- LINKS -->
        <div
          class="space-y-5 border-b border-[#D1D5DB] pb-7 text-[16px] font-medium text-[#2B384C]"
          style="font-family: 'Geist Mono', monospace;"
        >
          <a href="#about" class="block transition hover:text-[#FF2D20]" @click="isMobileMenuOpen = false">About</a>
          <a href="#works" class="block transition hover:text-[#FF2D20]" @click="isMobileMenuOpen = false">Works</a>
          <a href="#what-i-do" class="block transition hover:text-[#FF2D20]" @click="isMobileMenuOpen = false">What I Do</a>
          <a href="#contact" class="block transition hover:text-[#FF2D20]" @click="isMobileMenuOpen = false">Contact</a>
        </div>

        <!-- ACTION -->
        <div class="mt-7 space-y-6">
          
          <!-- LINKEDIN -->
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#465366] text-[15px] font-medium text-[#465366] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]"
            style="font-family: 'Geist Mono', monospace;"
          >
            in
          </a>

          <!-- RESUME -->
          <a
            href="/cv/cv-imam-zamhari.pdf"
            download="CV-Imam-Zamhari.pdf"
            class="flex w-full items-center justify-center gap-3 rounded-md bg-[#FF2D20] px-6 py-4 text-[16px] text-white transition hover:bg-[#FF6258]"
            style="font-family: 'Inter', sans-serif;"
          >
            <span class="material-symbols-outlined text-[18px]">download</span>
            My Resume
          </a>

        </div>
      </div>
    </header>
    
    <!-- HERO SECTION -->
    <section
      class="relative min-h-screen w-full bg-[#FBFAF5] 
            bg-no-repeat bg-cover bg-[center_top] 
            md:bg-cover md:bg-center"
      style="background-image: url('/img/hero/bg-header.svg')"
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
                    color:#FF2D20;
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
                w-[20%] sm:w-[20%] md:w-[14%] lg:w-[11%]
                bottom-[14%] sm:bottom-[18%] md:bottom-[11%]
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
                w-[19%] sm:w-[16%] md:w-[12%] lg:w-[9%]
                bottom-[11%] sm:bottom-[11%] md:bottom-[8%]
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

    <!-- MY PORTFOLIO SECTION -->
    <section 
      id="about" 
      class="relative -mt-24 pt-0 pb-20 
            bg-white
            lg:bg-[url('/img/about/Background%20About.svg')] 
            lg:bg-cover lg:bg-center lg:bg-no-repeat
            sm:-mt-32 sm:pb-24 lg:-mt-40 lg:pb-28"
    >
      <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          
          <!-- LEFT CONTENT -->
          <div>
            <!-- DESKTOP BADGE -->
            <div
              class="hidden rounded-full bg-[#FFEBEB] px-4 py-2 text-[12px] font-medium text-[#BC0003] lg:inline-flex"
              style="font-family: 'Geist Mono', monospace;"
            >
              UI/UX Design
            </div>

            <!-- DESKTOP TITLE -->
            <h2
              class="mt-8 hidden text-[52px] font-medium leading-none text-[#2B384C] sm:text-[64px] lg:block lg:text-[76px]"
              style="font-family: 'Instrument Sans', sans-serif; font-weight:500;"
            >
              My Portfolio
            </h2>

            <!-- MOBILE IMAGE -->
            <div class="flex justify-center lg:hidden">
              <div class="group relative h-[430px] w-full max-w-[360px] overflow-visible rounded-2xl border border-[#E5E7EB] bg-white px-6 py-6">
                
                <!-- TOP LINE -->
                <div class="absolute left-1/2 top-8 h-[2px] w-52 -translate-x-1/2 bg-[#E5E7EB]"></div>

                <!-- RED BOX -->
                <div class="absolute bottom-6 left-6 right-6 h-[80%] overflow-hidden rounded-2xl bg-[#FF2D20]">

                  <!-- BIG CIRCLE -->
                  <div class="absolute left-1/2 bottom-0 
                              -translate-x-1/2 translate-y-1/2
                              h-[190%] w-[190%]
                              rounded-full bg-white/25
                              transition-transform duration-500 origin-bottom
                              group-hover:scale-110">
                  </div>

                  <!-- MEDIUM -->
                  <div class="absolute left-1/2 bottom-0 
                              -translate-x-1/2 translate-y-1/2
                              h-[165%] w-[165%]
                              rounded-full bg-white/15
                              transition-transform duration-500 origin-bottom
                              group-hover:scale-110">
                  </div>

                  <!-- SMALL -->
                  <div class="absolute left-1/2 bottom-0 
                              -translate-x-1/2 translate-y-1/2
                              h-[140%] w-[140%]
                              rounded-full bg-white/[0.075]
                              transition-transform duration-500 origin-bottom
                              group-hover:scale-110">
                  </div>

                </div>

                <!-- IMAGE -->
                <img
                  src="/img/about/foto-imam.png"
                  alt="Imam Zamhari"
                  class="absolute bottom-6 left-1/2 z-10 h-[100%] w-auto max-w-none -translate-x-1/2 object-contain transition-transform duration-500 ease-out origin-bottom group-hover:scale-110"
                />
              </div>
            </div>

            <!-- MOBILE BADGE -->
            <div
              class="mt-10 inline-flex rounded-full bg-[#FFEBEB] px-4 py-2 text-[12px] font-medium text-[#BC0003] lg:hidden"
              style="font-family: 'Geist Mono', monospace;"
            >
              UI/UX Design
            </div>

            <!-- MOBILE TITLE -->
            <h2
              class="mt-5 text-[52px] font-medium leading-none text-[#2B384C] sm:text-[64px] lg:hidden"
              style="font-family: 'Instrument Sans', sans-serif; font-weight:500;"
            >
              My Portfolio
            </h2>

            <!-- DESCRIPTION -->
            <div
              class="mt-8 max-w-[760px] space-y-6 text-[16px] leading-[2] text-[#2B384C] sm:text-[18px]"
              style="font-family: 'Instrument Sans', sans-serif; font-weight:500;"
            >
              <p>
                Hai, saya <span class="text-[#FF2D20]">Imam Zamhari</span>,
                seorang Desainer UI/UX yang berbasis di Indonesia. Saya senang mengeksplorasi ide
                dan mengubahnya menjadi pengalaman digital yang intuitif dan ramah pengguna.
              </p>

              <p>
                Saya bersemangat tentang desain yang berpusat pada pengguna dan selalu ingin belajar,
                berkembang, dan berkolaborasi di industri kreatif.
              </p>
            </div>

            <!-- STATS -->
            <div class="mt-10 grid max-w-xl grid-cols-3 overflow-hidden bg-[#FFF5F5]">
              <div class="border-l-4 border-[#BC0003] px-4 py-6 text-center sm:px-6">
                <div class="text-[20px] font-medium text-[#2B384C] sm:text-[22px]">4+ Y.</div>
                <div class="mt-2 text-[12px] text-[#6B7280] sm:text-[13px]">Experience</div>
              </div>

              <div class="border-l border-white px-4 py-6 text-center sm:px-6">
                <div class="text-[20px] font-medium text-[#2B384C] sm:text-[22px]">15+</div>
                <div class="mt-2 text-[12px] text-[#6B7280] sm:text-[13px]">Project</div>
              </div>

              <div class="border-l border-white px-4 py-6 text-center sm:px-6">
                <div class="text-[20px] font-medium text-[#2B384C] sm:text-[22px]">10+</div>
                <div class="mt-2 text-[12px] text-[#6B7280] sm:text-[13px]">Client</div>
              </div>
            </div>

            <!-- BUTTON -->
            <div class="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:zamhariimam0@gmail.com"
                class="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF2D20] px-8 py-4 text-[16px] text-white transition hover:bg-[#FF6258]"
                style="font-family: 'Inter', sans-serif;"
              >
                Get in Touch
              </a>

              <a
                href="https://www.linkedin.com/"
                class="inline-flex items-center justify-center rounded-md border border-[#D1D5DB] px-8 py-4 text-[16px] text-[#2B384C] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]"
                style="font-family: 'Inter', sans-serif;"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <!-- DESKTOP IMAGE -->
          <div class="hidden justify-center lg:flex lg:justify-end">
            <div class="group relative h-[470px] w-full max-w-[420px] overflow-visible rounded-2xl border border-[#E5E7EB] bg-white px-6 py-6">
              
              <!-- TOP LINE -->
              <div class="absolute left-1/2 top-8 h-[2px] w-60 -translate-x-1/2 bg-[#E5E7EB]"></div>

              <!-- RED BOX -->
              <div class="absolute bottom-6 left-6 right-6 h-[80%] overflow-hidden rounded-2xl bg-[#FF2D20]">

                <!-- BIG -->
                <div class="absolute left-1/2 bottom-0 
                            -translate-x-1/2 translate-y-1/2
                            h-[190%] w-[190%]
                            rounded-full bg-white/25
                            transition-transform duration-500 origin-bottom
                            group-hover:scale-110">
                </div>

                <!-- MEDIUM -->
                <div class="absolute left-1/2 bottom-0 
                            -translate-x-1/2 translate-y-1/2
                            h-[165%] w-[165%]
                            rounded-full bg-white/15
                            transition-transform duration-500 origin-bottom
                            group-hover:scale-110">
                </div>

                <!-- SMALL -->
                <div class="absolute left-1/2 bottom-0 
                            -translate-x-1/2 translate-y-1/2
                            h-[140%] w-[140%]
                            rounded-full bg-white/[0.075]
                            transition-transform duration-500 origin-bottom
                            group-hover:scale-110">
                </div>

              </div>

              <!-- IMAGE -->
              <img
                src="/img/about/foto-imam.png"
                alt="Imam Zamhari"
                class="absolute bottom-6 left-1/2 z-10 h-[105%] w-auto max-w-none -translate-x-1/2 object-contain transition-transform duration-500 ease-out origin-bottom group-hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- COMPANY LOGO SECTION -->
    <section class="relative z-10 border-y border-[#E5E7EB] bg-white">
      <!-- CONTAINER -->
      <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
          
          <!-- STATIC TEXT -->
          <div class="flex min-h-[200px] items-center justify-center border-b border-l border-r border-[#E5E7EB] px-6 py-8 sm:px-10 lg:border-b-0 lg:border-r lg:px-16">
            <p
              class="max-w-[300px] text-left text-[16px] font-medium uppercase leading-[1.5] tracking-[0.02em] text-[#2B384C]"
              style="font-family: 'Geist Mono', monospace;"
            >
              PERUSAHAAN YANG TELAH BEKERJA SAMA DALAM BERBAGAI PROYEK DESAIN.
            </p>
          </div>

          <!-- MOVING LOGOS -->
          <div class="relative min-h-[150px] overflow-hidden border-x border-[#E5E7EB] lg:border-l-0">
            
            <!-- LEFT FADE -->
            <div class="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>

            <!-- RIGHT FADE -->
            <div class="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>

            <!-- RIGHT STROKE -->
            <div class="pointer-events-none absolute right-0 top-0 z-30 h-full w-[0.2px] bg-[#E5E7EB]"></div>

            <!-- MARQUEE -->
            <div class="flex h-full w-max animate-company-marquee">
              <template v-for="loop in 3" :key="loop">
                <div
                  v-for="client in clientLogos"
                  :key="`${loop}-${client.name}`"
                  class="flex min-h-[150px] w-[360px] flex-shrink-0 items-center justify-center border-r border-[#E5E7EB]"
                >
                  <img
                    :src="client.src"
                    :alt="client.name"
                    class="max-h-[150px] w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </template>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- WORK EXPERIENCE SECTION -->
    <section id="experience" class="relative border-b border-[#E5E7EB] bg-white">
      <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <!-- HEADER: DASHED ONLY, NO TOP STROKE -->
        <div class="border-dashed-custom border-[#E5E7EB]">
          <div class="border-b border-[#E5E7EB] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-20">
            <div
              class="inline-flex rounded-full bg-[#FFEBEB] px-4 py-2 text-[12px] font-medium text-[#BC0003]"
              style="font-family: 'Geist Mono', monospace;"
            >
              About Me
            </div>

            <h2
              class="mt-8 text-[44px] font-medium leading-none text-[#111827] sm:text-[64px] lg:text-[76px]"
              style="font-family: 'Instrument Sans', sans-serif; font-weight:500;"
            >
              Work Experience
            </h2>
          </div>
        </div>

        <!-- CONTENT: SOLID STROKE -->
        <div class="border-x border-solid border-[#E5E7EB]">
          <div class="overflow-visible px-6 py-14 sm:px-10 lg:px-16 lg:pt-20 lg:pb-24 xl:h-[720px] xl:overflow-hidden">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">

              <!-- LEFT -->
              <div style="font-family: 'Instrument Sans', sans-serif; font-weight:500;">
                <h3 class="text-[32px] font-medium leading-tight text-[#111827] sm:text-[38px]">
                  Pengalaman dalam Desain Digital dan Kreatif
                </h3>

                <p class="mt-8 max-w-[680px] text-[16px] leading-[2] text-[#2B384C] sm:text-[18px]">
                  Saya memiliki pengalaman dalam merancang produk digital, membuat tampilan antarmuka
                  yang mudah digunakan, serta mendukung kebutuhan visual dan pemasaran digital untuk
                  berbagai jenis bisnis.
                </p>

                <div class="mt-10 space-y-7">
                  <div class="flex gap-4">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFEBEB] text-[#BC0003]">
                      <span class="material-symbols-outlined text-[22px]">draw</span>
                    </div>
                    <div>
                      <h4 class="text-[16px] font-medium text-[#111827] sm:text-[18px]">
                        UI/UX Design
                      </h4>
                      <p class="mt-1 text-[14px] leading-[1.8] text-[#6B7280] sm:text-[16px]">
                        Membuat wireframe, prototype, dan alur penggunaan yang intuitif.
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFEBEB] text-[#BC0003]">
                      <span class="material-symbols-outlined text-[22px]">campaign</span>
                    </div>
                    <div>
                      <h4 class="text-[16px] font-medium text-[#111827] sm:text-[18px]">
                        Creative & Marketing
                      </h4>
                      <p class="mt-1 text-[14px] leading-[1.8] text-[#6B7280] sm:text-[16px]">
                        Mendukung kebutuhan desain grafis, campaign, dan konten digital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- RIGHT -->
              <div class="relative overflow-visible xl:overflow-hidden xl:-mr-40">

                <!-- TABS -->
                <div class="mb-8 flex justify-center overflow-x-auto xl:justify-start xl:pl-[120px]">
                  <div class="relative inline-flex rounded-full border border-[#E5E7EB] bg-white p-2">
                    <button
                      v-for="(item, key) in experienceItems"
                      :key="key"
                      @click="activeExperience = key"
                      class="rounded-full px-5 py-3 text-[13px] font-medium transition sm:px-6 sm:text-[14px]"
                      :class="activeExperience === key
                        ? 'relative z-10 bg-white text-[#111827] shadow-md'
                        : 'text-[#6B7280] hover:text-[#BC0003]'"
                    >
                      {{ item.label }}
                    </button>
                  </div>
                </div>

                <!-- CARD -->
                <div class="min-h-[560px] overflow-hidden rounded-2xl border border-[#FFEBEB] bg-[#F8FAFC] xl:min-h-[760px]">
                  <div class="flex items-center gap-2 border-b border-[#E5E7EB] bg-white px-5 py-4">
                    <span class="h-3 w-3 rounded-full bg-[#FF5F57]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#FFBD2E]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#28C840]"></span>

                    <p
                      class="ml-4 text-[12px] text-[#6B7280]"
                      style="font-family: 'Geist Mono', monospace;"
                    >
                      {{ activeExperienceItem.file }}
                    </p>
                  </div>

                  <div
                    class="min-h-[500px] max-w-full space-y-6 p-5 text-[13px] leading-[2] text-[#2B384C] sm:p-6 sm:text-[14px] lg:min-h-[700px] xl:max-w-[600px]"
                    style="font-family: 'Geist Mono', monospace;"
                  >
                    <div>
                      <p>Role: "{{ activeExperienceItem.role }}"</p>
                      <p>Company: "{{ activeExperienceItem.company }}"</p>
                    </div>

                    <p v-if="activeExperienceItem.intro">
                      {{ activeExperienceItem.intro }}
                    </p>

                    <div>
                      <p>Responsibilities:</p>

                      <ol class="mt-4 space-y-4">
                        <li
                          v-for="(task, index) in activeExperienceItem.responsibilities"
                          :key="task"
                          class="flex gap-3"
                        >
                          <span class="w-6 shrink-0 text-[#6B7280]">
                            {{ index + 1 }}.
                          </span>
                          <span class="flex-1">
                            {{ task }}
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

<!-- WORK PROJECTS SECTION -->
<section id="works" class="relative border-b border-[#E5E7EB] bg-white">
  <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

    <!-- HEADER -->
    <div class="border-x border-dashed border-[#E5E7EB]">
      <div class="border-b border-[#E5E7EB] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-20">
        <div
          class="inline-flex rounded-full bg-[#FFEBEB] px-4 py-2 text-[12px] font-medium text-[#BC0003]"
          style="font-family: 'Geist Mono', monospace;"
        >
          Works
        </div>

        <h2
          class="mt-8 text-[44px] font-medium leading-none text-[#111827] sm:text-[64px] lg:text-[76px]"
          style="font-family: 'Instrument Sans', sans-serif; font-weight:500;"
        >
          Projects
        </h2>
      </div>
    </div>

    <!-- CATEGORY -->
    <div class="border-x border-[#E5E7EB] px-6 py-10 sm:px-10 lg:px-16">
      <div class="flex items-center gap-8">
        <div class="h-10 w-[3px] bg-[#BC0003]"></div>
        <h3
          class="text-[28px] font-medium text-[#111827]"
          style="font-family: 'Instrument Sans', sans-serif;"
        >
          Website
        </h3>
        <div class="h-[1px] flex-1 bg-[#E5E7EB]"></div>
      </div>
    </div>

    <!-- PROJECT GRID -->
    <div class="border-x border-[#E5E7EB]">
      <div class="grid grid-cols-1 lg:grid-cols-[45fr_55fr]">
        
        <!-- Sustainable Living Labs -->
        <article class="border-b border-r border-[#E5E7EB] p-6 sm:p-10">
          <h4 class="text-[22px] font-medium text-[#111827]">Sustainable Living Labs</h4>
          <p class="mt-4 max-w-xl text-[15px] leading-[1.8] text-[#2B384C]">
            Website organisasi yang menampilkan program, proyek, dan inisiatif di bidang keberlanjutan.
          </p>

          <a href="https://sustainablelivinglab.org/" target="_blank" class="group mt-6 inline-flex items-center gap-2 rounded-md border border-[#D1D5DB] px-4 py-2 text-[14px] text-[#2B384C] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]">
            Go to Website
            <span class="material-symbols-outlined text-[16px] text-[#BC0003] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              arrow_outward
            </span>
          </a>

          <!-- TODO: asset belum tersedia di public/img/projects/sl2/ -->
          <!-- <img src="/img/projects/sl2/website.webp" class="mt-8 w-full rounded-xl border border-[#E5E7EB] object-cover" /> -->
        </article>

        <!-- True Rice -->
        <article class="border-b border-[#E5E7EB] p-6 sm:p-10">
          <h4 class="text-[22px] font-medium text-[#111827]">True Rice</h4>
          <p class="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#2B384C]">
            Platform digital dengan fokus pada penyajian data dan informasi produksi beras secara terstruktur.
          </p>

          <a href="https://truerice.sustainablelivinglab.org/" target="_blank" class="group mt-6 inline-flex items-center gap-2 rounded-md border border-[#D1D5DB] px-4 py-2 text-[14px] text-[#2B384C] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]">
            Go to Website
            <span class="material-symbols-outlined text-[16px] text-[#BC0003] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              arrow_outward
            </span>
          </a>

          <div class="relative mt-8 h-[320px] overflow-hidden">
            <button
              v-for="(img, index) in getProjectImageOrder('trueRice')"
              :key="img.title"
              type="button"
              class="absolute left-0 w-full rounded-xl border border-[#E5E7EB] bg-white transition-all duration-300 ease-out"
              :class="[
                index === 0 ? 'top-[84px] z-40 scale-100 opacity-100' : '',
                index === 1 ? 'top-[56px] z-30 scale-[0.96] opacity-80' : '',
                index === 2 ? 'top-[28px] z-20 scale-[0.92] opacity-60' : '',
                index === 3 ? 'top-0 z-10 scale-[0.88] opacity-40' : '',
              ]"
              @click="rotateProjectImages('trueRice', projectImageGroups.trueRice.findIndex((item) => item.title === img.title))"
            >
              <div class="border-b border-[#E5E7EB] px-4 py-2 text-left text-[12px] text-[#6B7280]">
                {{ img.title }}
              </div>
              <img :src="img.image" :alt="img.title" class="h-[220px] w-full object-cover" />
            </button>
          </div>
        </article>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[55fr_45fr]">
        
        <!-- Intel -->
        <article class="border-b border-r border-[#E5E7EB] p-6 sm:p-10">
          <h4 class="text-[22px] font-medium text-[#111827]">Intel AI4FW SS</h4>
          <p class="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#2B384C]">
            Dashboard admin untuk monitoring data dan pengelolaan program terpusat dalam satu sistem terintegrasi.
          </p>

          <a href="https://intel-digital-readiness-support.sustainablelivinglab.org/" target="_blank" class="group mt-6 inline-flex items-center gap-2 rounded-md border border-[#D1D5DB] px-4 py-2 text-[14px] text-[#2B384C] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]">
            Go to Website
            <span class="material-symbols-outlined text-[16px] text-[#BC0003] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              arrow_outward
            </span>
          </a>

          <div class="relative mt-8 h-[320px] overflow-hidden">
            <button
              v-for="(img, index) in getProjectImageOrder('intel')"
              :key="img.title"
              type="button"
              class="absolute left-0 w-full rounded-xl border border-[#E5E7EB] bg-white transition-all duration-300 ease-out"
              :class="[
                index === 0 ? 'top-[84px] z-40 scale-100 opacity-100' : '',
                index === 1 ? 'top-[56px] z-30 scale-[0.96] opacity-80' : '',
                index === 2 ? 'top-[28px] z-20 scale-[0.92] opacity-60' : '',
                index === 3 ? 'top-0 z-10 scale-[0.88] opacity-40' : '',
              ]"
              @click="rotateProjectImages('intel', projectImageGroups.intel.findIndex((item) => item.title === img.title))"
            >
              <div class="border-b border-[#E5E7EB] px-4 py-2 text-left text-[12px] text-[#6B7280]">
                {{ img.title }}
              </div>
              <img :src="img.image" :alt="img.title" class="h-[220px] w-full object-cover" />
            </button>
          </div>
        </article>

        <!-- Satria -->
        <article class="border-b border-[#E5E7EB] p-6 sm:p-10">
          <h4 class="text-[22px] font-medium text-[#111827]">Satria Nusa Enjinering</h4>
          <p class="mt-4 max-w-xl text-[15px] leading-[1.8] text-[#2B384C]">
            Website perusahaan yang menyediakan informasi layanan energi, profil perusahaan, dan proyek.
          </p>

          <a href="https://satrianusa.group/" target="_blank" class="group mt-6 inline-flex items-center gap-2 rounded-md border border-[#D1D5DB] px-4 py-2 text-[14px] text-[#2B384C] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]">
            Go to Website
            <span class="material-symbols-outlined text-[16px] text-[#BC0003] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              arrow_outward
            </span>
          </a>

          <!-- TODO: asset belum tersedia di public/img/projects/satria/ -->
          <!-- <img src="/img/projects/satria/website.webp" class="mt-8 w-full rounded-xl border border-[#E5E7EB] object-cover" /> -->
        </article>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[45fr_55fr]">
        
        <!-- Annaunna -->
        <article class="border-r border-[#E5E7EB] p-6 sm:p-10">
          <h4 class="text-[22px] font-medium text-[#111827]">Annaunna Trust</h4>
          <p class="mt-4 max-w-xl text-[15px] leading-[1.8] text-[#2B384C]">
            Website organisasi yang menampilkan program sosial dan pemberdayaan masyarakat secara terstruktur.
          </p>

          <a href="https://www.annaunnatrust.org/" target="_blank" class="group mt-6 inline-flex items-center gap-2 rounded-md border border-[#D1D5DB] px-4 py-2 text-[14px] text-[#2B384C] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]">
            Go to Website
            <span class="material-symbols-outlined text-[16px] text-[#BC0003] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              arrow_outward
            </span>
          </a>

          <!-- TODO: asset belum tersedia di public/img/projects/annaunna/ -->
          <!-- <img src="/img/projects/annaunna/website.webp" class="mt-8 w-full rounded-xl border border-[#E5E7EB] object-cover" /> -->
        </article>

        <!-- Climate -->
        <article class="p-6 sm:p-10">
          <h4 class="text-[22px] font-medium text-[#111827]">Climate Hub Asia</h4>
          <p class="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#2B384C]">
            Website Climate Hub Asia adalah platform yang fokus pada isu perubahan iklim di kawasan Asia.
          </p>

          <a href="https://climate-hub.asia/" target="_blank" class="group mt-6 inline-flex items-center gap-2 rounded-md border border-[#D1D5DB] px-4 py-2 text-[14px] text-[#2B384C] transition hover:border-[#BC0003] hover:bg-[#FFEBEB] hover:text-[#BC0003]">
            Go to Website
            <span class="material-symbols-outlined text-[16px] text-[#BC0003] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              arrow_outward
            </span>
          </a>

          <div class="relative mt-8 h-[320px] overflow-hidden">
            <button
              v-for="(img, index) in getProjectImageOrder('climate')"
              :key="img.title"
              type="button"
              class="absolute left-0 w-full rounded-xl border border-[#E5E7EB] bg-white transition-all duration-300 ease-out"
              :class="[
                index === 0 ? 'top-[84px] z-40 scale-100 opacity-100' : '',
                index === 1 ? 'top-[56px] z-30 scale-[0.96] opacity-80' : '',
                index === 2 ? 'top-[28px] z-20 scale-[0.92] opacity-60' : '',
                index === 3 ? 'top-0 z-10 scale-[0.88] opacity-40' : '',
              ]"
              @click="rotateProjectImages('climate', projectImageGroups.climate.findIndex((item) => item.title === img.title))"
            >
              <div class="border-b border-[#E5E7EB] px-4 py-2 text-left text-[12px] text-[#6B7280]">
                {{ img.title }}
              </div>
              <img :src="img.image" :alt="img.title" class="h-[220px] w-full object-cover" />
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

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
import { computed, reactive, ref } from 'vue'

const activeExperience = ref('sl2')

const experienceItems = {
  sl2: {
    label: 'SL2',
    file: 'Sustainable Living Lab — Experience.txt',
    role: 'UI/UX Product Designer',
    company: 'PT Sustainable Living Lab',
    intro: '',
    responsibilities: [
      'Mengembangkan wireframe dan prototype untuk dashboard dan sistem manajemen berbasis kebutuhan pengguna.',
      'Berkolaborasi dengan tim dalam mengembangkan desain yang konsisten dan sesuai dengan kebutuhan platform.',
      'Mengevaluasi tampilan dan alur penggunaan untuk meningkatkan efisiensi serta kemudahan dalam penggunaan sistem.'
    ]
  },
  sne: {
    label: 'SNE',
    file: 'Satria Nusa Enjinering — Experience.txt',
    role: 'UI/UX Product Designer',
    company: 'PT Satria Nusa Enjinering',
    intro: '',
    responsibilities: [
      'Melakukan riset pengguna dan memahami kebutuhan untuk merancang solusi desain yang relevan.',
      'Membuat wireframe dan prototype interaktif untuk membantu alur penggunaan menjadi lebih jelas dan terstruktur.',
      'Bekerja sama dengan tim developer dalam mengimplementasikan desain yang konsisten dan mudah digunakan.'
    ]
  },
  dro: {
    label: 'DRO',
    file: 'Dro Official — Experience.txt',
    role: 'Graphic Designer',
    company: 'Dro Official',
    intro: 'Dro Official adalah perusahaan di bidang e-commerce. Strategi pemasarannya mengandalkan iklan di platform TikTok, Facebook, dan Instagram. Saya memulai karir saya dari divisi dan deskripsi pekerjaan yang saya cantumkan sebagai berikut:',
    responsibilities: [
      'Desain grafis',
      'Desain kemasan',
      'Desain marketplace',
      'Motion graphics'
    ]
  },
  ouzen: {
    label: 'OUZEN',
    file: 'Ouzen Group — Experience.txt',
    role: 'Digital Marketing',
    company: 'Ouzen Group',
    intro: 'PT. Ouzen Anugerah Indonesia atau lebih dikenal sebagai Grup Ouzen adalah perusahaan di sektor e-commerce. Saya memulai karir saya dari divisi dan deskripsi pekerjaan yang saya cantumkan sebagai berikut:',
    responsibilities: [
      'Desainer grafis dan pemasaran Instagram',
      'Manajemen pemasaran influencer',
      'Pemasaran digital dan strategi kreatif kampanye di platform Meta Ads',
      'Penulis konten dan dukungan strategi singkat'
    ]
  }
}

const activeExperienceItem = computed(() => {
  return experienceItems[activeExperience.value as keyof typeof experienceItems]
})

const isMobileMenuOpen = ref(false)

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
    description: 'Platform pembelajaran berbasis AI dengan materi interaktif.',
    image: '/img/portfolio/ai-tutor-web.webp',
    href: 'https://www.figma.com/proto/GONWQ8FYZGNcEVJAH7Atao/AI-Tutor-Web-App-SL2',
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
    description: 'Dengan fokus pada kemudahan reservasi.',
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
    description: 'Dengan fitur pencarian dan pembelian produk.',
    image: '/img/freelance/gis.svg',
    to: '/gis'
  }
]

type ProjectImage = {
  title: string
  image: string
}

// Image stacks used in "True Rice", "Intel AI4FW SS", and "Climate Hub Asia" sections.
// Keep these paths pointing to files inside /public so Vite won't treat them as module imports.
const projectImageGroups = {
  trueRice: [
    { title: 'Overview', image: '/img/portfolio/true-rice.webp' },
    { title: 'Details', image: '/img/portfolio/true-rice.webp' },
    { title: 'Analytics', image: '/img/portfolio/true-rice.webp' },
    { title: 'Settings', image: '/img/portfolio/true-rice.webp' }
  ],
  intel: [
    { title: 'Dashboard', image: '/img/portfolio/intel-ai4fw-ss.webp' },
    { title: 'Monitoring', image: '/img/portfolio/intel-ai4fw-ss.webp' },
    { title: 'Reports', image: '/img/portfolio/intel-ai4fw-ss.webp' },
    { title: 'Users', image: '/img/portfolio/intel-ai4fw-ss.webp' }
  ],
  climate: [
    { title: 'Homepage', image: '/img/hero/background-header.svg' },
    { title: 'Programs', image: '/img/hero/background-header.svg' },
    { title: 'News', image: '/img/hero/background-header.svg' },
    { title: 'Resources', image: '/img/hero/background-header.svg' }
  ]
} satisfies Record<string, ProjectImage[]>

type ProjectImageGroupKey = keyof typeof projectImageGroups

const projectImageActiveIndex = reactive<Record<ProjectImageGroupKey, number>>({
  trueRice: 0,
  intel: 0,
  climate: 0
})

const getProjectImageOrder = (group: ProjectImageGroupKey) => {
  const items = projectImageGroups[group]
  const start = projectImageActiveIndex[group] ?? 0
  return [...items.slice(start), ...items.slice(0, start)]
}

const rotateProjectImages = (group: ProjectImageGroupKey, nextIndex: number) => {
  if (!Number.isFinite(nextIndex) || nextIndex < 0) return
  const len = projectImageGroups[group]?.length ?? 0
  if (!len) return
  projectImageActiveIndex[group] = nextIndex % len
}

/* ✅ CLIENT LOGO (INI YANG KAMU MAU TAMBAHKAN) */
const clientLogos = [
  { name: 'SL2', src: '/img/clients/sl2.webp' },
  { name: 'True Rice', src: '/img/clients/true-rice.webp' },
  { name: 'SNE', src: '/img/clients/sne.webp' },
  { name: 'AUCT', src: '/img/clients/auct.webp' }
] as const

</script>
<style>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.typewriter-wrapper {
  position: relative;
  display: inline-block;
}

@keyframes typing {
  0% { max-width: 0; }
  50% { max-width: 100%; }
  70% { max-width: 100%; }
  100% { max-width: 0; }
}

.animate-typewriter {
  display: inline-block;
  max-width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s steps(25, end) infinite;
}

@keyframes cursorMove {
  0% { left: 0%; }
  50% { left: 100%; }
  70% { left: 100%; }
  100% { left: 0%; }
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.cursor-bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 9.5em;
  background: #2B384C;
  animation:
    cursorMove 4s steps(25, end) infinite,
    blink 1s ease-in-out infinite;
}

@media (max-width: 640px) {
  .cursor-bar {
    top: 50%;
    height: 6em;
    width: 2px;
  }
}

@media (min-width: 641px) and (max-width: 1023px) {
  .cursor-bar {
    top: 52%;
    height: 8em;
    width: 2.5px;
  }
}

@media (min-width: 1024px) {
  .cursor-bar {
    top: 50%;
    height: 9.5em;
    width: 3px;
  }
}

@keyframes company-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

.animate-company-marquee {
  animation: company-marquee 22s linear infinite;
  will-change: transform;
}

</style>


<style>
.border-dashed-custom {
  position: relative;
}

.border-dashed-custom::before,
.border-dashed-custom::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;

  background-image: repeating-linear-gradient(
    to bottom,
    #E5E7EB,
    #E5E7EB 4px,   /* panjang garis */
    transparent 4px,
    transparent 12px /* jarak antar dash */
  );
}

.border-dashed-custom::before {
  left: 0;
}

.border-dashed-custom::after {
  right: 0;
}
</style>
