<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="name" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" class="title-primary mb-4 ">Take a Look at Some of The Ideas We’ve Helped to Implement. <span itemprop="text"
                        class="text-green">Will Yours Be Next?</span></h2>
            </header>

            <div class="flex lg:flex-row flex-col lg:gap-x-7 gap-x-3 justify-center items-center lg:mb-14 mb-7">
                <div itemprop="text" data-aos="fade-up" :data-aos-delay="chip.delay" data-aos-duration="1000" @click="selectChip(chip.text)"
                    :class="['case-studies-chips cursor-pointer lg:mb-0 mb-4 lg:w-auto w-[200px]', { 'bg-primary-color text-white': selectedChip === chip.text }]"
                    v-for="(chip, i) in chips" :key="i"
                    class="case-studies-chips cursor-pointer lg:mb-0 mb-4 lg:w-auto w-[200px]">
                    {{ chip.text }}
                </div>
            </div>

            <div data-aos="fade-up" :data-aos-delay="item.delay" data-aos-duration="1000" v-for="(item,i) in filteredProjects" :key="i" class="case-list mb-12 last:mb-0">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-0">
                    <div :class="`${item.order} border border-white`">
                        <ImageComponent class="lg:block hidden" :src="item.img" :alt="item.altImg" />
                        <ImageComponent class="lg:hidden block w-full" :src="item.mobileImg" :alt="item.altImg" />
                    </div>

                    <div
                        :class="`${item.class} order-1 lg:pt-16 pt-5 pb-16 lg:px-[30px] px-4 cases-card border border-orange hover:border-white`">
                        <div class="mb-7">
                            <h2 itemprop="name" class="text-[22px] font-medium text-dark-black leading-[28px] font-jost mb-1 capitalize">{{
                                item.title
                                }}</h2>
                            <p itemprop="description" class="subtitle-primary text-base">{{ item.subTitle }}</p>
                        </div>

                        <p itemprop="description" class="subtitle-primary text-base leading-6 mb-10">{{ item.article }}</p>

                        <div class="flex gap-x-5">
                            <div v-for="(icon, index) in item.icons" :key="index" class="w-[48px] h-[48px]">
                                <div
                                    class="border border-gray-light p-2 rounded-[3px] w-[48px] h-[48px] flex justify-center">
                                    <ImageComponent class="case-icon" :src="icon.item" :alt="icon.altIcon" />
                                </div>
                                <p itemprop="text" class="text-sm font-poppins text-[#6A797C] text-center mt-2">{{ icon.iconTitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <img itemprop="image" src="~assets/img/case-studies/case-coming-soon.png" alt="case coming soon img">
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from './ImageComponent.vue'
import fluxer from "~/assets/img/case-studies/shopify-case.png"
import hostack from "~/assets/img/case-studies/hostack-case.png"
import legacy from "~/assets/img/case-studies/legacy-case.png"
import kiddo from "~/assets/img/case-studies/kiddo-case.png"
import dokane from "~/assets/img/case-studies/dokane-case.png"
import hrm from "~/assets/img/case-studies/hrm-case.png"
import galleon from "~/assets/img/case-studies/galleon-case.png"
import foundry9 from "~/assets/img/case-studies/foundry9-case.png"
import journey from "~/assets/img/case-studies/journey-case.png"
import logify from "~/assets/img/case-studies/logify-case.png"
import spectra from "~/assets/img/case-studies/spectra-case.png"
import toads from "~/assets/img/case-studies/toads-case.png"
import gewida from "~/assets/img/case-studies/gewida-case.png"
import figma from "~/assets/img/home/figma-icon.svg"
import react from "~/assets/img/home/react-icon.svg"
import css from "~/assets/img/home/css-icon.svg"
import flutter from "~/assets/img/home/flutter-icon.svg"
import js from "~/assets/img/home/js-icon.svg"
import django from "~/assets/img/home/django-icon.svg"
import swift from "~/assets/img/home/swift-icon.svg"
import caseMobileImg1 from "~/assets/img/home/case-mobile-img1.png"
import caseMobileImg2 from "~/assets/img/home/case-mobile-img2.png"
import caseMobileImg3 from "~/assets/img/home/case-mobile-img3.png"
export default {
    components: {
        ImageComponent
    },
    data() {
        return {
            selectedChip: 'All Projects', 
            chips: [
                {
                    delay: "100",
                    text: "All Projects"
                },
                {
                    delay: "200",
                    text: "Web Application"
                },
                {
                    delay: "300",
                    text: "Mobile Application"
                },
                {
                    delay: "400",
                    text: "Dashboard"
                },
            ],

            projects: [
                {
                    delay: 200,
                    chip: "Web Application",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: fluxer,
                    altImg: "case img1",
                    mobileImg: caseMobileImg1,
                    title: "fluxer . shopify ecommerce development",
                    subTitle: "Website • UI/UX & Development",
                    article: "THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team. ",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: css,
                            altIcon: "css",
                            iconTitle: "Css"
                        },

                    ]
                },

                {
                    delay: 300,
                    chip: "Web Application",
                    fadeRight: "fade-left",
                    fadeLeft: "fade-right",
                    class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
                    order: "lg:order-2",
                    img: hostack,
                    altImg: "case img2",
                    mobileImg: caseMobileImg2,
                    title: "Hostack . Hosting Web Application",
                    subTitle: "Web App • UI/UX & Development",
                    article: "For a client named Legacy Lock, we worked on the Legacy Lock project in April of 2022. For this client, we made a mobile application. This program aids in the production and security of video tales for generations and families, giving you access to a living time vault.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: flutter,
                            altIcon: "flutter",
                            iconTitle: "Flutter"
                        },
                        {
                            item: js,
                            altIcon: "javascript",
                            iconTitle: "JavaScript"
                        },

                    ]
                },

                {
                    delay: 400,
                    chip: "Mobile Application",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: legacy,
                    altImg: "case img3",
                    mobileImg: caseMobileImg3,
                    title: "LegacyLock . Social Story App",
                    subTitle: "Mobile App • UI/UX, Android & Flutter Development",
                    article: "We have developed an “Agent Banking System” for the in-House, a software development company based in New York. Our challenges were-understanding & implementing the banking system, banking calculations, integrating banking staff management and providing  user roles. All were completed successfully with cooperation of the entire team.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: django,
                            altIcon: "django",
                            iconTitle: "Django"
                        },
                        {
                            item: swift,
                            altIcon: "swift",
                            iconTitle: "Swift"
                        },
                    ]
                },

              
                {
                    delay: 300,
                    chip: "Mobile Application",
                    fadeRight: "fade-left",
                    fadeLeft: "fade-right",
                    class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
                    order: "lg:order-2",
                    img: kiddo,
                    altImg: "case img2",
                    mobileImg: caseMobileImg2,
                    title: "Kiddo . Money management app",
                    subTitle: "Mobile App • UI/UX & Development",
                    article: "For a client named Legacy Lock, we worked on the Legacy Lock project in April of 2022. For this client, we made a mobile application. This program aids in the production and security of video tales for generations and families, giving you access to a living time vault.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: flutter,
                            altIcon: "flutter",
                            iconTitle: "Flutter"
                        },
                        {
                            item: js,
                            altIcon: "javascript",
                            iconTitle: "JavaScript"
                        },

                    ]
                },

                {
                    delay: 200,
                    chip: "Dashboard",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: dokane,
                    altImg: "case img1",
                    mobileImg: caseMobileImg1,
                    title: "Dokane. POS Dashboard Application",
                    subTitle: "Dashboard • UI/UX & Development",
                    article: "THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team. ",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: css,
                            altIcon: "css",
                            iconTitle: "Css"
                        },

                    ]
                },


                {
                    delay: 400,
                    chip: "Mobile Application",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
                    order: "lg:order-2",
                    img: hrm,
                    altImg: "case img3",
                    mobileImg: caseMobileImg3,
                    title: "HR Manager . HR Management Mobile App",
                    subTitle: "Mobile App • UI/UX & Development",
                    article: "We have developed an “Agent Banking System” for the in-House, a software development company based in New York. Our challenges were-understanding & implementing the banking system, banking calculations, integrating banking staff management and providing  user roles. All were completed successfully with cooperation of the entire team.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: django,
                            altIcon: "django",
                            iconTitle: "Django"
                        },
                        {
                            item: swift,
                            altIcon: "swift",
                            iconTitle: "Swift"
                        },
                    ]
                },

                {
                    delay: 200,
                    chip: "Web Application",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: galleon,
                    altImg: "case img1",
                    mobileImg: caseMobileImg1,
                    title: "Galleon . Personal Portfolio web design",
                    subTitle: "Website • UI/UX & Development",
                    article: "THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team. ",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: css,
                            altIcon: "css",
                            iconTitle: "Css"
                        },

                    ]
                },

                {
                    delay: 300,
                    chip: "Web Application",
                    fadeRight: "fade-left",
                    fadeLeft: "fade-right",
                    class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
                    order: "lg:order-2",
                    img: foundry9,
                    altImg: "case img2",
                    mobileImg: caseMobileImg2,
                    title: "Foundey9 . Template Design for Industrial Companies",
                    subTitle: "Website • UI/UX & Development",
                    article: "For a client named Legacy Lock, we worked on the Legacy Lock project in April of 2022. For this client, we made a mobile application. This program aids in the production and security of video tales for generations and families, giving you access to a living time vault.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: flutter,
                            altIcon: "flutter",
                            iconTitle: "Flutter"
                        },
                        {
                            item: js,
                            altIcon: "javascript",
                            iconTitle: "JavaScript"
                        },

                    ]
                },

                {
                    delay: 400,
                    chip: "Mobile Application",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: journey,
                    altImg: "case img3",
                    mobileImg: caseMobileImg3,
                    title: "Journey . Hotel Web & Booking Management",
                    subTitle: "Website • UI/UX & Development",
                    article: "We have developed an “Agent Banking System” for the in-House, a software development company based in New York. Our challenges were-understanding & implementing the banking system, banking calculations, integrating banking staff management and providing  user roles. All were completed successfully with cooperation of the entire team.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: django,
                            altIcon: "django",
                            iconTitle: "Django"
                        },
                        {
                            item: swift,
                            altIcon: "swift",
                            iconTitle: "Swift"
                        },
                    ]
                },

                {
                    delay: 300,
                    chip: "Dashboard",
                    fadeRight: "fade-left",
                    fadeLeft: "fade-right",
                    class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
                    order: "lg:order-2",
                    img: logify,
                    altImg: "case img2",
                    mobileImg: caseMobileImg2,
                    title: "Logify . Staff management Dashboard",
                    subTitle: "Dashboard • UI/UX & Development",
                    article: "For a client named Legacy Lock, we worked on the Legacy Lock project in April of 2022. For this client, we made a mobile application. This program aids in the production and security of video tales for generations and families, giving you access to a living time vault.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: flutter,
                            altIcon: "flutter",
                            iconTitle: "Flutter"
                        },
                        {
                            item: js,
                            altIcon: "javascript",
                            iconTitle: "JavaScript"
                        },

                    ]
                },

                {
                    delay: 200,
                    chip: "Web Application",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: spectra,
                    altImg: "case img1",
                    mobileImg: caseMobileImg1,
                    title: "Spectra . Industrial website design & Development",
                    subTitle: "Website • UI/UX & Development",
                    article: "THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team. ",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: css,
                            altIcon: "css",
                            iconTitle: "Css"
                        },

                    ]
                },


                {
                    delay: 400,
                    chip: "Dashboard",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
                    order: "lg:order-2",
                    img: toads,
                    altImg: "case img3",
                    mobileImg: caseMobileImg3,
                    title: "Toads . Garments Clothing Website",
                    subTitle: "Dashboard • UI/UX & Development",
                    article: "We have developed an “Agent Banking System” for the in-House, a software development company based in New York. Our challenges were-understanding & implementing the banking system, banking calculations, integrating banking staff management and providing  user roles. All were completed successfully with cooperation of the entire team.",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: django,
                            altIcon: "django",
                            iconTitle: "Django"
                        },
                        {
                            item: swift,
                            altIcon: "swift",
                            iconTitle: "Swift"
                        },
                    ]
                },

                {
                    delay: 200,
                    chip: "Web Application",
                    fadeRight: "fade-right",
                    fadeLeft: "fade-left",
                    class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
                    order: "order-1",
                    img: gewida,
                    altImg: "case img1",
                    mobileImg: caseMobileImg1,
                    title: "Gewida . quran academy LMS",
                    subTitle: "Website • UI/UX & Development",
                    article: "THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team. ",
                    icons: [
                        {
                            item: figma,
                            altIcon: "figma",
                            iconTitle: "Figma"
                        },
                        {
                            item: react,
                            altIcon: "react",
                            iconTitle: "React"
                        },
                        {
                            item: css,
                            altIcon: "css",
                            iconTitle: "Css"
                        },

                    ]
                },
            ]
        }
    },
    methods: {
           selectChip(chipText) {
             this.selectedChip = chipText;
           }
         },
         computed: {
           filteredProjects() {
             if (this.selectedChip === 'All Projects') {
               return this.projects;
             }
             return this.projects.filter(project => project.chip === this.selectedChip);
           }
         }
}
</script>

<style scoped>
@import "/assets/css/cases.css";
</style>