<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-7">
                <div
                    class="bg-orange-light border border-orange rounded-[20px] lg:py-12 py-7 lg:px-8 px-4 relative lg:mb-0 mb-7 max-w-[900px] mx-auto">
                    <div>
                        <h2 itemprop="headline" class="text-4xl text-dark-black font-medium font-jost mb-4 text-center">Our <span itemprop="text" class="text-green">Process</span></h2>
                        <div class="mb-10 last:mb-0 flex" v-for="(process, i) in proecess" :key="i">
                            <div>
                                <Icon class="mr-2 text-primary-color text-2xl" name="humbleicons:check-circle" />
                            </div>
                            <div>
                                <span itemprop="text" class="text-xl text-dark-black font-medium font-jost mr-2">{{ process.text }}</span>
                                <span itemprop="description" class="text-base text-gray font-poppins">{{ process.description }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-orange-light border border-orange rounded-[20px] lg:py-12 py-7 lg:px-8 px-4 relative lg:mb-0 mb-7">
                    <h2 itemprop="headline" class="text-3xl text-dark-black font-medium font-jost mb-5 text-center">Our <span itemprop="text" class="text-green">Commitment</span> to Canada</h2>
                    <div class="mb-8 last:mb-0 flex" v-for="(commitment, i) in commitments" :key="i">
                            <div>
                                <Icon class="mr-2 text-primary-color text-2xl" name="humbleicons:check-circle" />
                            </div>
                            <div>
                                <span itemprop="description" class="text-base text-gray font-poppins">{{ commitment.description }}</span>
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
            proecess: [
                {
                    text: "Understand:",
                    description: "We start by deeply understanding your business goals and challenges."
                },
                {
                    text: "Plan: ",
                    description: "Our experts will create a detailed project roadmap aligned with your objectives."
                },
                {
                    text: "Execute: ",
                    description: "Our offshore team develops your solution using agile methodologies."
                },
                {
                    text: "Deliver: ",
                    description: "We ensure smooth implementation and provide ongoing Support."
                },
                {
                    text: "Optimize: ",
                    description: "We continuously refine and improve your solution based on performance data and feedback."
                }
            ],
            commitments: [
                {
                    description: "Supporting the growth of Canadian businesses through technology"
                },
                {
                    description: "Adhering to Canadian data privacy and security standards"
                },
                {
                    description: "Contributing to Canada's position as a global tech leader"
                },
                {
                    description: "Croviding opportunities for Canadian tech professionals to lead global teams"
                },
                {
                    description: "Maintaining a strong relationship through the best services and qualities."
                },
                {
                    description: "Make sure to serve clients promptly."
                },
            ]
        }
    }
}
</script>

<style scoped></style>