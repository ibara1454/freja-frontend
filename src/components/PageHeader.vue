<template>
  <div class="hello">
    <h1>Freja - the proxy for test</h1>
    <p>
      Try to write some rules overriding requests / responses which satisfy the given url.
    </p>
    <h3>Informations</h3>
    <ul>
      <li><a href="https://dummy" class="disabled" target="_blank" rel="noopener">Monitor</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

a.disabled {
  pointer-events: none;
  cursor: default;
  color: grey;
  text-decoration: none;
}
</style>
