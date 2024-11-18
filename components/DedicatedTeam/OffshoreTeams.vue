<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 class="title-primary mb-4">Our <span class="text-green">Optimizing Staffing Process</span> for
                    Exceptional Offshore Software Development Teams</h2>
            </header>

            <div class="grid grid-cols-3 gap-x-5 place-items-center">
                <div v-for="(top, i) in topDescriptions" :key="i"
                    class="flex flex-col justify-center items-center max-w-[250px]">
                    <h4 class="text-center text-gray lg:text-2xl text-sm font-medium font-jost mb-4">{{ top.title }}
                    </h4>
                    <ImageComponent :src="top.icon" :alt="top.alText" />
                </div>
            </div>

            <div class="bg-gray max-w-[700px] min-h-[200px] mx-auto rounded-[50px] lg:my-24 my-14 relative">
                <div class="absolute -top-[42px] left-[42px]">
                    <img src="~assets/img/dedicated-team/team-top-left.svg" alt="team top left img">
                </div>
                <div class="absolute -top-[42px] right-[42px]">
                    <img src="~assets/img/dedicated-team/team-top-right.svg" alt="team top right img">
                </div>
                <div class="absolute -bottom-[42px] left-[42px]">
                    <img src="~assets/img/dedicated-team/team-bottom-left.svg" alt="team bottom left img">
                </div>
                <div class="absolute -bottom-[42px] right-[42px]">
                    <img src="~assets/img/dedicated-team/team-bottom-right.svg" alt="team bottom right img">
                </div>
                <div class="flex justify-center items-center p-20">
                    <NuxtLink to="/our-team">
                        <button class="secondary-btn font-jost lg:w-auto w-full">
                            <span>Your Team</span>
                        </button>
                    </NuxtLink>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-x-5 place-items-center">
                <div v-for="(bottom, i) in bottomDescriptions" :key="i"
                    class="flex flex-col justify-center items-center max-w-[250px]">
                    <ImageComponent :src="bottom.icon" :alt="bottom.alText" />
                    <h4 class="text-center text-gray lg:text-2xl text-sm font-medium font-jost mt-4">{{ bottom.title }}
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import arrowIcon1 from '/assets/img/dedicated-team/arrow-icon1.svg'
import arrowIcon2 from '/assets/img/dedicated-team/arrow-icon2.svg'
import arrowIcon3 from '/assets/img/dedicated-team/arrow-icon3.svg'
import arrowIcon4 from '/assets/img/dedicated-team/arrow-icon4.svg'
import arrowIcon5 from '/assets/img/dedicated-team/arrow-icon5.svg'
import arrowIcon6 from '/assets/img/dedicated-team/arrow-icon6.svg'
export default {
    components: {
        ImageComponent
    },
    data() {
        return {
            topDescriptions: [
                {
                    title: "Strategic Assessment of Your Needs",
                    icon: arrowIcon1,
                    alText: "arrow icon1"
                },
                {
                    title: "Simple Pricing & Painless Contracting",
                    icon: arrowIcon2,
                    alText: "arrow icon2"
                },
                {
                    title: "Custom Recruiting of Your Dedicated Team",
                    icon: arrowIcon3,
                    alText: "arrow icon3"
                }
            ],
            bottomDescriptions: [
                {
                    title: "Onboarding & Integration",
                    icon: arrowIcon4,
                    alText: "arrow icon4"
                },
                {
                    title: "Start Building Great Product",
                    icon: arrowIcon5,
                    alText: "arrow icon5"
                },
                {
                    title: "Ongoing Talent Retention Program",
                    icon: arrowIcon6,
                    alText: "arrow icon6"
                }
            ]
        }
    }
}
</script>

<style scoped></style>