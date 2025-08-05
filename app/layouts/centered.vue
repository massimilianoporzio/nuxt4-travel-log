/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main class="flex flex-grow items-center justify-center bg-base-200 p-4">
      <slot />
    </main>
  </div>
</template>
