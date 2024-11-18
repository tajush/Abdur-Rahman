<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 class="title-primary mb-4 ">When companies hire us</h2>
                <p class="subtitle-primary lg:text-lg text-base text-center leading-[22px]">We reshape online presence, target specific audiences, secure funding—leveraging aesthetic design, robust development, and unwavering work ethic. Hiring top talent nationwide, retaining the best.</p>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-10">
                <div v-for="(hire,i) in hires" :key="i">
                    <div class="flex lg:justify-start justify-center items-center">
                        <ImageComponent :src="hire.icon" :alt="hire.altText" />
                    </div>
                    <p class="lg:text-2xl text-lg text-gray font-medium font-jost lg:leading-[32px] lg:mt-10 mt-5 lg:text-left text-center lg:mb-0 mb-7 last:mb-0">{{ hire.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import dedicatedImg1 from '/assets/img/dedicated-team/hire-img1.svg'
import dedicatedImg2 from '/assets/img/dedicated-team/hire-img2.svg'
import dedicatedImg3 from '/assets/img/dedicated-team/hire-img3.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            hires: [
                {
                    icon: dedicatedImg1,
                    altText: "hire img1",
                    content: "When a big company aims to embrace modern internet culture."
                },
                {
                    icon: dedicatedImg2,
                    altText: "hire img2",
                    content: "When a business is outgrowing its market and needs to scale."
                },
                {
                    icon: dedicatedImg3,
                    altText: "hire img3",
                    content: "When a startup develops a product, prioritizing cost savings."
                },
            ]
        }
    }
}
</script>

<style scoped></style>