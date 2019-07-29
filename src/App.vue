<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <page-header />
    <rule-container />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import RuleContainer from '@/components/RuleContainer.vue';

export default {
  name: 'app',
  components: {
    PageHeader,
    RuleContainer,
  },
}
</script>

<style lang="scss">
@import 'font';

#app {
  font-family: $sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
