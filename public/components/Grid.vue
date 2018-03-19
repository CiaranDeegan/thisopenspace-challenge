<template>
<div>
    <h1 class="title">thisopenspace</h1>
    <h2 class="subtitle is-6">has <strong>{{spaces.length}}</strong> spaces to show you</h2>

    <div class="columns" v-for="i in Math.ceil(pagesVisible * spacesPerPage / spacesPerRow)" :key="i">
        <cell class="column" v-for="space of spaces.slice((i - 1) * spacesPerRow, i * spacesPerRow)" :key="space.id" v-bind:space="space">
        </cell>
    </div>
    <div class="has-text-centered">
    <a class="button is-primary" v-if="spaces.length > pagesVisible * spacesPerPage" v-on:click="showMoreSpaces()">Show More</a>
    </div>
</div>
</template>

<script>
var HTTPClient = require('../js/request.js'),
    Cell = require('./Cell.vue');

var baseURL = "https://thisopenspace.com/lhl-test";

module.exports = { 
    data() {
        return {
            spaces: [],
            queryPageNum: 1,
            pagesVisible: 1,
            spacesPerPage: 9,
            spacesPerRow: 3
        }
    },
    mounted() {
        this.getSpaces(this.queryPageNum, this.spaces, function(spaces) {
            console.log(spaces);
        })
    },
    methods: {
        getSpaces: function getSpaces(pageNum, spaces, callback) {
            HTTPClient.get(baseURL + "?page=" + pageNum, function(status, response){
                if(status == 200) {
                    spaces.push.apply(spaces, JSON.parse(response).data);
                    pageNum++;
                    getSpaces(pageNum, spaces, callback);
                }
                else {
                    callback(spaces);
                }
            });
        },
        showMoreSpaces: function() {
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