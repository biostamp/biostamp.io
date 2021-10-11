<template>
  <footer class="bg-gray-200 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
    <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-300 px-4 sm:px-6 md:px-8">
      <!-- footer options -->
      <ul class="text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
        <li v-for="item in footer" :key="item.title" class="space-y-5 row-span-2">
          <h2 class="text-xs font-semibold tracking-wide text-gray-900 uppercase">
            {{ item.title }}
          </h2>
          <ul class="space-y-4">
            <li v-for="subitem in item.items" :key="subitem.text">
              <component
                :is="subitem.component"
                class="hover:text-gray-900 transition-colors duration-200"
                :to="subitem.link"
                :href="subitem.link"
                :target="subitem.component === 'a' ? `_blank` : '_self'"
              >
                {{ subitem.text }}
              </component>
            </li>
          </ul>
        </li>
      </ul>

      <!-- logo section -->
      <div class="pt-10 sm:pt-12">
        <bs-logo class="w-48" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer: [
        {
          title: 'Community',
          items: [
            {
              component: 'a',
              text: 'Discord',
              link: 'https://discord.gg/Y7DfNExk'
            },
            {
              component: 'a',
              text: 'GitHub',
              link: 'https://github.com/biostamp/biostamp'
            },
            {
              component: 'a',
              text: 'Facebook',
              link: 'https://www.facebook.com/biostamp'
            },
            {
              component: 'a',
              text: 'Twitter',
              link: 'https://www.twitter.com/biostamp'
            },
            {
              component: 'a',
              text: 'DEV',
              link: 'https://dev.to/biostamp'
            },
            {
              component: 'a',
              text: 'LinkedIn',
              link: 'https://www.linkedin.com/company/biostamp'
            },
          ]
        },
        {
          title: 'Legal',
          items: [
            {
              component: 'nuxt-link',
              text: 'Terms of Service',
              link: '/legal/terms-of-service'
            },
            {
              component: 'nuxt-link',
              text: 'Privacy Policy',
              link: '/legal/privacy-policy'
            },
            {
              component: 'nuxt-link',
              text: 'Cookie Policy',
              link: '/legal/cookie-policy'
            },
          ]
        }
      ]
    }
  }
}
</script>
