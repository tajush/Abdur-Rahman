<template>
    <div class="lg:pt-28 pt-14">
        <div class=" text-center container max-w-7xl m-auto px-4">
            <header class="max-w-[880px] mx-auto mb-16">
                <h2 class="title-primary mb-4">Come be a part of our vibrant community and watch your <span
                        class="text-green">potential flourish</span></h2>
                <p class="subtitle-primary lg:text-lg text-sm text-center leading-[22px]">Whether you're a student,
                    professional, or enthusiast, you'll find a place to grow and thrive with us. Join us today and be
                    part of something truly special.</p>
            </header>
            <div class="flex flex-wrap justify-between lg:pb-[64px] pb-10 md:px-12">
                <button @click="selectChip(chip.text)" v-for="(chip, i) in chips" :key="i"
                    :class="['text-base font-poppins py-2 px-4 rounded-md', { 'bg-[#FFE5E1] text-primary-color font-medium': selectedPost === chip.text }]">
                    {{ chip.text }}
                </button>
            </div>
            <div>
                <div class="grid gap-y-[24px]">
                    <div v-if="filteredJobPost.length === 0" class="text-center text-3xl text-gray">
                        No Jobs Found
                    </div>
                    <div v-else v-for="(post, i) in filteredJobPost" :key="i"
                        class=" border border-[#B4BEC1] rounded-[16px] p-[24px]">
                        <div class="flex justify-between "><span
                                class="text-primary-color mb-2 text-[14px] leading-[20px] font-semibold">{{
                                    post.jobCategory }}</span>
                            <div class="flex items-center gap-1">
                                <NuxtLink :to="`/career/${post.id}`">
                                    <button class="text-primary-color">View job
                                        <Icon class="ml-1" name="material-symbols:arrow-outward" />
                                    </button>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 mb-4">
                            <h2 class="font-medium text-[18px] leading-[27px]">{{ post.jobTitle }}</h2>
                            <div class="flex items-center gap-1 bg-[#FFF4ED] text-[#B93815] py-1 rounded-full px-2.5">
                                <ImageComponent :src="icon5" alt="Icon" class="" />
                                <p class="text-[14px] leading-[20px] font-semibold">{{ post.jobCategory }}</p>
                            </div>
                        </div>
                        <p class="text-left mb-4 font-normal text-base text-gray font-poppins">{{ post.jobObjective }}
                        </p>
                        <div class="flex items-center gap-4">
                            <div class="flex gap-2"><img src="~assets/img/career/marker-pin-02.svg" alt="location">
                                <h3 class="text-sm text-gray font-jost font-medium">{{ post.jobLocation }}</h3>
                            </div>
                            <div class="flex gap-2"><img src="~assets/img/career/clock.svg" alt="clock">
                                <h3 class="text-sm text-gray font-jost font-medium">{{ post.jobSchedule }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import BaseButton from "./BaseButton"
import JobpostCard from "./JobpostCard"
import dot1 from '/assets/img/career/dot.svg'
import dot2 from '/assets/img/career/dot1.svg'
import dot3 from '/assets/img/career/dot2.svg'
import dot4 from '/assets/img/career/dot3.svg'
import dot5 from '/assets/img/career/dot4.svg'
import json from "~/static/data.json";
export default {
    components: {
        BaseButton,
        JobpostCard
    },
    data() {
        return {
            allJobPost: json,
            selectedPost: "View All",
            chips: [
                {
                    delay: "100",
                    text: "View All"
                },
                {
                    delay: "200",
                    text: "Design"
                },
                {
                    delay: "300",
                    text: "Software Development"
                },
                {
                    delay: "400",
                    text: "Customer Success"
                },
                {
                    delay: "500",
                    text: "Sales"
                },
                {
                    delay: "400",
                    text: "Marketing"
                },
            ],
            icon1: dot1,
            icon2: dot2,
            icon3: dot3,
            icon4: dot4,
            icon5: dot5,
        }


    },

    methods: {
        selectChip(chipText) {
            this.selectedPost = chipText;
        }
    },
    computed: {
        filteredJobPost() {
            if (this.selectedPost === 'View All') {
                return this.allJobPost.filter(post => post.showPost);
            }
            return this.allJobPost.filter(post => post.showPost && post.jobCategory === this.selectedPost);
        }
    }
}
</script>

<style></style>