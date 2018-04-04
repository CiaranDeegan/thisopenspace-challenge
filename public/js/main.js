const Vue =  require('vue'),
  Grid = require('../components/Grid.vue'),
  Panel = require('../components/Panel.vue');

new Vue({
  el: '#app',
  components: {
    'grid': Grid,
    'panel': Panel
  }
});
