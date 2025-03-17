<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts" setup>
import Header from '@/layouts/components/Header.vue';
import Footer from '@/layouts/components/Footer.vue';
</script>
