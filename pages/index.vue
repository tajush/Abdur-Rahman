<template>
   <div>
      <HomeHeroSection />
      <HomeOffshoreStaffing />
      <HomeProvideSolution />
      <HomeCases />
      <HomeOurStack />
      <HomeAmzingTeams />
      <HomeAdvantageFeature />
      <SolutionsPorcessStep :title="stepTitle" :arguments="arguments" />
      <HomeTestimonials />
      <!-- <HomeBlogs /> -->
      <HomeBlogs />
   </div>
</template>

<script>
import phoneIcon from "/assets/img/home/phone-icon.svg";
import teamIcon from "/assets/img/home/team-icon.svg";
import trackIcon from "/assets/img/home/track-icon.svg";
import LineArrow from "/assets/img/service/line-arrow.svg";
export default {
   setup() {
      const state = reactive({
         stepTitle:
            "Simple, <span class='text-green'>seamless,</span> streamlined",
         arguments: [
            {
               delay: "100",
               icon: phoneIcon,
               width: "35",
               step: "Step 1",
               arrow: LineArrow,
               title: "Join exploration call",
               subTitle:
                  "Tell us more about your business on a discovery call. We'll discuss team structure, success criteria, timescale, budget to see how we can help.",
            },
            {
               delay: "200",
               icon: teamIcon,
               width: "55",
               step: "Step 2",
               arrow: LineArrow,
               title: "Explore the solution and team setup",
               subTitle:
                  "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.",
            },
            {
               delay: "300",
               icon: trackIcon,
               width: "36",
               step: "Step 3",
               arrow: LineArrow,
               title: "Get started and track performance",
               subTitle:
                  "After we've finalized the deal, we'll promptly begin work. We'll monitor progress, provide updates, and continually adjust to meet your needs.",
            },
         ],
      });

      const canonicalUrl = "https://reformedtech.ca";

      useHead({
         title: "ReformedTech | Offshore Development Company",
         meta: [
            {
               name: "description",
               content:
                  "ReformedTech offers Canadian startups with the opportunity to hire a talented and experienced team for offshore software and web development services.",
            },
            {
               property: "og:title",
               content: "ReformedTech | Offshore Development Company",
            },
            {
               property: "og:description",
               content:
                  "ReformedTech offers Canadian startups with the opportunity to hire a talented and experienced team for offshore software and web development services.",
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
