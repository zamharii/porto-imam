<template>
  <main class="min-h-screen bg-[#FBFAF5] dark:bg-[#0F172A] transition-colors duration-500">

    <!-- TOGGLE DARK -->
    <button
      @click="toggleDark"
      class="fixed top-5 right-5 z-[9999] px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
    >
      Toggle
    </button>

    <!-- HERO -->
    <section
      class="relative min-h-screen w-full 
            bg-[#FBFAF5] dark:bg-[#0F172A]
            bg-no-repeat bg-center bg-contain md:bg-cover"
      style="background-image: url('/img/hero/background-header.svg')"
    > 

      <div class="absolute inset-0 flex items-center justify-center group -translate-y-14 md:-translate-y-20">

        <!-- TYPEWRITER -->
        <div class="flex justify-center">
          <div class="w-fit typewriter-wrapper">

            <div class="animate-typewriter py-12">

              <h1 class="whitespace-nowrap leading-none tracking-tight flex items-end">

                <span class="text-[76px] sm:text-[92px] md:text-[110px] lg:text-[200px] xl:text-[230px] text-[#2B384C] dark:text-slate-200">
                  Port
                </span>

                <span
                  class="inline-block font-bold relative -top-[35px]
                        text-[85px] sm:text-[110px] md:text-[165px] lg:text-[210px] xl:text-[250px]"
                  style="font-family: 'Playball'; color:#FFC700;"
                >
                  f
                </span>

                <span class="text-[76px] sm:text-[92px] md:text-[110px] lg:text-[200px] xl:text-[230px] text-[#2B384C] dark:text-slate-200">
                  olio
                </span>

              </h1>

            </div>

            <!-- CURSOR -->
            <span class="cursor-bar"></span>

          </div>
        </div>

      </div>
    </section>

    <!-- ABOUT -->
    <section class="bg-slate-100/70 dark:bg-[#0F172A]">
      <div class="mx-auto max-w-[1200px] px-6 pb-20 -mt-40">
        
        <div class="rounded-3xl 
                    bg-white/90 dark:bg-[#1E293B]/90
                    backdrop-blur p-10 shadow-2xl
                    ring-1 ring-slate-200 dark:ring-slate-700">

          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>

          <p class="mt-4 text-slate-600 dark:text-slate-400">
            Saya UI/UX Designer yang fokus pada pengalaman pengguna.
          </p>

        </div>
      </div>
    </section>

    <!-- WORK PROCESS -->
    <section class="bg-slate-100/70 dark:bg-[#0F172A] py-20">
      <div class="max-w-6xl mx-auto px-6">

        <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white">
          Work Process
        </h3>

        <div class="grid grid-cols-2 gap-6 mt-10">

          <div class="bg-white dark:bg-[#1E293B] p-6 rounded-xl ring-1 ring-slate-200 dark:ring-slate-700">
            <h4 class="text-slate-900 dark:text-white font-bold">Research</h4>
          </div>

          <div class="bg-white dark:bg-[#1E293B] p-6 rounded-xl ring-1 ring-slate-200 dark:ring-slate-700">
            <h4 class="text-slate-900 dark:text-white font-bold">Design</h4>
          </div>

        </div>

      </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="bg-white dark:bg-[#0F172A] py-20">
      <div class="max-w-6xl mx-auto px-6">

        <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white text-center">
          Portfolio
        </h3>

        <div class="grid grid-cols-3 gap-6 mt-10">

          <div class="bg-white dark:bg-[#1E293B] p-6 rounded-xl">
            <h4 class="text-slate-900 dark:text-white">Project</h4>
          </div>

        </div>

      </div>
    </section>

    <!-- FOOTER -->
    <section class="bg-[#2F3F55] dark:bg-[#020617] text-white py-20 text-center">
      <h3 class="text-4xl font-bold">Thankyou!</h3>
    </section>

  </main>
</template>

<script setup>
const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<style>
/* TYPEWRITER */
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

/* CURSOR */
@keyframes cursorMove {
  0% { left: 0% }
  50% { left: 100% }
  70% { left: 100% }
  100% { left: 0% }
}

@keyframes blink {
  0%,100% {opacity:0}
  50% {opacity:1}
}

.typewriter-wrapper {
  position: relative;
}

.cursor-bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 10em;
  background: #2B384C;
  animation: cursorMove 4s steps(25,end) infinite, blink 1s infinite;
}

/* DARK CURSOR */
.dark .cursor-bar {
  background: #E2E8F0;
}
</style>