<template>
    <div >
      <PrivacyPolicy />
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
            title: 'Privacy Policy | ReformedTech',
            meta: [
                { name: 'description', content: "This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information. At ReformedTech, we understand and prioritise the importance of safeguarding your privacy." },
                { property: 'og:title', content: 'Privacy Policy | ReformedTech' },
                { property: 'og:description', content: "This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information. At ReformedTech, we understand and prioritise the importance of safeguarding your privacy." },
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