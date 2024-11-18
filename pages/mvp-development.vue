<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <SolutionsExtendedBreadcrumbs :text="breadcrumbsText" />
        <SolutionsWhyChoose :title="whyChooseTitle" :chooseFaqItems="chooseFaqItems" :img="chooseImg" />
        <SolutionsDevelopmentServices :title="developmentTitle" :developmentFaqItems="developmentFaqItems" :img="devImg" />
        <ServiceBenifits :title="benifitTitle" :features="features" />
        <SolutionsPorcessStep :title="stepTitle" :arguments="arguments" />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle" :teamContactImg="teamContactImg" />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/talent-retention/talent-hero-section-img.svg'
import mvpContactImg from '/assets/img/solution/mvp-team-contact.png'
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
import mvpChooseImg from '/assets/img/solution/mvp-choose-img.png'
import mvpDevImg from '/assets/img/solution/mvp-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "Accelerate Your <span class='text-green'>Innovation</span> with MVP Development",
            subTitle: "At ReformedTech.ca, we specialize in rapidly turning your ideas into reality. Our MVP development service helps you launch quickly, gather feedback, and make efficient iterations. Whether you're a startup or an established business, our expert team delivers high-quality, cost-effective MVPs tailored to your goals. Our streamlined approach helps you get to market sooner, reduce risk, and maximize your potential for success.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Get Started</span> with Your MVP",
            teamContactSubtitle: "ReformedTech.ca is here to help you navigate the MVP development process. Our team of experts is prepared to guide you from the initial concept to a successful launch and beyond. Contact us today at <a href='mailto:contact@reformedtech.ca'>contact@reformedtech.ca</a> or visit our website to schedule a consultation. Let's work together to turn your vision into a reality with a strategically crafted MVP.",
            teamContactImg: mvpContactImg,
            benifitTitle: "MVP Development Services We Provide",
            whyChooseTitle: "<span class='text-green'>Why Choose</span> ReformedTech.<span class='lowercase'>ca</span> for MVP Development",
            chooseImg: mvpChooseImg,
            developmentTitle: "Our <span class='text-green'>Streamlined</span> Process",
            developmentTitle: "Our <span class='text-green'>MVP Development</span> Process",
            benifitTitle: "<span class='text-green'>Benefits</span> of MVP Development",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            devImg: mvpDevImg,
            breadcrumbsText: "MVP Development",
                features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Canadian Expertise",
                    subTitle: "Our deep understanding of the Canadian market ensures your MVP resonates with local users while having global appeal."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Agile Methodology",
                    subTitle: "Our flexible and adaptive development approach means we can respond quickly to changes and new insights."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "Cost-Effective Solutions",
                    subTitle: "We're committed to maximizing the value of your investment, delivering high-quality MVPs within your budget."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Experienced Team",
                    subTitle: "Our skilled professionals have a proven mobile and web development track record across various industries."
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Quality Assurance",
                    subTitle: "We employ rigorous testing protocols to ensure your MVP is reliable and performs well under real-world conditions."
                },

                {
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Ongoing Support",
                    subTitle: "Our commitment doesn't end at launch. We provide continuous assistance to help your MVP evolve and grow."
                },
            ],
            arguments: [
                {
                    width: "35",
                    step: "Step 1",
                    icon: phoneIcon,
                    altText: "phone icon",
                    arrow: LineArrow,
                    title: "Join exploration call",
                    subTitle: "Tell us more about your business on a discovery call. We'll discuss team structure, success criteria, timescale, budget to see how we can help."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Explore the solution and team setup",
                    subTitle: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Get started and track performance",
                    subTitle: "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs."
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
            chooseFaqItems: [
            {
                    question: "Faster Time-to-Market",
                    answers: [
                        {
                            description: "Launch your product quickly and gain a competitive edge"
                        },
                        {
                            description: "Establish an early market presence and build brand recognition"
                        },
                        {
                            description: "Start generating revenue sooner, supporting further development"
                        },
                    ],
                    open: true
                },
                {
                    question: "Cost-Effective",
                    answers: [
                        {
                            description: "Minimizes initial development costs by focusing on core features"
                        },
                        {
                            description: "It avoids the expense of building unnecessary features that users may not want"
                        },
                        {
                            description: "Optimizes resource allocation, ensuring your budget is spent on what truly matters"
                        },
                    ],
                    open: false
                },
                {
                    question: "User-Centric Approach",
                    answers: [
                        {
                            description: "You can gather real user feedback on your product early in its lifecycle"
                        },
                        {
                            description: "It becomes possible to validate your product ideas with actual users, not just assumptions"
                        },
                        {
                            description: "You can improve and iterate based on genuine user needs and preferences"
                        },
                    ],
                    open: false
                },
                {
                    question: "Risk Mitigation",
                    answers: [
                        {
                            description: "Allowing you to test market viability with minimal initial investment"
                        },
                        {
                            description: "Enabling early identification and addressing of potential issues"
                        },
                        {
                            description: "Providing the flexibility to pivot your strategy if needed before committing to full-scale development"
                        },
                    ],
                    open: false
                }
            ],
            developmentFaqItems: [
                {
                    question: "Idea Validation",
                    answers: [
                        {
                            description: "Analyzing your concept in depth to understand its unique value proposition"
                        },
                        {
                            description: "Conducting thorough market research to identify opportunities and challenges"
                        },
                        {
                            description: "Clearly defining your target audience to ensure the product meets their needs"
                        },
                    ],
                    open: true
                },
                {
                    question: "Feature Prioritization",
                    answers: [
                        {
                            description: "We work together to identify core functionalities that define your product"
                        },
                        {
                            description: "Create a feature roadmap that outlines current and future development plans"
                        },
                        {
                            description: "Focus on crucial elements that will provide immediate value to users"
                        },
                    ],
                    open: false
                },
                {
                    question: "Design and Prototyping",
                    answers: [
                        {
                            description: "Developing detailed wireframes to layout the user interface"
                        },
                        {
                            description: "Creating interactive prototypes to test user flows and gather early feedback"
                        },
                        {
                            description: "Ensuring a <a class='hover:text-primary-color' href='/ui-ux-design'>user-friendly interface</a> that aligns with your brand and user expectations"
                        },
                    ],
                    open: false
                },
                {
                    question: "Agile Development",
                    answers: [
                        {
                            description: "Implementing core features in short, manageable sprints"
                        },
                        {
                            description: "Using iterative development cycles to refine the product continuously"
                        },
                        {
                            description: "Maintaining flexibility to accommodate changes based on new insights or feedback"
                        },
                    ],
                    open: false
                },
                {
                    question: "Testing and Quality Assurance",
                    answers: [
                        {
                            description: "Conducting thorough testing across different devices and scenarios"
                        },
                        {
                            description: "Ensuring functionality performs as expected, and the app can handle expected user loads"
                        },
                        {
                            description: "<a class='hover:text-primary-color' href='/qa-testing'>Identifying and addressing</a> any bugs or issues before they reach users"
                        },
                    ],
                    open: false
                },
                {
                    question: "Launch and Feedback Collection",
                    answers: [
                        {
                            description: "Releasing your MVP to a select group of early adopters"
                        },
                        {
                            description: "Setting up systems to gather and analyze user feedback effectively"
                        },
                        {
                            description: "Collecting and analyzing usage data to inform future development decisions"
                        },
                    ],
                    open: false
                },
                {
                    question: "Iteration and Improvement",
                    answers: [
                        {
                            description: "Incorporating user feedback into future development plans"
                        },
                        {
                            description: "Refining existing features based on user behavior and preferences"
                        },
                        {
                            description: "Planning future development phases to add value and attract a wider user base"
                        },
                    ],
                    open: false
                },
            ],
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'MVP Development Company | ReformedTech',
            meta: [
                { name: 'description', content: "ReformedTech is a comprehensive software and MVP development company. Trust us to handle your idea from conceptualization through development and implementation." },
                { property: 'og:title', content: 'MVP Development Company | ReformedTech' },
                { property: 'og:description', content: "ReformedTech is a comprehensive software and MVP development company. Trust us to handle your idea from conceptualization through development and implementation." },
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