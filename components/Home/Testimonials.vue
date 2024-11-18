<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14 overflow-x-hidden">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <p itemprop="headline" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                    class="subtitle-primary text-2xl font-jost text-center mb-3">Testimonials</p>
                <h2 itemprop="description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="title-primary mb-4">Don't
                    Just Take <span itemprop="text" class="text-green">Our Word</span>, Take Theirs</h2>
            </header>

            <div>
                <swiper :loop="true" :slides-per-view="1" :spaceBetween="30" :speed="500" :pagination="{
                    clickable: true,
                }" :modules="modules" class="mySwiper testimonial">
                    <swiper-slide v-for="(slider, i) in sliders" :key="i">
                        <div class="grid grid-cols-12 gap-x-0">
                            <div class="lg:col-span-6 col-span-12">

                                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"
                                    class="bg-orange-light border border-orange lg:border-r-0 rounded-tl-3xl lg:rounded-tr-none rounded-tr-3xl lg:rounded-bl-3xl lg:px-6 px-4 lg:py-24 py-2.5 h-full">


                                    <div>
                                        <p itemprop="description" class="lg:text-[28px] text-2xl leading-10 text-dark-black font-jost mb-8">{{
                                            slider.description }}</p>

                                        <div>
                                            <h2 itemprop="author" class="text-base font-poppins text-dark-black">{{ slider.name }}</h2>
                                            <p itemprop="name" class="text-sm text-gray font-poppins mt-1">{{ slider.designation }}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="lg:col-span-6 col-span-12">
                                <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" class="h-full">
                                    <img itemprop="image" class="h-full lg:block hidden lg:rounded-tr-3xl lg:rounded-br-3xl" :src="slider.img" alt="testimonial img">
                                    <img itemprop="image" class="h-full w-full lg:hidden block"
                                        src="~assets/img/home/testimonial-mobile-img.png" alt="testimonial mobile img">
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import testimonialImg1 from '/assets/img/home/testimonial-img.png'
import testimonialImg2 from '/assets/img/home/testimonial-img2.png'
import testimonialImg3 from '/assets/img/home/testimonial-img3.png'
import { reactive, toRefs } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
        ImageComponent
    },
    setup() {
        const state = reactive({
            modules: [Pagination],
            sliders: [
                {
                    img: testimonialImg1,
                    description: "“I really enjoy working with ReformedTech: the trust and how considerate you’ve been throughout the project. I’m really grateful!”",
                    name: "— Renee Wells",
                    designation: "Product Manager, PactFI"
                },
                {
                    img: testimonialImg2,
                    description: "“I really enjoy working with ReformedTech: the trust and how considerate you’ve been throughout the project. I’m really grateful!”",
                    name: "— Renee Wells",
                    designation: "Product Manager, PactFI"
                },
                {
                    img: testimonialImg3,
                    description: "“I really enjoy working with ReformedTech: the trust and how considerate you’ve been throughout the project. I’m really grateful!”",
                    name: "— Renee Wells",
                    designation: "Product Manager, PactFI"
                },
            ],
        })

        return {
            ...toRefs(state),
        }
    },
}
</script>

<style scoped></style>