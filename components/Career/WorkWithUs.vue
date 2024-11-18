<template>
    <div itemscope itemtype="https://schema.org/Article"  class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2  itemprop="name" class="title-primary mb-4">Why <span itemprop="text" class="text-green">Work</span> With Us?</h2>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-10">
                <div class="lg:mb-14 mb-7" v-for="(work,i) in workFlows" :key="i">
                    <div class="bg-white shadow-[0_6px_10px_rgba(255,183,183,0.60)] rounded-[20px] min-h-[310px] p-5 flex flex-col justify-center items-center">
                        <div class="flex justify-center items-center">
                        <ImageComponent class="w-[40px]" :src="work.icon" :alt="work.altText" />
                    </div>
                    <h4  itemprop="text" class="text-2xl text-dark-black font-jost font-medium text-center mt-5">{{ work.title }}</h4>
                    <p itemprop="description" class="text-lg text-gray font-medium font-jost lg:leading-[28px] mt-2 text-center lg:mb-0 mb-7 last:mb-0">{{ work.content }}</p>
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
    props: {
      workFlows: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>