/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<script setup lang="ts">
import AuthButton from "~/components/auth-button.vue";

const colorMode = useColorMode();

const heroClass = computed(() => {
  return colorMode.value === "dark" ? "bg-neutral-600 container mx-auto mt-4" : "bg-base-200 container mx-auto mt-4";
});
</script>

/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<template>
  <div :class="heroClass">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels with ease. Log your trips, share experiences, and explore the world through your own travel journal.
        </p>
        <AuthButton />
      </div>
    </div>
  </div>
</template>
