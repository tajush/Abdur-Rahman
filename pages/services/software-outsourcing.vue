<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" :width="width" />
        <Breadcrumbs />
        <TalentRetentionOffshoreInnovation />
        <TechTeamScaling />
        <TechTeamWhyChoose />
        <TechTeamUnleashPotential :workFlows="workFlows" />
        <ServiceBenifits :title="benifitTitle" :features="features" /> 
        <!-- <VerticalTestimonial /> -->
        <DedicatedTeamRolesExpertise />
        <SolutionsPorcessStep :title="developmentTitle" :arguments="arguments" />
        <TechTeamTechFaq />
        <TechTeamContact :teamContactTitle="teamContactTitle" :teamContactSubtitle="teamContactSubtitle" :teamContactImg="teamContactImg" />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/tech-team/tech-hero-section-img.svg'
import techContactImg from '/assets/img/tech-team/tech-team-contact.png'
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
import variety from '/assets/img/career/variety.svg'
import growth from '/assets/img/career/growth.svg'
import collaborate from '/assets/img/career/collaborate.svg'
import technology from '/assets/img/career/technology.svg'
import workLife from '/assets/img/career/work-life.svg'
export default {
    setup() {
        const state = reactive({
            width: "193",
            techTeamImgWidth: "516",
            techTeamImgHeight: "660",
            title: "<span class='text-green'>Software Development Outsourcing</span> at ReformedTech.<span class='lowercase'>ca</span> Accelerate Your Projects.",
            subTitle: "ReformedTech.ca offers software development outsourcing for Canadian businesses, providing timely, cost-effective, high-quality solutions tailored to your unique needs.",
            img: heroSectionImg,
            teamContactTitle: "<span class='text-green'>Ready to accelerate</span> your software development initiatives? ",
            teamContactSubtitle: "Book a discovery call with our experts to discuss your project requirements and explore how our outsourcing services can drive your success.",
            teamContactImg: techContactImg,
            benifitTitle: "The ReformedTech.<span class='lowercase'>ca</span> <span class='text-green'>Outsourcing Advantage</span>",
            developmentTitle: "Our <span class='text-green'>Streamlined</span> Process",
                features: [
                {
                    icon: featureIcon1,
                    altText: "advantage feature icon1",
                    title: "Canadian Expertise",
                    subTitle: "Gain access to top Canadian software engineering talent handpicked through our rigorous vetting process for technical excellence, industry experience, and cultural alignment."
                },

                {
                    icon: featureIcon2,
                    altText: "advantage feature icon2",
                    title: "Seamless Communication",
                    subTitle: "Our developers align with your time zone, provide regular feedback loops, and possess exceptional communication skills to ensure a cohesive collaboration."
                },

                {
                    icon: featureIcon3,
                    altText: "advantage feature icon3",
                    title: "Dedicated Project Management",
                    subTitle: "Our dedicated project managers ensure seamless coordination, timely delivery, and Communication best practices, allowing you to focus on your core business."
                },

                {
                    icon: featureIcon4,
                    altText: "advantage feature icon4",
                    title: "Cost Optimization",
                    subTitle: "Outsourcing to ReformedTech.ca allows you to use our expertise and resources while saving on costs and avoiding the need for expensive in-house hiring and infrastructure investments"
                },

                {
                    icon: featureIcon5,
                    altText: "advantage feature icon5",
                    title: "Seamless access to Advanced Technology",
                    subTitle: "Our team provides the latest technological advancements and innovations without substantial investments in new tools and training."
                },

                {
                    icon: featureIcon6,
                    altText: "advantage feature icon6",
                    title: "Adaptable and Scalable Solutions",
                    subTitle: "Empower your team to quickly adapt to changing project needs, whether short-term or long-term. Our flexible approach ensures alignment with your business requirements, giving you the confidence to tackle any challenge.",
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
                    subTitle: "During an initial discovery call, share your project goals, requirements, and expectations with us. We'll discuss your project scope, success criteria, timelines, budget, and required skill sets."
                },
                {
                    width: "55",
                    step: "Step 2",
                    icon: teamIcon,
                    altText: "team icon",
                    arrow: LineArrow,
                    title: "Team Assembly and Project Planning",
                    subTitle: "Based on your needs, we'll swiftly assemble your dedicated team, including developers, designers, testers, and a dedicated project manager. We'll define your project roadmap, select communication tools and technologies, and ensure a smooth onboarding process."
                },
                {
                    width: "36",
                    step: "Step 3",
                    icon: trackIcon,
                    altText: "track icon",
                    arrow: LineArrow,
                    title: "Execution and Ongoing Collaboration ",
                    subTitle: "After onboarding, your outsourced team will hit the ground running, delivering high-quality work. At the same time, your dedicated project manager will provide regular updates and facilitate seamless collaboration throughout the project lifecycle."
                }
            ],
            workFlows: [
                {
                    icon: variety,
                    altText: "variety img",
                    title: "Solutions ",
                    content: "Our team of skilled developers, designers, and infrastructure engineers leverages cutting-edge technologies and industry best practices to deliver robust, scalable, and innovative software solutions across diverse domains."
                },
                {
                    icon: growth,
                    altText: "growth img",
                    title: "Technologies ",
                    content: "From front-end to back-end, our developers are well-versed in the latest tech stacks, frameworks, and tools, ensuring efficient and future-proof development."
                },
                {
                    icon: collaborate,
                    altText: "collaborate img",
                    title: "Methodologies ",
                    content: "We embrace Agile methodologies, fostering collaboration, iterative improvement, and rapid adaptation to changing requirements throughout the project lifecycle."
                }
            ]
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Software development Outsourcing | ReformedTech',
            meta: [
                { name: 'description', content: "Outsource your project to a leading software development company to ensure its success. ReformedTech is the fastest-growing software outsourcing company in Canada. Partner with us todays!" },
                { property: 'og:title', content: 'Software development Outsourcing | ReformedTech' },
                { property: 'og:description', content: "Outsource your project to a leading software development company to ensure its success. ReformedTech is the fastest-growing software outsourcing company in Canada. Partner with us todays!" },
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