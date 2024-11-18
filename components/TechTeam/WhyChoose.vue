<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Explore Our <span itemprop="text" class="text-green">Expertise and Engagement</span> Models</h2>
            </header>
            <div class="grid lg:grid-cols-2 grid-cols-1">
                <div class="lg:mb-0 mb-7">
                    <img class="rounded-[10px]" src="~assets/img/tech-team/why-choose-img.png"
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
                                                <p itemprop="text" class="text-dark-black text-base font-poppins" v-html="answer.description"></p>
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
                    question: "Custom Software Development",
                    answers: [
                        {
                            title: "Tailored Solutions: ",
                            description: "We create custom software tailored to your business needs, ensuring it aligns with your goals and objectives."
                        },
                        {
                            title: "End-to-End Development: ",
                            description: "We handle the entire <a class='hover:text-primary-color' href='/services'>software development lifecycle</a> from initial concept to deployment and maintenance."
                        }
                    ],
                    open: true
                },
                {
                    question: "Web Design and Development",
                    answers: [
                        {
                            title: "Engaging Websites:",
                            description: "Our team designs and <a class='hover:text-primary-color' href='/website-development'>develops websites</a> that are visually appealing, highly functional, and user-friendly."
                        },
                        {
                            title: "Responsive Design: ",
                            description: "We ensure your website looks great and performs well on all devices, providing a seamless user experience."
                        }
                    ],
                    open: false
                },
                {
                    question: "Mobile App Development",
                    answers: [
                        {
                            title: "iOS and Android: ",
                            description: "We develop <a class='hover:text-primary-color' href='/mobile-app-development'>high-quality mobile apps</a> for iOS and Android platforms tailored to your business needs."
                        },
                        {
                            title: "User-Centric Design",
                            description: "Our apps are designed with the end-user in mind, ensuring an intuitive and engaging experience."
                        }
                    ],
                    open: false
                },
                {
                    question: "AI and ML Development",
                    answers: [
                        {
                            title: "Innovative Solutions:",
                            description: "We leverage <a class='hover:text-primary-color' href='/ai-ml-development'>artificial intelligence</a> and machine learning to create innovative solutions that drive business growth."
                        },
                        {
                            title: "Data-Driven Decisions",
                            description: "Our AI and ML solutions help you make data-driven decisions, improving efficiency and effectiveness."
                        }
                    ],
                    open: false
                },
                {
                    question: "E-commerce Solutions",
                    answers: [
                        {
                            title: "Comprehensive Platforms:",
                            description: "We develop robust e-commerce platforms that support your business growth and provide an excellent customer experience."
                        },
                        {
                            title: "Secure Transactions",
                            description: "Our solutions ensure safe and reliable transactions, building customer trust."
                        }
                    ],
                    open: false
                },
                {
                    question: "UI/UX Design",
                    answers: [
                        {
                            title: "Intuitive Interfaces: ",
                            description: "Our <a class='hover:text-primary-color' href='/ui-ux-design'>UI/UX design services</a> focus on creating intuitive interfaces that enhance user satisfaction and engagement."
                        },
                        {
                            title: "User Research: ",
                            description: "We conduct thorough user research to understand your audience and design experiences that meet their needs."
                        }
                    ],
                    open: false
                },
                {
                    question: "IT Consulting",
                    answers: [
                        {
                            title: "Strategic Advice",
                            description: "Our <a class='hover:text-primary-color' href='/hire-developer'>IT consulting</a> services provide strategic advice to help you navigate the complexities of technology and achieve your business goals."
                        },
                        {
                            title: "Expert Guidance:",
                            description: "Our consultants have expertise and industry knowledge, offering guidance on best practices and innovative solutions."
                        }
                    ],
                    open: false
                },
                {
                    question: "Maintenance and Support",
                    answers: [
                        {
                            title: "Ongoing Support:",
                            description: "We provide ongoing maintenance and support to ensure your software and systems run smoothly."
                        },
                        {
                            title: "Proactive Monitoring:",
                            description: "Our proactive <a class='hover:text-primary-color' href='/qa-testing'>monitoring services</a> identify and resolve issues before they impact your business."
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