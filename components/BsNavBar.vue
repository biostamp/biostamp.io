<template>
  <header class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto mt-0">
    <div class="px-4 sm:px-6 md:px-8">
      <div class="border-b border-gray-200 py-4 flex items-center justify-between -mx-4 px-4 sm:mx-0 sm:px-0">
        <!-- logo -->
        <nuxt-link to="/">
          <bs-logo class="w-40 sm:w-48" />
        </nuxt-link>

        <div class="flex items-center space-x-4 sm:space-x-10 ml-6 sm:ml-10">
          <!-- menu items -->
          <component
            :is="item.component"
            v-for="item in menu"
            :key="item.name"
            :to="item.url"
            :href="item.url"
            :target="item.component === 'a' ? `_blank` : '_self'"
            class="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2"
          >
            <span :class="item.extendClass">
              <span v-if="item.icon">
                <fa :icon="item.icon" class="text-xl" />
              </span>
              <span v-else>
                <span class="sm:hidden">
                  {{ item.shortName || item.name }}
                </span>
                <span class="hidden sm:inline">
                  {{ item.name }}
                </span>
              </span>
            </span>
          </component>

          <!-- CTA -->
          <bs-join-waitlist />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        // {
        //   component: 'nuxt-link',
        //   name: 'Documentation',
        //   shortName: 'Docs',
        //   url: '/docs',
        //   extendClass: [],
        // },
        {
          component: 'a',
          name: 'Community',
          shortName: 'Community',
          url: 'https://discord.gg/Y7DfNExk',
          extendClass: [],
        },
        {
          component: 'a',
          name: 'GitHub',
          shortName: 'GitHub',
          icon: ['fab', 'github'],
          url: 'https://github.com/biostamp/biostamp',
          extendClass: [],
        }
      ]
    }
  }
}
</script>
