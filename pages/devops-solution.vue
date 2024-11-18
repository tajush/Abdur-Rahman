<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <SolutionsExtendedBreadcrumbs :text="breadcrumbsText" />
        <SolutionsWhyChoose :title="whyChooseTitle" :chooseFaqItems="chooseFaqItems" :img="chooseImg" />
        <SolutionsDevelopmentServices :title="developmentTitle" :developmentFaqItems="developmentFaqItems"
            :img="devImg" />
        <!-- <VerticalTestimonial /> -->
        <SolutionsDevelopmentStep :title="stepTitle" :arguments="arguments" />
        <!-- <HomeTestimonials /> -->
        <SolutionsSolutionFaq :solutionFaqItems="solutionFaqItems" />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle"
            :teamContactImg="teamContactImg" />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/talent-retention/talent-hero-section-img.svg'
import devopsContactImg from '/assets/img/solution/devops-team-contact.png'
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
import devopsChooseImg from '/assets/img/solution/devops-choose-img.png'
import devopsDevImg from '/assets/img/solution/devops-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "<span class='text-green'>Streamline</span> Your Operations with ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "ReformedTech.ca - Your trusted partner for DevOps solutions in Canada. We specialize in integrating development and operations to enhance collaboration, efficiency, and delivery speed. We provide cost-effective services that meet your business needs and exceed expectations in the fast-paced digital landscape.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Accelerate</span> Your Software Delivery",
            teamContactSubtitle: "Partner with ReformedTech.ca to streamline your software delivery processes and accelerate your software delivery journey. Our Canadian talent, collaborative approach, and automated feedback mechanisms ensure a seamless transition to DevOps best practices. Schedule a discovery call today.",
            teamContactImg: devopsContactImg,
            benifitTitle: "Website Development Services We Provide",
            whyChooseTitle: "Why Choose ReformedTech.<span class='lowercase'>ca</span> for <span class='text-green'>DevOps Solutions</span>",
            developmentTitle: "Our <span class='text-green'>Devops</span> Services",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            chooseImg: devopsChooseImg,
            devImg: devopsDevImg,
            breadcrumbsText: "DevOps Solution",
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
                    title: "Assessment and Planning ",
                    subTitle: "During an initial assessment, we'll analyze your existing software delivery processes, infrastructure, and tooling. Our experts will then create a tailored DevOps roadmap, outlining the strategies and technologies best suited for your business goals."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Implementation and Automation ",
                    subTitle: "Our team will implement the recommended DevOps solutions, automating build, test, and deployment processes and leveraging containerization, orchestration, and infrastructure as code principles for efficient and consistent delivery."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Monitoring and Optimization",
                    subTitle: "We'll establish robust monitoring and feedback mechanisms, enabling proactive issue detection, resolution, and continuous optimization based on data-driven insights."
                },
                {
                    width: "36",
                    step: "Step 4",
                    icon: teamIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Collaboration and Knowledge ",
                    subTitle: "Transfer Throughout the process, our DevOps experts will work closely with your teams, fostering collaboration, knowledge-sharing, and continuous improvement, ensuring long-term success and self-sufficiency."
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
                            description: "We combine our deep understanding of the Canadian market with global best practices to deliver DevOps solutions that are both locally relevant and globally competitive."
                        },
                        {
                            title: "Tailored Solutions:",
                            description: "Our DevOps services are customized to meet your business's specific needs, ensuring seamless integration and optimal performance."
                        }
                    ],
                    open: true
                },
                {
                    question: "Comprehensive Expertise in DevOps Practices",
                    answers: [
                        {
                            title: "Continuous Integration and Continuous Delivery (CI/CD):",
                            description: "We implement CI/CD pipelines to automate and streamline your software development process, reducing time to market and increasing reliability."
                        },
                        {
                            title: "Infrastructure as Code (IaC): ",
                            description: "Our experts use IaC to manage and provision your infrastructure through code, ensuring consistency and scalability."
                        },
                        {
                            title: "Monitoring and Logging: ",
                            description: "We provide robust monitoring and logging solutions to ensure real-time visibility and proactive management of your systems."
                        },
                    ],
                    open: false
                },
                {
                    question: "Agile and Transparent Development Process",
                    answers: [
                        {
                            title: "Transparency: ",
                            description: "We communicate clearly and consistently throughout the development process, keeping you informed every step of the way."
                        },
                        {
                            title: "Agility:",
                            description: "Our agile methodology allows us to adapt quickly to changes, ensuring your DevOps initiatives align with your business goals."
                        },
                        {
                            title: "Collaborative Approach",
                            description: "We work closely with your team to ensure seamless integration and maximum efficiency."
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
                            description: "Our team stays current with industry trends and technologies to deliver creative and effective DevOps practices."
                        }
                    ],
                    open: false
                },
                {
                    question: "Robust Security Measures",
                    answers: [
                        {
                            title: "Security First: ",
                            description: " We implement strong security measures to protect your systems and data throughout the DevOps lifecycle."
                        },
                        {
                            title: "Compliance:",
                            description: "Our solutions adhere to industry standards and regulations, ensuring your operations are secure and compliant."
                        }
                    ],
                    open: false
                },
                {
                    question: "Proven Track Record of Success",
                    answers: [
                        {
                            title: "Success Stories",
                            description: "From startups to large enterprises, our DevOps solutions have a proven track record of delivering outstanding results across various industries."
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
                    question: "Continuous Integration and Continuous Delivery (CI/CD)",
                    answers: [
                        {
                            title: "Automated Pipelines: ",
                            description: "We design and implement CI/CD pipelines to automate the build, test, and deployment processes, ensuring faster and more reliable releases."
                        },
                        {
                            title: "Increased Efficiency:  ",
                            description: "Our CI/CD solutions reduce manual intervention, minimizing errors and enhancing productivity."
                        }
                    ],
                    open: true
                },
                {
                    question: "Infrastructure as Code (IaC)",
                    answers: [
                        {
                            title: "Consistency and Scalability: ",
                            description: "We use IaC to automate the provisioning and management of your infrastructure, ensuring consistency and scalability"
                        },
                        {
                            title: "Version Control",
                            description: "Our IaC solutions enable version control for your infrastructure, making tracking and managing changes easier."
                        }
                    ],
                    open: false
                },
                {
                    question: "Monitoring and Logging",
                    answers: [
                        {
                            title: "Real-Time Visibility: ",
                            description: "We provide comprehensive monitoring solutions to give you real-time visibility into your systems."
                        },
                        {
                            title: "Proactive Management: ",
                            description: "Our logging and monitoring tools enable proactive management, allowing you to identify and address issues before they impact your operations."
                        }
                    ],
                    open: false
                },
                {
                    question: "Containerization and Orchestration",
                    answers: [
                        {
                            title: "Docker and Kubernetes:",
                            description: "We utilize Docker for containerization and Kubernetes for orchestration, ensuring your applications are scalable and resilient."
                        },
                        {
                            title: "Efficient Resource Utilization: ",
                            description: "Our containerization and orchestration solutions optimize resource utilization, reducing costs and improving performance."
                        }
                    ],
                    open: false
                },
                {
                    question: "Security and Compliance",
                    answers: [
                        {
                            title: "Integrated Security: ",
                            description: "We incorporate security practices into every phase of the DevOps lifecycle to protect your applications and data."
                        },
                        {
                            title: "Regulatory Compliance: ",
                            description: "Our solutions help you maintain compliance with industry regulations, ensuring your operations meet the required standards."
                        }
                    ],
                    open: false
                }
            ],
            solutionFaqItems: [
                {
                    question: "What are the benefits of DevOps for Canadian businesses?",
                    answer: "DevOps is a game-changer for Canadian companies, empowering them to accelerate software delivery, foster better collaboration between development and operations teams, enhance quality, and swiftly respond to evolving market demands and customer needs.",
                    open: true
                },
                {
                    question: "How does ReformedTech.ca ensure seamless integration with existing processes and tools?",
                    answer: "Our DevOps experts conduct thorough assessments and work closely with your teams to ensure seamless integration with your existing processes, tools, and infrastructure, minimizing disruption and maximizing efficiency.",
                    open: false
                },

            ]
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'DevOps Service | ReformedTech DevOps Team',
            meta: [
                { name: 'description', content: "Streamline your delivery processes, create a collaborative environment, and enhance your development team's productivity with ReformedTech's DevOps Solution." },
                { property: 'og:title', content: 'DevOps Service | ReformedTech DevOps Team' },
                { property: 'og:description', content: "Streamline your delivery processes, create a collaborative environment, and enhance your development team's productivity with ReformedTech's DevOps Solution." },
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