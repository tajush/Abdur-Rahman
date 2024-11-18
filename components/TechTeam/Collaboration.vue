<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Next-Level Collaboration
                    Expanding <span itemprop="name" class="text-green">Your Dev Team</span> Offshore</h2>
                <p itemprop="description" class="subtitle-primary text-base text-center leading-[22px]">Get the absolute perfect fit - <span itemprop="text"
                        class="text-primary-color">or the
                        critical missing ingredients</span> - for your existing software development team.</p>
            </header>

            <div class="grid grid-cols-12 gap-x-7 place-items-center">
                <div class="lg:col-span-8 col-span-12">
                    <h2 itemprop="description" class="lg:text-[32px] text-[22px] lg:max-w-[650px] text-gray leading-[28px] lg:leading-[38px] font-medium font-jost">The most innovative
                        firms choose ReformedTech to expand their software development teams with world-class talent.</h2>
                    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-7 gap-x-3 lg:mt-14 mt-7">
                        <div v-for="(team, i) in teams" :key="i"
                            class="mb-7 max-w-[240px] h-[100px] flex justify-center items-center border border-orange-light bg-white hover:bg-orange-light shadow-md grayscale hover:grayscale-0 hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all rounded-[10px] px-10 py-5">
                            <ImageComponent itemprop="image" :src="team.img" :alt="team.altText" />
                            <h4 class="lg:text-2xl text-xl text-gray font-medium font-jost">{{ team.text }}</h4>
                        </div>
                    </div>
                    <button class="lg:w-auto w-full py-5 font-jost mt-7">
                        <NuxtLink itemprop="url" to="/contact">
                            <span itemprop="text" class="primary-btn-v2">Let’s get started
                            <Icon class="ml-1" name="material-symbols:arrow-outward" /></span>
                        </NuxtLink>
                    </button>
                </div>

                <div class="lg:col-span-4 col-span-12 lg:mt-0 mt-7">
                    <img itemprop="image" src="~assets/img/tech-team/collaboration-img.png" alt="collaboration img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import pointpal from '/assets/img/amazing-teams/pointpal.svg'
import smartProperty from '/assets/img/amazing-teams/smart-property.svg'
import linkit from '/assets/img/amazing-teams/linkit.svg'
import pactfi from '/assets/img/amazing-teams/pactfi.svg'
import legacyLock from '/assets/img/amazing-teams/legacy-lock.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            teams: [
                {
                    width: "140",
                    height: "40",
                    img: pointpal,
                    altText: "pointpal"
                },
                {
                    width: "77",
                    height: "40",
                    img: smartProperty,
                    altText: "smart property"
                },
                {
                    width: "140",
                    height: "34",
                    img: linkit,
                    altText: "linkit"
                },
                {
                    width: "140",
                    height: "40",
                    img: pactfi,
                    altText: "pactfi"
                },
                {
                    width: "182",
                    height: "42",
                    img: legacyLock,
                    altText: "legacy lock"
                }
            ]
        }
    }
}
</script>

<style scoped></style>