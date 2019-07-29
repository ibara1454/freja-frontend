<template>
  <config-form :rules="rules" @remove="onRemove" @append="onAppend" @submit="onSubmit" />
</template>

<script>
import ConfigForm from '@/components/ConfigForm.vue';
import Rule from '@/models/rule';

import axios from 'axios';

const endpoint = process.env.VUE_APP_API_ENDPOINT;

export default {
  name: 'RuleContainer',
  components: { ConfigForm },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    onAppend() {
      // Initialize new rule with empty matcher
      const matcher = '';
      this.rules.push(new Rule(matcher));
    },
    onRemove(index) {
      this.rules = this.rules.filter((_, i) => i != index);
    },
    onSubmit() {
      // Send configuration to backend API server
      axios.post(`${endpoint}/settings`, this.rules);
    },
  },
  async mounted() {
    // Get configuration from backend API server
    const res = await axios.get(`${endpoint}/settings`);
    const rules = res.data.map(Rule.parse);
    this.rules = this.rules.concat(rules);
  },
};
</script>
