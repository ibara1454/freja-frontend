<template>
  <form @submit.prevent="submit">
    <transition-group name="list" tag="ul" class="container">
      <li v-for="(rule, index) in rules" :key="index" class="item">
        <p class="title">#Rule {{ index + 1 }}</p>
        <rule :rule.sync="rule" @remove="remove(index)"/>
      </li>
      <li :key="'add'">
        <el-card class="add" @click.native="append" >
          <font-awesome-layers class="fa-stack fa-lg">
            <font-awesome-icon :icon="['far', 'circle']" size="2x" />
            <font-awesome-icon :icon="['fas', 'plus']" />
          </font-awesome-layers>
        </el-card>
      </li>
    </transition-group>

    <el-flat-button class="blue" :disabled="errors.items.length !== 0" type="submit">
      Submit
    </el-flat-button>
  </form>
</template>

<script>
import Rule from '@/components/Rule.vue';

export default {
  name: 'ConfigForm',
  components: { Rule },
  props: {
    rules: { type: Array, required: true },
  },
  methods: {
    remove(index) {
      this.$emit('remove', index);
    },
    append() {
      this.$emit('append');
    },
    submit() {
      // Transform native submit event into user-define submit event
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../color';

form {
  position: relative;
  width: 50%;
  margin: 0 auto;
}

.container {
  display: grid;
  gap: 20px;
}

.title {
  text-align: left;
  line-height: 1rem;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
}

.add {
  border: dashed 4px $secondary-color;
  color: $secondary-color;
  display: flex;
  justify-content: center;
  padding: 8px;
  transition-duration: .08s;
  &:hover {
    border: dashed 4px lighten($secondary-color, 3%);
    color: lighten($secondary-color, 3%);
    transform: scale(1.005);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  }
}

.list-enter-active, .list-leave-active {
  transition: all .5s ease;
}
.list-enter, .list-leave-to /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
