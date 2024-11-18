<template>
  <div>
    <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
    <Breadcrumbs />
    <CareerPhotoGallery />
    <CareerWorkWithUs :workFlows="workFlows" />
    <CareerTeamFeedback />
    <CareerGroupPhoto />
    <CareerJobPost />
    <CareerResume />



  </div>
</template>

<script>
import heroSectionImg from '/assets/img/our-story/story-hero-section-img.svg'
import variety from '/assets/img/career/variety.svg'
import growth from '/assets/img/career/growth.svg'
import collaborate from '/assets/img/career/collaborate.svg'
import technology from '/assets/img/career/technology.svg'
import workLife from '/assets/img/career/work-life.svg'

export default {
  setup() {
    const state = reactive({
      img: heroSectionImg,
      width: "375",
      title: "Looking for <span class='text-green'>career opportunities</span> at ReformedTech.<span class='lowercase'>ca</span>?",
      subTitle: " Join our team, and let's shape the future of technology. As a Canadian company, we prioritise diversity, collaboration, and excellence. We are a leading offshore software development and web design company committed to delivering top-notch services to our clients.",
      workFlows: [
        {
          icon: variety,
          altText: "variety img",
          title: "Exciting Variety",
          content: "Join our team shaping the future of technology with innovative projects in web design, software development, e-commerce solutions, and digital marketing."
        },
        {
          icon: growth,
          altText: "growth img",
          title: "Professional Growth",
          content: "Committed to your development through continuous learning opportunities, mentorship, and challenging projects."
        },
        {
          icon: collaborate,
          altText: "collaborate img",
          title: "Collaborative Environment",
          content: "Our collaborative and supportive environment, where we value your ideas and actively encourage teamwork and open communication"
        },

        {
          icon: technology,
          altText: "technology img",
          title: "Cutting-Edge Technology",
          content: "Experience the latest industry tech and tools. Deliver cutting-edge solutions to clients."
        },
        {
          icon: workLife,
          altText: "work life img",
          title: "Your Well-being Matters",
          content: " We promote a healthy work-life balance and prioritize your well-being with flexible hours, remote work options, and a supportive team."
        },
        {
          icon: variety,
          altText: "variety img",
          title: "Impactful Work",
          content: "When you work with ReformedTech.ca, you will have the opportunity to impact small businesses across Canada positively. Your efforts will directly contribute to their growth and success, giving you a sense of purpose and fulfillment in your work."
        },
      ]



    });

    const route = useRoute();
    const canonicalUrl = `https://reformedtech.ca${route.path}`;

    useHead({
      title: 'ReformedTech Career | Open Positions at ReformedTech',
      meta: [
        { name: 'description', content: "Join the team of experts! ReformedTech is always open to welcoming talented individuals. Apply for a position." },
        { property: 'og:title', content: 'ReformedTech Career | Open Positions at ReformedTech' },
        { property: 'og:description', content: "Join the team of experts! ReformedTech is always open to welcoming talented individuals. Apply for a position." },
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