

<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div>
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" class="title-primary mb-4"><span itemprop="text" class="text-green">Amazing teams</span> we’ve <br> already helped</h2>
            </header>

            <div class="mb-8">
                <swiper :autoplay="autoplay" :freeMode="true" :loop="true"
                    :modules="modules" :breakpoints="breakpoints" :centeredSlides="true" class="mySwiper">
                    <swiper-slide v-for="(slide, i) in sliders1">
                        <div
                            class="max-w-[240px] mx-auto h-[100px] flex justify-center items-center border border-orange-light bg-white shadow-md grayscale hover:grayscale-0 hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all rounded-[10px] px-10 py-5">
                            <img itemprop="image" :src="slide.img" :alt="slide.altText">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>



            <div>
                <swiper :autoplay="{ delay: 0, disableOnInteraction: false, reverseDirection: true }"
                    :speed="3000" :freeMode="true" :loop="true" :slides-per-view="5"
                    :spaceBetween="30" :modules="modules" :breakpoints="breakpoints" class="mySwiper">
                    <swiper-slide v-for="(slide, i) in sliders2">
                        <div
                            class="max-w-[240px] h-[100px] flex justify-center items-center border border-orange-light bg-white shadow-md grayscale hover:grayscale-0 hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all rounded-[10px] px-10 py-5">
                            <img itemprop="image" :src="slide.img" :alt="slide.altText">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import smartProperty from "~/assets/img/amazing-teams/smart-property.svg"
import pactfi from "~/assets/img/amazing-teams/pactfi.svg"
import linkit from "~/assets/img/amazing-teams/linkit.svg"
import pointpal from "~/assets/img/amazing-teams/pointpal.svg"
import legacyLock from "~/assets/img/amazing-teams/legacy-lock.svg"
import baggageCare from "~/assets/img/amazing-teams/baggage-care.svg"
import cloudpal from "~/assets/img/amazing-teams/cloudpal.svg"
import salesify from "~/assets/img/amazing-teams/salesify.svg"
import toads from "~/assets/img/amazing-teams/toads.svg"


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const state = reactive({
            modules: [Autoplay, Pagination],
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    speed: 3000,
                },
                660: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    speed: 3000,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false
                    }
                },
            },
            autoplay: {
                delay: 0,
                disableOnInteraction: false
            },
            sliders1: [
                {
                    img: smartProperty,
                    altText: "smart property"
                },
                {
                    img: pactfi,
                    altText: "pactfi"
                },
                {
                    img: linkit,
                    altText: "linkit"
                },

                {
                    img: pointpal,
                    altText: "pointpal"
                },
                {
                    img: legacyLock,
                    altText: "lagacy lock"
                },
                {
                    img: smartProperty,
                    altText: "smart property"
                },
                {
                    img: pactfi,
                    altText: "pactfi"
                },
                {
                    img: linkit,
                    altText: "linkit"
                },

                {
                    img: pointpal,
                    altText: "pointpal"
                },
                {
                    img: legacyLock,
                    altText: "lagacy lock"
                }
            ],

            sliders2: [
                {
                    img: baggageCare,
                    altText: "baggage care"
                },
                {
                    img: cloudpal,
                    altText: "cloudpal"
                },
                {
                    img: salesify,
                    altText: "salesify"
                },

                {
                    img: toads,
                    altText: "toads"
                },
                {
                    img: linkit,
                    altText: "linkit"
                },
                {
                    img: baggageCare,
                    altText: "baggage care"
                },
                {
                    img: cloudpal,
                    altText: "cloudpal"
                },
                {
                    img: salesify,
                    altText: "salesify"
                },

                {
                    img: toads,
                    altText: "toads"
                },
                {
                    img: linkit,
                    altText: "linkit"
                }
            ]
        })
       

        return {
            ...toRefs(state),
        }
    },
}
</script>

<style scoped></style>