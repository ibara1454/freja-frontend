<template>
  <div :class="$style.card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style module>
.card {
  border-radius: 12px;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.2);
}
</style>
