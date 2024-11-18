<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="name" class="title-primary mb-4 ">Boost your business with our end-to-end <span itemprop="text" class="text-green">web
                        expertise</span></h2>
                <p itemprop="description" class="subtitle-primary lg:text-lg text-base text-center leading-[22px]">Our web design agency can help
                    you with hearts of your valuable visitors! Let us transform your digital landscape and leave a lasting
                    imprint on your audience.</p>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                <div v-for="(item, index) in arguments" :key="index"
                    class="flex flex-col justify-center items-center lg:mb-10 mb-5">
                    <div class="flash-animation">
                        <ImageComponent :src="item.img" :alt="item.altText" />
                    </div>
                    <div class="mt-7">
                        <NuxtLink :to="item.link">
                            <h4 itemprop="name" class="text-[22px] text-dark-black capitalize font-medium font-jost mb-2 text-center">{{
                            item.title
                        }}</h4>
                        </NuxtLink>
                        <p itemprop="text" class="text-center text-gray text-sm font-poppins max-w-[320px] leading-6">{{ item.subTitle }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <button class="font-jost lg:w-auto w-full">
                    <NuxtLink itemprop="url" to="/hire-developer">
                        <span itemprop="text" class="primary-btn-v2">
                            Get free estimate
                        <Icon class="ml-1" name="material-symbols:arrow-outward" />
                        </span>
                    </NuxtLink>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import expertiseImg1 from '/assets/img/web-development/expertise-img1.png'
import expertiseImg2 from '/assets/img/web-development/expertise-img2.png'
import expertiseImg3 from '/assets/img/web-development/expertise-img3.png'
import expertiseImg4 from '/assets/img/web-development/expertise-img4.png'
import expertiseImg5 from '/assets/img/web-development/expertise-img5.png'
import expertiseImg6 from '/assets/img/web-development/expertise-img6.png'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            arguments: [
                {
                    link: "/website-development",
                    img: expertiseImg1,
                    altText: "expertise img1",
                    title: "Front-end Development",
                    subTitle: "Our web design experts bring your visuals to life with pixel-perfect coding, ensuring an engaging user experience."
                },
                {
                    link: "/website-development",
                    img: expertiseImg2,
                    altText: "expertise img2",
                    title: "Back-end Development",
                    subTitle: "Our web development team builds the robust infrastructure that powers your website, guaranteeing seamless functionality."
                },
                {
                    link: "/mvp-development",
                    img: expertiseImg3,
                    altText: "expertise img3",
                    title: "Custom Web Application",
                    subTitle: "We create tailor-made web solutions, aligning with your unique business needs for unmatched performance."
                },
                {
                    link: "/website-development",
                    img: expertiseImg4,
                    altText: "expertise img4",
                    title: "CMS Solutions",
                    subTitle: "Our web developer integrate user-friendly CMS solutions for effortless content updates and website management."
                },
                {
                    link: "/digital-marketing",
                    img: expertiseImg5,
                    altText: "expertise img5",
                    title: "SEO Optimization",
                    subTitle: "We ensure your website runs flawlessly with regular updates, backups, and optimizations for peak performance."
                },
                {
                    link: "/qa-testing",
                    img: expertiseImg6,
                    altText: "expertise img6",
                    title: "Continuous Support",
                    subTitle: "We ensure your website runs flawlessly with regular updates, backups, and optimizations for peak performance."
                }
            ]
        }
    }
}
</script>

<style scoped></style>