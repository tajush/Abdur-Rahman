<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <p itemprop="text" class="subtitle-primary mb-2.5 text-center text-2xl font-jost">Staff augmentation process</p>
                <h2 itemprop="headline" class="title-primary">Simple, <span class="text-green">seamless,</span> streamlined</h2>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-7 place-items-center">
                <div class="lg:mb-0 mb-7" v-for="(item, index) in arguments" :key="index">
                    <div class="bg-orange-light border border-orange rounded-[40px] min-h-[320px] px-6 pt-12 relative ">
                        <div class="bg-orange rounded-custom-tl-br border-r-2 border-[#FFACA0] absolute top-0 left-0 py-7 px-6 max-w-[100px] ">
                            <ImageComponent itemprop="image" :src="item.arrow" alt="line arrow" />
                            <p class="text-gray text-sm font-poppins mt-1">{{ item.step }}</p>
                        </div>
                        <div
                            class="flex flex-col justify-center items-center lg:mb-0p mb-5 last:mb-0">
                            <ImageComponent itemprop="image" :src="item.icon" :alt="item.altText" />
                            <div class="mt-10">
                                <h4 itemprop="name" class="font-lg text-dark-black capitalize font-medium font-jost mb-4 text-center">{{
                                    item.title
                                }}</h4>
                                <p itemprop="description" class="text-center text-gray text-sm font-poppins max-w-[320px] leading-6">{{
                                    item.subTitle }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import LineArrow from '/assets/img/service/line-arrow.svg'
import phoneIcon from '/assets/img/home/phone-icon.svg'
import teamIcon from '/assets/img/home/team-icon.svg'
import trackIcon from '/assets/img/home/track-icon.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            arguments: [
                {
                    width: "35",
                    step: "Step 1",
                    icon: phoneIcon,
                    altText: "phone icon",
                    arrow: LineArrow,
                    title: "Join exploration call",
                    subTitle: "Tell us more about your business on a discovery call. We'll discuss team structure, success criteria, timescale, budget to see how we can help."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Explore the solution and team setup",
                    subTitle: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Get started and track performance",
                    subTitle: "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs."
                }
            ]
        }
    }
}
</script>

<style scoped>@import "/assets/css/innovative-solution.css"</style>