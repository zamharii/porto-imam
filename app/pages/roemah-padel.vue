<template>
  <ProjectShowcase
    theme="padel"
    title="Roemah Padel"
    description="Aplikasi pemesanan lapangan padel yang memudahkan pengguna dalam mengatur waktu bermain."
    badge="HOMEPAGE"
    :slides="slides"
  />
</template>

<script setup lang="ts">
import ProjectShowcase from '~/components/ProjectShowcase.vue'

const slides = [
  { src: '/img/projects/roemah-padel-1.png', alt: 'Roemah Padel - Screen 1', badge: 'HOMEPAGE' },
  { src: '/img/projects/roemah-padel-2.png', alt: 'Roemah Padel - Screen 2', badge: 'BOOKING' },
  { src: '/img/projects/roemah-padel-3.png', alt: 'Roemah Padel - Screen 3', badge: 'PROFILE' }
]
</script>
