import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import VeeValidate from 'vee-validate';
import { upperFirst, camelCase } from 'lodash';

const requireComponent = require.context(
  // Path of the components folder
  '@/elements',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /.vue$/,
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  // Register component globally
  Vue.component(
    'El' + componentName,
    componentConfig.default || componentConfig,
  );
});

// Import entire styles
library.add(fas, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
