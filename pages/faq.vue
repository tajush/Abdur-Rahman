<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <SolutionsExtendedBreadcrumbs :text="breadcrumbsText" />
        <Faq />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/web-development/web-hero-section-img.svg'
export default {
    setup() {
        const state = reactive({
            width: "567",
            title: "Explore Our <span class='text-green'>FAQ Hub</span>",
            subTitle: "We tailor solutions for business challenges, meet specs, align with markets, and optimize processes.",
            img: heroSectionImg   ,
            breadcrumbsText: "FAQ"   
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Have a question for us? | ReformedTech',
            meta: [
                { name: 'description', content: "ReformedTech is an offshore software development company with a skilled team of web and software developers dedicated to providing you with an exceptional experience for your startup business." },
                { property: 'og:title', content: 'Have a question for us? | ReformedTech' },
                { property: 'og:description', content: "ReformedTech is an offshore software development company with a skilled team of web and software developers dedicated to providing you with an exceptional experience for your startup business." },
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

<style  scoped></style>