<template>
    <div>
        <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
        <Breadcrumbs />
        <DedicatedTeamFunctionalDevelopment />
        <DedicatedTeamWhyChoose />
        <DedicatedTeamHowWorks />
        <DedicatedTeamResponsibilities />
        <SolutionsDevelopmentStep :title="stepTitle" :arguments="arguments" />
        <!-- <VerticalTestimonial /> -->
        <HomeAmzingTeams />
        <!-- <HomeTestimonials /> -->
        <SolutionsSolutionFaq :solutionFaqItems="solutionFaqItems" />
        <ReadyToElevate />
    </div>
</template>

<script>
import heroSectionImg from '/assets/img/dedicated-team/dedicated-hero-section-img.svg'
import LineArrow from '/assets/img/service/line-arrow.svg'
export default {
    setup() {
        const state = reactive({
            width: "333",
            title: "Unleash The Power of <span class='text-green'>Global Talent</span> with ReformedTech.<span class='lowercase'>ca</span>",
            subTitle: "At ReformedTech.ca, we build partnerships and deliver high-quality software and web design services from Canada. Our deep understanding of the local and global markets sets us apart.",
            img: heroSectionImg,
            stepTitle: "Our <span class='text-green'>Approach</span>",
            arguments: [
                {
                    width: "35",
                    step: "Step 1",
                    arrow: LineArrow,
                    title: "Initial Consultation and Needs Assessment",
                    subTitle: "Our comprehensive consultation is designed to uncover your project needs and goals, providing a solid foundation for our customized staffing solution that aligns with your organizational culture."
                },
                {
                    width: "55",
                    step: "Step 2",
                    arrow: LineArrow,
                    title: "Talent Sourcing and Vetting",
                    subTitle: "We source top-tier talent globally and rigorously vet candidates to ensure the right skills and cultural fit."
                },
                {
                    width: "36",
                    step: "Step 3",
                    arrow: LineArrow,
                    title: "Seamless Onboarding and Integration",
                    subTitle: "We prioritize a seamless onboarding process, ensuring effective collaboration between augmented and in-house teams from day one."
                },
                {
                    width: "36",
                    step: "Step 4",
                    arrow: LineArrow,
                    title: "Ongoing Management and Support",
                    subTitle: "Our project managers are dedicated to your success, continuously monitoring performance and investing in the professional development of our staff. We are committed to providing ongoing support throughout our partnership."
                },
            ],
            solutionFaqItems: [
                {
                    question: "How does staff augmentation from ReformedTech.ca benefit my offshore software development project?",
                    answer: "Staff augmentation from ReformedTech.ca offers access to a global talent pool, which includes experts in various programming languages such as Java, Python, and C++, as well as specialists in web development, mobile app development, and data analytics. This diverse pool of talent ensures that we can meet your specific project requirements. Our vetting process ensures top-tier talent and seamless integration with your existing team.",
                    open: true
                },
                {
                    question: "What makes ReformedTech.ca's staff augmentation process efficient?",
                    answer: "ReformedTech.ca's staff augmentation process is designed for efficiency. Our four-step approach, from initial consultation to ongoing management and support, ensures a streamlined process. This includes talent sourcing and vetting, seamless onboarding, and continuous monitoring. We also provide professional development programs to maintain high performance and adherence to industry best practices, guaranteeing a smooth and effective integration into your team.",
                    open: false
                },

            ]
        });

        const route = useRoute();
        const canonicalUrl = `https://reformedtech.ca${route.path}`;

        useHead({
            title: 'Staff Augmentation | ReformedTech offshore Development Company',
            meta: [
                { name: 'description', content: "As a leading staff augmentation services provider, ReformedTech offers solutions to supplement your team with additional talent." },
                { property: 'og:title', content: 'Staff Augmentation | ReformedTech offshore Development Company' },
                { property: 'og:description', content: "As a leading staff augmentation services provider, ReformedTech offers solutions to supplement your team with additional talent." },
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