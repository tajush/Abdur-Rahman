<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <p itemprop="name" v-if='isHomePage' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" class="subtitle-primary mb-2.5 text-center text-2xl font-jost">Our Process</p>
                <h2 itemprop="description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="title-primary" v-html="title"></h2>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-7 place-items-center">
                <div data-aos="fade-up" :data-aos-delay="item.delay" data-aos-duration="1000" class="lg:mb-0 mb-7" v-for="(item, index) in arguments" :key="index">
                    <div class="bg-orange-light border border-orange rounded-[40px] min-h-[380px] px-6 py-12 relative ">
                        <div class="bg-orange rounded-custom-tl-br border-r-2 border-[#FFACA0] absolute top-0 left-0 py-7 px-6 max-w-[100px] ">
                            <ImageComponent itemprop="image" :src="item.arrow" alt="line arrow" />
                            <p itemprop="text" class="text-black text-sm font-poppins mt-1">{{ item.step }}</p>
                        </div>
                        <div
                            class="flex flex-col justify-center items-center lg:mb-0p mb-5 last:mb-0">
                            <div class="mt-10">
                                <h4 itemprop="text" class="font-lg text-dark-black capitalize font-medium font-jost mb-4 text-center">{{
                                    item.title
                                }}</h4>
                                <p itemprop="description" class="text-center text-gray text-sm font-poppins max-w-[320px] leading-6">{{
                                    item.subTitle }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            
        }
    },
    computed: {
    isHomePage() {
      return this.$route.path === '/'
    }
  },
    props: {
      arguments: {
      type: Array,
      required: true
    },
    title:{
        type: String
    }
  }
}
</script>

<style scoped>@import "/assets/css/innovative-solution.css"</style>