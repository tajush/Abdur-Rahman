<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 class="title-primary mb-4 ">Our <span class="text-green">Streamlined</span> Process</h2>
            </header>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                <div v-for="(item, index) in arguments" :key="index"
                    class="relative flex flex-col justify-center items-center">
                    <div class="border border-gray-light rounded-tertiary-tl-br py-4 px-5 text-base font-poppins text-gray">
                        {{ item.number }}
                    </div>
                    <div v-if="index !== this.arguments.length - 1 && index !== this.arguments.length - 4" class="absolute top-[26px] -right-[26px] lg:block hidden">
                        <ImageComponent :src="item.arrow" alt="line arrow" />
                    </div>
                    <div class="lg:mt-10 mt-7 h-[200px]">
                        <h5 class="text-center text-dark-black font-medium font-jost text-lg mb-2">{{ item.title }}</h5>
                        <p v-html="item.subTitle" class="text-center text-gray text-base font-poppins leading-6"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import lineArrow from '/assets/img/talent-retention/line-arrow-gray.svg'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            arguments: [
                {
                    number: "01",
                    arrow: lineArrow,
                    title: "Discovery Call",
                    subTitle: "Share your business goals and requirements with us during an initial discovery call. We'll discuss team structure, project approach, success criteria, timelines, budget, and required skill sets."
                },
                {
                    number: "02",
                    arrow: lineArrow,
                    title: "Team Assembly ",
                    subTitle: "Based on your needs, we'll swiftly assemble the perfect team, ensuring the right mix of expertise and experience for your project."
                },
                {
                    number: "03",
                    arrow: lineArrow,
                    title: "Onboarding and Execution ",
                    subTitle: "After a seamless onboarding process (introducing the team to your company's operations, values, and work processes), your dedicated team will hit the ground running, delivering high-quality work. At the same time, you track progress and manage the team as needed."
                },

                // {
                //     number: "04",
                //     arrow: lineArrow,
                //     subTitle: "We handle all the nasty administrative bits <span class='text-primary-color'>so you don't have to</span> (payroll, benefits, legal, computers and more)."
                // },
                // {
                //     number: "05",
                //     arrow: lineArrow,
                //     subTitle: "We manage HR processes and <span class='text-primary-color'>reduce your developer</span> churn with effective talent retention programs."
                // },
                // {
                //     number: "06",
                //     arrow: lineArrow,
                //     subTitle: "You start building and releasing <span class='text-primary-color'>amazing software</span> with amazing software developers."
                // }
            ]
        }
    }
}
</script>

<style scoped></style>