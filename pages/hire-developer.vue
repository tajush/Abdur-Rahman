<template>
  <div>
    <EstimateGetEstimate1 />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty"
})

const route = useRoute();
const canonicalUrl = `https://reformedtech.ca${route.path}`;

useHead({
  title: 'Hire remote Development Team | ReformedTech',
  meta: [
    { name: 'description', content: "To improve your business processes and boost your project effectively, ReformedTech can provide remote development teams. Contact us!" },
    { property: 'og:title', content: 'Hire remote Development Team | ReformedTech' },
    { property: 'og:description', content: "To improve your business processes and boost your project effectively, ReformedTech can provide remote development teams. Contact us!" },
    { property: 'og:image', content: 'https://reformedtech.ca/logo-02.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ]
});
</script>

<style></style>