<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="bg-[#146476] roudned-[20px] py-5 rounded-[20px]">
                <div class="grid grid-cols-12 lg:gap-x-10 place-items-center">
                    <div class="lg:col-span-6 col-span-12 lg:pl-10">
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" class="text-[22px] text-white font-medium font-jost lg:text-left text-center">Have a great
                            idea?
                        </p>
                        <h2
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                            class="lg:text-[38px] text-[22px] lg:text-left text-center lg:leading-[50px] text-white font-medium font-jost lg:mt-5 mt-2.5 mb-10 lg:px-0 px-4">
                            See your idea transform into actual software!</h2>
                        <div class="lg:text-left text-center lg:mb-0 mb-10">
                            <NuxtLink to="/hire-developer">
                                <button data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="font-jost">
                                   <span class=newsletter-btn-v2>
                                    Get free estimate
                                    <Icon class="ml-1" name="material-symbols:arrow-outward" />
                                   </span>
                                </button>
                            </NuxtLink>
                        </div>

                    </div>

                    <div class="col-span-2">
                        <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" class="lg:block hidden" src="~assets/img/home/newsletter-style.svg" alt="newsletter style">
                    </div>

                    <div class="lg:col-span-4 col-span-12">
                        <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" src="~assets/img/home/newsletter-img.png" alt="newsletter img">
                    </div>
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

        })

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style scoped>
@import "../assets/css/newsletter.css";
</style>