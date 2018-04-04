<template>
<div>
    <h1 class="title">thisopenspace</h1>
    <h2 class="subtitle is-6">has <strong>{{spaceCount}}</strong> spaces to show you</h2>
</div>
</template>

<script>
var bus = require('../js/bus.js');

module.exports = { 
    data() {   
        return {
            spaceCount: 0
        }
    },
    created() {
        var component = this;
        bus.$on('space-counter', function(data) {
            component.spaceCount = data;
        });
    }
}
</script>

<style scoped>
</style>