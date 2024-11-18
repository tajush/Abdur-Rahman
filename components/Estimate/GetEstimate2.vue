<template>
   <div>
      <div class="grid grid-cols-12 lg:px-0">
         <div
            class="lg:col-span-8 col-span-12 bg-orange-light lg:py-[100px] py-[60px] px-4">
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
                     Welcome to - Level Up Your Brand
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
                        >Full name</label
                     >
                     <input
                        class="w-full p-[14px] text-sm border border-orange rounded-md bg-transparent outline-none"
                        type="text"
                        placeholder="Full name" />
                  </div>

                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                        >Full Email</label
                     >
                     <input
                        class="w-full p-[14px] text-sm border border-orange rounded-md bg-transparent outline-none"
                        type="text"
                        placeholder="you@example.com" />
                  </div>

                  <div class="mb-6">
                     <label
                        class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                        >Full Company Name</label
                     >
                     <input
                        class="w-full p-[14px] text-sm border border-orange rounded-md bg-transparent outline-none"
                        type="text"
                        placeholder="Company Name" />
                  </div>
               </form>

               <div class="lg:mt-[75px] mt-10">
                  <div
                     class="text-center py-[18px] px-[17px] bg-primary-color rounded-lg cursor-pointer font-jost">
                     <button class="text-white">Submit</button>
                  </div>

                  <div
                     class="text-center py-[18px] px-[17px] lg:mt-[32px] mt-6 font-jost">
                     <button class="text-black font-jost">Back</button>
                  </div>
               </div>
            </div>
         </div>

         <div
            class="lg:col-span-4 col-span-12 bg-[#FFE5E1] lg:px-[60px] px-4 lg:py-[150px] py-[60px]">
            <div>
               <h4
                  class="text-center font-jost lg:text-[32px] text-2xl text-primary-color lg:mb-10 mb-7">
                  Dream big,
                  <span class="text-gray"
                     >start small, but <br />
                     most importantly,</span
                  >
                  start.
               </h4>
               <img
                  class="lg:mb-14 mb-7"
                  src="~assets/img/get-estimate/get-estimate-img.svg"
                  alt="get estimate img" />
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

<script setup>
definePageMeta({
   layout: "empty",
});
</script>

<style scoped>
input[type="file"]::file-selector-button {
   border: 1px solid #ff725e;
   background-color: transparent;
   border-radius: 4px;
}
</style>
