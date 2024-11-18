<template>
   <div itemscope itemtype="https://schema.org/WebContent" class="pt-28">
      <div class="container max-w-7xl m-auto px-4">
         <header class="max-w-[750px] mx-auto mb-16">
            <h2
               itemprop="headline"
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-duration="1000"
               class="title-primary mb-4">
               Explore Our
               <span itemprop="text" class="text-green">Latest Cases</span>
            </h2>
         </header>

         <div
            v-for="(item, i) in cases"
            :key="i"
            class="case-list mb-12 last:mb-0">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-0">
               <div
                  itemprop="author"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  :class="`${item.order} border border-white`">
                  <img
                     itemprop="image"
                     class="lg:block hidden"
                     :src="item.img"
                     :alt="item.altImg" />
                  <img
                     itemprop="image"
                     class="lg:hidden block w-full"
                     :src="item.mobileImg"
                     :alt="item.altImg" />
               </div>

               <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  :class="`${item.class} order-1 lg:pt-16 pt-5 pb-16 lg:px-[30px] px-4 cases-card border border-orange hover:border-white`">
                  <div class="mb-7">
                     <h2
                        itemprop="name"
                        class="text-[22px] font-medium text-dark-black leading-[28px] font-jost mb-1 capitalize">
                        {{ item.title }}
                     </h2>
                     <p itemprop="text" class="subtitle-primary text-base">
                        {{ item.subTitle }}
                     </p>
                  </div>

                  <p
                     itemprop="description"
                     class="subtitle-primary text-base leading-6 mb-10">
                     {{ item.article }}
                  </p>

                  <div class="flex gap-x-5">
                     <div
                        v-for="(icon, index) in item.icons"
                        :key="index"
                        class="w-[48px] h-[48px]">
                        <div
                           class="border border-gray-light p-2 rounded-[3px] w-[48px] h-[48px] flex justify-center">
                           <img
                              itemprop="image"
                              class="case-icon"
                              :src="icon.item"
                              :alt="icon.altIcon" />
                        </div>
                        <p
                           itemprop="text"
                           class="text-sm font-poppins text-[#6A797C] text-center mt-2">
                           {{ icon.iconTitle }}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="text-center">
            <NuxtLink to="/case-studies">
               <button
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  class="font-jost">
                  <span class="outline-btn-v2">
                     View all cases
                     <Icon class="ml-1" name="material-symbols:arrow-outward" />
                  </span>
               </button>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import caseImdg1 from "~/assets/img/home/case-img1.png";
import caseImdg2 from "~/assets/img/home/case-img2.png";
import caseImdg3 from "~/assets/img/home/case-img3.png";
import figma from "~/assets/img/home/figma-icon.svg";
import react from "~/assets/img/home/react-icon.svg";
import css from "~/assets/img/home/css-icon.svg";
import flutter from "~/assets/img/home/flutter-icon.svg";
import js from "~/assets/img/home/js-icon.svg";
import django from "~/assets/img/home/django-icon.svg";
import swift from "~/assets/img/home/swift-icon.svg";
import caseMobileImg1 from "~/assets/img/home/case-mobile-img1.png";
import caseMobileImg2 from "~/assets/img/home/case-mobile-img2.png";
import caseMobileImg3 from "~/assets/img/home/case-mobile-img3.png";
import fluxer from "~/assets//img/case-studies/shopify-case.png";

export default {
   setup() {
      const state = reactive({
         cases: [
            {
               fadeRight: "fade-right",
               fadeLeft: "fade-left",
               class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
               order: "order-1",
               img: fluxer,
               altImg: "fluxar",
               mobileImg: caseMobileImg1,
               title: "fluxer . shopify ecommerce development",
               subTitle: "Website • UI/UX & Development",
               article:
                  "THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team.",
               icons: [
                  {
                     item: figma,
                     altIcon: "figma",
                     iconTitle: "Figma",
                  },
                  {
                     item: react,
                     altIcon: "react",
                     iconTitle: "React",
                  },
                  {
                     item: css,
                     altIcon: "css",
                     iconTitle: "Css",
                  },
               ],
            },

            {
               fadeRight: "fade-left",
               fadeLeft: "fade-right",
               class: "lg:border-r-0 border-t-0 lg:border-t-[1px] hover:border-r-0 lg:rounded-tl-3xl lg:rounded-bl-3xl",
               order: "lg:order-2",
               img: caseImdg2,
               altImg: "case img2",
               mobileImg: caseMobileImg2,
               title: "Cabiy Nyc",
               subTitle: "2018 - 2019",
               article:
                  "Cabiy offers a simplified riding experience. Find the perfect car rental or connect with a reliable driver – all from one convenient platform.  Search listings from trusted services like Uber, Lyft, Yellow Cab, Green Cab, Limos & more in your location.",
               icons: [
                  {
                     item: figma,
                     altIcon: "figma",
                     iconTitle: "Figma",
                  },
                  {
                     item: react,
                     altIcon: "react",
                     iconTitle: "React",
                  },
                  {
                     item: flutter,
                     altIcon: "flutter",
                     iconTitle: "Flutter",
                  },
                  {
                     item: js,
                     altIcon: "javascript",
                     iconTitle: "JavaScript",
                  },
               ],
            },

            {
               fadeRight: "fade-right",
               fadeLeft: "fade-left",
               class: "lg:border-l-0 border-t-0 lg:border-t-[1px] hover:border-l-0 lg:rounded-tr-3xl lg:rounded-br-3xl",
               order: "order-1",
               img: caseImdg3,
               altImg: "case img3",
               mobileImg: caseMobileImg3,
               title: "Gewida . quran academy",
               subTitle: "2022 - 2023",
               article:
                  "The platform and its digital field analytics combine our deep knowledge of precision farming and crop production achieved through years of field trials with satellite imagery, machine learning, and millions of hectares of proprietary ground truth data.",
               icons: [
                  {
                     item: figma,
                     altIcon: "figma",
                     iconTitle: "Figma",
                  },
                  {
                     item: react,
                     altIcon: "react",
                     iconTitle: "React",
                  },
                  {
                     item: django,
                     altIcon: "django",
                     iconTitle: "Django",
                  },
                  {
                     item: swift,
                     altIcon: "swift",
                     iconTitle: "Swift",
                  },
               ],
            },
         ],
      });

      return {
         ...toRefs(state),
      };
   },
};
</script>

<style scoped>
@import "../../assets/css/cases.css";
</style>
