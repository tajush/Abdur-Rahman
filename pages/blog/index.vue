<template>
   <div>
      <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
      <BlogList />
   </div>
</template>

<script>
import heroSectionImg from "/assets/img/blogs/blog-hero-section-img.svg";
export default {
   setup() {
      const state = reactive({
         title: "Unveiling Our <span class='text-green'>Latest Post</span>",
         subTitle:
            "Dive into our newest blog post, where we unravel insights, explore trends, and share valuable perspectives to keep you informed and inspired. ",
         img: heroSectionImg,
      });

      const route = useRoute();
      const canonicalUrl = `https://reformedtech.ca${route.path}`;

      useHead({
         title: "ReformedTech Blog | Tech news and Software Solutions",
         meta: [
            {
               name: "description",
               content:
                  "ReformedTech Blogs are about latest technologies, software development updates, innovation and more.",
            },
            {
               property: "og:title",
               content: "ReformedTech Blog | Tech news and Software Solutions",
            },
            {
               property: "og:description",
               content:
                  "ReformedTech Blogs are about latest technologies, software development updates, innovation and more.",
            },
            {
               property: "og:image",
               content: "https://reformedtech.ca/logo-02.png",
            },
            { name: "twitter:card", content: "summary_large_image" },
         ],
         link: [{ rel: "canonical", href: canonicalUrl }],
      });

      return {
         ...toRefs(state),
      };
   },
};
</script>

<style scoped></style>
