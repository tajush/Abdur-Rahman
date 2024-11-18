<template>
   <div class="lg:mt-[30px]">
      <div class="p-4 bg-orange-light lg:hidden block">
         <MenuLinks />
      </div>
      <div class="container max-w-7xl m-auto">
         <div
            :class="`${
               isChecked ? 'bg-primary' : 'bg-secondary'
            } lg:rounded-[20px] lg:px-6 px-4 pt-6 relative`">
            <div class="lg:block hidden">
               <MenuLinks />
            </div>
            <div
               itemscope
               itemtype="https://schema.org/Article"
               class="grid grid-cols-12 gap-x-5 lg:pt-28 pt-3">
               <div class="lg:col-span-7 col-span-12">
                  <div class="max-w-[680px]">
                     <h1
                        itemprop="name"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        class="hero-section-title">
                        Build Your Business Smartly and Cost-Effectively with Top Offshore
                        <span class="textSlides lg:text-[45px] text-[32px]">
                           <span>Website Development</span>
                           <span>Mobile App Development</span>
                           <span>DevOps Solution</span>
                           <span>AI & ML Development</span>
                           <span>MVP Development</span>
                           <span>UI/UX Design</span>
                           <span>Digital Marketing</span>
                           <span>QA & Testing</span>
                           <span>eCommerce Solution</span>
                        </span>
                     </h1>
                     <p
                        itemprop="description"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        class="text-dark-black text-lg font-poppins mb-6 lg:text-left text-center">
                        At ReformedTech, we deliver top offshore development
                        service that helps you scale quickly in Canada and
                        Worldwide while cutting your development costs by
                        60-80%. Whether it's building websites, mobile apps, or
                        e-commerce solution platforms, we bring your business
                        online faster and smarter.
                        <br />
                        <br />
                        Skip the hiring hassle. Get the experts you need, when
                        you need them.
                     </p>
                     <NuxtLink itemprop="url" to="/contact">
                        <button
                           data-aos="fade-up"
                           data-aos-delay="300"
                           data-aos-duration="1000"
                           class="font-jost lg:w-auto w-full">
                           <span class="primary-btn-v2" itemprop="text">
                              <Icon class="mr-1" name="material-symbols:call" />
                              Schedule a call
                           </span>
                        </button>
                     </NuxtLink>
                  </div>
               </div>

               <div class="lg:col-span-5 col-span-12 lg:mt-0 mt-[50px]">
                  <div
                     data-aos="fade-up"
                     data-aos-delay="300"
                     data-aos-duration="1000"
                     class="max-w-[498px] min-h-[569px] bg-[#d7bdca] px-3 pt-3 rounded-tl-[20px] rounded-tr-[20px]">
                     <div
                        class="bg-[#f9fafe] min-h-[569px] rounded-tl-[20px] rounded-tr-[20px]">
                        <div
                           class="flex justify-between items-center px-4 pt-4 mb-5">
                           <div>
                              <CurrentTime />
                           </div>

                           <div>
                              <Icon
                                 class="ml-1"
                                 name="material-symbols:signal-wifi-4-bar" />
                              <Icon
                                 class="ml-1"
                                 name="material-symbols:signal-cellular-4-bar" />
                              <Icon
                                 class="ml-1"
                                 name="material-symbols:battery-full" />
                           </div>
                        </div>

                        <div
                           class="bg-white shadow-lg inline-block bg px-3 py-2 rounded-md mx-5 mb-4 cursor-pointer">
                           <Icon
                              class="text-2xl"
                              name="material-symbols:arrow-back" />
                        </div>
                        <h2
                           itemprop="text"
                           class="text-[32px] font-jost text-dark-black font-medium border-b border-gray-light px-5 mb-7 pb-2">
                           Team Composition
                        </h2>
                        <div
                           class="flex justify-between items-center px-5 mb-7">
                           <div>
                              <h4
                                 itemprop="text"
                                 class="text-2xl text-jost text-[#565558] font-medium mb-1">
                                 Project Manager
                              </h4>
                              <p
                                 itemprop="text"
                                 class="text-base text-poppins text-[#565558]">
                                 To manage all project scope
                              </p>
                           </div>

                           <div>
                              <label
                                 class="flex cursor-pointer select-none items-center">
                                 <div class="relative">
                                    <input
                                       type="checkbox"
                                       class="sr-only"
                                       @change="handleCheckboxChange" />
                                    <div
                                       class="block h-8 w-14 rounded-full bg-blue-400"></div>
                                    <div
                                       :class="{
                                          'translate-x-full !bg-primary':
                                             isChecked,
                                       }"
                                       class="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div
                           class="flex justify-between items-center px-5 mb-7">
                           <div>
                              <h4
                                 itemprop="text"
                                 class="text-2xl text-jost text-[#565558] font-medium mb-1">
                                 React Engineers
                              </h4>
                              <p
                                 itemprop="text"
                                 class="text-base text-poppins text-[#565558]">
                                 Fronted Developers
                              </p>
                           </div>

                           <div>
                              <div
                                 class="relative inline-block text-left rounded-md cursor-pointer">
                                 <!-- Dropdown button -->
                                 <button
                                    @click="toggleDropdown"
                                    ref="dropdownButton"
                                    class="rounded-md lg:px-2 lg:py-1.5 px-2 py-1 inline-flex w-14 justify-between items-center text-base leading-6 text-black bg-[#60a5fa] focus:outline-none">
                                    <span
                                       temprop="text"
                                       class="text-sm text-white font-jost min-w-2"
                                       >{{ engineerSelectedValue }}</span
                                    >
                                    <!-- Arrow down icon -->
                                    <div class="bg-white px-1.5 ml-2 rounded">
                                       <Icon name="mdi:chevron-down" />
                                    </div>
                                 </button>

                                 <!-- Dropdown menu -->
                                 <div
                                    v-if="isDropdownOpen"
                                    class="rounded absolute z-[99999] left-0 mt-1 w-14 py-2 bg-white border border-gray-light shadow-lg">
                                    <p
                                       @click="reactSelectItem(item.value)"
                                       v-for="(item, index) in items"
                                       :key="index"
                                       class="flex justify-center items-center capitalize px-4 py-2 text-sm text-black hover:bg-orange-light">
                                       {{ item.value }}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div
                           class="flex justify-between items-center px-5 mb-7">
                           <div>
                              <h4
                                 itemprop="text"
                                 class="text-2xl text-jost text-[#565558] font-medium mb-1">
                                 .Net Engineers
                              </h4>
                              <p
                                 itemprop="text"
                                 class="text-base text-poppins text-[#565558]">
                                 Backend developers
                              </p>
                           </div>

                           <div>
                              <div
                                 class="relative inline-block text-left rounded-md cursor-pointer">
                                 <!-- Dropdown button -->
                                 <div
                                    @click="toggleDropdownEngineer"
                                    ref="dropdownButtonEngineer"
                                    class="rounded-md lg:px-2 lg:py-1.5 px-2 py-1 inline-flex w-14 justify-between items-center text-base leading-6 text-black bg-[#60a5fa] focus:outline-none">
                                    <div
                                       temprop="text"
                                       class="text-sm text-white font-jost mr-2 min-w-2">
                                       {{ selectedValue }}
                                    </div>
                                    <!-- Arrow down icon -->
                                    <div class="bg-white px-1.5 rounded">
                                       <Icon name="mdi:chevron-down" />
                                    </div>
                                 </div>

                                 <!-- Dropdown menu -->
                                 <div
                                    v-if="isEngineerDropdownOpen"
                                    class="rounded absolute z-[99999] left-0 mt-1 w-14 py-2 bg-white border border-gray-light shadow-lg">
                                    <p
                                       @click="selectItem(item.value)"
                                       v-for="(item, index) in items"
                                       :key="index"
                                       class="flex justify-center items-center capitalize px-4 py-2 text-sm text-black hover:bg-orange-light">
                                       {{ item.value }}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="flex justify-between items-center px-5">
                           <div>
                              <h4
                                 itemprop="text"
                                 class="text-2xl text-jost text-[#565558] font-medium mb-1">
                                 UI/UX Designers
                              </h4>
                              <p
                                 itemprop="text"
                                 class="text-base text-poppins text-[#565558]">
                                 To create the bespoke UI/UX
                              </p>
                           </div>

                           <div>
                              <div
                                 class="relative inline-block text-left rounded-md cursor-pointer">
                                 <!-- Dropdown button -->
                                 <div
                                    @click="toggleDropdownUi"
                                    ref="dropdownButtonUi"
                                    class="rounded-md lg:px-2 lg:py-1.5 px-2 py-1 inline-flex w-14 justify-between items-center text-base leading-6 text-black bg-[#60a5fa] focus:outline-none">
                                    <div
                                       itemprop="text"
                                       class="text-sm text-white font-jost mr-2 min-w-2">
                                       {{ uiSelectedValue }}
                                    </div>
                                    <!-- Arrow down icon -->
                                    <div class="bg-white px-1.5 rounded">
                                       <Icon name="mdi:chevron-down" />
                                    </div>
                                 </div>

                                 <!-- Dropdown menu -->
                                 <div
                                    v-if="isUiDropdownOpen"
                                    class="rounded absolute z-[99999] left-0 mt-1 w-14 py-2 bg-white border border-gray-light shadow-lg">
                                    <p
                                       @click="uiSelectItem(item.value)"
                                       v-for="(item, index) in items"
                                       :key="index"
                                       class="flex justify-center items-center capitalize px-4 py-2 text-sm text-black hover:bg-orange-light">
                                       {{ item.value }}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isChecked: true,
         isDropdownOpen: false,
         isEngineerDropdownOpen: false,
         isUiDropdownOpen: false,
         selectedValue: 2,
         engineerSelectedValue: 2,
         uiSelectedValue: 1,
         items: [
            {
               value: "1",
            },

            {
               value: "2",
            },

            {
               value: "3",
            },

            {
               value: "4",
            },
         ],
      };
   },
   methods: {
      handleCheckboxChange() {
         this.isChecked = !this.isChecked;
      },

      toggleDropdown() {
         this.isDropdownOpen = !this.isDropdownOpen;
      },

      handleClickOutside(event) {
         if (
            this.$refs.dropdownButton &&
            !this.$refs.dropdownButton.contains(event.target) &&
            this.$refs.dropdownButtonEngineer &&
            !this.$refs.dropdownButtonEngineer.contains(event.target) &&
            this.$refs.dropdownButtonUi &&
            !this.$refs.dropdownButtonUi.contains(event.target)
         ) {
            this.isDropdownOpen = false;
            this.isEngineerDropdownOpen = false;
            this.isUiDropdownOpen = false;
         }
      },

      toggleDropdownEngineer() {
         this.isEngineerDropdownOpen = !this.isEngineerDropdownOpen;
      },

      toggleDropdownUi() {
         this.isUiDropdownOpen = !this.isUiDropdownOpen;
      },
      selectItem(value) {
         this.selectedValue = value;
         this.isEngineerDropdownOpen = false;
      },

      reactSelectItem(value) {
         this.engineerSelectedValue = value;
         this.isDropdownOpen = false;
      },

      uiSelectItem(value) {
         this.uiSelectedValue = value;
         this.isUiDropdownOpen = false;
      },
   },

   mounted() {
      document.addEventListener("click", this.handleClickOutside);
   },
   beforeDestroy() {
      document.removeEventListener("click", this.handleClickOutside);
   },
};
</script>

<style scoped>
@import "../../assets/css/heroSection.css";
h1 > .textSlides {
   position: relative;
   display: inline-block;
   height: 1.25em;
   color:#0D7C91;
   vertical-align: bottom;
   overflow: hidden;
}

h1 > .textSlides span {
   display: block;
   font-weight: 500;
   animation: animateWords 10s infinite ease;
}

@keyframes animateWords {
   0% {
      transform: translateY(0%);
   }

   25% {
      transform: translateY(-100%);
   }

   50% {
      transform: translateY(-200%);
   }

   75% {
      transform: translateY(-300%);
   }

   100% {
      transform: translateY(-400%);
   }
}
</style>
