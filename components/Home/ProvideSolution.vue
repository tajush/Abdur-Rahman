<template>
    <div itemscope itemtype="https://schema.org/Service" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[770px] mx-auto mb-16">
                <h2 itemprop="name" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                    class="title-primary mb-4 px-10">We <span class="text-green">solve</span> your Business Development <span class="text-green">challenges</span></h2>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-7">
                <div data-aos="fade-up" :data-aos-delay="solution.delay" data-aos-duration="1000"
                    class="provide-solution-card bg-orange-light mb-10" v-for="(solution, i) in solutions" :key="i">
                    <img class="mb-10" :src="solution.icon" :alt="solution.iconAltText">
                    <div>
                        <NuxtLink itemprop="url" :to="solution.link">
                            <h2 itemprop="serviceType" class="text-[22px] text-dark-black font-medium font-jost mb-3.5">
                                {{ solution.title }}</h2>
                        </NuxtLink>
                        <p itemprop="description" class="text-base text-gray font-poppins mb-7 max-w-[320px]">{{
                            solution.subTitle }}</p>

                        <div v-for="(item, index) in solution.lists" :key="index" class="flex items-baseline mb-2.5">
                            <img itemprop="image" class="mr-2" src="~assets/img/home/check-mark.svg" alt="check mark">
                            <p itemprop="description" class="text-base text-gray font-poppins">
                                {{ item.list }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import provideSolution1 from "~/assets/img/home/provide-solution-icon1.svg"
import provideSolution2 from "~/assets/img/home/provide-solution-icon2.svg"
import provideSolution3 from "~/assets/img/home/provide-solution-icon3.svg"
import provideSolution4 from "~/assets/img/home/provide-solution-icon4.svg"
import provideSolution5 from "~/assets/img/home/provide-solution-icon5.svg"


export default {
    setup() {
        const state = reactive({
            solutions: [
                {
                    link: "/website-development",
                    delay: "100",
                    icon: provideSolution1,
                    iconAltText: "provide solution icon1",
                    title: "Custom Software Development",
                    subTitle: "We create custom software that blends elegant front-end design with robust back-end technology.",
                    lists: [
                        {
                            list: "Custom Software Development",
                        },
                        {
                            list: "Enterprise Software Development",
                        },
                        {
                            list: "Software Product Development",
                        },
                        {
                            list: "Software Integration Services",
                        },
                        {
                            list: "API Development",
                        },
                        {
                            list: "SaaS Development",
                        }

                    ]
                },

                {
                    link: "/ai-ml-development",
                    delay: "200",
                    icon: provideSolution2,
                    iconAltText: "provide solution icon2",
                    title: "AI & ML Development",
                    subTitle: "Drive innovation with powerful AI and machine learning solutions tailored to your business needs. Our predictive systems analyze patterns, automate decisions, and deliver actionable insights that drive growth and efficiency.",
                    lists: [
                        {
                            list: "AI Model Development",
                        },
                        {
                            list: "Machine Learning Algorithm Design",
                        },
                        {
                            list: "Computer Vision Systems",
                        },
                        {
                            list: "Predictive Analytics",
                        },
                        {
                            list: "AI-Powered Chatbots",
                        },
                        {
                            list: "Data Preprocessing and Cleaning",
                        }
                    ]
                },

                {
                    link: "/ui-ux-design",
                    delay: "300",
                    icon: provideSolution3,
                    iconAltText: "provide solution icon3",
                    title: "UI/UX Design",
                    subTitle: "Develop efficient, scalable, and secure mobile apps for iOS and Android devices.",
                    lists: [
                        {
                            list: "User Research and Analysis",
                        },
                        {
                            list: "Custom User Experience Design",
                        },
                        {
                            list: "UI/UX design services",
                        },
                        {
                            list: "Wireframing and Interactive Prototyping",
                        },
                        {
                            list: "Web and Mobile App UX/UI Design",
                        }
                    ]
                },

                {
                    link: "/qa-testing",
                    delay: "100",
                    icon: provideSolution4,
                    iconAltText: "provide solution icon4",
                    title: "Software Quality Assurance",
                    subTitle: "Build high-performance mobile apps and website application development with SQA software quality assurance.",
                    lists: [
                        {
                            list: "Manual Testing",
                        },
                        {
                            list: "Automation Testing",
                        },
                        {
                            list: "Regression Testing",
                        },
                        {
                            list: "API Testing",
                        },
                        {
                            list: "Web and Mobile QA",
                        },
                        {
                            list: "Performance Testing",
                        },
                        {
                            list: "Security Testing",
                        }
                    ]
                },

                {
                    link: "/mobile-app-development",
                    delay: "200",
                    icon: provideSolution5,
                    iconAltText: "provide solution icon5",
                    title: "Mobile App Development",
                    subTitle: "Develop efficient, scalable, and secure custom mobile app development for iOS and Android devices.",
                    lists: [
                        {
                            list: "Native Mobile App Development Service",
                        },
                        {
                            list: "Cross-Platform App Development",
                        },
                        {
                            list: "iOS App Development",
                        },
                        {
                            list: "Android App Development",
                        }
                    ]
                },
                {
                    link: "/digital-marketing",
                    delay: "300",
                    icon: provideSolution1,
                    iconAltText: "provide solution icon1",
                    title: "Digital Marketing",
                    subTitle: "Unlock the potential of Digital Marketing to amplify your brand and fuel business growth.",
                    lists: [
                        {
                            list: "Search Engine Optimization (SEO)",
                        },
                        {
                            list: "Content Marketing",
                        },
                        {
                            list: "Social Media Marketing",
                        },
                        {
                            list: "Email Marketing",
                        },
                        {
                            list: "Influencer Marketing",
                        },
                        {
                            list: "Analytics and Reporting",
                        }
                    ]
                },
            ]
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/provideSolution.css";
</style>