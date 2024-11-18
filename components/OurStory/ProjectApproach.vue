<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 class="title-primary mb-4 ">Our <span class="text-green">Three-Stage</span> Project Approach</h2>
                <p class="subtitle-primary lg:text-lg text-base text-center leading-[22px]">Our process is simple: Tailoring
                    Solutions to Your Needs through Engaging Experiences, Research, and Iterative Feedback.</p>
            </header>


            <div v-for="(approach, i) in approaches" :key="i" class="grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:mb-20 mb-10">
                <div :class="`${approach.order} max-w-[515px] mb-7`">
                    <ImageComponent class="lg:mb-10 mb-7" :src="approach.icon" :alt="approach.altIcon" />
                    <h2 class="text-[32px] text-dark-black font-jost font-medium lg:mb-5 mb-3">{{ approach.title }}</h2>
                    <p class="text-base text-gray font-poppins lg:mb-10 mb-7">{{ approach.subTitle }}</p>
                    <div v-for="(item, index) in approach.analytics" :key="index" class="flex items-center gap-x-5 mb-4">
                        <ImageComponent :src="item.listIcon" :alt="item.altText" />
                        <p class="text-lg text-dark-black font-poppins">{{ item.text }}</p>
                    </div>
                </div>

                <div class="order-1">

                    <ImageComponent :src="approach.img" :alt="approach.altImg" />
                </div>
            </div>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-7 mb-7">
                <div class="lg:mb-0 mb-7">
                    <div class="lg:min-h-[540px] min-h-[320px] project-approach-left-card rounded-[20px] flex lg:justify-start justify-center items-center">
                        <h2
                            class="lg:text-[48px] text-[32px] font-jost text-white font-medium lg:leading-[57px] px-6 flex items-center">
                            What Makes Us <br> Different From <br> Others</h2>
                    </div>
                </div>

                <div>
                    <div class="bg-secondary min-h-[256px] flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-x-10 mb-7 rounded-[20px] px-4">
                            <div>
                                <img src="~assets/img/our-story/data-driven-icon.svg" alt="data driven icon">
                            </div>

                            <div class="text-[38px] leading-[50px] font-jost text-white font-medium lg:text-left text-center">
                                Data-Driven <br> Decisions
                            </div>
             
                    </div>

                    <div class="bg-secondary min-h-[256px] rounded-[20px] px-4 lg:pt-0 pt-10">
                        <div class="flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-x-10">
                            <div class="text-[28px] leading-[36px] font-jost text-white capitalize font-medium lg:mb-0 mb-5">
                                Expertise in <br> technology
                            </div>

                            <div>
                                <img src="~assets/img/our-story/expertise-technology-img.svg"
                                    alt="expertise technology img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-x-7">
                <div class="lg:col-span-4 col-span-12 lg:mb-0 mb-7">
                    <div class="bg-orange-light flex gap-x-7 rounded-[20px] items-center min-h-[180px] lg:px-10 px-5 lg:mb-10 mb-7">
                        <img src="~assets/img/our-story/user-centric-icon.svg" alt="user centric icon">
                        <h4 class="text-dark-black text-2xl font-jost font-medium">User-Centric Approach </h4>
                    </div>

                    <div class="bg-orange-light flex gap-x-7 rounded-[20px] items-center min-h-[180px] lg:px-10 px-5">
                        <img src="~assets/img/our-story/agile-icon.svg" alt="agile icon">
                        <h4 class="text-dark-black text-2xl font-jost font-medium">Maintaining Agile Methodology</h4>
                    </div>
                </div>

                <div class="lg:col-span-8 col-span-12">
                    <div class="bg-[#FF725E] h-full rounded-[20px] flex lg:flex-row flex-col justify-between items-center lg:px-10 px-5 lg:py-0 py-10">
                        <div class="max-w-[420px] lg:mb-0 mb-5">
                            <h4 class="text-white lg:text-[38px] text-3xl lg:leading-[50px] font-medium font-jost lg:text-left text-center">Top 1% Offshore Team</h4>
                            <p class="text-base text-white font-poppins mt-4 lg:text-left text-center">Outsource your entire software project, from concept to testing, when in-house capacity or expertise is limited.</p>
                        </div>

                        <div>
                            <img src="~assets/img/our-story/offshore-team-icon.svg" alt="offshore team icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import projectApproachImg1 from '/assets/img/our-story/project-approach-img1.png'
import projectApproachImg2 from '/assets/img/our-story/project-approach-img2.png'
import projectApproachImg3 from '/assets/img/our-story/project-approach-img3.png'
import projectApproachIcon1 from '/assets/img/our-story/project-approach-icon1.svg'
import projectApproachIcon2 from '/assets/img/our-story/project-approach-icon2.svg'
import projectApproachIcon3 from '/assets/img/our-story/project-approach-icon3.svg'
import analyticsIcon1 from '/assets/img/our-story/analytics-icon1.svg'
import analyticsIcon2 from '/assets/img/our-story/analytics-icon2.svg'
import analyticsIcon3 from '/assets/img/our-story/analytics-icon3.svg'
import designIcon1 from '/assets/img/our-story/design-icon1.svg'
import designIcon2 from '/assets/img/our-story/design-icon2.svg'
import designIcon3 from '/assets/img/our-story/design-icon3.svg'
import designIcon4 from '/assets/img/our-story/design-icon4.svg'
import devolopmentIcon1 from '/assets/img/our-story/development-icon1.svg'
import devolopmentIcon2 from '/assets/img/our-story/development-icon2.svg'
import devolopmentIcon3 from '/assets/img/our-story/development-icon3.svg'
import devolopmentIcon4 from '/assets/img/our-story/development-icon4.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            approaches: [
                {
                    order: "order-1",
                    icon: projectApproachIcon1,
                    altIcon: "project approach icon1",
                    title: "Analytics",
                    subTitle: "Every project begins with analytics, where our team collaborates with the client to establish a clear vision, optimize development resources, and ensure a successful product launch.",
                    img: projectApproachImg1,
                    altImg: "project approach img1",
                    analytics: [
                        {
                            listIcon: analyticsIcon1,
                            altText: "analytics icon1",
                            text: "What is the idea behind the product?"
                        },
                        {
                            listIcon: analyticsIcon2,
                            altText: "analytics icon2",
                            text: "How do we transform it into a feasible product?"
                        },
                        {
                            listIcon: analyticsIcon3,
                            altText: "analytics icon3",
                            text: "What is the estimated cost?"
                        },
                    ]
                },
                {
                    order: "lg:order-2",
                    icon: projectApproachIcon2,
                    altIcon: "project approach icon2",
                    title: "Design",
                    subTitle: "After analytics, we transition to design, focusing on user experience, ensuring ease of use, and fostering clarity for the development team.",
                    img: projectApproachImg2,
                    altImg: "project approach img2",
                    analytics: [
                        {
                            listIcon: designIcon1,
                            altText: "design icon1",
                            text: "Captivating design for a strong visual connection with end-users"
                        },
                        {
                            listIcon: designIcon2,
                            altText: "design icon2",
                            text: "Product tailored to end-users for both design and functionality"
                        },
                        {
                            listIcon: designIcon3,
                            altText: "design icon3",
                            text: "Future-proofed design for seamless development"
                        },
                        {
                            listIcon: designIcon4,
                            altText: "design icon4",
                            text: "Design applicable for budget and deadline estimates"
                        },
                    ]
                },
                {
                    order: "order-1",
                    icon: projectApproachIcon3,
                    altIcon: "project approach icon3",
                    title: "Development",
                    subTitle: "Following the design phase, the project enters the development stage. We maintain transparency by offering biweekly reports to keep our clients informed about the process.",
                    img: projectApproachImg3,
                    altImg: "project approach img3",
                    analytics: [
                        {
                            listIcon: devolopmentIcon1,
                            altText: "development icon1",
                            text: "In-built code reviews for quality maintenance"
                        },
                        {
                            listIcon: devolopmentIcon2,
                            altText: "development icon2",
                            text: "Unified IT professionals enforcing communication and development standards"
                        },
                        {
                            listIcon: devolopmentIcon3,
                            altText: "development icon3",
                            text: "Product developed with industry-best practices"
                        },
                        {
                            listIcon: devolopmentIcon4,
                            altText: "development icon4",
                            text: "A flexible development process—we adapt swiftly when your plans change."
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>@import "/assets/css/project-approach.css"</style>