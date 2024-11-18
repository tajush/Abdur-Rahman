<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <Breadcrumbs />
        <HomeOffshoreStaffing />
        <ServiceInnovativeSolution />
        <ServiceBenifits :title="benifitTitle" :features="features" />
        <ServiceArgumentProcess />
        <HomeAmzingTeams />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/service/service-hero-section-img.svg'
import featureIcon1 from '/assets/img/home/advantage-feature-icon1.svg'
import featureIcon2 from '/assets/img/home/advantage-feature-icon2.svg'
import featureIcon3 from '/assets/img/home/advantage-feature-icon3.svg'
import featureIcon4 from '/assets/img/home/advantage-feature-icon4.svg'
import featureIcon5 from '/assets/img/home/advantage-feature-icon5.svg'
import featureIcon6 from '/assets/img/home/advantage-feature-icon6.svg'
    export default {
    setup() {
        const state = reactive({
            width: "433",
                height: "320",
                title: "<span class='text-green'>Custom Software</span> Development Services",
                subTitle: "We tailor solutions for business challenges, meet specs, align with markets and optimize processes.",
                img: heroSectionImg,
                benifitTitle: "<span class='text-green'>Benefits</span> of working with us",
                features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Agile approach",
                    subTitle: "Our agile methodologies ensure your vision, translated into the final product within shorter time frames."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Dedicated Support",
                    subTitle: "Our commitment goes beyond launch, offering continuous support to ensure your website excels and succeeds with our unwavering dedication."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "MVP",
                    subTitle: "We always help to improve or start your business in the shortest possible time and budget."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Quality code",
                    subTitle: "With 7 years of experience in enterprise application development, we provide high-quality work for your projects."
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Well-organized communication",
                    subTitle: "To keep the client informed about everything that happens, we build comfortable communication between departments."
                },

                {
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
            title: 'ReformedTech Services | Offshore Web and Software Development',
            meta: [
                { name: 'description', content: "ReformedTech provides services for web design, software and eCommerce development, DevOps, mobile apps, and UX/UI designs for startups in Canada." },
                { property: 'og:title', content: 'ReformedTech Services | Offshore Web and Software Development' },
                { property: 'og:description', content: "ReformedTech provides services for web design, software and eCommerce development, DevOps, mobile apps, and UX/UI designs for startups in Canada." },
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

<style scoped>

</style>