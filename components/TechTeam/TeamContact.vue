<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-10 place-items-center">
                <div class="lg:mb-0 mb-7">
                    <ImageComponent itemprop="image" class="rounded-[20px]" :src="teamContactImg"
                        alt="team contact img" />
                </div>

                <div>
                    <h2 itemprop="headline"
                        class="lg:text-[38px] text-2xl lg:leading-[50px] leading-[32px] text-dark-black font-medium font-jost"
                        v-html="teamContactTitle"></h2>
                    <p itemprop="description" class="lg:text-2xl text-xl text-gray font-medium font-jost lg:mt-9 mt-5"
                        v-html="teamContactSubtitle"></p>

                    <div class="lg:flex gap-x-4 lg:mt-12 mt-5">
                        <button class="lg:w-auto w-full py-5 font-jost mt-7">
                            <NuxtLink itemprop="url" to="tel:+1 778 538 4001">
                                <span itemprop="text" class="primary-btn-v2">
                                    <Icon class="mr-1" name="material-symbols:call-sharp" />
                                    Schedule a call
                                </span>
                            </NuxtLink>
                        </button>

                        <NuxtLink itemprop="url" to="/contact">
                            <button class="lg:w-auto w-full py-5 font-jost mt-7">
                                <span itemprop="text" class="outline-btn-v2">Send Message
                                    <Icon class="ml-1" name="material-symbols:arrow-outward" />
                                </span>
                            </button>
                        </NuxtLink>
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
        teamContactTitle: { type: String, required: true },
        width: { type: String },
        height: { type: String },
        teamContactSubtitle: { type: String },
        teamContactImg: { type: String }
    },
}
</script>

<style scoped></style>