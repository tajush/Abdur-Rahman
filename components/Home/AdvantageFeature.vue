<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid grid-cols-12 gap-x-0">
                <div class="lg:col-span-6 col-span-12">
                    <div
                        class="bg-orange-light border border-orange lg:border-r-0 rounded-tl-3xl lg:rounded-tr-none rounded-tr-3xl lg:rounded-bl-3xl lg:px-6 px-4 pt-12">
                        <header class="mb-16 lg:text-left text-center">
                            <p itemprop="name" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                                class="subtitle-primary lg:text-2xl text-base mb-2.5">Why Partner with ReformedTech?</p>
                            <h2 itemprop="description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                                class="lg:text-[32px] text-2xl text-dark-black font-medium font-jost">Software Excellence That Drives Business Value</h2>
                        </header>

                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
                            <div data-aos="fade-up" :data-aos-delay="feature.delay" data-aos-duration="1000"
                                v-for="(feature, i) in features" :key="i" class="mb-10 text-center lg:text-left">
                                <div class="lg:block flex justify-center items-center">
                                    <img itemprop="image" :src="feature.icon" :alt="feature.altText">
                                </div>
                                <h2 itemprop="text" class="text-base text-dark-black font-medium font-jost py-4">{{ feature.title }}
                                </h2>
                                <p itemprop="text" class="mx-auto subtitle-primary max-w-[280px]">{{ feature.subTitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-6 col-span-12">
                    <div class="h-full">
                        <img itemprop="image" class="h-full lg:block hidden" src="~assets/img/home/advantage-feature-img.png"
                            alt="advantage feature img">
                        <img itemprop="image" class="h-full w-full lg:hidden block"
                            src="~assets/img/home/advantage-feature-mobile-img.png" alt="advantage feature mobile img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import advantageFeatureIcon1 from "~/assets/img/home/advantage-feature-icon1.svg"
import advantageFeatureIcon2 from "~/assets/img/home/advantage-feature-icon2.svg"
import advantageFeatureIcon3 from "~/assets/img/home/advantage-feature-icon3.svg"
import advantageFeatureIcon4 from "~/assets/img/home/advantage-feature-icon4.svg"
import advantageFeatureIcon5 from "~/assets/img/home/advantage-feature-icon5.svg"
import advantageFeatureIcon6 from "~/assets/img/home/advantage-feature-icon6.svg"

export default {
    setup() {
        const state = reactive({
            features: [
                {
                    delay: "100",
                    icon: advantageFeatureIcon1,
                    altText: "advantage feature icon1",
                    title: "Agile approach",
                    subTitle: "We transform your vision into reality faster through agile development."
                },

                {
                    delay: "200",
                    icon: advantageFeatureIcon2,
                    altText: "advantage feature icon2",
                    title: "Transparency & communication",
                    subTitle: "We believe in open communication and transparency at every step of the project lifecycle."
                },

                {
                    delay: "100",
                    icon: advantageFeatureIcon3,
                    altText: "advantage feature icon3",
                    title: "MVP",
                    subTitle: "We always help to improve or start your business in the shortest possible time and budget."
                },

                {
                    delay: "200",
                    icon: advantageFeatureIcon4,
                    altText: "advantage feature icon4",
                    title: "Quality code",
                    subTitle: "Seven years enterprise expertise of delivering exceptional solutions."
                },

                {
                    delay: "100",
                    icon: advantageFeatureIcon5,
                    altText: "advantage feature icon5",
                    title: "Structured Communication",
                    subTitle: "We ensure clear communication between departments to keep the client fully informed."
                },

                {
                    delay: "200",
                    icon: advantageFeatureIcon6,
                    altText: "advantage feature icon6",
                    title: "More than a full-time employee",
                    subTitle: "Partnering with us for outsourcing helps you meet all your needs efficiently while saving costs."
                },
            ]
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/cases.css";
</style>