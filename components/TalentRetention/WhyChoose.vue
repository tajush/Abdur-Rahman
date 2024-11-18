<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Advantages of a <span itemprop="name" class="text-green">Dedicated Team</span> from ReformedTech.<span itemprop="text" class="lowercase">ca</span>!</h2>
            </header>
            <div class="grid lg:grid-cols-2 grid-cols-1">
                <div class="lg:mb-0 mb-7">
                    <img itemprop="image" class="rounded-[10px]" src="~assets/img/talent-retention/why-choose-img.png"
                        alt="our process img">
                </div>

                <div>
                    <div v-for="(item, index) in faqItems" :key="index"
                        class="mb-7 max-w-[650px] border-b border-[#6A797C]">
                        <button @click="toggleItem(index)"
                            class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                            <div>
                                <span itemprop="text" class="lg:text-xl text-lg text-dark-black font-jost block">{{ item.question
                                    }}</span>
                            </div>
                            <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                    alt="minus circle"></span>
                            <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                    alt="plus circle"></span>
                        </button>
                        <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                            <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                <ul class="text-gray">
                                    <li v-for="(answer, i) in item.answers" :key="i" class=" px-6 pb-4">
                                        <div class="flex">
                                            <div class="mr-2">
                                                <Icon class="mr-1" name="humbleicons:layers" />
                                            </div>
                                            <div>
                                                <p itemprop="text" class="text-dark-black font-medium font-jost text-lg mr-2">{{
                                                    answer.title }}</p>
                                                <p itemprop="description" class="text-dark-black text-base font-poppins">{{ answer.description
                                                    }}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </transition>
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
            faqItems: [
                {
                    question: "Strong Canadian Presence and Local Market Understanding",
                    answers: [
                        {
                            title: "Local Insight, Global Expertise: ",
                            description: "We blend our deep understanding of the Canadian market with global talent, ensuring solutions that resonate locally and perform globally."
                        },
                        {
                            title: "Tailored Solutions:",
                            description: "Our dedicated teams are customized to fit your project needs and business goals, offering the perfect mix of skills and cultural alignment."
                        }
                    ],
                    open: true
                },
                {
                    question: "Access to the Top 1% of IT Talent",
                    answers: [
                        {
                            title: "Elite Talent Pool: ",
                            description: "We rigorously vet our professionals, conducting thorough interviews, skill assessments, and reference checks, ensuring you have access to the top 1% of IT talent worldwide."
                        },
                        {
                            title: "Specialized Skills",
                            description: "Our teams cover a wide range of expertise, from software development and web design to AI and ML development, e-commerce solutions, and more."
                        }
                    ],
                    open: false
                },
                {
                    question: "Scalability and Flexibility",
                    answers: [
                        {
                            title: "Dynamic Resourcing: ",
                            description: "We rigorously vet our professionals, conducting thorough interviews, skill assessments, and reference checks, ensuring you have access to the top 1% of IT talent worldwide. Easily scale your dedicated team up or down based on your project demands and business growth."
                        },
                        {
                            title: "Adaptive Teams",
                            description: "Our flexible engagement models allow you to adjust team size and composition as your needs evolve."
                        }
                    ],
                    open: false
                },
                {
                    question: "Seamless Integration and Collaboration",
                    answers: [
                        {
                            title: "Smooth Onboarding: ",
                            description: "Our teams seamlessly integrate with your workflows and values for a smooth transition and immediate productivity."
                        },
                        {
                            title: "Effective Communication: ",
                            description: "We prioritize clear and consistent communication to keep you informed and involved throughout the project lifecycle."
                        }
                    ],
                    open: false
                },
                {
                    question: "Cost Efficiency",
                    answers: [
                        {
                            title: "Optimized Budgets: ",
                            description: "Leveraging our dedicated teams to save on recruitment, training, and overhead costs."
                        },
                        {
                            title: "Focus on Value: ",
                            description: "Our model ensures you get the best talent and results without the financial burden of full-time hires."
                        }
                    ],
                    open: false
                },
                {
                    question: "Commitment to Quality and Innovation",
                    answers: [
                        {
                            title: "High Standards",
                            description: "We maintain rigorous quality assurance processes to ensure every deliverable meets the highest standards."
                        },
                        {
                            title: "Cutting-Edge Solutions",
                            description: "Our dedicated teams are proficient in the latest technologies and methodologies, driving innovation and excellence in every project."
                        }
                    ],
                    open: false
                },
                {
                    question: "Proven Track Record of Success",
                    answers: [
                        {
                            title: "Success Stories: ",
                            description: "From startups to Fortune 500 companies, our dedicated teams have a proven track record of delivering outstanding results across various industries."
                        },
                        {
                            title: "Client Satisfaction: ",
                            description: "Our long-term partnerships and high client retention rates demonstrate our commitment to excellence and customer satisfaction."
                        }
                    ],
                    open: false
                },
            ]
        };
    },
    methods: {
        toggleItem(index) {
            this.faqItems.forEach((item, i) => {
                item.open = i === index ? !item.open : false;
            });
        },
        beforeEnter(el) {
            el.style.height = '0';
        },
        enter(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        leave(el) {
            el.style.height = el.scrollHeight + 'px';
            void el.offsetHeight; // trigger reflow
            el.style.height = '0';
        }
    }
};
</script>

<style>
.accordion-enter-active,
.accordion-leave-active {
    transition: height 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
    height: 0;
}
</style>