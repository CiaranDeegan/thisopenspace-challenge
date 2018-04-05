<template>
    <div>
        <h2 class="subtitle is-6">Sort by</h2>
        <button class="button is-info is-outlined" v-on:click="emitSort('id')">ID</button>
        <button class="button is-info is-outlined" v-on:click="updateSort('views_count')">Views</button>
        <button class="button is-info is-outlined" v-on:click="updateSort('hourly_price')">Price</button>
        <button class="button is-info is-outlined" v-on:click="updateSort('square_footage')">Square Footage</button>
        <button class="button is-info is-outlined" v-on:click="updateSort('capacity')">Capacity</button>
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
        updateSort(property) {
            this.sortProperty = property;
            this.emitSort(property);
        },
        emitSort: function(property) {
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
button {
    margin-bottom: 5px;
}

.subtitle {
    margin-bottom: 5px;
}
</style>

