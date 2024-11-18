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
import aiContactImg from '/assets/img/solution/ai-team-contact.png'
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
import aiChooseImg from '/assets/img/solution/ai-choose-img.png'
import aiDevImg from '/assets/img/solution/ai-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "<span class='text-green'>Transform</span> Your Business with ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "Welcome to ReformedTech.ca, the leading AI and ML development partner in Canada. We leverage AI and ML technologies to drive innovation, optimize processes, and enhance decision-making. Our mission is to deliver cost-effective solutions tailored to the unique needs of Canadian businesses.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Unleash the Power</span> of Intelligent Technologies",
            teamContactSubtitle: "In the digital age, AI and ML are transforming industries. Partner with ReformedTech.ca for Canadian business AI and ML expertise. Our ethical AI principles and scalable solutions enable data-driven decision-making and improved customer experiences. Book a discovery call today for intelligent growth.",
            teamContactImg: aiContactImg,
            benifitTitle: "Website Development Services We Provide",
            whyChooseTitle: "Why Choose ReformedTech.<span class='lowercase'>ca</span> for <span class='text-green'>AI and ML Development</span>",
            developmentTitle: "Our <span class='text-green'>AI and ML Development</span> Services",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            chooseImg: aiChooseImg,
            devImg: aiDevImg,
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
                    title: "Discovery and Strategy",
                    subTitle: "During an initial discovery session, our AI and ML experts will collaborate with your teams to understand your business goals, challenges, and opportunities. We'll then develop a tailored AI/ML strategy aligned with your objectives."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Data Assessment and Preparation. ",
                    subTitle: "Our team will assess your data sources, quality, and accessibility, ensuring your data is ready for AI/ML modelling and analysis. We'll also implement data governance and security measures."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Model Development and Training ",
                    subTitle: "Leveraging the latest AI and ML techniques, our experts will develop and train intelligent models tailored to your specific use cases, continuously refining and optimizing them based on feedback and performance metrics."
                },
                {
                    width: "36",
                    step: "Step 4",
                    icon: teamIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Integration and Deployment ",
                    subTitle: "We'll seamlessly integrate the AI/ML solutions into your existing systems and workflows, ensuring smooth operation and user adoption. Our team will also provide comprehensive training and support."
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
                            description: "We blend our deep understanding of the Canadian market with global best practices to develop AI and ML solutions that are both locally relevant and globally competitive."
                        },
                        {
                            title: "Tailored Solutions:",
                            description: "Our AI and ML services are customized to meet your business's needs, ensuring impactful and sustainable results."
                        }
                    ],
                    open: true
                },
                {
                    question: "Comprehensive Expertise in AI and ML Technologies",
                    answers: [
                        {
                            title: "Machine Learning Models:  ",
                            description: "We design, develop, and deploy advanced machine learning models to process large datasets, uncover patterns, and provide actionable insights."
                        },
                        {
                            title: "Artificial Intelligence Solutions: ",
                            description: "Our AI solutions encompass natural language processing, computer vision, predictive analytics, and more, helping you automate tasks and make smarter decisions."
                        },
                        {
                            title: "Data Science",
                            description: "Our data scientists use cutting-edge techniques to extract valuable insights from your data, driving your business strategy forward."
                        },
                    ],
                    open: false
                },
                {
                    question: "Agile and Transparent Development Process",
                    answers: [
                        {
                            title: "Transparency:",
                            description: "We communicate clearly and consistently throughout the development process, keeping you informed every step of the way."
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
                            description: "We adhere to rigorous quality assurance processes to ensure every AI and ML solution meets the highest standards."
                        },
                        {
                            title: "Innovative Solutions: ",
                            description: "Our team stays up-to-date with AI and ML trends to deliver creative and effective solutions."
                        }
                    ],
                    open: false
                },
                {
                    question: "Robust Security Measures",
                    answers: [
                        {
                            title: "Security First: ",
                            description: "We implement robust security measures to protect your data and ensure compliance with industry regulations."
                        },
                        {
                            title: "Data Privacy:",
                            description: "Our solutions are designed with data privacy in mind, ensuring your data is handled securely and ethically."
                        }
                    ],
                    open: false
                },
                {
                    question: "Proven Track Record of Success",
                    answers: [
                        {
                            title: "Success Stories",
                            description: "From startups to large enterprises, our AI and ML solutions have a proven track record of delivering outstanding results across various industries."
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
                    question: "Custom AI Solutions",
                    answers: [
                        {
                            title: "Tailored to Your Needs: ",
                            description: "We develop custom AI solutions aligning with your business goals and challenges."
                        },
                        {
                            title: "Scalable Solutions: ",
                            description: "Our AI solutions are designed to scale with your business, providing long-term value and flexibility."
                        }
                    ],
                    open: true
                },
                {
                    question: "Machine Learning Model Development",
                    answers: [
                        {
                            title: "Advanced Algorithms:",
                            description: "We use advanced algorithms to build machine learning models that provide accurate predictions and insights."
                        },
                        {
                            title: "Model Training and Optimization: ",
                            description: "Our team ensures your models are trained on high-quality data and optimized for performance."
                        }
                    ],
                    open: false
                },
                {
                    question: "Natural Language Processing (NLP)",
                    answers: [
                        {
                            title: "Text Analysis:",
                            description: "We develop NLP solutions to analyze and understand human language, improving customer interactions and automating tasks."
                        },
                        {
                            title: "Sentiment Analysis: ",
                            description: "Our sentiment analysis tools help you understand customer sentiment and make data-driven decisions."
                        }
                    ],
                    open: false
                },
                {
                    question: "Computer Vision",
                    answers: [
                        {
                            title: "Image and Video Analysis: ",
                            description: "We create computer vision solutions to analyze images and videos, enabling applications like facial recognition, object detection, and more."
                        },
                        {
                            title: "Enhanced Visual Data Processing: ",
                            description: "Our solutions improve the accuracy and efficiency of visual data processing."
                        }
                    ],
                    open: false
                },
                {
                    question: "Predictive Analytics",
                    answers: [
                        {
                            title: "Data-Driven Insights: ",
                            description: "We use predictive analytics to forecast future trends and behaviours, helping you make proactive business decisions."
                        },
                        {
                            title: "Enhanced Decision-Making:",
                            description: "Our predictive models provide actionable insights that drive business growth."
                        }
                    ],
                    open: false
                },
                {
                    question: "Data Science and Analytics",
                    answers: [
                        {
                            title: "Comprehensive Analysis:  ",
                            description: "We provide comprehensive data analysis services to uncover hidden patterns and insights in your data."
                        },
                        {
                            title: "Strategic Recommendations: ",
                            description: "Our data scientists offer strategic recommendations based on your data, helping you achieve your business goals."
                        }
                    ],
                    open: false
                },
            ],
            solutionFaqItems: [
                {
                    question: "How can AI and ML benefit Canadian businesses? ",
                    answer: "AI and ML technologies offer numerous benefits for Canadian companies, including data-driven decision-making, process optimization, intelligent automation, personalized customer experiences, and competitive advantages through innovation.",
                    open: true
                },
                {
                    question: "How does ReformedTech.ca ensure ethical and responsible AI development? ",
                    answer: "We adhere to strict ethical AI principles, ensuring transparency, fairness, and accountability in our AI and ML solutions. We also align with Canadian values and regulatory frameworks to maintain trust and responsible innovation.",
                    open: false
                },

            ]
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'ReformedTech ai-ml | Artificial Intelligence and Machine Learning',
            meta: [
                { name: 'description', content: 'Grow your business with artificial intelligence and machine learning development partner by your side at ReformedTech' },
                { property: 'og:title', content: 'ReformedTech ai-ml | Artificial Intelligence and Machine Learning' },
                { property: 'og:description', content: 'Grow your business with artificial intelligence and machine learning development partner by your side at ReformedTech' },
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