<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-7">
                <div class="max-w-[516px]">
                    <h2 class="title-primary font-semibold text-left lg:text-[65px] text-[36px] leading-[46px] lg:leading-[78px] mb-10">ReformedTech <span class="text-green">at A Glance</span></h2>
                    <div class="grid grid-cols-2 lg:gap-x-7 gap-x-4">
                        <div class="mb-10" v-for="(client,i) in clients" :key="i">
                            <ImageComponent :src="client.icon" :alt="client.altText" />
                            <div>
                                <h2 class="text-[28px] leading-[36px] text-dark-black font-medium font-jost mt-7 mb-2">{{ client.title }}</h2>
                            <p class="text-base text-gray font-poppins">{{ client.subTitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img class="rounded-[10px]" src="~assets/img/our-story/countdown-img1.png" alt="countdown img1">
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-5 mt-5">
                        <div class="lg:mb-0 mb-5">
                            <img class="w-full rounded-[10px]" src="~assets/img/our-story/countdown-img2.png" alt="countdown img2">
                        </div>
                        
                        <div>
                            <img class="w-full" src="~assets/img/our-story/countdown-img3.png" alt="countdown img3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import countDownIcon1 from '/assets/img/our-story/countdown-icon1.svg'
import countDownIcon2 from '/assets/img/our-story/countdown-icon2.svg'
import countDownIcon3 from '/assets/img/our-story/countdown-icon3.svg'
import countDownIcon4 from '/assets/img/our-story/countdown-icon4.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            clients: [
                {
                    width: "40",
                    height: "40",
                    icon: countDownIcon1,
                    altText: "countdown icon1",
                    title: "6 Years",
                    subTitle: "Of serving worldwide"
                },
                {
                    width: "40",
                    height: "40",
                    icon: countDownIcon2,
                    altText: "countdown icon2",
                    title: "30+",
                    subTitle: "Satisfied & happy clients"
                },
                {
                    width: "50",
                    height: "40",
                    icon: countDownIcon3,
                    altText: "countdown icon3",
                    title: "200+",
                    subTitle: "Completed projects"
                },
                {
                    width: "33",
                    height: "40",
                    icon: countDownIcon4,
                    altText: "countdown icon4",
                    title: "25+",
                    subTitle: "Satisfied & happy clients"
                },
            ]
        }
    }
}
</script>

<style scoped></style>