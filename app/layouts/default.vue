/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<script setup lang="ts">
import { AppNavBar } from "#components";
</script>

/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
