<template>
  <button @click="$emit('click');">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FlatButton',
};
</script>

<style lang="scss" scoped>
@import "src/color";

button {
  display: inline-block;
  font-family: Roboto, sans-serif;
  cursor: pointer;
  border: none;
  border-width: 2px;
  font-weight: 500;
  font-size: 0.85rem;
  line-height: 1.35rem;
  text-transform: uppercase;
  margin: 10px 1px;
  border-radius: 3px;
  padding: 11px 22px;
  color: #ffffff;
  text-align: center;
  box-sizing: border-box;
  user-select: none;
  outline: 0;
  letter-spacing: .09rem;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  transition-property: background-color;
  @each $color in $md-colors {
    &.#{$color} {
      background: map-get(map-get($md-color-map, $color), 500);
        &:hover, &:focus {
        background: map-get(map-get($md-color-map, $color), 700);
      }
    }
  }
  &:disabled {
    background: $md-grey-500;
    &:hover, &:focus {
      background: $md-grey-500;
    }
    cursor: not-allowed;
  }
}
</style>
