<template>
  <input type="text" v-model="dataValue" @input="onUpdate">
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      dataValue: this.value,
    };
  },
  props: {
    value: { type: [String, Number], required: false },
  },
  methods: {
    onUpdate(event) {
      this.text = event.target.value;
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
%base-input {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  outline: 0;
  transition-property: border;
  transition-duration: 0.2s;
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    transition-duration: 0.2s;
  }
  &:focus {
    border: 1px solid rgb(133, 183, 217);
    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }
}


div {
  display: inline-block;
}

input {
  @extend %base-input;
  @each $prefix in ('-webkit', '-moz', '-ms') {
    &::#{$prefix}-input-placeholder {
      font-style: italic;
    }
  }
}

.round input {
  border-radius: calc(1.1rem + 0.6rem);
}
</style>
