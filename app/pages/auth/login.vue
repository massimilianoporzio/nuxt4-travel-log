/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<script setup>
import { AuthGoogleButton, AuthLoginButton } from "#components";

// Specifica che questa pagina deve usare il layout "centered.vue"

definePageMeta({
  layout: "centered",
});
const imagePath = computed(() => "/images/login-image.jpg");
</script>

<template>
  <!--
    Questo componente è ora una "card" di login, progettata per essere inserita
    all'interno del layout di default (`default.vue`) del tuo progetto.
    Le classi del layout si occupano di centrare il contenuto e gestire
    l'altezza dello schermo, evitando conflitti e la barra di scroll.
  -->
  <div class="flex items-center justify-center lg:-translate-y-16">
    <div class="w-full max-w-sm lg:max-w-4xl p-4">
      <!-- logo -->
      <div class="flex items-center justify-center gap-2 p-8">
        <svg
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="256" y="670.72" width="512" height="256" rx="128" class="fill-base-content" />
          <circle cx="512" cy="353.28" r="256" class="fill-base-content" />
          <circle
            cx="512"
            cy="353.28"
            r="261"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="10"
          />
          <circle cx="512" cy="353.28" r="114.688" class="fill-base-200" />
        </svg>
        <h1 class="text-lg font-bold">
          Login to your account
        </h1>
      </div>
      <!-- /logo -->
      <div class="bg-base-100 grid lg:aspect-2/1 lg:grid-cols-2">
        <!-- image -->
        <figure class="bg-base-300 pointer-events-none object-cover max-lg:hidden">
          <img :src="imagePath" alt="Login" class="h-full">
        </figure>
        <!-- /image -->
        <!-- form -->
        <form class="flex flex-col justify-center gap-4 px-10 py-10 lg:px-16">
          <!-- email -->
          <div class="form-control">
            <label class="label" for="input1"><span class="label-text">Email</span></label>
            <input
              id="input1"
              type="email"
              placeholder="email"
              class="input input-bordered [&:user-invalid]:input-warning [&:user-valid]:input-success"
              required
            >
          </div>
          <!-- /email -->
          <!-- password -->
          <div class="form-control">
            <label class="label" for="input2"><span class="label-text">Password</span></label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered [&:user-invalid]:input-warning [&:user-valid]:input-success"
              required
              minlength="6"
              for="input2"
            >
          </div>
          <!-- password -->
          <!-- remember me and recovery link -->
          <div class="flex items-center justify-between gap-3">
            <label class="flex cursor-pointer gap-3 text-xs">
              <input name="remember-me" type="checkbox" class="toggle toggle-xs">
              Remember me
            </label>
            <div class="label">
              <a class="link-hover link label-text-alt" href="recovery.html">Forgot password?</a>
            </div>
          </div>
          <!-- /remember me and recovery link -->
          <!-- submit -->
          <AuthLoginButton />
          <!-- /submit -->
          <!-- login with google -->
          <AuthGoogleButton />
          <!-- /login with google -->
          <!-- login with github -->
          <AuthGithubButton />
          <!-- /login with github -->

          <!-- signup -->
          <div class="label justify-end">
            <a class="link-hover link label-text-alt" href="signup.html">
              Don't have an account? <span class="font-bold text-white">Sign up!</span>
            </a>
          </div>
          <!-- /signup -->
        </form>
        <!-- /form -->
      </div>
    </div>
  </div>
</template>
