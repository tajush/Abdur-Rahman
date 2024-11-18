<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <SolutionsExtendedBreadcrumbs :text="breadcrumbsText" />
        <ServiceBenifits :title="benifitTitle" :features="features" />
        <SolutionsDevelopmentServices :title="developmentTitle" :developmentFaqItems="developmentFaqItems" :img="devImg" />
        <!-- <VerticalTestimonial /> -->
        <SolutionsPorcessStep :title="stepTitle" :arguments="arguments" />
        <!-- <HomeTestimonials /> -->
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle" :teamContactImg="teamContactImg" />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/talent-retention/talent-hero-section-img.svg'
import qaContactImg from '/assets/img/solution/qa-team-contact.png'
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
import qaDevImg from '/assets/img/solution/qa-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "<span class='text-green'>Ensure Excellence</span> with ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "Welcome to ReformedTech.ca, Canada's premier partner for QA and testing services. We provide comprehensive quality assurance and testing solutions to ensure your software performs flawlessly and meets the highest quality standards. Our mission is to deliver high-quality, cost-effective QA and testing services tailored to the unique needs of Canadian businesses, ensuring your software is reliable, secure, and user-friendly.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Ready to Ensure</span> Your Software's Excellence?",
            teamContactSubtitle: "Navigate your goals with our web experts. We assist in offering solutions to  ensure your digital journey is smooth, effective, and aligned with your objectives.",
            teamContactImg: qaContactImg,
            benifitTitle: "<span class='text-green'>Benefits</span> of Our QA and Testing Services",
            whyChooseTitle: "Why Choose ReformedTech for QA & Testing",
            developmentTitle: "Our <span class='text-green'>QA and Testing</span> Services",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            devImg: qaDevImg,
            breadcrumbsText: "QA Testing",
                features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Access specialized QA talent",
                    subTitle: "Our dedicated testing professionals bring deep experience across testing types, environments and tools."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Increase test coverage",
                    subTitle: "Our automation frameworks help you achieve higher test coverage than manual testing alone."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "Accelerate releases ",
                    subTitle: "Comprehensive testing eliminates bottlenecks so you can ship software faster with confidence."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Mitigate risks",
                    subTitle: "Rigorous QA processes catch defects early, reducing technical debt and compliance issues."
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Improve user satisfaction",
                    subTitle: "Your customers get an optimal user experience across digital touchpoints."
                },

                {
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Leverage best practices",
                    subTitle: "We employ modern QA methodologies like shift-left testing, risk-based testing and more."
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
            developmentFaqItems: [
                {
                    question: "Manual Testing",
                    answers: [
                        {
                            title: "Comprehensive Coverage:",
                            description: "Our testers perform detailed manual testing to identify defects that automated tests might miss."
                        },
                        {
                            title: "User-Centric Approach: ",
                            description: "We simulate real user scenarios to ensure your software provides a seamless and intuitive user experience."
                        }
                    ],
                    open: true
                },
                {
                    question: "Automated Testing",
                    answers: [
                        {
                            title: "Efficiency and Accuracy: ",
                            description: "We use advanced automation tools to execute repetitive tests, increasing efficiency and accuracy."
                        },
                        {
                            title: "Continuous Integration: ",
                            description: "Our automated testing solutions integrate with your <a class='hover:text-primary-color' href='/devops-solution'>CI/CD pipeline</a>, ensuring continuous testing and rapid feedback."
                        }
                    ],
                    open: false
                },
                {
                    question: "Performance Testing",
                    answers: [
                        {
                            title: "Load Testing: ",
                            description: "We simulate high user loads to ensure your software performs well under stress."
                        },
                        {
                            title: "Scalability Testing: ",
                            description: "Our scalability testing services ensure your software can grow with your business and handle increasing user demands."
                        }
                    ],
                    open: false
                },
                {
                    question: "Security Testing",
                    answers: [
                        {
                            title: "Vulnerability Assessment: ",
                            description: "We identify and address potential security vulnerabilities in your software."
                        },
                        {
                            title: "Penetration Testing: ",
                            description: "Our penetration testing services simulate cyber-attacks to evaluate the security of your software and protect it from threats."
                        }
                    ],
                    open: false
                },
                {
                    question: "Functional Testing",
                    answers: [
                        {
                            title: "End-to-End Testing: ",
                            description: "We test the functionality of your software to ensure it meets all requirements and performs as expected."
                        },
                        {
                            title: "Regression Testing: ",
                            description: "Our regression testing services ensure that new updates do not negatively impact existing functionality."
                        }
                    ],
                    open: false
                },
                {
                    question: "Usability Testing",
                    answers: [
                        {
                            title: "User Experience: ",
                            description: "We conduct usability testing to ensure your software is user-friendly and provides an excellent user experience."
                        },
                        {
                            title: "Feedback Integration:",
                            description: "We gather and integrate user feedback to continuously improve your software's usability."
                        }
                    ],
                    open: false
                }
                
            ],
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'QA & Software Testing Solutions | ReformedTechQA & Testing',
            meta: [
                { name: 'description', content: "To make sure your deliverables meet the highest standards, ReformedTech provides the best quality assurance services." },
                { property: 'og:title', content: 'QA & Software Testing Solutions | ReformedTechQA & Testing' },
                { property: 'og:description', content: "To make sure your deliverables meet the highest standards, ReformedTech provides the best quality assurance services." },
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