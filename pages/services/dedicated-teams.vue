<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <Breadcrumbs />
        <TechTeamCollaboration />
        <TalentRetentionWhyChoose />
        <SolutionsDevelopmentServices :title="developmentTitle" :developmentFaqItems="developmentFaqItems" :img="chooseImg" />
        <!-- <VerticalTestimonial /> -->
        <TalentRetentionHiringDifference />
        <TalentRetentionCallToAction />
        <!-- <HomeTestimonials /> -->
        <SolutionsPorcessStep :title="stepTitle" :arguments="arguments" /> 
        <TalentRetentionDedicatedFaq />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle" :teamContactImg="teamContactImg" />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/talent-retention/talent-hero-section-img.svg'
import teamContactImg from '/assets/img/talent-retention/team-contact-img.png'
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
import dedicatedChooseImg from '/assets/img/service/why-choose-img.png'

export default {
    setup() {
        const state = reactive({
            title: "Empower Your Canadian Business with <span class='text-green'>Top-Tier Talent</span> from ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "ReformedTech.ca is a Canadian company specializing in offshore software development and web design. We provide dedicated teams that seamlessly integrate with your in-house staff to promptly deliver high-quality, cost-effective solutions.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Accelerate</span> Your Software Development Journey",
            teamContactSubtitle: "Do not let resource constraints or skill gaps hold you back. Partner with ReformedTech.ca and leverage our dedicated software development teams to unlock your project's full potential. Schedule a discovery call today and experience the seamless integration and exceptional delivery that sets us apart.",
            teamContactImg: teamContactImg,
            benifitTitle: "Expertise you can trust from the #1 offshore tech staffing firm",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            developmentTitle: "Let's dive deeper into the <span class='text-green'>expertise of our dedicated</span> team members",
            chooseImg: dedicatedChooseImg,
                features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Top Talent",
                    subTitle: "We custom recruit the top 3% of talent so your Center of Excellence will always deliver exactly that: Excellence."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Fast Start",
                    subTitle: "We get your Center of Excellence up and running - and building great code - with initial staff in under 60 days."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "Soup to Nuts",
                    subTitle: "We source and hire key roles and domain experts while managing the infrastructure for your development center's success."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Transparent Pricing",
                    subTitle: "Swiftly integrate our experienced professionals into your existing workflow for accelerated project timelines."
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Hyper Loyal",
                    subTitle: "Foster a seamless collaboration between our extended team and your in-house staff, enhancing overall productivity."
                },

                {
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Infinite Scalability",
                    subTitle: "Experience transparent and proactive communication channels, keeping you informed and in control throughout the development process."
                },
            ],
            benifitTitle2: "Benefits of working with us",
                features2: [
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
            ],
            arguments: [
                {
                    width: "35",
                    step: "Step 1",
                    icon: phoneIcon,
                    altText: "phone icon",
                    arrow: LineArrow,
                    title: "Discovery Call ",
                    subTitle: "Share your business goals and requirements with us during an initial discovery call. We'll discuss team structure, project approach, success criteria, timelines, budget, and required skill sets."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Team Assembly ",
                    subTitle: "Based on your needs, we'll swiftly assemble the perfect team, ensuring the right mix of expertise and experience for your project."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Onboarding and Execution  ",
                    subTitle: "After a seamless onboarding process (introducing the team to your company's operations, values, and work processes), your dedicated team will hit the ground running, delivering high-quality work. At the same time, you track progress and manage the team as needed."
                }
            ],
            developmentFaqItems: [
                {
                    question: "Software Developers",
                    answers: [
                        {
                            title: "Front-End Development: ",
                            description: "Crafting intuitive <a class='hover:text-primary-color' href='/ui-ux-design'>user interfaces</a> using HTML, CSS, and JavaScript."
                        },
                        {
                            title: "Back-End Development:",
                            description: "Building robust <a class='hover:text-primary-color' href='/website-development'>server-side applications</a> with languages like Python, Java, or Node.js."
                        },
                        {
                            title: "Mobile App Development:",
                            description: "Creating <a class='hover:text-primary-color' href='/mobile-app-development'>seamless experiences for iOS</a> (Swift) and Android (Kotlin/Java)."
                        },
                        {
                            title: "DevOps:",
                            description: "Ensuring <a class='hover:text-primary-color' href='/devops-solution'>smooth deployment</a>, monitoring, and scaling of applications."
                        },
                    ],
                    open: true
                },
                {
                    question: "Quality Assurance (QA) Engineers",
                    answers: [
                        {
                            title: "Test Automation: ",
                            description: "Writing test scripts and <a class='hover:text-primary-color' href='/qa-testing'>ensuring code quality.</a>"
                        },
                        {
                            title: "Manual Testing:",
                            description: "Rigorous testing to identify and fix issues."
                        },
                        {
                            title: "Performance Testing:",
                            description: "Assessing system scalability and responsiveness."
                        }
                    ],
                    open: false
                },
                {
                    question: "Project Managers (PMs)",
                    answers: [
                        {
                            title: "Agile Methodologies",
                            description: "Facilitating sprints, backlog management, and sprint planning."
                        },
                        {
                            title: "Communication:",
                            description: "Bridging the gap between technical teams and stakeholders."
                        },
                        {
                            title: "Risk Management:",
                            description: "Mitigating project risks and ensuring timely delivery."
                        }
                    ],
                    open: false
                },
                {
                    question: "UX/UI Designers",
                    answers: [
                        {
                            title: "User Experience (UX):",
                            description: "Craft user flows, wireframes, and prototypes."
                        },
                        {
                            title: "User Interface (UI): ",
                            description: "Design visually appealing interfaces aligned with your brand."
                        }
                    ],
                    open: false
                },
                {
                    question: "Data Scientists and Analysts:",
                    answers: [
                        {
                            title: "Machine Learning:",
                            description: "Developing predictive models and recommendation systems."
                        },
                        {
                            title: "Data Visualization: ",
                            description: "Creating meaningful visualizations using tools like Tableau or D3.js."
                        },
                        {
                            title: "Risk Management:",
                            description: "Mitigating project risks and ensuring timely delivery."
                        }
                    ],
                    open: false
                }

            ],
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Dedicated Team | ReformedTech offshore Development Company',
            meta: [
                { name: 'description', content: "Looking to hire a dedicated development team? We can assemble a highly skilled, dedicated software development team, including software engineers and other experts, in a short timeframe." },
                { property: 'og:title', content: 'Dedicated Team | ReformedTech offshore Development Company' },
                { property: 'og:description', content: "Looking to hire a dedicated development team? We can assemble a highly skilled, dedicated software development team, including software engineers and other experts, in a short timeframe." },
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