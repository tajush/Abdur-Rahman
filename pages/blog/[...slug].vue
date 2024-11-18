<template>
   <main>
      <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
      <ContentDoc v-slot="{ doc }">
         <div class="lg:pt-28 pt-14">
            <div class="container max-w-7xl m-auto px-4">
               <div class="max-w-[950px] mx-auto">
                  <div class="lg:mb-0 mb-10">
                     <div
                        class="bg-white lg:py-12 py-8 shadow-[0_2px_8px_10px_#edf8f8] rounded-[20px]">
                        <div class="lg:px-6 px-4 lg:mb-12 mb-8">
                           <h2
                              class="lg:text-[32px] text-2xl text-dark-black font-medium font-jost mb-5">
                              {{ doc.title }}
                           </h2>
                           <div class="flex lg:gap-x-5 gap-x-2">
                              <div
                                 v-for="(item, i) in doc.postTimes"
                                 :key="i"
                                 class="flex items-center">
                                 <Icon
                                    class="text-gray text-xl mr-2"
                                    :name="item.icon" />
                                 <p class="text-sm text-gray font-poppins">
                                    {{ item.text }}
                                 </p>
                              </div>
                              <div class="flex items-center">
                                 <Icon
                                    class="text-gray text-xl mr-2"
                                    name="material-symbols:alarm-on-outline" />
                                 <p class="text-sm text-gray font-poppins">
                                    {{ readingTime }} min read
                                 </p>
                              </div>
                              <div class="flex items-center">
                                 <Icon
                                    class="text-gray text-xl mr-2"
                                    name="material-symbols:visibility-outline-rounded" />
                                 <p class="text-sm text-gray font-poppins">
                                    {{ viewCount }} views
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div class="lg:pb-12 pb-8 lg:px-6 px-4">
                           <img
                              class="w-full rounded-[14px]"
                              :src="doc.img"
                              alt="blog details img1" />
                           <div
                              class="lg:mt-12 mt-8 main-content blog-details__content">
                              <ContentRenderer
                                 ref="contentRenderer"
                                 class="text-base text-gray font-poppins"
                                 :value="doc" />
                           </div>
                        </div>

                        <!-- Disqus Comments Section -->
                        <div
                           class="lg:pt-[38px] pt-6 border-t border-[#E9E9E9] px-6">
                           <DisqusComments :identifier="doc.slug" />
                        </div>

                        <div
                           class="lg:pt-[38px] pt-6 border-t border-[#E9E9E9] px-6">
                           <div class="lg:flex justify-between">
                              <div class="flex items-center lg:mb-0 mb-5">
                                 <h4
                                    class="text-base text-[#6A797C] font-semibold font-jost mr-4">
                                    Tags:
                                 </h4>
                                 <div class="flex">
                                    <div
                                       v-for="(tag, index) in doc.tags"
                                       :key="index"
                                       class="chips mr-2">
                                       {{ tag }}
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
      </ContentDoc>
   </main>
</template>

<script>
import { useRoute } from "vue-router";
import heroSectionImg from "/assets/img/blogs/blog-hero-section-img.svg";
import "/assets/css/blog-details.css";

export default {
   data() {
      return {
         width: "274",
         title: "Unveiling Our Latest Post",
         subTitle:
            "Dive into our newest blog post, where we unravel insights, explore trends, and share valuable perspectives to keep you informed and inspired.",
         img: heroSectionImg,
         wordCount: 0, // Initialize with 0 or a default value
         viewCount: 0, // Initialize view count
         slug: "", // Initialize slug
      };
   },
   computed: {
      readingTime() {
         const wordsPerMinute = 200; // Average reading speed
         return Math.ceil(this.wordCount / wordsPerMinute);
      },
   },
   methods: {
      calculateWordCount() {
         const contentElement = this.$refs.contentRenderer.$el;
         const text = contentElement.textContent || contentElement.innerText;
         const words = text.split(/\s+/).filter(Boolean);
         this.wordCount = words.length;
      },
   },
   mounted() {
      const route = useRoute(); // Use useRoute to access the current route
      this.slug = Array.isArray(route.params.slug)
         ? route.params.slug.join("/")
         : route.params.slug; // Extract slug

      this.$nextTick(async () => {
         this.calculateWordCount();

         // Fetch and update view count
         await incrementBlogViewCount(this.slug); // Increment view count
         this.viewCount = await getBlogViewCount(this.slug); // Fetch updated view count
      });
   },

   watch: {
      doc: {
         handler() {
            this.$nextTick(() => {
               this.calculateWordCount();
            });
         },
         deep: true,
      },
   },
};
</script>

<style scoped></style>
