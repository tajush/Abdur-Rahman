<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img"  />
        <Breadcrumbs />
        <OurTeamGallery />
        <OurTeamOurLeaders />
        <OurTeamMembars />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/our-team/team-hero-section-img.svg'
export default {
    setup() {
        const state = reactive({
            title: "Beyond the Screen our <span class='text-green'>Dedicated Team</span> for Your Business Success.",
            img: heroSectionImg     
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Our Teams | ReformedTech',
            meta: [
                { name: 'description', content: "Kickstart your projects by partnering with the top 1% of tech talent at ReformedTech." },
                { property: 'og:title', content: 'Our Teams | ReformedTech' },
                { property: 'og:description', content: "Kickstart your projects by partnering with the top 1% of tech talent at ReformedTech." },
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