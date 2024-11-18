<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="name" class="title-primary mb-4 ">Together at <span itemprop="text" class="text-green">ReformedTech</span></h2>
                <p itemprop="description" class="subtitle-primary lg:text-lg text-base text-center leading-[22px]">Harmonizing Expertise, Innovation, and Vision. The Collective Force of ReformedTech</p>
            </header>

            <div class="grid grid-cols-12 gap-x-7">
                <div v-for="(item,i) in gallery" :key="i" :class="`${item.className} mb-7`">
                    <ImageComponent class="w-full h-full rounded-[6px]" :src="item.img" :alt="item.altText" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import TeamGalleryTmg1 from '/assets/img/our-team/team-gallery-img1.png'
import TeamGalleryTmg2 from '/assets/img/our-team/team-gallery-img2.png'
import TeamGalleryTmg3 from '/assets/img/our-team/team-gallery-img3.png'
import TeamGalleryTmg4 from '/assets/img/our-team/team-gallery-img4.png'
import TeamGalleryTmg5 from '/assets/img/our-team/team-gallery-img5.png'
import TeamGalleryTmg6 from '/assets/img/our-team/team-gallery-img6.png'
import TeamGalleryTmg7 from '/assets/img/our-team/team-gallery-img7.png'
import TeamGalleryTmg8 from '/assets/img/our-team/team-gallery-img8.png'
import TeamGalleryTmg9 from '/assets/img/our-team/team-gallery-img9.png'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            gallery: [
                {
                    width: "298",
                    height: "300",
                    className: "lg:col-span-3 col-span-12",
                    img: TeamGalleryTmg1,
                    altText: "team gallery img1"
                },
                {
                    width: "625",
                    height: "300",
                    className: "lg:col-span-6 col-span-12",
                    img: TeamGalleryTmg2,
                    altText: "team gallery img2"
                },
                {
                    width: "298",
                    height: "300",
                    className: "lg:col-span-3 col-span-12",
                    img: TeamGalleryTmg3,
                    altText: "team gallery img3"
                },
                {
                    width: "625",
                    height: "300",
                    className: "lg:col-span-6 col-span-12",
                    img: TeamGalleryTmg4,
                    altText: "team gallery img4"
                },
                {
                    width: "298",
                    height: "300",
                    className: "lg:col-span-3 col-span-12",
                    img: TeamGalleryTmg5,
                    altText: "team gallery img5"
                },
                {
                    width: "298",
                    height: "300",
                    className: "lg:col-span-3 col-span-12",
                    img: TeamGalleryTmg6,
                    altText: "team gallery img6"
                },
                {
                    width: "298",
                    height: "300",
                    className: "lg:col-span-3 col-span-12",
                    img: TeamGalleryTmg7,
                    altText: "team gallery img7"
                },
                {
                    width: "625",
                    height: "300",
                    className: "lg:col-span-6 col-span-12",
                    img: TeamGalleryTmg8,
                    altText: "team gallery img8"
                },
                {
                    width: "298",
                    height: "300",
                    className: "lg:col-span-3 col-span-12",
                    img: TeamGalleryTmg9,
                    altText: "team gallery img9"
                },
            ]
        }
    }
}
</script>

<style scoped></style>