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
import webContactImg from '/assets/img/web-development/web-team-contact.png'
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
import webChooseImg from '/assets/img/solution/web-why-choose-img.png'
import webDevImg from '/assets/img/solution/web-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "Elevate Your <span class='text-green'>Online Presence</span> with ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "Welcome to ReformedTech.ca, the leading website development partner in Canada. We specialize in creating dynamic, responsive, user-friendly websites that drive engagement, align with your business goals, and exceed expectations.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Elevate</span> Your Online Presence",
            teamContactSubtitle: "Partner with ReformedTech.ca for a compelling online presence. Our Canadian team, user-centric design, SEO, and secure solutions ensure a successful digital transformation. Schedule a discovery call today!",
            teamContactImg: webContactImg,
            benifitTitle: "Website Development Services We Provide",
            whyChooseTitle: "Why Choose ReformedTech for <span class='text-green'>Website Development</span>",
            developmentTitle: "Our <span class='text-green'>Website Development</span> Services",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            chooseImg: webChooseImg,
            devImg: webDevImg,
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
                    subTitle: "We'll discuss your business goals, target audience, and website requirements during an initial discovery call. Our team will create a detailed project plan, including wireframes, design concepts, and technical specifications."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Design and Development ",
                    subTitle: "Our designers and developers work together to bring your website vision to life. We prioritize responsive design, ensuring optimal user experiences across devices, and incorporate best practices for performance and accessibility."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Testing and Optimization",
                    subTitle: "Our team conducts thorough testing to identify and resolve any issues before launch. We also optimize your website for search engines, ensuring maximum visibility and organic traffic potential."
                },
                {
                    width: "36",
                    step: "Step 4",
                    icon: teamIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Launch and Ongoing Support ",
                    subTitle: "After a successful launch, we provide ongoing support and maintenance services to ensure your website remains up-to-date, secure, and performing at its best."
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
                            description: "We understand the unique Canadian market and combine local insights with global best practices to create websites that perform locally and globally, ensuring your business's success in Canada."
                        },
                        {
                            title: "Tailored Solutions:",
                            description: "We customize our website development services to meet your business's specific needs, ensuring your site stands out in the competitive Canadian landscape."
                        }
                    ],
                    open: true
                },
                {
                    question: "Comprehensive Expertise",
                    answers: [
                        {
                            title: "Front-End Development: ",
                            description: "Our team creates intuitive, engaging interfaces that provide a seamless user experience."
                        },
                        {
                            title: "Back-End Development: ",
                            description: "We build robust, scalable server-side solutions that ensure your website performs reliably and efficiently."
                        },
                        {
                            title: "Full-Stack Development: ",
                            description: "We integrate front-end and back-end development to deliver comprehensive, high-quality websites that meet all your needs."
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
                            title: "Collaborative Approach",
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
                            title: "Cutting-Edge Solutions: ",
                            description: "Our team stays up-to-date with the latest technologies and trends to deliver innovative and effective websites."
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
                    question: "Custom Website Development",
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
                    question: "Responsive Web Design",
                    answers: [
                        {
                            title: "Mobile-Friendly: ",
                            description: "We design websites that look great and perform well on all devices, providing a seamless user experience."
                        },
                        {
                            title: "Adaptive Design: ",
                            description: "Our responsive <a class='hover:text-primary-color' href='/web-design'>web design</a> ensures your site adapts to various screen sizes and resolutions."
                        }
                    ],
                    open: false
                },
                {
                    question: "eCommerce Website Development",
                    answers: [
                        {
                            title: "Comprehensive Platforms: ",
                            description: "We develop robust eCommerce platforms that support your business growth and provide an excellent customer experience."
                        },
                        {
                            title: "Secure Transactions: ",
                            description: "Our solutions ensure safe and reliable transactions, building customer trust."
                        }
                    ],
                    open: false
                },
                {
                    question: "Content Management Systems (CMS)",
                    answers: [
                        {
                            title: "User-Friendly: ",
                            description: "We build intuitive CMS platforms that make managing and updating your website content easy."
                        },
                        {
                            title: "Scalable Solutions: ",
                            description: "Our CMS solutions are designed to grow with your business, providing the flexibility you need."
                        }
                    ],
                    open: false
                },
                {
                    question: "UI/UX Design",
                    answers: [
                        {
                            title: "Intuitive Interfaces: ",
                            description: "Our <a class='hover:text-primary-color' href='/ui-ux-design'>UI/UX design services</a> focus on creating intuitive interfaces that enhance user satisfaction and engagement."
                        },
                        {
                            title: "User Research:",
                            description: "We conduct thorough user research to understand your audience and design experiences that meet their needs."
                        }
                    ],
                    open: false
                },
                {
                    question: "SEO and Digital Marketing",
                    answers: [
                        {
                            title: "Search Engine Optimization:",
                            description: "We optimize your website to improve visibility and ranking on search engines."
                        },
                        {
                            title: "Digital Marketing Strategies:",
                            description: "Our <a class='hover:text-primary-color' href='/digital-marketing'>digital marketing services</a> help attract and retain customers, driving traffic and conversions."
                        }
                    ],
                    open: false
                },
                {
                    question: "Maintenance and Support",
                    answers: [
                        {
                            title: "Ongoing Support: ",
                            description: "We provide ongoing <a class='hover:text-primary-color' href='/qa-testing'>maintenance and support</a> to ensure your website runs smoothly."
                        },
                        {
                            title: "Proactive Monitoring:",
                            description: "Our proactive monitoring services identify and resolve issues before they impact your business."
                        }
                    ],
                    open: false
                },
            ],
            solutionFaqItems: [
                {
                    question: "Why should I hire a website development company? ",
                    answer: "Partnering with a professional website development company like ReformedTech.ca ensures your website is built with the latest technologies, optimized for search engines, and adheres to industry best practices for performance, security, and user experience.",
                    open: true
                },
                {
                    question: "How long does it take to develop a website? ",
                    answer: "The development timeline varies depending on the complexity of your project and the features required. We'll provide a realistic timeline estimate based on your requirements during our discovery call.",
                    open: false
                },

            ]
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Web Development Company | ReformedTech',
            meta: [
                { name: 'description', content: "Achieve project success with web development services from a leading company. Get top-notch web design and development solutions with ReformedTech." },
                { property: 'og:title', content: 'Web Development Company | ReformedTech' },
                { property: 'og:description', content: "Achieve project success with web development services from a leading company. Get top-notch web design and development solutions with ReformedTech." },
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