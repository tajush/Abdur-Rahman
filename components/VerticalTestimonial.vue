<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4">Team <span itemprop="text" class="text-green">Extension Excellence</span> The Proof Is Clear</h2>
            </header>
            
            <swiper :pagination="{
                clickable: true,
            }" :modules="modules" :breakpoints="breakpoints" :space-between="60" class="mySwiper team-testimonial">
                <swiper-slide v-for="(item, i) in cases" :key="i">
                    <div class="case-list">
                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-0 lg:pb-0 pb-7">
                            <div :class="`${item.order} border border-white`">
                                <ImageComponent class="lg:block hidden h-full" :src="item.img" alt="case img1" />
                                <ImageComponent class="lg:hidden block w-full" :src="item.mobileImg" alt="case img1" />
                            </div>

                            <div
                                :class="`${item.class} order-1 lg:pt-16 pt-5 pb-16 lg:px-[30px] px-4 cases-card border border-orange hover:border-white`">
                                <div class="mb-7">
                                    <h2 itemprop="text" class="text-[22px] font-medium text-dark-black leading-[28px] font-jost mb-1">{{
                                        item.title
                                    }}</h2>
                                    <p itemprop="text" class="subtitle-primary text-base">{{ item.subTitle }}</p>
                                </div>

                                <p itemprop="description" class="subtitle-primary text-base leading-6 mb-10">{{ item.article }}</p>

                                <div class="flex gap-x-5">
                                    <div v-for="(icon, index) in item.icons" :key="index" class="w-[48px] h-[48px]">
                                        <div
                                            class="border border-gray-light p-2 rounded-[3px] w-[48px] h-[48px] flex justify-center">
                                            <ImageComponent class="case-icon" :src="icon.item" alt="figma icon" />
                                        </div>
                                        <p itemprop="text"class="text-sm font-poppins text-[#6A797C] text-center mt-2">{{ icon.iconTitle }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import ImageComponent from "./ImageComponent.vue"
import caseImg1 from '/assets/img/home/case-img1.png'
import caseImg2 from '/assets/img/home/case-img2.png'
import caseImg3 from '/assets/img/home/case-img3.png'
import caseMobileImg1 from '/assets/img/home/case-img1.png'
import caseMobileImg2 from '/assets/img/home/case-img2.png'
import caseMobileImg3 from '/assets/img/home/case-img3.png'
import figma from '/assets/img/home/figma-icon.svg'
import react from '/assets/img/home/react-icon.svg'
import css from '/assets/img/home/css-icon.svg'
import flutter from '/assets/img/home/flutter-icon.svg'
import js from '/assets/img/home/js-icon.svg'
import django from '/assets/img/home/django-icon.svg'
import swift from '/assets/img/home/swift-icon.svg'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
        ImageComponent
    },
    setup() {
        return {
            modules: [Pagination],
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    direction: "horizontal"
                },
                992: {
                    slidesPerView: 1,
                    direction: "vertical"
                },
            },
            cases: [
                {
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: caseImg1,
                    mobileImg: caseMobileImg1,
                    title: "Skipper’s",
                    subTitle: "2021-present",
                    article: "For Skipper, we contributed to a number of projects including Marram, Ameswell, Journey, Roger, Sundance, Pod, CMS, Cash-widget, and PMS. Software Development, Front-End Development, Back-End Development, Web Development, DevOps, QA, Web Design, Web Application Development, and UX/UI Design were among the service areas offered.",
                    icons: [
                        {
                            item: figma,
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            iconTitle: "React"
                        },
                        {
                            item: css,
                            iconTitle: "Css"
                        },

                    ]
                },
                {
                    class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
                    order: "lg:order-2",
                    img: caseImg2,
                    mobileImg: caseMobileImg2,
                    title: "Kiddo . Money managements app",
                    subTitle: "Mobile App • UI/UX & Development",
                    article: "The platform and its digital field analytics combine our deep knowledge of precision farming and crop production achieved through years of field trials with satellite imagery, machine learning, and millions of hectares of proprietary ground truth data.",
                    icons: [
                        {
                            item: figma,
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            iconTitle: "React"
                        },
                        {
                            item: flutter,
                            iconTitle: "Flutter"
                        },
                        {
                            item: js,
                            iconTitle: "Java Script"
                        },

                    ]
                },

                {
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: caseImg3,
                    mobileImg: caseMobileImg3,
                    title: "Gewida . quran academy",
                    subTitle: "Website • UI/UX & Development",
                    article: "The platform and its digital field analytics combine our deep knowledge of precision farming and crop production achieved through years of field trials with satellite imagery, machine learning, and millions of hectares of proprietary ground truth data.",
                    icons: [
                        {
                            item: figma,
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            iconTitle: "React"
                        },
                        {
                            item: django,
                            iconTitle: "Django"
                        },
                        {
                            item: swift,
                            iconTitle: "Swift"
                        },
                    ]
                }
            ]
        };
    },
};
</script>
<style scoped>
@import "/assets/css/cases.css";

.mySwiper {
    width: 100%;
    height: auto;
    /* Adjust height as needed */
    max-height: 480px;
    padding: 0 55px;
}

@media screen and (max-width: 992px) {
    .mySwiper {
        max-height: 100%;
        padding: 0 0;
    }

    .mySwiper .swiper-pagination-horizontal {
        bottom: -5px;
    }
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}
</style>
