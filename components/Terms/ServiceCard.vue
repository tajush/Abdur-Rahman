<template>
    <div itemscope itemtype="https://schema.org/Article">
        <div class="container gap-[30px] max-w-7xl text-center grid grid-cols-1 md:grid-cols-3    m-auto px-4">
            <div v-for="(service, i) in services" :key="i"
                class=" bg-orange-light service-card rounded-2xl py-[54px] px-2 flex items-center flex-col ">

                <img :src="service.icon" alt="">

                <h2 itemprop="name" class="text-base text-dark-black text-[24px] font-normal font-jost py-3">{{ service.title }}</h2>
                <p itemprop="description" class="text-base text-dark-black  font-jost  mb-[50px]">{{ service.text }}</p>
                <div>
                    <NuxtLink :to="service.link">
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                        class="outline-btn font-jost lg:w-auto w-full hover:bg-[#480F07] hover:border-[#480F07]">
                        
                            <span itemprop="text">{{ service.btnText }}
                                <Icon class="ml-1" name="material-symbols:arrow-outward" />
                            </span>
                    </button>
                </NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup() {
        const state = reactive({
            services: [
                {
                    link: "/services/staff-augmentation",
                    icon: "~assets/img/terms/icon3.svg",
                    title: "Staff Augmentation",
                    text: "Augment your tech teams with our developers, adding the expertise you need.",
                    btnText: "Explore"
                },
                {
                    link: "/services/software-outsourcing",
                    icon: "~assets/img/terms/icon1.svg",
                    title: "Software Outsourcing",
                    text: "Deliver end-to-end projects efficiently and reliably with our embedded software development teams.",
                    btnText: "Explore"
                },
                {
                    link: "/services/dedicated-teams",
                    icon: "~assets/img/terms/icon2.svg",
                    title: "Dedicated Teams",
                    text: "Outsource your entire software project, from concept to testing, when in-house capacity or expertise is limited.",
                    btnText: "Explore"
                }
            ]
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style>
.service-card:hover {
    border-radius: 20px;
    background: linear-gradient(302deg, #FFB5AB 0.82%, #FFD0CA 40.77%, #FFF1DB 69.99%);
    box-shadow: 0px 8px 16px 0px rgba(202, 202, 202, 0.60);
}
</style>