<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <Breadcrumbs />
        <ServiceBenifits :title="benifitTitle" :features="features" />
        <SolutionsDevelopmentServices :title="developmentTitle" :developmentFaqItems="developmentFaqItems" :img="devImg" />
        <!-- <VerticalTestimonial /> -->
        <SolutionsPorcessStep :title="stepTitle" :arguments="arguments" />
        <!-- <HomeTestimonials /> -->
        <SolutionsStayingTrend />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle"
            :teamContactImg="teamContactImg" />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/talent-retention/talent-hero-section-img.svg'
import digitalContactImg from '/assets/img/solution/digital-team-contact.png'
import featureIcon1 from '/assets/img/home/advantage-feature-icon1.svg'
import featureIcon2 from '/assets/img/home/advantage-feature-icon2.svg'
import featureIcon3 from '/assets/img/home/advantage-feature-icon3.svg'
import featureIcon4 from '/assets/img/home/advantage-feature-icon4.svg'
import featureIcon5 from '/assets/img/home/advantage-feature-icon5.svg'
import featureIcon6 from '/assets/img/home/advantage-feature-icon6.svg'
import LineArrow from '/assets/img/service/line-arrow.svg'
import phoneIcon from '/assets/img/home/phone-icon.svg'
import teamIcon from '/assets/img/home/team-icon.svg'
import trackIcon from '/assets/img/home/track-icon.svg'
import dedicatedImg1 from '/assets/img/dedicated-team/hire-img1.svg'
import dedicatedImg2 from '/assets/img/dedicated-team/hire-img2.svg'
import dedicatedImg3 from '/assets/img/dedicated-team/hire-img3.svg'
import digitalDevImg from '/assets/img/solution/digital-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "Elevate Your <span class='text-green'>Canadian Brand</span> in the Digital Landscape",
            subTitle: "In today's fast-paced digital world, having a strong online presence is crucial for Canadian businesses. At ReformedTech.ca, we provide state-of-the-art digital marketing solutions customized to fit the specific needs of Canadian startups and enterprises. Our data-driven strategies are crafted to enhance visibility, connect with your target audience, and foster sustainable growth in the competitive Canadian market.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Ready to take</span> your business to the next level? ",
            teamContactSubtitle: "Don't wait; partner with ReformedTech.ca today and let our digital marketing expertise propel your business forward. Contact us now to learn more about our services and how we can help you achieve your digital marketing goals.",
            teamContactImg: digitalContactImg,
            benifitTitle: "Why Choose ReformedTech.<span class='lowercase'>ca</span> for <span class='text-green'>Digital Marketing</span>",
            developmentTitle: "Our <span class='text-green'>Digital Marketing</span> Expertise",
            stepTitle: "Our <span class='text-green'>Approach</span>",
            devImg: digitalDevImg,
            features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Canadian Market Expertise",
                    subTitle: "We understand the nuances of marketing to diverse Canadian audiences."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Data-Driven Approach",
                    subTitle: "Our strategies are backed by in-depth analytics and industry insights."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "Customized Solutions",
                    subTitle: "We tailor our services to fit the unique needs of your business, whether you're a startup or an established enterprise."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Cutting-Edge Technology",
                    subTitle: "We leverage the latest MarTech tools to maximize your ROI."
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Bilingual Capabilities",
                    subTitle: "We offer marketing services in both English and French to reach all Canadian markets."
                },

                {
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Ethical Practices",
                    subTitle: "We adhere to Canadian privacy laws and ethical marketing standards."
                },
            ],
            arguments: [
                {
                    width: "35",
                    step: "Step 1",
                    arrow: LineArrow,
                    title: "Strategic Insights",
                    subTitle: "We dive deep into your business goals, industry landscape, and target audience. Our data-driven approach ensures that every marketing decision aligns with your unique objectives."
                },
                {
                    width: "55",
                    step: "Step 2",
                    arrow: LineArrow,
                    title: "Holistic Campaigns",
                    subTitle: "We craft integrated campaigns that amplify your brand's voice from SEO to social media, content marketing and paid advertising. Our strategies are agile, adapting to market shifts and consumer behaviour."
                },
                {
                    width: "36",
                    step: "Step 3",
                    arrow: LineArrow,
                    title: "Conversion Optimization",
                    subTitle: "Traffic is essential, but conversions matter most. We optimize user journeys, landing pages, and calls to action to maximize your ROI."
                }
            ],
            hires: [
                {
                    icon: dedicatedImg1,
                    altText: "hire img1",
                    content: "When a big company aims to embrace modern internet culture."
                },
                {
                    icon: dedicatedImg2,
                    altText: "hire img2",
                    content: "When a business is outgrowing its market and needs to scale."
                },
                {
                    icon: dedicatedImg3,
                    altText: "hire img3",
                    content: "When a startup develops a product, prioritizing cost savings."
                },
            ],
            developmentFaqItems: [
                {
                    question: "Search Engine Optimization (SEO)",
                    answers: [
                        {
                            description: "Local SEO strategies optimized for Canadian markets"
                        },
                        {
                            description: "Content optimization for Canadian search trends"
                        },
                        {
                            description: "Technical SEO to improve site performance and indexing"
                        },
                    ],
                    open: true
                },
                {
                    question: "Pay-Per-Click (PPC) Advertising",
                    answers: [
                        {
                            description: "Google Ads and Bing Ads management"
                        },
                        {
                            description: "Geo-targeted campaigns for Canadian provinces and territories"
                        },
                        {
                            description: "Bilingual ad creation (English and French)"
                        },
                    ],
                    open: false
                },
                {
                    question: "Social Media Marketing",
                    answers: [
                    {
                            description: "Platform-specific strategies (LinkedIn, Twitter, Facebook, Instagram)"
                        },
                        {
                            description: "Content creation tailored to Canadian audiences"
                        },
                        {
                            description: "Community management and engagement"
                        },
                    ],
                    open: false
                },
                {
                    question: "Content Marketing",
                    answers: [
                    {
                            description: "Blog writing and content strategy"
                        },
                        {
                            description: "Whitepaper and e-book development"
                        },
                        {
                            description: "Infographic design and data visualization"
                        },
                    ],
                    open: false
                },
                {
                    question: "Email Marketing",
                    answers: [
                    {
                            description: "Campaign strategy and execution"
                        },
                        {
                            description: "List segmentation and personalization"
                        },
                        {
                            description: "A/B testing and performance optimization"
                        },
                    ],
                    open: false
                },
                {
                    question: "Analytics and Reporting",
                    answers: [
                    {
                            description: "Custom dashboard creation"
                        },
                        {
                            description: "Regular performance reports"
                        },
                        {
                            description: "Data-driven insights and recommendations"
                        },
                    ],
                    open: false
                }

            ],
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Offshore Development Service | ReformedTech Digital Marketing',
            meta: [
                { name: 'description', content: "ReformedTech aims to expand your business with cutting-edge technology. Digital marketing enables the resolution of conventional issues faster and more efficiently." },
                { property: 'og:title', content: 'Offshore Development Service | ReformedTech Digital Marketing' },
                { property: 'og:description', content: "ReformedTech aims to expand your business with cutting-edge technology. Digital marketing enables the resolution of conventional issues faster and more efficiently." },
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