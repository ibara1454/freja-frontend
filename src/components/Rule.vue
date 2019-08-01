<template>
  <el-card class="rule">
    <button class="remove" @click="remove">
      <font-awesome-icon :icon="['fas', 'times']" />
    </button>
    <div class="row matcher">
      <label>Match</label>
      <el-input placeholder="^(http|https).*\.example\.com$" v-model="dataRule.matcher" name="matcher" v-validate="'regex-exp'" />
    </div>
    <p class="error left" v-if="errors.has('matcher')">{{ errors.first('matcher') }}</p>
    <el-horizontal-divider class="divider row" />
    <div class="row grid-container">
      <div class="column col-xl-6 request">
        <label class="left align-items-center">
          <font-awesome-layers class="fa-stack fa-lg icon">
            <font-awesome-icon class="background" icon="circle" size="2x" />
            <font-awesome-icon :icon="['fas', 'plane']" style="color: white;" />
          </font-awesome-layers>
          <span>Request</span>
        </label>
        <div class="layer-1 left">
          <div class="delay">
            <label class="left">Delay</label>
            <el-input v-model="dataRule.request.delay" name="request-delay" v-validate="'numeric|required'" />
            <span>ms</span>
            <p class="error left" v-if="errors.has('request-delay')">The field may only contain numeric characters.</p>
          </div>
          <div class="detail">
            <label class="left newline">Detail</label>
            <el-textarea class="full-width" v-model="dataRule.request.detail" name="request-detail" v-validate="'json'" :placeholder="JSON.stringify({requestOptions: { header: { 'Content-Type': 'application/json' } }, requestData: '...'})" />
            <p class="error left" v-if="errors.has('request-detail')">{{ errors.first('request-detail') }}</p>
          </div>
        </div>
      </div>
      <div class="column col-xl-6 response">
        <label class="left align-items-center">
          <font-awesome-layers class="fa-stack fa-lg icon">
            <font-awesome-icon class="background" icon="circle" size="2x" />
            <font-awesome-icon :icon="['fas', 'plane']" style="color: white;" rotation="180" />
          </font-awesome-layers>
          <span>Response</span>
        </label>
        <div class="layer-1 left">
          <div class="delay">
            <label class="left">Delay</label>
            <el-input v-model="dataRule.response.delay" name="response-delay" v-validate="'numeric|required'" />
            <span>ms</span>
            <p class="error left" v-if="errors.has('response-delay')">The field may only contain numeric characters.</p>
          </div>
          <div class="detail">
            <label class="left newline">Detail</label>
            <el-textarea class="full-width" v-model="dataRule.response.detail" name="response-detail" v-validate="'json'" :placeholder="JSON.stringify({statusCode: 200, header: {}, body: 'ok'})" />
            <p class="error left" v-if="errors.has('response-detail')">{{ errors.first('response-detail') }}</p>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>

import { Validator } from 'vee-validate';

// Regex validator
Validator.extend('regex-exp', {
  getMessage: () => 'This field may only be a valid RegExp expression.',
  validate: (value) => {
    try {
      new RegExp(value);
    } catch (e) {
      return false;
    }
    return true;
  },
});

// JSON validator
Validator.extend('json', {
  getMessage: () => 'This field may only be a valid JSON expression.',
  validate: (value) => {
    try {
      const json = JSON.parse(value);
      return typeof json === 'object';
    } catch (e) {
      return false;
    }
  },
});

export default {
  name: 'Rule',
  data() {
    return { dataRule: this.rule };
  },
  props: {
    rule: {
      type: Object,
      required: true,
    }
  },
  methods: {
    remove() {
      this.$emit('remove');
    },
    async onInput() {
      const result = await this.$validator.validateAll();
      console.log(result);
    }
  },
  watch: {
    dataRule: {
      handler(value) {
        this.$emit('update:rule', value);
      },
      deep: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../font';
@import '../grid';
@import '../color';

.rule {
  border: solid 2px $md-grey-500;
  padding: 14px;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto;
  gap: 10px;
}

.remove {
  border: none;
  position: absolute;
  right: 1.2rem;
  background: transparent;
  padding: 0;
  user-select: none;
  outline: 0;
  cursor: pointer;
  transition-duration: .1s;
  &:hover {
    color: $md-grey-500;
    transform: scale(1.1);
  }
}

.row.matcher {
  display: grid;
  grid-template-columns: min-content auto;
  gap: 10px;
  label {
    display: inline-flex;
    align-items: center;
  }
  input {
    font-family: $monospace;
    font-size: 1.1rem;
    letter-spacing: .04rem;
    padding: .2rem;
    max-width: calc(calc(1.1rem + .04rem) * 20);
  }
}

.delay {
  input {
    font-family: $monospace;
    font-size: 1.1rem;
    letter-spacing: .04rem;
    padding: 0 .2rem;
    width: calc(calc(1.1rem + .04rem) * 4);
    margin: 0 .5rem;
  }
}

.detail {
  textarea {
    resize: none;
    font-family: $monospace;
    font-size: 1.1rem;
    letter-spacing: .04rem;
    height: 5rem;
  }
}

.grid-container {
  gap: 14px;
}

.column {
  display: flex;
  flex-direction: column;
}

.layer-1 {
  padding-left: 1.5rem;
}

.left {
  text-align: left;
}

.align-items-center {
  display: flex;
  align-items: center;
}

.newline {
  display: block;
}

.full-width {
  display: relative;
  width: 100%;
}

.request .icon .background {
  color: $md-blue-400;
}

.response .icon .background {
  color: $md-red-400;
}

.error {
  color: red;
  margin: 0.3rem 0;
}

</style>
