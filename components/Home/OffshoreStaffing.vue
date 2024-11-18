

<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[770px] mx-auto mb-16">
                <h2 itemprop="name" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" class="title-primary mb-4  ">We <span class="text-green">provide</span>  comprehensive solutions for all your offshore tech <span class="text-green">staffing</span> needs</h2>
                <p itemprop="description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="subtitle-primary lg:text-lg text-sm text-center leading-[22px]">Partner with ReformedTech for exceptional custom software development services. And, Elevate your enterprise with premium solutions from a proven industry leader. </p>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                <div data-aos="fade-up" :data-aos-delay="card.delay" data-aos-duration="1000" v-for="(card,i) in cards" :key="i" class="offshore-staff-card py-12 px-7 lg:mb-0 mb-7 last:mb-0">
                    <div class="flex justify-between items-center mb-12">
                        <img itemprop="image" :src="card.leftIcon" :alt="card.leftAltText">
                        <img itemprop="image" :src="card.rightIcon" alt="up arrow">
                    </div>
                    <NuxtLink itemprop="url" :to="card.link">
                        <h2 itemprop="text" class="text-dark-black font-medium text-2xl leading-8 font-jost max-w-[270px] mb-7">{{ card.cardTitle }}</h2>
                    </NuxtLink>
                        <ul v-for="(item,itemIndex) in card.cardList" :key="itemIndex" class="list-disc px-5">
                            <li itemprop="text" class="text-gray text-base leading-6 font-poppins mb-1.5">{{ item.list }}</li>
                        </ul>
       
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import LeftIcon1 from "~/assets/img/home/offshore-staff-icon1.svg"
import LeftIcon2 from "~/assets/img/home/offshore-staff-icon2.svg"
import LeftIcon3 from "~/assets/img/home/offshore-staff-icon3.svg"
import rightIcon from "~/assets/img/home/up-arrow.svg"
export default {
    setup () {
        const state = reactive({
            cards: [
                {
                    delay: "100",
                    link: "/services/staff-augmentation",
                    leftIcon: LeftIcon1,
                    leftAltText: "offshore staff icon1",
                    rightIcon: rightIcon,
                    cardTitle: "Offshore Dedicated Team Staffing",
                    cardList: [
                        {
                            list: "Ideal for companies seeking to build core offshore software development teams."
                        },
                        {
                            list: "New teams can be assembled quickly and efficiently."
                        },
                        {
                            list: "Developers are custom-recruited to your exact specifications, ensuring the perfect fit for your project needs."
                        },
                    ]
                },
                {
                    delay: "200",
                    link: "/services/software-outsourcing",
                    leftIcon: LeftIcon2,
                    leftAltText: "offshore staff icon2",
                    rightIcon: rightIcon,
                    cardTitle: "Seamless Tech Team Expansion",
                    cardList: [
                        {
                            list: "Perfect for companies needing additional support for their existing website development teams."
                        },
                        {
                            list: "Staffed developers are integrated directly into your current team, so you can go farther, faster."
                        },
                        {
                            list: "Fill any skill gaps in your app development team with top-tier talent that stays committed."
                        },
                    ]
                },
                {
                    delay: "300",
                    link: "/services/dedicated-teams",
                    leftIcon: LeftIcon3,
                    leftAltText: "offshore staff icon3",
                    rightIcon: rightIcon,
                    cardTitle: "Excellence in Talent Retention Strategy",
                    cardList: [
                        {
                            list: "Our team evaluates developers each month using key retention metrics."
                        },
                        {
                            list: "Through our algorithm, we provide a Talent Retention Index Score for each developer to highlight their risk of turnover."
                        },
                        {
                            list: "We offer regular updates to keep clients informed about retention risks and recommend strategies for mitigation."
                        },
                    ]
                }
            ]
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/offshoreStaffing.css";

</style>