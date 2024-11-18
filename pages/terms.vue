<template>
  <div >
    <TermsTerms&Conditions/>
    <TermsServiceCard/>
  </div>
</template>

<script>
export default {
  setup() {
        const state = reactive({
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Terms and Conditions | ReformedTech',
            meta: [
                { name: 'description', content: "Terms and Conditions define the rules, specifications, and requirements for using a product or service." },
                { property: 'og:title', content: 'Terms and Conditions | ReformedTech' },
                { property: 'og:description', content: "Terms and Conditions define the rules, specifications, and requirements for using a product or service." },
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

<style>

</style>