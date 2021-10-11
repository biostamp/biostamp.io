<template>
  <section :id="id">
    <div class="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
      <div
        class="w-12 h-12 flex items-center justify-center rounded-xl mb-8 bg-gradient-to-br from-yellow-500 to-pink-600"
      >
        <slot name="icon"></slot>
      </div>

      <h2
        class="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase mb-3 text-yellow-400"
      >
        {{ title }}
      </h2>

      <p class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
        {{ subtitle }}
      </p>

      <p class="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
        {{ description }}
      </p>

      <component
        :is="ctaLinkComponent"
        :to="ctaLink"
        :href="ctaLink"
        target="_blank"
        class="
          inline-flex
          text-lg
          sm:text-2xl
          font-medium
          transition-colors
          duration-200
          focus:ring-2
          focus:ring-offset-2
          focus:ring-current
          focus:outline-none
          rounded-md
          text-yellow-400
          hover:text-yellow-800
        "
      >
        {{ ctaText }} ->
      </component>
    </div>

    <div class="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
      <slot name="rawBody"></slot>
    </div>

    <!-- body -->
    <!-- <gradient-lockup
      main-color="yellow"
      secondary-color="pink"
      rotate="-2"
      pin="right"
    >
      <template #header>
        <div class="flex overflow-auto py-0.5 -my-0.5 pl-0.5 -mx-4 sm:-mx-6 md:-mx-8 xl:-ml-4 xl:mr-0">
          foo
        </div>
      </template>

      <template #left>
        content on left
      </template>

      <template #right>
        content on left
      </template>
    </gradient-lockup> -->
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ctaText: {
      type: String,
      required: true,
    },
    ctaLink: {
      type: String,
      required: true,
    },
  },

  computed: {
    ctaLinkComponent() {
      if (this.ctaLink.startsWith('http')) {
        return 'a'
      } else {
        return 'nuxt-link'
      }
    }
  }
}
</script>

<style scoped>
.section-custom-grid {
  grid-template-columns: 2rem 1fr 52.5% 2rem;
}
</style>
