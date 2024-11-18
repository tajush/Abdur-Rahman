<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Why Choose <span itemprop="text" class="text-green">ReformedTech.ca?</span></h2>
            </header>
            <div class="grid lg:grid-cols-2 grid-cols-1">
                <div class="lg:mb-0 mb-7">
                    <img class="rounded-[10px]" src="~assets/img/dedicated-team/why-choose-img.png"
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
                                                <p itemprop="author" class="text-dark-black font-medium font-jost text-lg mr-2">{{
                                                    answer.title }}</p>
                                                <p itemprop="name" class="text-dark-black text-base font-poppins">{{ answer.description
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
                            title: "Deep Market Insight:",
                            description: "We combine our extensive knowledge of the Canadian market with global expertise."
                        },
                        {
                            title: "Tailored Solutions:",
                            description: "This unique blend ensures solutions that resonate locally and perform globally."
                        },
                        {
                            title: "Exceeding Expectations:",
                            description: "Our deep understanding enables us to meet and exceed your expectations."
                        },
                    ],
                    open: true
                },
                {
                    question: "Comprehensive Expertise in Front-End and Back-End Development",
                    answers: [
                        {
                            title: "Front-End Development: ",
                            description: "We create intuitive interfaces for a seamless user experience."
                        },
                        {
                            title: "Back-End Development: ",
                            description: "We deliver robust server-side solutions to support your applications."
                        },
                        {
                            title: "End-to-End Solutions:",
                            description: "Our deep understanding enables us to meet and exceed your expectations."
                        },
                    ],
                    open: false
                },
                {
                    question: "Agile and Transparent Development Process",
                    answers: [
                        {
                            title: "Transparency:",
                            description: "We keep you informed at every stage of the development process."
                        },
                        {
                            title: "Agility:",
                            description: "Our agile methodology allows us to adapt quickly to changes."
                        },
                        {
                            title: "Vision Realization: ",
                            description: "We ensure your vision is realized in every project."
                        },
                        {
                            title: "Best Outcomes",
                            description: "We ensure your vision is realized in every project."
                        },
                    ],
                    open: false
                },
                {
                    question: "Commitment to Satisfaction and Long-Term Partnerships",
                    answers: [
                        {
                            title: "Customer Priority:",
                            description: "Your satisfaction is our top priority."
                        },
                        {
                            title: "Long-Term Relationships:",
                            description: "We are dedicated to building lasting partnerships."
                        },
                        {
                            title: "Beyond Projects: ",
                            description: "We focus on building relationships, not just completing projects."
                        },
                        {
                            title: "Meeting Needs:",
                            description: "We work tirelessly to ensure your needs are met and expectations exceeded."
                        },
                    ],
                    open: false
                },
                {
                    question: "Robust Security Measures and Compliance with Industry Standards",
                    answers: [
                        {
                            title: "Security First:",
                            description: "Security is paramount in today's digital age."
                        },
                        {
                            title: "Industry Standards: ",
                            description: "We adhere to stringent industry standards to protect your data."
                        },
                        {
                            title: "Data Protection:",
                            description: "Robust security measures are implemented to safeguard your information."
                        },
                        {
                            title: "Peace of Mind:",
                            description: "Rest easy knowing your projects and sensitive information are safe with us."
                        },
                    ],
                    open: false
                }
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