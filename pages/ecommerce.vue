<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <Breadcrumbs />
        <SolutionsWhyChoose :title="whyChooseTitle" :chooseFaqItems="chooseFaqItems" :img="chooseImg" />
        <SolutionsDevelopmentServices :title="developmentTitle" :developmentFaqItems="developmentFaqItems" :img="devImg" />
        <ServiceBenifits :title="benifitTitle" :features="features" />
        <SolutionsDevelopmentStep :title="spanTitle" :arguments="arguments" />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle" :teamContactImg="teamContactImg" />
        <HomeOurStack />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/talent-retention/talent-hero-section-img.svg'
import ecommerceContactImg from '/assets/img/solution/ecommerce-team-contact.png'
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
import ecommerceChooseImg from '/assets/img/solution/ecommerce-choose-img.png'
import ecommerceDevImg from '/assets/img/solution/ecommerce-development-img.png'

export default {
    setup() {
        const state = reactive({
            title: "<span class='text-green'>Transform Your Business</span> with Custom E-Commerce Development",
            subTitle: "A strong online presence is crucial for business success in today's digital age. At ReformedTech.ca, our skilled and innovative team creates powerful e-commerce solutions to drive sales and enhance customer experiences for startups and established businesses.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Ready to Boost</span> Your Online Sales?",
            teamContactSubtitle: "With ReformedTech.ca, you can launch a new online store or upgrade an existing one. Contact us today to discuss your e-commerce development needs. Get in touch at <a class='hover:text-primary-color' href='mailto:contact@reformedtech.ca'>contact@reformedtech.ca</a> or visit our website to schedule a consultation. Your e-commerce success story starts here!",
            teamContactImg: ecommerceContactImg,
            spanTitle: "Our <span class='text-green'>E-Commerce Development</span> Services",
            whyChooseTitle: "Why Choose ReformedTech.<span class='lowercase'>ca</span> for Your <span class='text-green'>E-Commerce</span> Needs?",
            chooseImg: ecommerceChooseImg,
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            developmentTitle: "<span class='text-green'>Key Features</span> of Our E-Commerce Solutions",
            benifitTitle: "Our <span class='text-green'>E-Commerce Development</span> Process",
            stepTitle: "Our <span class='text-green'>Streamlined</span> Process",
            devImg: ecommerceDevImg,
                features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Requirements Gathering",
                    subTitle: "We start by understanding your business, goals, and needs."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Strategy and Planning: ",
                    subTitle: "We develop a detailed strategy and project plan based on the gathered requirements."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "Design and Prototyping",
                    subTitle: "We create wireframes and prototypes, ensuring the design meets your approval before moving to development."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Development and Integration",
                    subTitle: "Our team brings the designs to life, developing a fully functional e-commerce site."
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Testing and Quality Assurance",
                    subTitle: "Rigorous testing ensures everything works perfectly before launch."
                },

                {
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Launch and Deployment",
                    subTitle: "We carefully launch your site, ensuring a smooth transition."
                },
            ],
            arguments: [
                {
                    width: "35",
                    step: "Step 1",
                    icon: phoneIcon,
                    altText: "phone icon",
                    arrow: LineArrow,
                    title: "Custom E-Commerce Website Development",
                    subTitle: "We build custom e-commerce websites that match your brand and business needs, ensuring seamless shopping and powerful backend management with flexible features."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "E-Commerce Platform Integration",
                    subTitle: "We provide expert integration for Shopify, WooCommerce, and Magento, customizing themes, integrating plugins, and optimizing performance to ensure a superior shopping experience."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Mobile E-Commerce Solutions",
                    subTitle: "In a mobile-first world, a mobile-optimized e-commerce site is essential. Our solutions offer seamless shopping on all devices with touch-friendly interfaces, fast loading times, and streamlined checkout."
                },
                {
                    width: "36",
                    step: "Step 4",
                    icon: teamIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Inventory Management Systems",
                    subTitle: "Effective inventory management is crucial. Our solutions offer real-time tracking, prevent overselling, automate reordering, and integrate with physical stores, ensuring products are always in stock and maximizing sales."
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
                    question: "Canadian Expertise",
                    answers: [
                        {
                            description: "We understand the unique needs and regulations of the Canadian market, ensuring your e-commerce solution is perfectly tailored for local success. Our deep understanding of the Canadian market will make you feel understood and catered to, giving you the confidence that your e-commerce solution is in good hands."
                        }
                    ],
                    open: true
                },
                {
                    question: "Customized Solutions",
                    answers: [
                        {
                            description: "We don't believe in one-size-fits-all approaches. Our solutions are tailored to perfectly align with your brand and business goals."
                        }
                    ],
                    open: false
                },
                {
                    question: "Scalability",
                    answers: [
                        {
                            description: "We build with the future in mind. Our solutions are designed to grow your business, easily accommodating increased traffic and sales as you expand. Our focus on scalability will make you feel confident and prepared for future growth, knowing that your e-commerce solution can adapt to your business's changing needs."
                        }
                    ],
                    open: false
                },
                {
                    question: "Ongoing Support",
                    answers: [
                        {
                            description: "Our relationship doesn't end at launch. We provide continuous support and maintenance to ensure your e-commerce site runs smoothly and stays up-to-date. This ongoing support will make you feel reassured and supported, knowing that we're always here to help you with any issues or updates."
                        }
                    ],
                    open: false
                },
            ],
            developmentFaqItems: [
                {
                    question: "Intuitive User Interface",
                    answers: [
                        {
                            description: "We create user-friendly designs that make it easy for customers to find and purchase products."
                        }
                    ],
                    open: true
                },
                {
                    question: "Feature Prioritization",
                    answers: [
                        {
                            description: "We create user-friendly designs that make it easy for customers to find and purchase products."
                        }
                    ],
                    open: false
                },
                {
                    question: "Secure Payment Processing",
                    answers: [
                        {
                            description: "Multiple payment options with top-notch security measures."
                        }
                    ],
                    open: false
                },
                {
                    question: "Robust Product Management",
                    answers: [
                        {
                            description: "An easy-to-use backend for managing your product catalog."
                        }
                    ],
                    open: false
                },
                {
                    question: "Order Tracking and Management",
                    answers: [
                        {
                            description: "Efficient systems for processing and tracking orders."
                        }
                    ],
                    open: false
                },
                {
                    question: "Customer Account Management",
                    answers: [
                        {
                            description: "These are tools for customers to manage their accounts and view order history."
                        }
                    ],
                    open: false
                },
                {
                    question: "Search Engine Optimization (SEO)",
                    answers: [
                        {
                            description: "Built-in features to improve your site's visibility in search results."
                        }
                    ],
                    open: false
                },
                {
                    question: "Analytics and Reporting",
                    answers: [
                        {
                            description: "Detailed insights into your sales, customer behavior, and more."
                        }
                    ],
                    open: false
                },
                {
                    question: "Multi-currency and Multi-language Support",
                    answers: [
                        {
                            description: "Expand your reach to international markets."
                        }
                    ],
                    open: false
                },
                {
                    question: "Integration with Third-party Tools and APIs",
                    answers: [
                        {
                            description: "Connect your e-commerce site with other business tools for seamless operations."
                        }
                    ],
                    open: false
                },
            ],
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Ecommerce SolutioneCommerce Website Development | ReformedTech offshore development',
            meta: [
                { name: 'description', content: "ReformedTech provides exceptional eCommerce development services. Hire our eCommerce developers to create scalable and innovative solutions." },
                { property: 'og:title', content: 'Ecommerce SolutioneCommerce Website Development | ReformedTech offshore development' },
                { property: 'og:description', content: "ReformedTech provides exceptional eCommerce development services. Hire our eCommerce developers to create scalable and innovative solutions." },
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