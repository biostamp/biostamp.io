<template>
  <div
    v-show="show"
    class="flex bg-gray-300 p-4 space-x-5 sm:space-x-10 items-center justify-center"
  >
    <div>
      {{ message }}
      <nuxt-link :to="to" class="underline text-yellow-600">
        {{ linkLabel }}
      </nuxt-link>
    </div>
    <button type="button" class="min-w-max bg-bs-yellow px-4 py-2 sm:px-6 rounded-xl font-bold text-bs-dark-black shadow-sm" @click="dismiss">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script>
export default {
  // external properties
  props: {
    keyName: {
      type: String,
      default: 'bs-cookie-consent'
    },
    consentExpiryDays: {
      type: Number,
      default: 365
    },
    consentDomain: {
      type: String,
      default: ''
    },
    consentPath: {
      type: String,
      default: '/'
    },
    message: {
      type: String,
      default: 'We are using cookies to make this website easier to use.'
    },
    linkLabel: {
      type: String,
      default: 'Learn more'
    },
    buttonLabel: {
      type: String,
      default: 'Got it 👍🏻'
    },
    to: {
      type: String,
      default: '/legal/cookie-policy'
    },
  },

  // calculated properties
  data() {
    return {
      show: false,
    }
  },

  mounted() {
    this.show = !this.getConsent(this.keyName)
  },

  // component functions
  methods: {
    dismiss() {
      this.show = false
      this.setConsent(this.keyName, 1, this.consentExpiryDays, this.consentDomain, this.consentPath)
    },

    /**
     * Returns the consent
     */
    getConsent(name) {
      const itemStr = localStorage.getItem('cookie-consent')

      if (itemStr) {
        const item = JSON.parse(itemStr)

        // return the value of the consent
        return item[name]
      }
    },

    /**
     * Sets the consent
     */
    setConsent(name, value) {
      // define the consent item
      const consent = { [name]: value }

      // set the consent value
      localStorage.setItem('cookie-consent', JSON.stringify(consent))
    }
  }
}
</script>
