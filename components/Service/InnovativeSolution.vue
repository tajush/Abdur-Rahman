<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4"><span class="text-green">Innovative Solutions</span> for Software Development and Design Excellence</h2>
            </header>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-20">
                <div class="mb-5" v-for="(solution, i) in solutions" :key="i">
                    <ImageComponent itemprop="image" class="w-[48px] h-[48px]" :src="solution.icon" :alt="solution.altIcon" />
                    <h4 class="text-dark-black lg:text-[32px] text-2xl leading-[22px] font-jost mt-7 mb-4">{{
                        solution.title
                        }}</h4>
                    <p itemprop="description" class="text-base font-poppins text-gray lg:mb-10 mb-7">{{ solution.subTitle }}</p>
                    <div class="solution-content">
                        <ImageComponent itemprop="image" class="solution-content-img w-full rounded-[20px] " :src="solution.img"
                            :alt="solution.altImg" />
                        <div class="img-overlay"></div>
                        <div class="solution-content-btn">
                            <NuxtLink itemprop="url" class="text-sm " :to="solution.link">
                                <button class="secondary-btn py-3 px-14 font-jost lg:w-auto w-full hover:text-white">
                                    <span itemprop="text">Explore
                                        <Icon class="ml-1" name="material-symbols:arrow-outward" />
                                    </span>
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-x-5 lg:mt-11 mt-7">
                        <div itemprop="text" v-for="(chip, index) in solution.chips" :key="index" class="chips mb-4">{{ chip }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import webDevelopment from '/assets/img/service/web-development.png'
import mobileDevelopment from '/assets/img/service/mobile-development.png'
import mvpDevelopment from '/assets/img/service/mvp-development.png'
import uiDevelopment from '/assets/img/service/ui-development.png'
import devopsDevelopment from '/assets/img/service/devops-development.png'
import qaDevelopment from '/assets/img/service/qa-development.png'
import aiDevelopment from '/assets/img/service/ai-development.png'
import itDevelopment from '/assets/img/service/it-development.png'
import ecommerceDevelopment from '/assets/img/service/ecommerce-development.png'
import digitalDevelopment from '/assets/img/service/digital-development.png'
import websiteIcon from "~/assets/img/mega-menu/website-icon.svg"
import mobileIcon from "~/assets/img/mega-menu/mobile-icon.svg"
import devopsIcon from "~/assets/img/mega-menu/devops-icon.svg"
import uiIcon from "~/assets/img/mega-menu/ui-icon.svg"
import qaIcon from "~/assets/img/mega-menu/qa-icon.svg"
import marketingIcon from "~/assets/img/mega-menu/marketing-icon.svg"
import mvpIcon from "~/assets/img/mega-menu/mvp-icon.svg"
import ecommereIcon from "~/assets/img/mega-menu/ecommerce-icon.svg"
import aiIcon from "~/assets/img/mega-menu/ai-icon.svg"
import itIcon from "~/assets/img/mega-menu/it-icon.svg"

export default {
    components: {
        ImageComponent
    },
    data() {
        return {
            solutions: [
                {
                    link: "/website-development",
                    icon: websiteIcon,
                    altIcon: "web icon",
                    title: "Web Development",
                    subTitle: "High-performing websites that engage and impress with our custom design. We also help to grow your business in the large scale.",
                    img: webDevelopment,
                    altImg: "web development",
                    chips: ["eCommerce Sites", "SME Platforms", "CMS Sites", "Skip recruitment delays", "Top 1% of talent", "Create healthy teams"]
                },
                {
                    link: "/mobile-app-development",
                    icon: mobileIcon,
                    altIcon: "mobile icon",
                    title: "Mobile App Development",
                    subTitle: "Global Developer Provider for Cross-Border IT and Engineering Organizations in Europe and America.",
                    img: mobileDevelopment,
                    altImg: "mobile development",
                    chips: [ "Audience Research", "Market Analysis", "Flutter Development", "Andriod & iOS Development"]
                },
                {
                    link: "/ecommerce",
                    icon: ecommereIcon,
                    altIcon: "mvp icon",
                    title: "eCommerce Solution",
                    subTitle: "Unleash Your Business Potential with Our Express MVP Development Services",
                    img: ecommerceDevelopment,
                    altImg: "mvp development",
                    chips: ["Sale", "New Arrivals", "Best Sellers", "Trending", "Pre-Order"]
                },
                {
                    link: "/ui-ux-design",
                    icon: uiIcon,
                    altIcon: "uiux icon",
                    title: "UI/UX Design",
                    subTitle: "We are Global Developer Provider for Cross-Border IT and Engineering Organizations in Europe and America.",
                    img: uiDevelopment,
                    altImg: "ui development",
                    chips: ["User Research ", "UI and Interaction Design", "Wireframing", "Interactive Prototyping", "MVP", "Mockup UI"]
                },
                {
                    link: "/devops-solution",
                    icon: devopsIcon,
                    altIcon: "devops icon",
                    title: "DevOps Solution",
                    subTitle: "Explore Our High-performing websites that engage and impress with our custom design.",
                    img: devopsDevelopment,
                    altImg: "devops development",
                    chips: ["Dedicated developer teams", "Engineers outsourcing", "Devops", "Skip recruitment delays", "Top 1% of talent", "Create healthy teams"]
                },
                {
                    link: "/ai-ml-development",
                    icon: aiIcon,
                    altIcon: "qa icon",
                    title: "AI & ML Development",
                    subTitle: "Cutting-Edge AI and ML development tailored to transform and elevate your business",
                    img: aiDevelopment,
                    altImg: "qa development",
                    chips: ["Manual Testing", "Automation Testing", "Regression Testing", "API Testing", "Security Testing"]
                },
                {
                    link: "/digital-marketing",
                    icon: marketingIcon,
                    altIcon: "qa icon",
                    title: "Digital Marketing",
                    subTitle: "Innovative digital marketing strategies to elevate your brand",
                    img: digitalDevelopment,
                    altImg: "qa development",
                    chips: ["Manual Testing", "Automation Testing", "Regression Testing", "Web and Mobile QA", "API Testing", "Security Testing"]
                },
                {
                    link: "/qa-testing",
                    icon: qaIcon,
                    altIcon: "qa icon",
                    title: "QA & Testing",
                    subTitle: "Reliable QA hosting solutions to ensure quality and performance",
                    img: qaDevelopment,
                    altImg: "qa development",
                    chips: ["Manual Testing", "Automation Testing", "Regression Testing", "Web and Mobile QA", "API Testing", "Security Testing"]
                },
                {
                    link: "/mvp-development",
                    icon: mvpIcon,
                    altIcon: "qa icon",
                    title: "MVP Development",
                    subTitle: "Accelerate Your Success with Our Express MVP Development Services",
                    img: mvpDevelopment,
                    altImg: "qa development",
                    chips: ["Minimum Viable Product", "MVP Prototyping", "MVP Services", "MVP Development Team", "User-Centric MVP", "Security Testing"]
                },
                {
                    link: "/hire-developer",
                    icon: itIcon,
                    altIcon: "qa icon",
                    title: "IT Consulting & Support",
                    subTitle: "Empower Your Business with Our IT Consulting & Support Services",
                    img: itDevelopment,
                    altImg: "qa development",
                    chips: ["Manual Testing", "Network Design", "System Integration", "Managed IT Services", "Technical Support", "IT Services"]
                }
            ]
        }
    }
}
</script>

<style scoped>
@import "/assets/css/innovative-solution.css"
</style>