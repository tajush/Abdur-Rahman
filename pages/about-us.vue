<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" :width="width" />
        <Breadcrumbs />
        <OurStory />
        <OurStoryOurValues />
        <OurStoryWhoWe />
        <OurStoryWhatDo />
        <SolutionsWhyChoose :title="whyChooseTitle" :chooseFaqItems="chooseFaqItems" :img="chooseImg" />
        <OurStoryAwards />
        <OurStoryOurProcess />
        <HomeAmzingTeams />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle"
            :teamContactImg="teamContactImg" />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/our-story/story-hero-section-img.svg';
import aboutContactImg from '/assets/img/our-story/about-team-contact.png';
import aboutChooseImg from '/assets/img/our-story/about-choose-img.png';

export default {
    setup() {
        const state = reactive({
            width: "375",
            title: "<span class='text-green'>Empowering</span> Canadian Businesses through Innovative IT Solutions",
            subTitle: "Welcome to ReformedTech.ca, your trusted partner in navigating the complex digital landscape. Founded with the mission to revolutionize the Canadian tech industry, we specialize in providing comprehensive IT solutions tailored to the unique needs of Canadian startups and enterprises in various sectors such as finance, healthcare, retail, and more. Our commitment to quality, timely fashion, excellence, innovation and client satisfaction drives everything we do.",
            img: heroSectionImg,
            whyChooseTitle: "Why Choose <span class='text-green'>ReformedTech.<span class='lowercase'>ca</span>?</span>",
            teamContactTitle: "<span class='text-green'>Ready to take</span> your business to the next level?",
            teamContactSubtitle: "Contact us today to discuss your project and discover how ReformedTech.ca can help you achieve your goals.",
            teamContactImg: aboutContactImg,
            chooseImg: aboutChooseImg,
            chooseFaqItems: [
                {
                    question: "Canadian Expertise, Global Reach: ",
                    answers: [
                        {
                            description: "While we offer offshore services, we are firmly anchored in Canadian values of integrity, quality, and reliability. Our solutions embody the high standards expected of Canadian businesses."
                        }
                    ],
                    open: true
                },
                {
                    question: "Cost-Effective Solutions:",
                    answers: [
                        {
                            description: "Our offshore development model allows us to offer high-quality services at competitive rates, enabling you to optimize your return on investment."
                        }
                    ],
                    open: false
                },
                {
                    question: "Dedicated Team",
                    answers: [
                        {
                            description: "Our team comprises highly skilled professionals with extensive experience in software development and web design. We are dedicated to delivering exceptional results and exceeding client expectations."
                        }
                    ],
                    open: false
                },
                {
                    question: "Customer-Centric Approach",
                    answers: [
                        {
                            description: "We prioritize our clients' needs and collaborate closely to comprehend their business objectives. Our customized solutions guarantee that we fulfil and surpass their specific needs."
                        }
                    ],
                    open: false
                },
                {
                    question: "Innovative Technologies",
                    answers: [
                        {
                            description: "We stay ahead by embracing the latest technologies, such as AI, ML, cloud-based applications, and blockchain, ensuring our solutions are current and future-proof."
                        }
                    ],
                    open: false
                },
                {
                    question: "Comprehensive Solutions",
                    answers: [
                        {
                            description: "From custom software development to responsive web design, we provide end-to-end services tailored to your unique requirements."
                        }
                    ],
                    open: false
                },
                {
                    question: "Quality Assurance",
                    answers: [
                        {
                            description: "We adhere to strict standards to ensure dependable, secure, and efficient solutions. Our process includes comprehensive testing, regular reviews, and continuous improvement based on client feedback to meet your business needs."
                        }
                    ],
                    open: false
                },
                {
                    question: "Seamless Communication",
                    answers: [
                        {
                            description: "We prioritize clear, timely communication despite working across time zones. We use various tools and strategies, such as video conferences and project management software, to keep you informed and involved in your project's progress."
                        }
                    ],
                    open: false
                },
            ],
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'About ReformedTech | One of the leading development Company',
            meta: [
                { name: 'description', content: 'ReformedTech is an outsourcing development company with a dedicated team of experienced professionals' },
                { property: 'og:title', content: 'About ReformedTech | One of the leading development Company' },
                { property: 'og:description', content: 'ReformedTech is an outsourcing development company with a dedicated team of experienced professionals' },
                { property: 'og:image', content: 'https://reformedtech.ca/logo-02.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                { rel: 'canonical', href: canonicalUrl },
            ]
        });

        return {
            ...toRefs(state)
        };
    }
};
</script>

<style scoped></style>
