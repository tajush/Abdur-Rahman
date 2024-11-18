<template>
   <div>
      <div class="flex justify-between items-center">
         <div>
            <NuxtLink to="/">
               <img
                  class="lg:block hidden w-[50%]"
                  src="~assets/img/black-logo.svg"
                  alt="logo" />
            </NuxtLink>
            <NuxtLink to="/">
               <img
                  class="lg:hidden block w-[50%]"
                  src="~assets/img/black-logo.svg"
                  alt="logo mobile" />
            </NuxtLink>
         </div>

         <ul
            class="list-none lg:flex hidden items-center gap-x-5 font-poppins text-base">
            <li class="px-2">
               <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="hoverable px-2">
               <NuxtLink class="flex" to="/services"
                  >Services
                  <Icon
                     class="text-xl ml-2"
                     name="mdi:chevron-down"
                     color="black" />
               </NuxtLink>
               <div class="p-3 max-w-7xl mega-menu mb-16">
                  <div>
                     <div class="grid grid-cols-12 gap-x-4">
                        <div class="col-span-3">
                           <img
                              src="~assets/img/mega-menu-img.png"
                              alt="mega menu img" />
                        </div>

                        <div class="col-span-4 mt-10">
                           <h2
                              class="py-2 text-lg leading-7 text-dark-black font-medium font-jost border-b border-gray-light inline-block">
                              Offshore Service Approach.
                           </h2>
                           <div class="mt-4">
                              <div
                                 v-for="(offshore, i) in offshoreServies"
                                 :key="i"
                                 class="bg-white hover:bg-orange-light mb-7 last:mb-0 p-4">
                                 <NuxtLink :to="offshore.link">
                                    <img
                                       :src="offshore.icon"
                                       :alt="offshore.altText" />
                                    <h4
                                       class="text-dark-black text-base font-medium font-jost mt-2">
                                       {{ offshore.title }}
                                    </h4>
                                    <p class="text-gray text-sm font-poppins">
                                       {{ offshore.subTitle }}
                                    </p>
                                 </NuxtLink>
                              </div>
                           </div>
                        </div>

                        <div class="col-span-4 mt-10">
                           <h2
                              class="py-2 text-lg leading-7 text-dark-black font-medium font-jost border-b border-gray-light inline-block">
                              Expanded Solutions.
                           </h2>
                           <div class="mt-4">
                              <div
                                 v-for="(item, i) in extendServices"
                                 :key="i"
                                 class="bg-white hover:bg-orange-light last:mb-0 p-4">
                                 <div class="flex gap-x-3">
                                    <img :src="item.icon" :alt="item.altText" />
                                    <NuxtLink :to="item.link">
                                       <h4
                                          class="text-dark-black text-base font-medium font-jost mt-2">
                                          {{ item.title }}
                                       </h4>
                                    </NuxtLink>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </li>
            <li class="px-2">
               <NuxtLink to="/about-us">About Us </NuxtLink>
            </li>
            <li class="px-2">
               <NuxtLink to="/blog">Blogs</NuxtLink>
            </li>
            <li class="px-2">
               <NuxtLink to="/career">Career</NuxtLink>
            </li>
            <li class="px-2">
               <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
         </ul>

         <div>
            <a class="lg:block hidden" href="/hire-developer">
               <button class="secondary-btn-v2 font-jost lg:block hidden">
                  <span
                     >Hire a developer
                     <Icon class="ml-1" name="material-symbols:arrow-outward"
                  /></span>
               </button>
            </a>
            <img
               @click="toggleMenu"
               class="lg:hidden block"
               src="~assets/img/hamburger-icon.svg"
               alt="" />
         </div>
         <div
            :class="[
               'fixed top-0 right-0 bg-orange-light text-white w-96 z-50 h-full transition-all duration-500 ease-in-out',
               { 'translate-x-full': !menuOpen, 'translate-x-0': menuOpen },
            ]">
            <div
               class="mb-4 px-4 py-3 bg-white flex items-center justify-between">
               <img
                  class="w-[40%]"
                  src="~assets/img/black-logo.svg"
                  alt="logo mobile" />
               <button
                  @click="toggleMenu"
                  class="w-10 h-10 rounded-full grid place-content-center ml-auto text-[#480F07]">
                  <Icon
                     class="ml-1 text-3xl"
                     name="material-symbols:close-rounded" />
               </button>
            </div>
            <div class="px-6">
               <div
                  v-for="(path, index) in paths"
                  :key="index"
                  class="py-2.5 text-base text-dark-black font-jost leading-6 block transition-transform duration-500 ease-in-out link font-medium"
                  :class="{
                     'translate-x-full': !menuOpen,
                     'translate-x-0': menuOpen,
                  }">
                  <template v-if="path.link">
                     <a :href="path.link">{{ path.name }}</a>
                  </template>
                  <template v-else>
                     <div
                        @click="toggleDropdown(path.dropname)"
                        class="flex justify-between cursor-pointer">
                        <div>{{ path.dropname }}</div>
                        <div
                           :class="
                              dropdowns[path.dropname] ? 'rotate-180' : ''
                           ">
                           <Icon class="ml-1" name="ion:chevron-down-outline" />
                        </div>
                     </div>
                     <div v-if="dropdowns[path.dropname]" class="pl-4">
                        <a
                           v-for="subpath in path.subpaths"
                           :key="subpath.name"
                           :href="subpath.link"
                           class="block py-2 text-base text-dark-black font-jost leading-6 font-medium">
                           {{ subpath.name }}
                        </a>
                     </div>
                  </template>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import aiIcon from "~/assets/img/mega-menu/ai-icon.svg";
import allServiceIcon from "~/assets/img/mega-menu/all-service-icon.svg";
import devopsIcon from "~/assets/img/mega-menu/devops-icon.svg";
import ecommereIcon from "~/assets/img/mega-menu/ecommerce-icon.svg";
import marketingIcon from "~/assets/img/mega-menu/marketing-icon.svg";
import mobileIcon from "~/assets/img/mega-menu/mobile-icon.svg";
import mvpIcon from "~/assets/img/mega-menu/mvp-icon.svg";
import qaIcon from "~/assets/img/mega-menu/qa-icon.svg";
import uiIcon from "~/assets/img/mega-menu/ui-icon.svg";
import websiteIcon from "~/assets/img/mega-menu/website-icon.svg";
import outSourceIcon from "/assets/img/mega-menu/outsource-icon.svg";
import staffArgumentIcon from "/assets/img/mega-menu/staff-argument-icon.svg";
import teamIcon from "/assets/img/mega-menu/team-icon.svg";

export default {
   setup() {
      const state = reactive({
         menus: [
            {
               name: "Home",
               link: "/",
            },
            {
               name: "Services",
               link: "/services",
            },
            {
               name: "Case Studies",
               link: "/case-studies",
            },
            {
               name: "Our Story",
               link: "/services",
            },
            {
               name: "Career",
               link: "/services",
            },
            {
               name: "Blog",
               link: "/services",
            },
         ],
         menuOpen: false,
         dropdowns: {},
         paths: [
            { name: "Home", link: "/" },
            {
               dropname: "Services",
               subpaths: [
                  {
                     name: "Staff Augmentation",
                     link: "/services/staff-augmentation",
                  },
                  {
                     name: "Software Outsourcing",
                     link: "/services/software-outsourcing",
                  },
                  {
                     name: "Dedicated Teams",
                     link: "/services/dedicated-teams",
                  },
               ],
            },
            {
               dropname: "Extended Services",
               subpaths: [
                  { name: "Website Development", link: "/website-development" },
                  {
                     name: "Mobile App Development",
                     link: "/mobile-app-development",
                  },
                  { name: "Devops Solution", link: "/devops-solution" },
                  { name: "AI & ML Development", link: "/ai-ml-development" },
                  { name: "MVP Development", link: "/mvp-devlopment" },
                  { name: "UI/UX Design", link: "/ui-ux-design" },
                  { name: "Digital Marketing", link: "/digital-marketing" },
                  { name: "QA & Testing", link: "/qa-testing" },
                  { name: "eCommerce Solution", link: "/ecommerce" },
                  { name: "ALl Services", link: "/services" },
               ],
            },
            { name: "About Us", link: "/about-us" },
            { name: "Our Team", link: "/our-team" },
            { name: "Career", link: "/career" },
            { name: "Contact", link: "/Contact" },
         ],
         offshoreServies: [
            {
               link: "/services/staff-augmentation",
               icon: staffArgumentIcon,
               altText: "staff argument icon",
               title: "Staff Augmentation",
               subTitle: "Our software developers in your team.",
            },
            {
               link: "/services/software-outsourcing",
               icon: outSourceIcon,
               altText: "outsource icon",
               title: "Software Outsourcing",
               subTitle: "Our PM and software teams building for you.",
            },
            {
               link: "/services/dedicated-teams",
               icon: teamIcon,
               altText: "team icon",
               title: "Dedicated Teams",
               subTitle: "Our software teams in your organization.",
            },
         ],
         extendServices: [
            {
               icon: websiteIcon,
               title: "Website Development",
               link: "/website-development",
            },
            {
               icon: mobileIcon,
               title: "Mobile App Development",
               link: "/mobile-app-development",
            },
            {
               icon: devopsIcon,
               title: "DevOps Solution",
               link: "/devops-solution",
            },
            {
               icon: aiIcon,
               title: "AI & ML Development",
               link: "/ai-ml-development",
            },
            {
               icon: mvpIcon,
               title: "MVP Development",
               link: "/mvp-development",
            },
            {
               icon: uiIcon,
               title: "UI/UX Design",
               link: "/ui-ux-design",
            },
            {
               icon: marketingIcon,
               title: "Digital Marketing",
               link: "/digital-marketing",
            },
            {
               icon: qaIcon,
               title: "QA & Testing",
               link: "/qa-testing",
            },
            {
               icon: ecommereIcon,
               title: "eCommerce Solution",
               link: "/ecommerce",
            },
            {
               icon: allServiceIcon,
               title: "All Services",
               link: "/services",
            },
         ],
      });

      const toggleMenu = () => {
         state.menuOpen = !state.menuOpen;
      };

      const toggleDropdown = (name) => {
         state.dropdowns[name] = !state.dropdowns[name];
      };

      return {
         ...toRefs(state),
         toggleMenu,
         toggleDropdown,
      };
   },
};
</script>

<style scoped>
.router-link-exact-active {
   color: #f8523b !important;
   font-weight: 600 !important;
}
</style>
