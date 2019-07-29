<template>
  <div :class="{active: isActive}">
    <label>
      <input type="checkbox" :checked="isActive" @input="onInputChanged">
    </label>
  </div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    active: { type: Boolean, default: false },
  },
  data() {
    return { isActive: this.active };
  },
  methods: {
    /**
     * Update the `isActive` value, and send `input`, `update:active` event.
     * The `update:active` event could be catched by v-bind:active.sync directive.
     * @param {Event} event Input event on checkbox.
     */
    onInputChanged(event) {
      this.isActive = event.target.checked;
      this.$emit('update:active', event.target.checked);
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
$radius: 25px;

label {
  position: relative;
  width: 50px;
  height: 25px;
  background: #cccccc;
  display: inline-block;
  border-radius: 15px;
  transition: 0.4s;
  box-sizing: border-box;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: $radius;
    height: $radius;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    background: #ffffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition-duration: 0.35s;
    transition-timing-function: ease;
    transition-property: background-color, left;
  }
  // (Not supported) CSS4 `has` pseudo-selector
  &:after:has(input:checked) {
    left: 50px - $radius;
  }
  input {
    opacity: 0;
  }
}
.active {
  label {
    background: rgba(32, 192, 32, 0.8);
    &:after {
      left: 50px - $radius;
    }
  }
}
</style>
