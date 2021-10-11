<template>
  <div>
    <h1 class="text-lg sm:text-2xl font-bold text-bs-dark-black mb-4 sm:mb-6">
      Cookies
    </h1>

    <p class="whitespace-pre-line mb-12">
      When someone visits Biostamp, we collect standard internet log information and details of visitor behaviour patterns. We do this to find out things such as the number of visitors to the various parts of the site. We collect this information in a way which does not personally identify anyone.

      Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a target="_blank" class="text-bs-yellow-600" href="www.allaboutcookies.org">www.allaboutcookies.org</a>.
    </p>

    <h2 class="font-medium mb-8 text-bs-dark-black">Cookies set by Biostamp</h2>

    <table class="table-fixed">
      <thead class="text-left bg-gray-200">
        <tr>
          <th class="p-4 w-1/6">Name</th>
          <th class="p-4">Description</th>
          <th class="p-4 w-1/6">Duration</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="cookie in cookies" :key="cookie.name" class="border-b">
          <td class="text-left p-4">
            {{ cookie.name }}
          </td>
          <td class="text-left p-4">
            {{ cookie.description }}
            <a v-if="cookie.readMore" :href="cookie.readMore" class="text-bs-yellow-600 capitalize text-xs">
              read more
            </a>
          </td>
          <td class="text-left p-4">
            {{ cookie.duration }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookies: [
        {
          name: 'bs-session-*',
          description: 'Keeps your website session alive.',
          duration: '12 months',
          readMore: ''
        },
        {
          name: '_gid',
          description: 'Google Analytics cookie, used to distinguish users.',
          duration: '24 hours',
          readMore: 'https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage'
        },
        {
          name: '_ga',
          description: 'Google Analytics cookie, used to distinguish users.',
          duration: '24 months',
          readMore: 'https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage'
        },
        {
          name: '_gat',
          description: 'Google Analytics cookie, Used to throttle request rate.',
          duration: '1 minute',
          readMore: 'https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage'
        },
        {
          name: '_gac_*',
          description: 'Google Analytics cookie, Contains campaign related information for the user.',
          duration: '3 months',
          readMore: 'https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage'
        },
        {
          name: 'NID',
          description: 'Google cookie, Contains information that changes the way the site behaves or looks, such as your preferred language or the region you are in.',
          duration: '6 months',
          readMore: 'https://policies.google.com/technologies/types'
        },
        {
          name: 'ui_locale',
          description: 'System user interface preferred language.',
          duration: '24 months'
        },
      ]
    }
  }
}
</script>
