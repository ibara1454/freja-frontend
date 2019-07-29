<template>
  <textarea v-model="text" />
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    value: { type: String, required: false, default: '' },
  },
  computed: {
    text: {
      get() {
        return this.$props.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>

textarea {
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);

  @each $prefix in ('-webkit', '-moz', '-ms') {
    &::#{$prefix}-input-placeholder {
      font-style: italic;
    }
  }
}

</style>
