<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 "><span itemprop="text" class="text-primary-color">Meet our leaders.</span> Under their
                    stewardship, we secured many <span itemprop="text" class="text-green">industry-recognized</span> accolades.</h2>
            </header>
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-10">
                <div v-for="(leader, i) in leaders" :key="i"
                    class="flex flex-col justify-center items-center lg:mb-0 mb-7">
                    <ImageComponent class="mb-6 w-full rounded-[6px]" :src="leader.img" :alt="leader.altText" />
                    <div class="mb-6">
                        <h4 itemprop="name" class="text-xl text-dark-black font-medium font-jost mb-2 text-center">{{ leader.name }}</h4>
                        <p itemprop="description" class="text-sm text-gray font-poppins">{{ leader.designation }}</p>
                    </div>
                    <div class="flex gap-x-3">
                        <div v-for="(item, index) in leader.socials" :key="index">
                            <NuxtLink target="_blank" :to="item.link"
                                class="cursor-pointer bg-[#E6EAEB] hover:bg-orange-light text-gray hover:text-dark-black transition-all p-2 flex justify-center items-center rounded-md">
                                <Icon class="text-2xl" :name="item.icon" />
                            </NuxtLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import hasnian from '/assets/img/our-team/hasnian.png'
import soikat from '/assets/img/our-team/soikat.png'
import zakaria from '/assets/img/our-team/zakaria.png'
export default {
    components: {
        ImageComponent
    },
    data() {
        return {
            leaders: [
                {
                    img: hasnian,
                    altText: "hasnian",
                    name: "Kazi Hasnain",
                    designation: "Chief Executive Officer",
                    socials: [
                        {
                            icon: "bxl:linkedin",
                            link: "https://www.linkedin.com/in/kmhasnain"
                        },
                        {
                            icon: "bx:bxl-facebook",
                            link: "https://www.facebook.com/kazi.hasnain.1"
                        },
                        {
                            icon: "bi:twitter-x",
                            link: ""
                        },
                    ]
                },

                {
                    img: soikat,
                    altText: "soikat",
                    name: "Atiquzzaman Soikat",
                    designation: "Chief Technology Officer",
                    socials: [
                        {
                            icon: "bxl:linkedin",
                            link: "https://www.linkedin.com/in/atiquzzaman-soikat"
                        },
                        {
                            icon: "bx:bxl-facebook",
                            link: "https://www.facebook.com/md.atiquzzaman"
                        },
                        {
                            icon: "bi:twitter-x",
                            link: ""
                        },
                    ]
                },

                {
                    img: zakaria,
                    altText: "zakaria",
                    name: "Zakaria Mozumder",
                    designation: "Chief Operating Officer",
                    socials: [
                        {
                            icon: "bxl:linkedin",
                            link: "https://www.linkedin.com/in/zakariarony"
                        },
                        {
                            icon: "bx:bxl-facebook",
                            link: "https://www.facebook.com/zrony"
                        },
                        {
                            icon: "bi:twitter-x",
                            link: ""
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped></style>