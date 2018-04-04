<template>
<div class="columns">
    <counter class="column is-one-fifth"/>
    <sorter class="column"/>
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
div {
    margin: 5px;
}
</style>