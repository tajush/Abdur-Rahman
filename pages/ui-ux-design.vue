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
import uiContactImg from '/assets/img/solution/ui-team-contact.png'
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
import uiDevImg from '/assets/img/solution/ui-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "Crafting Exceptional <span class='text-green'>User Experiences</span> with ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "Welcome to ReformedTech.ca, Canada's premier destination for UI/UX design services. We stand out by creating not just visually stunning, but also intuitive and engaging user interfaces that offer seamless experiences. Our high-quality, cost-effective design solutions are designed to enhance your brand and delight your users. For detailed pricing information, please visit our website.",
            img: heroSectionImg,
            teamContactTitle: "Ready to Transform Your <span class='text-green'>Digital Presence?</span>",
            teamContactSubtitle: "Unlock your business's full potential with ReformedTech.ca's UI/UX design services. Whether you need a new design, a redesign, or ongoing support, we have the expertise and talent to create exceptional user experiences.",
            teamContactImg: uiContactImg,
            benifitTitle: "<span class='text-green'>Benefits</span> of Our UI/UX Services",
            whyChooseTitle: "Why Choose ReformedTech for UI/UX Design",
            developmentTitle: "Our <span class='text-green'>UI/UX Design</span> Services",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            devImg: uiDevImg,
            breadcrumbsText: "UI/UX Design",
                features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "User-centric approach",
                    subTitle: "At ReformedTech.ca, we prioritize user-centric design through thorough research, testing, and iterative UX processes."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Creative and modern aesthetic",
                    subTitle: "Our talented designers stay ahead of UI/UX trends to deliver fresh and compelling visual designs."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "Optimized user flows",
                    subTitle: "Our information architecture and prototyping ensure seamless and intuitive user journeys."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Multi-platform experience",
                    subTitle: "We at ReformedTech.ca deliver consistent UIs and interactions across web, mobile and emerging interfaces, ensuring your design is always up to date."
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Accessible solutions",
                    subTitle: "Our inclusive design principles break down barriers for users with disabilities."
                },

                {
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Faster time-to-market",
                    subTitle: "We expedite your design-to-launch process by prototyping and closely collaborating with developers. We involve you in every step, from initial concepts to final implementation."
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
                    question: "User Research and Analysis",
                    answers: [
                        {
                            title: "Understanding Your Audience",
                            description: "We conduct in-depth research to understand your users' needs, behaviours, and pain points."
                        },
                        {
                            title: "Data-Driven Design: ",
                            description: "Our designs are based on real user data, ensuring they are intuitive and effective."
                        }
                    ],
                    open: true
                },
                {
                    question: "Wireframing and Prototyping",
                    answers: [
                        {
                            title: "Visualizing Ideas: ",
                            description: "We create detailed wireframes to map out the structure and functionality of your digital product."
                        },
                        {
                            title: "Testing and Validation: ",
                            description: " Our interactive prototypes allow for early testing and validation of the user experience, reducing risks and improving outcomes."
                        }
                    ],
                    open: false
                },
                {
                    question: "Visual Design",
                    answers: [
                        {
                            title: "Brand Alignment: ",
                            description: "We design visually stunning interfaces that reflect your brand identity and values."
                        },
                        {
                            title: "Engaging Interfaces: ",
                            description: "Our designs focus on creating engaging and aesthetically pleasing user interfaces that captivate your audience."
                        }
                    ],
                    open: false
                },
                {
                    question: "Interaction Design",
                    answers: [
                        {
                            title: "Intuitive Interactions: ",
                            description: "We design seamless interactions that make it easy for users to navigate and interact with your digital product."
                        },
                        {
                            title: "Consistent Experience: ",
                            description: "Our interaction designs ensure a consistent and delightful user experience across all devices and platforms."
                        }
                    ],
                    open: false
                },
                {
                    question: "Usability Testing",
                    answers: [
                        {
                            title: "User Feedback: ",
                            description: "We conduct usability testing to gather feedback from real users, identifying areas for improvement and ensuring the design meets their needs."
                        },
                        {
                            title: "Iterative Improvements: ",
                            description: "Based on user feedback, we make iterative improvements to enhance the overall user experience."
                        }
                    ],
                    open: false
                },
                {
                    question: "Responsive Design",
                    answers: [
                        {
                            title: "Multi-Device Compatibility: ",
                            description: "We design responsive interfaces that provide a seamless experience across desktops, tablets, and mobile devices."
                        },
                        {
                            title: "Adaptive Layouts",
                            description: "Our responsive designs adapt to different screen sizes and resolutions, ensuring a consistent user experience."
                        }
                    ],
                    open: false
                }
                
            ],
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'UI/UX Design and Development Services | ReformedTech',
            meta: [
                { name: 'description', content: "ReformedTech offers exceptional UI/UX design and development services to create visually appealing interfaces for web or mobile apps that your users will love. Contact us today!" },
                { property: 'og:title', content: 'UI/UX Design and Development Services | ReformedTech' },
                { property: 'og:description', content: "ReformedTech offers exceptional UI/UX design and development services to create visually appealing interfaces for web or mobile apps that your users will love. Contact us today!" },
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