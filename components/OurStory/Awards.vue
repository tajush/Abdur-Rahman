<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4 awards">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Awards and <span  itemprop="text" class="text-green">Honors</span></h2>
            </header>

            <div class="grid lg:grid-cols-4 grid-cols-2 place-items-center gap-7">
                <div class="mb-7" v-for="(award, i) in awards" :key="i">
                    <a  itemprop="url" target="_blank" :href="award.link">
                        <ImageComponent :src="award.img" :alt="award.altText" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import awardImg1 from '/assets/img/our-story/award-img1.svg'
import awardImg2 from '/assets/img/our-story/award-img2.svg'
import awardImg3 from '/assets/img/our-story/award-img3.svg'
import awardImg4 from '/assets/img/our-story/award-img4.svg'
import awardImg5 from '/assets/img/our-story/award-img5.svg'
import awardImg6 from '/assets/img/our-story/award-img6.svg'
import awardImg7 from '/assets/img/our-story/award-img7.svg'
import awardImg8 from '/assets/img/our-story/award-img8.svg'
import awardImg9 from '/assets/img/our-story/award-img9.svg'
import awardImg10 from '/assets/img/our-story/award-img10.svg'
import awardImg11 from '/assets/img/our-story/award-img11.svg'
import awardImg12 from '/assets/img/our-story/award-img12.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            awards: [
                {
                    link: "https://basis.org.bd/company-profile/21-02-043",
                    img: awardImg9,
                    altText: "award img9"
                },
                {
                    link: "https://clutch.co/profile/reformedtech",
                    img: awardImg2,
                    altText: "award img2"
                },
                {
                    link: "https://www.goodfirms.co/company/reformedtech",
                    img: awardImg4,
                    altText: "award img4"
                },
                {
                    link: "https://www.sortlist.com/agency/reformedtech",
                    img: awardImg5,
                    altText: "award img5"
                },
                {
                    link: "https://www.goodfirms.co/company/reformedtech",
                    img: awardImg6,
                    altText: "award img6"
                },
                {
                    link: "https://www.topdevelopers.co/profile/reformedtech",
                    img: awardImg8,
                    altText: "award img8"
                },
                {
                    link: "https://www.appfutura.com/companies/reformedtech",
                    img: awardImg10,
                    altText: "award img10"
                },
                {
                    link: "https://wadline.com/ReformedTech",
                    img: awardImg11,
                    altText: "award img11"
                },
            ]
        }
    }
}
</script>

<style scoped>
@import "/assets/css/awards.css"
</style>