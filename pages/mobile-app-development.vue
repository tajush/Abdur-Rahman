<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <Breadcrumbs />
        <SolutionsWhyChoose :title="whyChooseTitle" :chooseFaqItems="chooseFaqItems" :img="chooseImg" />
        <SolutionsDevelopmentServices :title="developmentTitle" :developmentFaqItems="developmentFaqItems" :img="devImg" />
        <!-- <VerticalTestimonial /> -->
        <SolutionsDevelopmentStep :title="stepTitle" :arguments="arguments" />
        <!-- <HomeTestimonials /> -->
        <SolutionsSolutionFaq :solutionFaqItems="solutionFaqItems" />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle" :teamContactImg="teamContactImg" />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/talent-retention/talent-hero-section-img.svg'
import mobileContactImg from '/assets/img/solution/mobile-team-contact.png'
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
import mobileChooseImg from '/assets/img/solution/mobile-choose-img.png'
import mobileDevImg from '/assets/img/solution/mobile-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "Elevate Your <span class='text-green'>Business</span> with ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "Welcome to ReformedTech.ca, your trusted partner for mobile app development in Canada. We specialize in creating innovative, user-friendly mobile applications that help businesses connect with customers, streamline operations, and drive growth. We aim to deliver high-quality, cost-effective solutions that meet your unique needs and exceed your expectations.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Elevate</span> Your Mobile Presence",
            teamContactSubtitle: "A well-designed mobile app is vital for businesses in today's mobile-first era. Partner with ReformedTech.ca for Canadian expertise in mobile app development, user-centric design, and secure solutions. Schedule a call today to enhance your mobile presence.",
            teamContactImg: mobileContactImg,
            benifitTitle: "Website Development Services We Provide",
            whyChooseTitle: "Why Choose ReformedTech.<span class='lowercase'>ca</span> for <span class='text-green'>Mobile App Development</span>",
            developmentTitle: "Our <span class='text-green'>Mobile App Development</span> Services",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            chooseImg: mobileChooseImg,
            devImg: mobileDevImg,
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
            arguments: [
                {
                    width: "35",
                    step: "Step 1",
                    icon: phoneIcon,
                    altText: "phone icon",
                    arrow: LineArrow,
                    title: "Discovery and Planning",
                    subTitle: "We'll discuss your business goals, target audience, and mobile app requirements during an initial discovery call. Our team will create a detailed project plan, including wireframes, design concepts, and technical specifications."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Design and Development ",
                    subTitle: "Our designers and developers work together to bring your mobile app vision to life. We prioritize responsive design, ensure optimal user experiences across devices and platforms, and incorporate best performance and security practices."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Testing and Optimization",
                    subTitle: "Our team conducts thorough testing to identify and resolve any issues before launch. We also optimize your mobile app for app stores, ensuring maximum visibility and organic downloads."
                },
                {
                    width: "36",
                    step: "Step 4",
                    icon: teamIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Launch and Ongoing Support ",
                    subTitle: "After a successful launch, we provide ongoing support and maintenance services to ensure your mobile app remains up-to-date, secure, and performing at its best. We also implement continuous integration and delivery pipelines for frequent updates and improvements."
                },
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
                    question: "Strong Canadian Presence and Local Market Understanding",
                    answers: [
                        {
                            title: "Local Insight, Global Expertise: ",
                            description: "We combine our deep understanding of the Canadian market with global best practices to create mobile apps that resonate locally and perform globally."
                        },
                        {
                            title: "Tailored Solutions:",
                            description: "We understand that every business is unique. We customize our mobile app development services to meet your business's needs. This ensures your app stands out in the competitive Canadian landscape, making you feel valued and understood."
                        }
                    ],
                    open: true
                },
                {
                    question: "Comprehensive Expertise in Mobile Technologies",
                    answers: [
                        {
                            title: "iOS and Android Development: ",
                            description: "Our team has extensive experience developing high-quality mobile apps for iOS and Android platforms."
                        },
                        {
                            title: "Cross-Platform Solutions: ",
                            description: "We offer cross-platform development services to ensure your app reaches the widest possible audience with a consistent user experience across devices."
                        },
                        {
                            title: "Cutting-Edge Technologies: ",
                            description: "We leverage the latest technologies and frameworks to create innovative and robust mobile applications."
                        },
                    ],
                    open: false
                },
                {
                    question: "Agile and Transparent Development Process",
                    answers: [
                        {
                            title: "Transparency:",
                            description: "We keep you informed at every stage of the development process with clear and consistent communication."
                        },
                        {
                            title: "Agility:",
                            description: "Our agile methodology allows us to adapt quickly to changes, ensuring the best outcomes for your business."
                        },
                        {
                            title: "Collaborative Approach:",
                            description: "We work closely with you to ensure your vision is realized in every project."
                        }
                    ],
                    open: false
                },
                {
                    question: "Commitment to Quality and Innovation",
                    answers: [
                        {
                            title: "High Standards: ",
                            description: "We maintain rigorous quality assurance processes to ensure every website meets the highest standards."
                        },
                        {
                            title: "Innovative Solutions: ",
                            description: "Our team stays current with the latest industry trends to deliver innovative and effective mobile apps."
                        }
                    ],
                    open: false
                },
                {
                    question: "Robust Security Measures",
                    answers: [
                        {
                            title: "Security First: ",
                            description: "We implement robust security measures to protect your website and user data."
                        },
                        {
                            title: "Compliance:",
                            description: "Our solutions adhere to industry standards and regulations, ensuring your site is secure and compliant."
                        }
                    ],
                    open: false
                },
                {
                    question: "Proven Track Record of Success",
                    answers: [
                        {
                            title: "Success Stories",
                            description: "From startups to established enterprises, our website development services have a proven track record of delivering outstanding results across various industries."
                        },
                        {
                            title: "Client Satisfaction: ",
                            description: "Our long-term partnerships and high client retention rates demonstrate our commitment to excellence and customer satisfaction."
                        }
                    ],
                    open: false
                },
            ],
            developmentFaqItems: [
                {
                    question: "Custom Mobile App Development",
                    answers: [
                        {
                            title: "Tailored Solutions:",
                            description: "We create custom websites that align with your brand and business goals."
                        },
                        {
                            title: "End-to-End Development: ",
                            description: "We handle the entire website development lifecycle from initial concept to deployment and maintenance."
                        }
                    ],
                    open: true
                },
                {
                    question: "iOS App Development",
                    answers: [
                        {
                            title: "Apple Ecosystem:",
                            description: "We develop high-quality iOS apps that provide a seamless user experience within the Apple ecosystem."
                        },
                        {
                            title: "App Store Optimization: ",
                            description: "Our iOS apps are optimized for performance and visibility on the App Store."
                        }
                    ],
                    open: false
                },
                {
                    question: "Android App Development",
                    answers: [
                        {
                            title: "Google Play Expertise:",
                            description: "We build robust Android apps that perform well across various devices."
                        },
                        {
                            title: "User-Centric Design: ",
                            description: "Our Android apps are designed with the end-user in mind, ensuring an intuitive and engaging experience."
                        }
                    ],
                    open: false
                },
                {
                    question: "Cross-Platform App Development",
                    answers: [
                        {
                            title: "Consistent Experience: ",
                            description: "We develop cross-platform apps that provide a consistent user experience across iOS and Android devices."
                        },
                        {
                            title: "Efficient Development: ",
                            description: "Our cross-platform solutions reduce development time and cost while maintaining high quality."
                        }
                    ],
                    open: false
                },
                {
                    question: "UI/UX Design",
                    answers: [
                        {
                            title: "Intuitive Interfaces: ",
                            description: "Our <a class='hover:text-primary-color' href='/ui-ux-design'>UI/UX design</a> services focus on creating intuitive interfaces that enhance user satisfaction and engagement."
                        },
                        {
                            title: "User Research:",
                            description: "We conduct thorough user research to understand your audience and design experiences that meet their needs."
                        }
                    ],
                    open: false
                },
                {
                    question: "Maintenance and Support",
                    answers: [
                        {
                            title: "Ongoing Support: ",
                            description: "We provide ongoing maintenance and support to ensure your website runs smoothly."
                        },
                        {
                            title: "Proactive Monitoring:",
                            description: "Our proactive <a class='hover:text-primary-color' href='/qa-testing'>monitoring services</a> identify and resolve issues before they impact your business."
                        }
                    ],
                    open: false
                },
            ],
            solutionFaqItems: [
                {
                    question: "Why should I invest in a mobile app for my business?",
                    answer: "In today's mobile-centric world, having a well-designed and functional mobile app can provide a competitive advantage, enhance customer engagement, streamline operations, and open new revenue streams for your business.",
                    open: true
                },
                {
                    question: "How long does it take to develop a mobile app? ",
                    answer: "The development timeline varies depending on the complexity of your project and the features required. During our discovery call, we'll provide a realistic timeline estimate based on your requirements.",
                    open: false
                },

            ]
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Quality mobile app development services | ReformedTech',
            meta: [
                { name: 'description', content: "You can rely on ReformedTech as your trusted mobile application development partner. Our team of expert developers excels in providing top-notch mobile application development services" },
                { property: 'og:title', content: 'Quality mobile app development services | ReformedTech' },
                { property: 'og:description', content: "You can rely on ReformedTech as your trusted mobile application development partner. Our team of expert developers excels in providing top-notch mobile application development services" },
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