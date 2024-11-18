<template>
   <div>
      <div class="grid grid-cols-12 lg:px-0">
         <div
            class="lg:col-span-6 col-span-12 bg-orange-light lg:py-[100px] py-[60px] lg:px-10 px-4">
            <div class="max-w-[1000px] mx-auto">
               <div class="lg:mb-20 mb-10">
                  <NuxtLink to="/">
                     <img
                        class="lg:block hidden"
                        src="~assets/img/black-logo.svg"
                        alt="logo" />
                  </NuxtLink>
                  <NuxtLink to="/">
                     <img
                        class="lg:hidden block"
                        src="~assets/img/black-logo.svg"
                        alt="logo mobile" />
                  </NuxtLink>
               </div>
               <header class="mb-10">
                  <h2
                     class="text-2xl text-dark-black font-jost font-medium mb-2.5">
                     Welcome to -
                     <span class="text-green">Level Up Your Brand</span>
                  </h2>
                  <p class="text-base font-poppins text-gray">
                     Tell us about your business so we can tailor the best
                     engineers to meet your needs
                  </p>
               </header>

               <form>
                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                        >Full name <span class="text-red-600">*</span></label
                     >
                     <input
                        class="w-full p-[14px] text-sm border border-orange focus:border-primary-color rounded-md bg-transparent outline-none"
                        type="text"
                        placeholder="Full name" />
                  </div>

                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5">
                        Email <span class="text-red-600">*</span></label
                     >
                     <input
                        class="w-full p-[14px] text-sm border border-orange focus:border-primary-color rounded-md bg-transparent outline-none"
                        type="email"
                        placeholder="you@example.com" />
                  </div>

                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5">
                        Phone</label
                     >
                     <input
                        class="w-full p-[14px] text-sm border border-orange focus:border-primary-color rounded-md bg-transparent outline-none"
                        type="email"
                        placeholder="Phone" />
                  </div>

                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                        for="name"
                        >Estimated project duration?</label
                     >
                     <select
                        class="w-full p-[14px] text-sm text-[#6A797C] border border-orange focus:border-primary-color rounded-md bg-transparent outline-none"
                        type="text"
                        name="select"
                        id="">
                        <option class="text-sm" value="Select your range">
                           Select your range
                        </option>

                        <option value="$5K - $10K">2-3 months</option>
                        <option
                           value=" 

                $20K $50K">
                           4-5 months
                        </option>
                        <option
                           value=" 
 
                $50K - $100K">
                           6-7 months
                        </option>
                     </select>
                  </div>

                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                        for="name"
                        >Project budget range?</label
                     >
                     <select
                        class="w-full p-[14px] text-sm text-[#6A797C] border border-orange focus:border-primary-color rounded-md bg-transparent outline-none"
                        type="text"
                        name="select"
                        id="">
                        <option class="text-sm" value="Select your range">
                           Select your range
                        </option>

                        <option value="$5K - $10K">$5K - $10K</option>
                        <option
                           value=" 

                $20K $50K">
                           $20K $50K
                        </option>
                        <option
                           value=" 
 
                $50K - $100K">
                           $50K - $100K
                        </option>
                        <option
                           value=" 
 
                $100k and up">
                           $100k and up
                        </option>
                     </select>
                  </div>

                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                        for="messages"
                        >Brief about the project
                        <span class="text-red-600">*</span></label
                     >
                     <textarea
                        class="w-full border border-orange focus:border-primary-color rounded-md outline-none p-[14px] bg-transparent text-sm"
                        cols="30"
                        rows="7"
                        placeholder="Please brief your project requirements"></textarea>
                  </div>
                  <div>
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                        >File upload (PDF, DOC, XXL, PNG, JPEG)
                     </label>

                     <input
                        class="w-full p-[12px] border text-sm text-[#6A797C] border-orange focus:border-primary-color rounded-md cursor-pointer"
                        type="file"
                        placeholder="Company name" />
                  </div>
               </form>

               <div class="lg:mt-[60px] mt-10">
                  <div
                     class="text-center py-[18px] px-[17px] bg-primary-color border border-primary-color hover:bg-transparent text-white hover:text-black transition-all rounded-lg cursor-pointer font-jost">
                     <button class="text-lg">Submit</button>
                  </div>
               </div>
            </div>
         </div>

         <div
            class="lg:col-span-6 col-span-12 bg-[#FFE5E1] lg:px-[40px] px-4 lg:py-[100px] py-[60px]">
            <!-- <div>
                    <h4 class="text-center font-jost lg:text-[32px] text-2xl text-primary-color lg:mb-10 mb-7">Dream big,
                        <span class="text-gray">start small, but <br> most importantly,</span> start.
                    </h4>
                    <img class="lg:mb-14 mb-7" src="~assets/img/get-estimate/get-estimate-img.svg" alt="get estimate img">
                </div>
                <h5 class="text-2xl font-medium text-dark-black mb-10">Trusted by 30+ <br><span
                        class="text-primary-color">Business Owners</span></h5>
                <div class="flex justify-between">
                    <img src="~assets/img/get-estimate/best-app.svg" alt="best app img">
                    <img src="~assets/img/get-estimate//top-software.svg" alt="top software img">
                </div> -->
            <h2 class="text-2xl text-dark-black font-jost font-medium mb-2.5">
               Our <span class="text-primary-color">Valuable Clients</span>
            </h2>
            <div
               class="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-7 gap-x-3 mt-7">
               <div
                  v-for="(team, i) in teams"
                  :key="i"
                  class="mb-7 max-w-[240px] h-[100px] flex justify-center items-center border border-orange bg-white hover:bg-orange-light shadow-md grayscale hover:grayscale-0 hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all rounded-[10px] px-10 py-5">
                  <ImageComponent :src="team.img" :alt="team.altText" />
               </div>
            </div>

            <div
               class="bg-white shadow-[0_6px_10px_rgba(255,183,183,0.60)] px-7 pb-5 rounded-[10px] lg:mb-20 mb-10 hire-testimonial">
               <swiper
                  :loop="true"
                  :slides-per-view="1"
                  :spaceBetween="30"
                  :pagination="{
                     clickable: true,
                  }"
                  :modules="modules"
                  class="mySwiper testimonial">
                  <swiper-slide v-for="(slider, i) in sliders" :key="i">
                     <div>
                        <ImageComponent
                           class="max-w-[100px] min-h-[100px] mb-3"
                           :src="slider.img"
                           :alt="slider.altText" />
                        <p
                           class="lg:text-[28px] text-2xl leading-10 text-dark-black font-jost mb-8">
                           {{ slider.description }}
                        </p>

                        <div>
                           <h2 class="text-base font-poppins text-dark-black">
                              {{ slider.name }}
                           </h2>
                           <p class="text-sm text-gray font-poppins mt-1">
                              {{ slider.designation }}
                           </p>
                        </div>
                     </div>
                  </swiper-slide>
               </swiper>
            </div>

            <h5 class="text-2xl font-medium text-dark-black mb-10">
               Trusted by 30+ <br /><span class="text-primary-color"
                  >Business Owners</span
               >
            </h5>
            <div class="flex justify-between">
               <img
                  src="~assets/img/get-estimate/best-app.svg"
                  alt="best app img" />
               <img
                  src="~assets/img/get-estimate//top-software.svg"
                  alt="top software img" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ImageComponent from "../ImageComponent.vue";
import legacyLock from "/assets/img/amazing-teams/legacy-lock.svg";
import linkit from "/assets/img/amazing-teams/linkit.svg";
import pactfi from "/assets/img/amazing-teams/pactfi.svg";
import pointpal from "/assets/img/amazing-teams/pointpal.svg";
import smartProperty from "/assets/img/amazing-teams/smart-property.svg";
import toads from "/assets/img/amazing-teams/toads.svg";
import testimonialImg1 from "/assets/img/dedicated-team/team-bottom-left.svg";
definePageMeta({
   layout: "empty",
});
export default {
   components: {
      ImageComponent,
      Swiper,
      SwiperSlide,
   },
   data() {
      return {
         teams: [
            {
               width: "140",
               height: "40",
               img: pointpal,
               altText: "pointpal",
            },
            {
               width: "77",
               height: "40",
               img: smartProperty,
               altText: "smart property",
            },
            {
               width: "140",
               height: "34",
               img: linkit,
               altText: "linkit",
            },
            {
               width: "140",
               height: "40",
               img: pactfi,
               altText: "pactfi",
            },
            {
               width: "182",
               height: "42",
               img: legacyLock,
               altText: "legacy lock",
            },
            {
               width: "182",
               height: "42",
               img: toads,
               altText: "legacy lock",
            },
         ],
         modules: [Pagination],
         sliders: [
            {
               img: testimonialImg1,
               altText: "testimonial img1",
               description:
                  "“I really enjoy working with ReformedTech: the trust and how considerate you’ve been throughout the project. I’m really grateful!”",
               name: "— Renee Wells",
               designation: "Product Manager, PactFI",
            },
            {
               img: testimonialImg1,
               altText: "testimonial img2",
               description:
                  "“I really enjoy working with ReformedTech: the trust and how considerate you’ve been throughout the project. I’m really grateful!”",
               name: "— Renee Wells",
               designation: "Product Manager, PactFI",
            },
            {
               img: testimonialImg1,
               altText: "testimonial img3",
               description:
                  "“I really enjoy working with ReformedTech: the trust and how considerate you’ve been throughout the project. I’m really grateful!”",
               name: "— Renee Wells",
               designation: "Product Manager, PactFI",
            },
         ],
      };
   },
};
</script>

<style scoped>
input[type="file"]::file-selector-button {
   border: 1px solid #ff725e;
   background-color: transparent;
   border-radius: 4px;
}
</style>
