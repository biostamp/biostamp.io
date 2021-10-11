<template>
  <div class="space-y-20">
    <!-- main section showcasing the product and CTA -->
    <section id="what-we-do" class="flex flex-col md:flex-row space-x-6">
      <!-- left content -->
      <div class="flex-1">
        <!-- title -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight text-bs-dark-black mt-10 sm:mt-14">
          Zero Passwords Network
        </h1>

        <h2 class="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-bs-dark-black mt-4 mb-8 sm:mt-8 sm:mb-10">
          Quickly enhance your application with advanced biometrics authentication.
        </h2>

        <!-- some description -->
        <p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-16">
          Biostamp is a self-hosted, open-source solution that provides easy-to-use advanced biometric authentication. So join us towards a <span class="text-bs-yellow-800">#passwordless</span> future.
        </p>

        <!-- cta -->
        <div class="flex sm:block items-center justify-center mb-10 sm:mb-20">
          <bs-join-waitlist prevent-hide class="py-6 px-14" />
        </div>
      </div>

      <!-- right animation -->
      <div class="flex items-center justify-center">
        <lottie-player
          ref="player"
          src="https://assets5.lottiefiles.com/packages/lf20_gysrp57x.json"
          background="transparent"
          speed="1"
          class="w-[400px]"
          loop
          autoplay
        >
        </lottie-player>
      </div>
    </section>

    <!-- benefits -->
    <bs-main-page-section
      id="benefits"
      main-color="yellow"
      secondary-color="pink"
      title="Benefits"
      subtitle="Powerful, Secured, and Flexible"
      description="Passwords are dangerous to your business. Not only are they insecure and prone to phishing, but they also have a significant impact on revenue and customer experience. Take advantage of Biostamp to seamlessly enhance your application with passwordless. "
      cta-text="Join The Waitlist"
      cta-link="https://share-eu1.hsforms.com/1sUdHi1sqSUmwKaS9BuXfmgew3dz"
    >
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </template>

      <template #rawBody>
        <div class="grid gap-10 grid-cols-1 sm:grid-cols-3">
          <bs-grdient-lock
            v-for="benefit in benefits"
            :key="benefit.title"
            :rotate="benefit.rotate"
          >
            <!-- icon -->
            <div
              class="
                absolute
                -top-5
                left-6
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-xl
                transform
                bg-gradient-to-br
                from-rose-400
                to-red-600
              "
            >
              <div v-html="benefit.icon"></div>
            </div>

            <!-- title -->
            <h1 class="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase mb-3">
              {{ benefit.title }}
            </h1>

            <!-- description -->
            <p class="text-lg">
              {{ benefit.description }}
            </p>
          </bs-grdient-lock>
        </div>
      </template>
    </bs-main-page-section>

    <!-- integrate to anything -->
    <section id="integrate-to-anything"></section>

    <!-- quick to get started with -->
    <section id="quick-to-start"></section>

    <!-- extendable -->
    <section id="extendable"></section>

    <!-- loved by developers -->
    <section id="loved-by-developers"></section>

    <!-- community stats -->
    <section id="community-stats"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          rotate: '-2',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>',
          title: 'Enhance everything',
          description: 'Enhance any application with ready-made components and plugins.',
        },
        {
          rotate: '-2',
          icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tachometer-alt" class="svg-inline--fa fa-tachometer-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>',
          title: 'Built for speed',
          description: 'Biostamp bost the authentication process from ~4 seconds with passwords to less than a second with biometrics.',
        },
        {
          rotate: '-2',
          icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shapes" class="svg-inline--fa fa-shapes fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M128,256A128,128,0,1,0,256,384,128,128,0,0,0,128,256Zm379-54.86L400.07,18.29a37.26,37.26,0,0,0-64.14,0L229,201.14C214.76,225.52,232.58,256,261.09,256H474.91C503.42,256,521.24,225.52,507,201.14ZM480,288H320a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V320A32,32,0,0,0,480,288Z"></path></svg>',
          title: 'Customization',
          description: 'Biostamp provides a well-crafted set of defaults out-of-the-box, but literally, you can customize everything.',
        },
        {
          rotate: '-2',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clip-rule="evenodd" /></svg>',
          title: 'customer experience',
          description: 'Let your users enjoy a frinctionless passwordless authentication expirence that is fluid and effortless.',
        },
        {
          rotate: '-2',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" /></svg>',
          title: 'Increase Revenue',
          description: 'Failed login attempts have a significant impact on your business. Gain back lost revenue within minutes.',
        },
        {
          rotate: '-2',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>',
          title: 'Private & Secure',
          description: 'Built in end-to-end security and data privacy. You have full control over your data!',
        },
      ]
    }
  },

  mounted() {
    setTimeout(this.setAnimationColors, 10)
    setTimeout(this.setAnimationColors, 50)
    setTimeout(this.setAnimationColors, 100)
    setTimeout(this.setAnimationColors, 200)
  },

  methods: {
    setAnimationColors() {
      // get node list of path with fill
      const nodeListLight = this.$refs.player.renderRoot.querySelectorAll('path[fill="rgb(250,80,75)"]')
      const nodeListDark = this.$refs.player.renderRoot.querySelectorAll('path[fill="rgb(207,49,39)"]')

      // set new color
      nodeListLight.forEach((node) => node.setAttribute('fill', '#FFD369'))
      nodeListDark.forEach((node) => node.setAttribute('fill', '#DFAB2D'))
    }
  }
}
</script>
