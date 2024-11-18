

<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" class="subtitle-primary mb-2.5 text-center text-2xl font-jost">Our Process</p>
                <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="title-primary">Simple, <span class="text-green">seamless,</span> streamlined</h2>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                <div data-aos="fade-right" :data-aos-delay="item.delay" data-aos-duration="1000" v-for="(item, index) in arguments" :key="index"
                    class="relative flex flex-col justify-center items-center lg:mb-0p mb-5 last:mb-0">
                    <img :src="item.icon" :alt="item.altText">
                    <div v-if="index !== this.arguments.length - 1" class="absolute top-[12px] -right-[80px] lg:block hidden">
                        <img :src="item.arrow" alt="line arrow">
                    </div>
                    <div class="mt-10">
                        <h4 class="font-lg text-dark-black capitalize font-medium font-jost mb-4 text-center">{{ item.title
                        }}</h4>
                        <p class="text-center text-gray text-sm font-poppins max-w-[320px] leading-6">{{ item.subTitle }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import phoneIcon from "~/assets/img/home/phone-icon.svg"
import teamIcon from "~/assets/img/home/team-icon.svg"
import trackIcon from "~/assets/img/home/track-icon.svg"
import leftArrow from "~/assets/img/home/line-arrow.svg"

export default {
    setup() {
        const state = reactive({
            arguments: [
                {
                    delay: "100",
                    icon: phoneIcon,
                    altText: "phone icon",
                    arrow: leftArrow,
                    title: "Join exploration call",
                    subTitle: "Tell us more about your business on a discovery call. We'll discuss team structure, success criteria, timescale, budget to see how we can help."
                },
                {
                    delay: "200",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: leftArrow,
                    title: "Explore the solution and team setup",
                    subTitle: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team."
                },
                {
                    delay: "300",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: leftArrow,
                    title: "Get started and track performance",
                    subTitle: "After we've finalized the deal, we'll promptly begin work. We'll monitor progress, provide updates, and continually adjust to meet your needs."
                }
            ]
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped></style>