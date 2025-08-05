/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<script setup lang="ts">
// import { createAuthClient } from "better-auth/client";

const colorMode = useColorMode();
// const authClient = createAuthClient(

// );

// async function signIn() {
//   await authClient.signIn.social({
//     fetchOptions: {
//       timeout: 5000,
//       headers: {
//         "X-Requested-With": "XMLHttpRequest",
//       },
//     },
//     provider: "github",
//     callbackURL: "/dashboard",

//   });
// }
const buttonClass = computed(() => {
  return colorMode.value === "dark" ? "btn btn-neutral" : "btn btn-neutral";
});
</script>

<template>
  <NuxtLink to="/auth/login" class="btn btn-neutral">
    <button :class="buttonClass">
      Sign In <Icon name="tabler:login" size="24" />
    </button>
  </NuxtLink>
</template>
