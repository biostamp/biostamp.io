<template>
  <div class="relative">
    <div class="z-[-1] absolute top-0 left-0 w-full h-full bg-gray-200 rounded-3xl">&nbsp;</div>
    <div
      class="
        z-[-1]
        absolute
        top-0
        left-0
        w-full
        h-full
        rounded-3xl
        transform
        shadow-lg
        bg-gradient-to-br
        from-bs-yellow
        to-amber-600
      "
      :class="{
        [rotation[rotate]]: true,
      }"
    >
      &nbsp;
    </div>

    <div class="p-10 text-bs-light-grey">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rotate: {
      type: String,
      required: true,
      enum: [-1, -2, 1, 2]
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
}
</script>
