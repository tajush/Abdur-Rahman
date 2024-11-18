<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="pt-28">
        <div class="container max-w-7xl m-auto px-4">
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                class="bg-orange-light border border-orange rounded-[40px] lg:pr-8">
                <header
                    class="-mt-[1px] lg:max-w-[600px] max-w-[250px] mx-auto border border-orange border-t-0 bg-white rounded-tl-none rounded-tr-none rounded-bl-[40px] rounded-br-[40px]">
                    <h2 itemprop="headline" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                        class="title-primary pb-3">Our
                        <span itemprop="text" class="text-green">tech stack</span>
                    </h2>
                </header>

                <div class="grid grid-cols-12 gap-x-5 place-content-center place-items-center pt-16 px-4">
                    <div class="lg:col-span-4 col-span-12">
                        <h2 itemprop="text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                            class="text-lg text-dark-black font-medium font-jost mb-7">Web</h2>
                        <div class="flex flex-wrap max-w-[300px] gap-x-5">
                            <div data-aos="fade-up" :data-aos-delay="web.delay" data-aos-duration="1000"
                                v-for="(web, i) in webs" :key="i"
                                class="flex flex-col justify-center items-center mb-[35px]">
                                <div
                                    class="w-[75px] h-[75px] bg-white rounded-[10px] flex justify-center items-center grayscale hover:grayscale-0 transition-all hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)]">
                                    <img itemprop="image" class="w-[42px] h-[42px]" :src="web.icon" :alt="web.altText">
                                </div>
                                <p itemprop="name" class="text-sm font-poppins text-[#6A797C] text-center mt-2">{{
                                    web.iconTitle }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 col-span-12">
                        <h2 itemprop="text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                            class="text-lg text-dark-black font-medium font-jost mb-7">Mobile</h2>
                        <div class="flex flex-wrap max-w-[300px] gap-x-5">
                            <div data-aos="fade-up" :data-aos-delay="mobile.delay" data-aos-duration="1000"
                                v-for="(mobile, i) in mobiles" :key="i"
                                class="flex flex-col justify-center items-center  mb-[35px]">
                                <div
                                    class="w-[75px] h-[75px] bg-white rounded-[10px] flex justify-center items-center grayscale hover:grayscale-0 transition-all hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)]">
                                    <img itemprop="image" class="w-[42px] h-[42px]" :src="mobile.icon"
                                        :alt="mobile.altText">
                                </div>
                                <p itemprop="name" class="text-sm font-poppins text-[#6A797C] text-center mt-2">{{
                                    mobile.iconTitle }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-4 col-span-12">
                        <h2 itemprop="text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                            class="text-lg text-dark-black font-medium font-jost mb-7">Backend</h2>
                        <div class="flex flex-wrap max-w-[300px] gap-x-5">
                            <div data-aos="fade-up" :data-aos-delay="backend.delay" data-aos-duration="1000"
                                v-for="(backend, i) in backends" :key="i"
                                class="flex flex-col justify-center items-center  mb-[35px]">
                                <div
                                    class="w-[75px] h-[75px] bg-white rounded-[10px] flex justify-center items-center grayscale hover:grayscale-0 transition-all hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)]">
                                    <img itemprop="image" class="w-[42px] h-[42px]" :src="backend.icon"
                                        :alt="backend.altText">
                                </div>
                                <p itemprop="name" class="text-sm font-poppins text-[#6A797C] text-center mt-2">{{
                                    backend.iconTitle }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 col-span-12">
                        <h2 itemprop="text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                            class="text-lg text-dark-black font-medium font-jost mb-7">Database</h2>
                        <div class="flex flex-wrap max-w-[300px] gap-x-5">
                            <div data-aos="fade-up" :data-aos-delay="data.delay" data-aos-duration="1000"
                                v-for="(data, i) in database" :key="i"
                                class="flex flex-col justify-center items-center  mb-[35px]">
                                <div
                                    class="w-[75px] h-[75px] bg-white rounded-[10px] flex justify-center items-center grayscale hover:grayscale-0 transition-all hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)]">
                                    <img itemprop="image" class="w-[42px] h-[42px]" :src="data.icon"
                                        :alt="data.altText">
                                </div>
                                <p itemprop="name" class="text-sm font-poppins text-[#6A797C] text-center mt-2">{{
                                    data.iconTitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center mt-10 pb-16">
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                        src="~assets/img/home/numerous-icon.svg" alt="numerous icon">
                    <h2 itemprop="description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                        class="mt-1 text-2xl text-dark-black font-jost font-medium text-center">And Numerous Other <br>
                        Technologies</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import js from "~/assets/img/technology/js.svg"
import react from "~/assets/img/technology/react.svg"
import angular from "~/assets/img/technology/angular.svg"
import typescript from "~/assets/img/technology/typescript.svg"
import vue from "~/assets/img/technology/vue.svg"
import css from "~/assets/img/technology/css.svg"
import kotlin from "~/assets/img/technology/kotlin.svg"
import swift from "~/assets/img/technology/swift.svg"
import flutter from "~/assets/img/technology/flutter.svg"
import java from "~/assets/img/technology/java.svg"
import golang from "~/assets/img/technology/golang.svg"
import nodejs from "~/assets/img/technology/nodejs.svg"
import php from "~/assets/img/technology/php.svg"
import python from "~/assets/img/technology/python.svg"
import firebase from "~/assets/img/technology/firebase.svg"
import azure from "~/assets/img/technology/azure.svg"
import aws from "~/assets/img/technology/aws.svg"

export default {
    setup() {
        const state = reactive({
            webs: [
                {
                    delay: "100",
                    icon: js,
                    altText: "js",
                    iconTitle: "JavaScript"
                },

                {
                    delay: "200",
                    icon: react,
                    altText: "react",
                    iconTitle: "React"
                },

                {
                    delay: "300",
                    icon: angular,
                    altText: "angular",
                    iconTitle: "Angular JS"
                },

                {
                    delay: "100",
                    icon: typescript,
                    altText: "typescript",
                    iconTitle: "TypeScript"
                },

                {
                    delay: "200",
                    icon: vue,
                    altText: "vuejs",
                    iconTitle: "VueJS"
                },

                {
                    delay: "300",
                    icon: css,
                    altText: "css",
                    iconTitle: "Css"
                },
            ],

            mobiles: [
                {
                    delay: "100",
                    icon: kotlin,
                    altText: "kotlin",
                    iconTitle: "Kotlin"
                },
                {
                    delay: "200",
                    icon: swift,
                    altText: "swift",
                    iconTitle: "Swift"
                },
                {
                    delay: "100",
                    icon: flutter,
                    altText: "flutter",
                    iconTitle: "Flutter"
                }
            ],

            backends: [
                {
                    delay: "100",
                    icon: java,
                    altText: "java",
                    iconTitle: "Java"
                },
                {
                    delay: "200",
                    icon: golang,
                    altText: "golang",
                    iconTitle: "Golang"
                },
                {
                    delay: "300",
                    icon: nodejs,
                    altText: "nodejs",
                    iconTitle: "NodeJS"
                },
                {
                    delay: "100",
                    icon: php,
                    altText: "php",
                    iconTitle: "PHP"
                },
                {
                    delay: "200",
                    icon: python,
                    altText: "python",
                    iconTitle: "Python"
                }
            ],

            database: [
                {
                    delay: "100",
                    icon: firebase,
                    altText: "firebase",
                    iconTitle: "Firebase"
                },
                {
                    delay: "200",
                    icon: azure,
                    altText: "azure",
                    iconTitle: "Azure"
                },
                {
                    delay: "100",
                    icon: aws,
                    altText: "aws",
                    iconTitle: "Amazon"
                }
            ],
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/cases.css";
</style>