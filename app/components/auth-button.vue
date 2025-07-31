/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<script setup lang="ts">
import { createAuthClient } from "better-auth/client";

const colorMode = useColorMode();
const authClient = createAuthClient();

async function signIn() {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
}
const buttonClass = computed(() => {
  return colorMode.value === "dark" ? "btn btn-neutral" : "btn btn-neutral";
});
</script>

<template>
  <button :class="buttonClass" @click.prevent="signIn">
    Sign In with Github <Icon name="tabler:brand-github" size="24" />
  </button>
</template>
