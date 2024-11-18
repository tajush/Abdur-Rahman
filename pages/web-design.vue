<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" :width="width" />
        <Breadcrumbs />
        <WebDevelopmentWebExpertise />
        <WebDevelopmentOurProcess />
        <WebDevelopmentCostTime />
        <!-- <VerticalTestimonial /> -->
        <ServiceBenifits :title="benifitTitle" :features="features" />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle" :teamContactImg="teamContactImg" />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/web-development/web-hero-section-img.svg'
import featureIcon1 from '/assets/img/home/advantage-feature-icon1.svg'
import featureIcon2 from '/assets/img/home/advantage-feature-icon2.svg'
import featureIcon3 from '/assets/img/home/advantage-feature-icon3.svg'
import featureIcon4 from '/assets/img/home/advantage-feature-icon4.svg'
import featureIcon5 from '/assets/img/home/advantage-feature-icon5.svg'
import featureIcon6 from '/assets/img/home/advantage-feature-icon6.svg'
import websiteContactImg from '/assets/img/solution/website-team-contact.png'
export default {
    setup() {
        const state = reactive({
            width: "567",
            techTeamImgWidth: "516",
            techTeamImgHeight: "660",
            title: "<span class='text-green'>Web Design</span> & Development",
            subTitle: "We craft innovative web solutions that perfectly match your vision,  that reflect your brand's essence, focusing on your specific needs with expertise in design and development.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Schedule</span> with Our Web Experts",
            teamContactSubtitle: "Navigate your goals with our web experts. We assist in offering solutions to  ensure your digital journey is smooth, effective, and aligned with your objectives.",
            teamContactImg: websiteContactImg,
            benifitTitle: "<span class='text-green'>Benefits</span> of working with us",
                features: [
                {
                    link: "/devops-solution",
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Agile approach",
                    subTitle: "Our agile methodologies ensure your vision, translated into the final product within shorter time frames."
                },

                {
                    link: "/services/dedicated-teams",
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Dedicated Support",
                    subTitle: "Our commitment goes beyond launch, offering continuous support to ensure your website excels and succeeds with our unwavering dedication."
                },

                {
                    link: "/mvp-development",
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "MVP",
                    subTitle: "We always help to improve or start your business in the shortest possible time and budget."
                },

                {
                    link: "/qa-testing",
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Quality code",
                    subTitle: "With 7 years of experience in enterprise application development, we provide high-quality work for your projects."
                },

                {
                    link: "/faq",
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Well-organized communication",
                    subTitle: "To keep the client informed about everything that happens, we build comfortable communication between departments."
                },

                {
                    link: "/services/software-outsourcing",
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Profitable Alternative to Full-Time Employment",
                    subTitle: "Working on outsourcing bases with us, you effectively cover all needs and save money."
                },
            ]

        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Web Design Services | ReformedTech',
            meta: [
                { name: 'description', content: "Searching for reliable web design services? Choose the top web design company for exceptional web design solutions." },
                { property: 'og:title', content: 'Web Design Services | ReformedTech' },
                { property: 'og:description', content: "Searching for reliable web design services? Choose the top web design company for exceptional web design solutions." },
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

<style lang="scss" scoped></style>