<template>
  <ProjectShowcase
    theme="sparring"
    title="Let’s Sparring"
    description="Aplikasi pemesanan lapangan olahraga dengan fokus pada kemudahan pencarian, pemilihan jadwal, dan proses reservasi."
    badge="HOMEPAGE"
    :slides="slides"
  />
</template>

<script setup lang="ts">
import ProjectShowcase from '~/components/ProjectShowcase.vue'

const slides = [
  {
    src: '/img/projects/lets-sparring-1.png',
    alt: "Let's Sparring - Homepage 1",
    badge: 'HOMEPAGE',
  },
  {
    src: '/img/projects/lets-sparring-2.png',
    alt: "Let's Sparring - Homepage 2",
    badge: 'DASHBOARD',
  },
  {
    src: '/img/projects/lets-sparring-3.png',
    alt: "Let's Sparring - Homepage 3",
    badge: 'PROFILE',
  }
]
</script>
