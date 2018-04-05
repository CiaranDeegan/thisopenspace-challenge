<template>
<div>
    <div class="columns" v-for="i in calcRowCount()" :key="i">
        <cell class="column is-one-third" v-for="space of getRowItems(i)" :key="space.id" v-bind:space="space">
        </cell>
    </div>
    <div class="has-text-centered">
    <a class="button is-primary" v-if="hasMoreItems()" v-on:click="showMoreSpaces()">Show More</a>
    </div>
</div>
</template>

<script>
var HTTPClient = require('../js/request.js'),
    Cell = require('./Cell.vue')
    bus = require('../js/bus.js');

var baseURL = "https://thisopenspace.com/lhl-test";

module.exports = { 
    data() {
        return {
            spaces: [],
            queryPageNum: 1,
            pagesVisible: 1,
            spacesPerRow: 3
        }
    },
    created() {
        var component = this;
        //get spaces when data ready (DOM not ready yet, but also not required for this action)
        this.getSpaces(this.queryPageNum, this.spaces, function(spaces) {
            //enable sort listener only once the spaces have ben retrieved
            bus.$on('sort-spaces', function(sort) {
                component.spaces = sort(component.spaces)
            });
        });
    },
    methods: {
        getSpaces: function getSpaces(pageNum, spaces, callback) {
            //recursively get spaces from thisopenspace's endpoint
            HTTPClient.get(baseURL + "?page=" + pageNum, function(status, response){
                spaces.push.apply(spaces, JSON.parse(response).data);
                var totalSpaces = JSON.parse(response).total;
                pageNum++;
                bus.$emit('space-counter', spaces.length);

                if(spaces.length < totalSpaces) {
                    getSpaces(pageNum, spaces, callback);
                }
                else {
                    callback(spaces);
                }
            });
        },
        getRowItems: function(i) {
            //returns a slice of the array corresponding to the row number (i)
            return this.spaces.slice((i - 1) * this.spacesPerRow, i * this.spacesPerRow)
        },
        calcRowCount: function() {
            //returns the amount of visible rows
            return Math.ceil(this.pagesVisible * Math.pow(this.spacesPerRow, 2) / this.spacesPerRow);
        },
        hasMoreItems: function() {
            //check amount of spaces available against spaces currently shown to determine if more can be shown
            return this.spaces.length > this.pagesVisible * Math.pow(this.spacesPerRow, 2);
        },
        showMoreSpaces: function() {
            //increment page number
            this.pagesVisible++;
        }
    },
    components: {   
        'cell': Cell
    }
}
</script>

<style scoped>
</style>