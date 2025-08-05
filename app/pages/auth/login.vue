/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
<script setup>
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
  <div class="flex  items-center justify-center">
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
          <button class="btn btn-neutral" type="submit">
            Login
          </button>
          <!-- /submit -->
          <!-- login with google -->
          <button type="button" class="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              width="16"
              height="16"
            >
              <defs>
                <path
                  id="A"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="B"><use xlink:href="#A" /></clipPath>
              <g transform="matrix(.727273 0 0 .727273 -.954545 -1.45455)">
                <path d="M0 37V11l17 13z" clip-path="url(#B)" fill="#fbbc05" />
                <path d="M0 11l17 13 7-6.1L48 14V0H0z" clip-path="url(#B)" fill="#ea4335" />
                <path d="M0 37l30-23 7.9 1L48 0v48H0z" clip-path="url(#B)" fill="#34a853" />
                <path d="M48 48L17 24l-4-3 35-10z" clip-path="url(#B)" fill="#4285f4" />
              </g>
            </svg>
            Login with Google
          </button>
          <!-- /login with google -->
          <!-- login with github -->
          <button type="button" class="btn">
            <!-- Modificato il codice SVG per rendere il logo di GitHub della stessa dimensione del logo di Google -->
            <svg width="16" height="16" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
              <g transform="scale(1, 1)">

                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" />
              </g>
            </svg>
            Login with GitHub
          </button>
          <!-- /login with github -->

          <!-- signup -->
          <div class="label justify-end">
            <a class="link-hover link label-text-alt" href="signup.html">Create new account</a>
          </div>
          <!-- /signup -->
        </form>
        <!-- /form -->
      </div>
    </div>
  </div>
</template>
