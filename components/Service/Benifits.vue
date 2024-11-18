<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="bg-orange-light lg:pt-20 pt-8 lg:pb-0 pb-8 lg:px-20 px-4 border border-orange rounded-[40px]">
                <header class="max-w-[750px] mx-auto mb-16">
                    <h2 itemprop="headline" class="title-primary mb-4" v-html="title"></h2>
                </header>

                <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-7 place-items-center">
                    <div v-for="(feature, i) in features" :key="i" class="mb-10 text-center lg:text-left">
                        <div class="lg:block flex justify-center items-center">
                            <ImageComponent itemprop="image" :src="feature.icon" :alt="feature.altText"/>
                        </div>
                        <div class="min-h-[200px]">
                            <NuxtLink itemprop="url" :to="feature.link">
                                <h2 itemprop="name" class="text-base text-dark-black font-medium font-jost py-4">{{ feature.title }}</h2>
                            </NuxtLink>
                        <p itemprop="description" class="subtitle-primary max-w-[320px]">{{ feature.subTitle }}</p>
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
    props: {
      features: {
      type: Array,
      required: true
    },
    title: {
        type: String
    }
  }
}
</script>

<style scoped>
@import "/assets/css/innovative-solution.css"
</style>