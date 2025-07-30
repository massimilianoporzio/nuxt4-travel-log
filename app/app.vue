/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<script setup lang="ts">
import { configure, getConsoleSink } from "@logtape/logtape";

await configure({
  sinks: { console: getConsoleSink() },
  loggers: [
    { category: "my-app", lowestLevel: "debug", sinks: ["console"] },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
