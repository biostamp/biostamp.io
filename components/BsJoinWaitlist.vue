<template>
  <a
    class="bg-bs-yellow hover:bg-bs-yellow-500 py-4 px-6 rounded-full text-bs-dark-black font-bold transition-all duration-200"
    :class="{
      'hidden sm:inline': !preventHide,
    }"
    href="https://share-eu1.hsforms.com/1sUdHi1sqSUmwKaS9BuXfmgew3dz"
    target="_blank"
  >
    Join the waitlist &nbsp; 🚀
  </a>
</template>

<script>
export default {
  props: {
    preventHide: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
