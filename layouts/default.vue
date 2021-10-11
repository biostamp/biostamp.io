<template>
  <div class="overflow-hidden">
    <!-- cookie consent -->
    <bs-cookie-consent class="" />

    <!-- main page design -->
    <div class="overflow-hidden">
      <!-- top navbar -->
      <bs-nav-bar />

      <!-- main section design -->
      <main class="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <div class="px-4 sm:px-6 md:px-8">
          <Nuxt />
        </div>
      </main>

      <!-- footer design -->
      <bs-footer />
    </div>
  </div>
</template>

<style>
html {
  @apply bg-bs-light-grey text-gray-500 font-inter;
}
</style>
