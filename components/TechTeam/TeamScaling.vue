<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4">ReformedTech makes Effortless <span class="text-green">Offshore Team Scaling</span></h2>
            </header>
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                <div v-for="(card,i) in cards" :key="i" class="offshore-staff-card !min-h-[400px] py-12 px-7 lg:mb-0 mb-7 last:mb-0">
                    <div class="flex justify-center items-center mb-12">
                        <ImageComponent itemprop="image" :src="card.leftIcon" :alt="card.altText" />
                    </div>
                    <h4 itemprop="text" class="text-dark-black font-medium text-2xl leading-8 font-jost mb-7 max-w-[310px] mx-auto text-center">{{ card.cardTitle }}</h4>
       
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import offshoreStaffIcon1 from '/assets/img/home/offshore-staff-icon1.svg'
import offshoreStaffIcon2 from '/assets/img/home/offshore-staff-icon2.svg'
import offshoreStaffIcon3 from '/assets/img/home/offshore-staff-icon3.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            cards: [
                {
                    leftIcon: offshoreStaffIcon1,
                    altText: "offshore staff icon1",
                    cardTitle: "Only the Top 3% talent-period.",
                },
                {
                    leftIcon: offshoreStaffIcon2,
                    altText: "offshore staff icon2",
                    cardTitle: "Hiring is typically done in 30 days (or less).",
                },
                {
                    leftIcon: offshoreStaffIcon3,
                    altText: "offshore staff icon3",
                    cardTitle: "You see less than five final candidates per position.",
                }
            ]
        }
    }
}
</script>

<style scoped>
@import "/assets/css/offshoreStaffing.css";
</style>