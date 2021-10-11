<template>
  <div class="relative grid grid-template-columns">
    <div
      class="col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 lg:row-end-5 lg:py-10 xl:py-16 flex"
      :class="{
        '-ml-8 pr-4 sm:ml-0 sm:pr-0': pin === 'left',
        '-mr-8 pl-4 sm:mr-0 sm:pl-0': pin === 'right',
        'row-start-2 row-end-4': hasLeftAndRightSlots,
        'row-start-2 row-end-5': !hasLeftAndRightSlots,
      }"
    >
      <div class="absolute h-full bg-gray-200 w-full flex-none rounded-3xl"></div>
      <div
        class="absolute h-full w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br"
        :class="[`from-${mainColor}-400`, `to-${secondaryColor}-600`, rotation[rotate], ...gradientProps]"
      >
      </div>

      <div class="relative col-start-1 col-end-4 px-4 sm:px-6 md:px-8 lg:px-0 lg:col-start-2 lg:col-end-4 xl:col-end-3 row-start-1 row-end-2 xl:row-end-3 pb-8 lg:pb-11 xl:pb-0">
        <slot name="header"></slot>
      </div>

      <template v-if="hasLeftAndRightSlots">
        <div
          class="relative col-start-2 col-end-3 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0"
          :class="{
            'pr-8': pin === 'left',
            'pl-8': pin === 'right',
          }"
        >
          <slot name="left"></slot>
        </div>
        <div class="relative w-full lg:w-auto col-start-1 col-end-4 md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 row-start-3 row-end-4 lg:row-start-2 lg:row-end-5 self-center pb-8 lg:pb-0">
          <slot name="right"></slot>
        </div>
      </template>
      <div v-else class="relative w-full col-start-1 lg:col-start-2 col-end-4 row-start-2 row-end-5 py-8 md:px-8 lg:p-0">
        <slot name="left"></slot>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainColor: {
      type: String,
      required: true
    },
    secondaryColor: {
      type: String,
      required: true
    },
    rotate: {
      type: String,
      required: true,
      enum: [-1, -2, 1, 2]
    },
    pin: {
      type: String,
      default: 'left',
      enum: ['left', 'right']
    },
    gradientProps: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      rotation: {
        '-1': '-rotate-1',
        '-2': '-rotate-1 sm:-rotate-2',
        '1': 'rotate-1',
        '2': 'rotate-1 sm:rotate-2',
      }
    }
  },

  computed: {
    hasLeftAndRightSlots() {
      return !!(this.$slots.right && this.$slots.left)
    }
  }
}
</script>

<style scoped>
.root {
  grid-template-columns: 1fr minmax(min-content, 640px) 1fr;
}

@screen lg {
  .root {
    grid-template-columns: 2rem 1fr 59.375% 2rem;
    grid-template-rows: auto 2.25rem auto 2.25rem;
  }
}

@screen xl {
  .root {
    grid-template-columns: 2rem 1fr 52.5% 2rem;
  }
}
</style>
