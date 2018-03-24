<template>
<div class="card">
    <div class="card-image">
        <figure class="image is-4by3">
            <img v-bind:src="space.primary_photo_css_url_small">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-content content">
                <span class="space-icon" v-if="isPopular" title="This is a popular space!"><span class="icon has-text-danger"><i class="fas fa-fire"></i></span></span>
                <span class="is-size-5">{{space.name}}</span>
                <span class="is-size-7"><p>{{space.address}}</p></span>
            </div>
        </div>
        <div class="content">
            <div class="columns">
                <div class="space-icon column" v-if="space.hourly_price"><span class="icon" title="Hourly Rate"><i class="fas fa-hourglass-start"></i></span> ${{space.hourly_price}} / hour</div>
                <div class="space-icon column" v-if="space.daily_price"><span class="icon" title="Daily Rate"><i class="fas fa-sun"></i></span>${{space.daily_price}} / day</div>
            </div>
            <div class="columns">
                <div class="space-icon column"><span class="icon" title="Square Footage"><i class="fas fa-chart-area"></i></span> {{space.square_footage}} sqft.</div>
                <div class="space-icon column"><span class="icon" title="Capacity"><i class="fas fa-users"></i></span> {{space.capacity}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
module.exports = {
    props: ['space'],
    computed: {
        isPopular: function() {
            //show fire icon if space has over 2000 views
            return this.space.views_count > 2000;
        }
    }
}
</script>

<style scoped>
.space-icon {
    cursor: pointer;
}

.card {
    margin: 5px;
}
</style>