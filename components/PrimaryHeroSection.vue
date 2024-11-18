<template>
    <div class="lg:mt-[30px]">
        <div class="p-4 bg-orange-light lg:hidden block">
            <MenuLinks />
        </div>

        <div itemscope itemtype="https://schema.org/Article" class="container max-w-7xl m-auto">
            <div class="bg-[#edf8f8] lg:rounded-[20px] lg:px-6 px-4 pt-6 relative">
                <div class="lg:block hidden">
                    <MenuLinks />
                </div>

                <div class="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:pt-12 pt-7">
                    <div class="max-w-[700px] lg:mb-0 mb-7">
                        <h1 itemprop="name" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" v-html="title" class="text-dark-black lg:text-[42px] text-[32px] lg:leading-[58px] font-medium font-jost mb-4 lg:text-left text-center capitalize">
                        </h1>
                        <p itemprop="description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" v-html="subTitle" class="text-base text-dark-black font-poppins leading-6 lg:text-left text-center"></p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <ImageComponent itemprop="image" :src="img" alt="hero section img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from './ImageComponent.vue'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {

        }
    },
    props: {
        title: { type: String, required: true },
        subTitle: { type: String },
        img: { type: String }
    },
}
</script>

<style scoped></style>