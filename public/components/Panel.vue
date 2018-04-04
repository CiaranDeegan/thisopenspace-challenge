<template>
<div class="columns">
    <counter class="column"/>
    <sorter class="column has-text-right"/>
</div>
</template>

<script>
var Counter = require('./Counter.vue')
    Sorter = require('./Sorter.vue');

module.exports = { 
    components: {   
        'counter': Counter,
        'sorter': Sorter
    }
}
</script>

<style scoped>
</style>