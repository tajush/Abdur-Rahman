<template>
   <div class="lg:pt-28 pt-14">
      <div class="container max-w-7xl m-auto px-4">
         <header class="max-w-[750px] mx-auto mb-16">
            <h2
               itemprop="headline"
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-duration="1000"
               class="title-primary">
               <span itemprop="text" class="text-green">Explore</span>
               insightful blogs
            </h2>
         </header>
         <!-- Blog List -->
         <ContentList path="/blog" :limit="3">
            <template #default="{ list }">
               <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                  <div
                     v-for="card in list"
                     :key="card._path"
                     class="lg:mb-10 mb-7">
                     <div class="shine h-[260px]">
                        <ImageComponent
                           class="w-full h-full object-cover rounded-t-[20px]"
                           :src="card.thumbnail"
                           alt="blog image" />
                     </div>
                     <div
                        class="bg-orange-light border border-orange hover:border-white border-t-0 rounded-bl-3xl rounded-br-3xl hover:bg-white hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all cursor-pointer lg:p-6 p-4 min-h-[200px] blogs-card-content">
                        <div class="flex justify-between items-center mb-2.5">
                           <p class="subtitle-primary text-sm">
                              {{ card.postDate }}
                           </p>
                           <div class="flex items-center">
                              <div class="w-5 h-[1px] bg-gray"></div>
                              <p class="subtitle-primary text-sm ml-2">
                                 {{ card.author }}
                              </p>
                           </div>
                        </div>
                        <h4
                           class="lg:text-xl text-lg text-dark-black font-medium leading-[30px] capitalize">
                           <NuxtLink :to="`/blog/${card.slug}`">
                              {{ card.title }}
                           </NuxtLink>
                        </h4>
                        <div class="flex mt-8 flex-wrap gap-y-[12px]">
                           <div
                              v-for="(tag, index) in card.tags"
                              :key="index"
                              class="chips mr-2">
                              {{ tag }}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </template>

            <template #not-found>
               <p>No articles found.</p>
            </template>
         </ContentList>
         <div class="text-center">
            <NuxtLink to="/blog">
               <button
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  class="font-jost">
                  <span class="outline-btn-v2">
                     View all blogs
                     <Icon class="ml-1" name="material-symbols:arrow-outward" />
                  </span>
               </button>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<script>
import ImageComponent from "../ImageComponent.vue";
import blogImg1 from "/assets/img/blogs/blog-img1.png";
import blogImg2 from "/assets/img/blogs/blog-img2.png";
import blogImg3 from "/assets/img/blogs/blog-img3.png";

export default {
   components: {
      ImageComponent,
   },
   data() {
      return {
         isDropdownOpen: false,
         blogFilters: [
            {
               name: "All",
            },
            {
               name: "Design",
            },
            {
               name: "Marketing",
            },
            {
               name: "Technology",
            },
            {
               name: "Development",
            },
            {
               name: "Branding",
            },
            {
               name: "Updates",
            },
         ],
         items: [
            {
               link: "",
               text: "10 Per Page",
            },
            {
               link: "",
               text: "20 Per Page",
            },
            {
               link: "",
               text: "30 Per Page",
            },
            {
               link: "",
               text: "40 Per Page",
            },
         ],
         cards: [
            {
               delay: "100",
               img: blogImg1,
               altText: "blog-img1",
               date: "May 16, 2022",
               topics: "Design",
               blogTitle: "Fast food restaurant management - diving deeper...",
               chips: ["Company", "Product", "POS"],
            },
            {
               delay: "200",
               img: blogImg2,
               altText: "blog-img2",
               date: "May 16, 2022",
               topics: "AI",
               blogTitle: "ChatGPT vs bard: which is better for coding...",
               chips: ["Technology", "AI"],
            },
            {
               delay: "300",
               img: blogImg3,
               altText: "blog-img3",
               date: "May 16, 2022",
               topics: "AI",
               blogTitle: "Fast food restaurant management - diving deeper...",
               chips: ["Technology", "Learning", "AI"],
            },
         ],
         paginations: [
            {
               text: "1",
            },
            {
               text: "2",
            },
            {
               text: "5",
            },
         ],
      };
   },

   methods: {
      toggleDropdown() {
         this.isDropdownOpen = !this.isDropdownOpen;
      },
      handleClickOutside(event) {
         if (
            this.$refs.dropdownButton &&
            !this.$refs.dropdownButton.contains(event.target)
         ) {
            this.isDropdownOpen = false;
         }
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
@import "/assets/css/blogs.css";
</style>
