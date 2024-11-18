<template>
  <div>
    <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
    <Breadcrumbs />
    <ContactForm />
  </div>


</template>

<script>
import heroSectionImg from '/assets/img/contact/group.svg'
export default {
  setup() {
    const state = reactive({
      width: "452",
      title: "Let's Talk: <span class='text-green'>Your Thoughts</span> Matter to Us",
      subTitle: "At ReformedTech, we're dedicated to providing top-notch support and service to our clients. Whether you have questions about our offerings, need technical support, or want to give us feedback, we're here to assist you.",
      img: heroSectionImg
    });

    const route = useRoute();
    const canonicalUrl = `https://reformedtech.ca${route.path}`;

    useHead({
      title: 'ReformedTech | Contact Information',
      meta: [
        { name: 'description', content: "ReformedTech Software and Web development Company. We will provide assistance in hiring offshore developers to design and develop your website and mobile app." },
        { property: 'og:title', content: 'ReformedTech | Contact Information' },
        { property: 'og:description', content: "ReformedTech Software and Web development Company. We will provide assistance in hiring offshore developers to design and develop your website and mobile app." },
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

<style></style>