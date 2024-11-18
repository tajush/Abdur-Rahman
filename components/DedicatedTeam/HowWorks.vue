<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">How it <span class="text-green">works</span></h2>
            </header>

                <div
                    class="bg-orange-light border border-orange rounded-[20px] lg:py-12 py-7 lg:px-8 px-4 relative lg:mb-0 mb-7 max-w-[900px] mx-auto">
                    <div>
                        <div class="mb-10 last:mb-0 flex" v-for="(work, i) in works" :key="i">
                            <div>
                                <Icon class="mr-2 text-primary-color text-2xl" name="humbleicons:check-circle" />
                            </div>
                            <div>
                                <span itemprop="text" class="text-xl text-dark-black font-medium font-jost mr-2">{{ work.text }}</span>
                                <span itemprop="description" class="text-base text-gray font-poppins">{{ work.description }}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            works: [
                {
                    text: "Detailed Skills Assessment:",
                    description: "We thoroughly analyse your project scope, technologies used, existing team structure and skills needed."
                },
                {
                    text: "Candidate Identification: ",
                    description: "Our AI-assisted talent platform swiftly and efficiently identifies the right professionals from our verified talent network, guaranteeing high-quality matches based on your criteria."
                },
                {
                    text: "Technical Screening: ",
                    description: "Selected candidates go through comprehensive technical screening by our expert interviewers."
                },
                {
                    text: "Behavioral Evaluation: ",
                    description: "We assess soft skills and cultural fit through HR interviews to build cohesive teams."
                },
                {
                    text: "Rapid Onboarding: ",
                    description: "Seamless onboarding gets your augmented staff up to speed on your processes, tools and systems."
                },
                {
                    text: "Iterative Delivery: ",
                    description: "Our teams not only seamlessly integrate with your existing SDLC workflow but also flexibly adapt to your processes and toolchains, ensuring a smooth transition."
                },
                {
                    text: "Continual Governance:",
                    description: "Our engagement managers provide continual oversight, communication and alignment."
                },
            ]
        }
    }
}
</script>

<style scoped></style>