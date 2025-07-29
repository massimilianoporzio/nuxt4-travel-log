/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<template>
  <div class="navbar bg-accent text-accent-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl text-bold">
        <strong>Travel Log</strong>
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <a class="btn"> Sign In with Github <Icon name="tabler:brand-github" size="24" /></a>
    </div>
  </div>
</template>
