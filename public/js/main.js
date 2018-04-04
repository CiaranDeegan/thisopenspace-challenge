const Vue =  require('vue'),
  Grid = require('../components/Grid.vue'),
  Sorter = require('../components/Sorter.vue');

new Vue({
  el: '#app',
  components: {
    'grid': Grid,
    'sorter': Sorter
  }
});
