<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <Breadcrumbs />
        <CaseStudies />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/case-studies/case-hero-section-img.svg'
export default {
    setup() {
        const state = reactive({
            width: "320",
            title: "Some of <span class='text-green'>our Cases</span>",
            subTitle: "An Experience design agency building high-end products and experiences that grow your business exponentially. ",
            img: heroSectionImg
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Software development case studies - ReformedTech Software',
            meta: [
                { name: 'description', content: "Check out our software development case studies to discover what contributed to the success of our projects and earned our clients' trust." },
                { property: 'og:title', content: 'Software development case studies - ReformedTech Software' },
                { property: 'og:description', content: "Check out our software development case studies to discover what contributed to the success of our projects and earned our clients' trust." },
                { property: 'og:image', content: 'https://reformedtech.ca/logo-02.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                { rel: 'canonical', href: canonicalUrl },
            ]
        });

        return {
      ...toRefs(state)

    }   
    }
}
</script>

<style scoped></style>