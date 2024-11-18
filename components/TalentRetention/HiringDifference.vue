<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 "><span itemprop="name" class="text-green">Hassle-free</span> ReformedTech Offshore vs Freelance Hiring </h2>
            </header>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-0">
                    <div class="border border-orange bg-orange-light lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:mb-0 mb-7">
                        <h2 itemprop="description" class="text-2xl text-dark-black font-medium font-jost text-center py-5 border-b border-orange">Hiring through ReformedTech.ca</h2>
                        <div v-for="(hire,i) in hiringReformedtech" :key="i" class="min-h-[180px] border-b last:border-b-0 border-orange flex justify-center items-center lg:gap-x-7 gap-x-4 p-5">
                             <ImageComponent class="w-12" :src="rightGif" alt="" />
                            <p itemprop="text" class="lg:text-lg text-sm leading-[30px] text-dark-black font-poppins ">{{ hire.text }}</p>
                        </div>
                    </div>

                    <div class="border lg:border-l-0 border-orange bg-white lg:rounded-tr-[40px] lg:rounded-br-[40px]">
                        <h2 itemprop="headline" class="text-2xl text-gray font-medium font-jost text-center py-5 border-b border-orange">Hiring Freelancers</h2>
                        <div v-for="(hire,i) in hiringFreelancer" :key="i" class="min-h-[180px] border-b last:border-b-0 border-orange flex justify-center items-center lg:gap-x-7 gap-x-4 p-5">
                            <ImageComponent itemprop="image" class="w-12" :src="leftGif" alt="" />
                            <p itemprop="text" class="lg:text-lg text-sm leading-[30px] text-gray font-poppins ">{{ hire.text }}</p>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import rightClick from '/assets/img/talent-retention/right-click.svg'
import lineIcon from '/assets/img/talent-retention/line-icon.svg'
import rightGif from '/assets/img/talent-retention/right-gif.gif'
import leftGif from '/assets/img/talent-retention/left-gif.gif'

export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            rightGif,
            leftGif,
            hiringReformedtech: [
                {
                    icon: rightClick,
                    text: "Our tech experts keep learning about the latest tech trends, always brushing up their skills. Plus, they've got some seriously cool tools to play with."
                },
                {
                    icon: rightClick,
                    text: "Go with our engineers, and you're in for some serious one-on-one time with your project roadmap. We've got your back with ongoing support, too."
                },
                {
                    icon: rightClick,
                    text: "Leave the paperwork headache to us. No more juggling contracts or stressing about protecting your ideas. Outsourcing means we've got your HR stuff sorted."
                },
                {
                    icon: rightClick,
                    text: "We've got a solid workflow that's been tested and tried. It cuts down on risks, covering everything from keeping your software secure to staying on the right side of the rules."
                }
            ],

            hiringFreelancer: [
                {
                    icon: lineIcon,
                    text: "Freelancers might not always be as up-to-date, or have access to as many resources."
                },
                {
                    icon: lineIcon,
                    text: "Freelancers often juggle multiple clients, and there's a chance they won't be around when you need them."
                },
                {
                    icon: lineIcon,
                    text: "Getting freelancers on board requires a lot more paperwork, interviews, assessments, and an overall lengthier recruitment process."
                },
                {
                    icon: lineIcon,
                    text: "Partnering with a freelancer means diving into a mix of different, possibly less-organized processes and methodologies."
                }
            ]
        }
    }
}
</script>

<style scoped></style>