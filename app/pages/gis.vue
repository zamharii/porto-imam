<template>
  <ProjectShowcase
    theme="gis"
    title="GIS"
    description="Aplikasi e-commerce sederhana dengan fitur pencarian produk, pembelian, serta dukungan voucher dan event."
    badge="LOGIN PAGE"
    :slides="slides"
  />
</template>

<script setup lang="ts">
import ProjectShowcase from '~/components/ProjectShowcase.vue'

const slides = [
  { src: '/img/projects/gis-1.png', alt: 'GIS - Screen 1', badge: 'LOGIN PAGE' },
  { src: '/img/projects/gis-2.png', alt: 'GIS - Screen 2', badge: 'BOOKING' },
]
</script>
