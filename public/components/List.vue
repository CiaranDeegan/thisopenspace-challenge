<template>
<div>
    <panel></panel>
    <grid></grid>
</div>
</template>

<script>
var Panel = require('./Panel.vue'),
    Grid = require('./Grid.vue');
    
module.exports = {
    components: {   
        'panel': Panel,
        'grid': Grid
    }
}
</script>

<style scoped>

</style>