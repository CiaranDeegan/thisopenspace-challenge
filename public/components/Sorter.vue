<template>
    <div class="has-text-right">
        <h2>Sort by</h2>
        <button class="button is-info" v-on:click="emitSort('id')">ID</button>
        <button class="button is-info" v-on:click="emitSort('capacity')">Capacity</button>
        <button class="button is-info" v-on:click="emitSort('square_footage')">Square Footage</button>
        <button class="button is-info" v-on:click="emitSort('views_count')">Views</button>
        <button class="button is-info" v-on:click="emitSort('daily_price')">Daily Price</button>
        <button class="button is-info" v-on:click="emitSort('hourly_price')">Hourly Price</button>
    </div>
</template>

<script>
var bus = require('../js/bus.js'),
    _ = require('lodash');

function arrayEquals(arrA, arrB) {
    return _.isEqual(arrA, arrB, function (a, b) {
        return (_.isObject(a) || _.isObject(b)) ? undefined : a == b;
    });
}

module.exports = {
    data() {
        return {
            sortProperty: 'id'
        };
    },
    methods: {
        emitSort: function(property) {
            this.sortProperty = property;
            bus.$emit('sort-spaces', this.sortArray);
        },
        sortArray: function(arr) {
            var newArr = _.sortBy(arr, [this.sortProperty]);
            //reverse array if no change (asc, desc toggle)
            if(arrayEquals(arr, newArr)) return newArr.reverse();
            else return newArr;
        }
    }
};
</script>

<style scoped>

</style>

