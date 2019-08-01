<template>
  <form @submit.prevent="submit">
    <draggable
      :value="rules"
      @input="sorted"
      v-bind="dragOptions">
      <transition-group name="list" tag="ul" class="container">
        <li v-for="(rule, index) in rules" :key="rule.id" class="item">
          <p class="title">#Rule {{ index + 1 }}</p>
          <rule :rule.sync="rule" @remove="remove(index)"/>
        </li>
      </transition-group>
    </draggable>
    <el-card class="add" @click.native="append">
      <font-awesome-layers class="fa-stack fa-lg">
        <font-awesome-icon :icon="['far', 'circle']" size="2x" />
        <font-awesome-icon :icon="['fas', 'plus']" />
      </font-awesome-layers>
    </el-card>
    <el-flat-button class="blue" :disabled="errors.items.length !== 0" type="submit">
      Submit
    </el-flat-button>
  </form>
</template>

<script>
import Draggable from 'vuedraggable';
import Rule from '@/components/Rule.vue';

export default {
  name: 'ConfigForm',
  components: { Draggable, Rule },
  props: {
    rules: { type: Array, required: true },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
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
    sorted(list) {
      this.$emit('sorted', list);
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
  overflow: hidden;
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
  transition: all .3s ease-out;
  max-height: 500px;
}
.list-enter, .list-leave-to /* .list-leave-active for below version 2.1.8 */ {
  max-height: 0;
}
</style>
