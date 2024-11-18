<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Our Process for <br> <span itemprop="text" class="text-green">design & Development</span></h2>
            </header>
        <div class="grid lg:grid-cols-2 grid-cols-1">
            <div class="lg:mb-0 mb-7">
                <img itemprop="image" src="~assets/img/web-development/our-process-img.png" alt="our process img">
            </div>

            <div>
                <div v-for="(item, index) in faqItems" :key="index" class="mb-7 max-w-[650px] border-b border-[#6A797C]">
                    <button @click="toggleItem(index)"
                        class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                        <div>
                            <span itemprop="text" class="mr-2 text-sm text-[#6A797C] font-poppins">{{ item.num }}</span>
                            <span itemprop="text" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question }}</span>
                        </div>
                        <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg" alt="minus circle"></span>
                        <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg" alt="plus circle"></span>
                    </button>
                    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                            <p itemprop="text" class="text-base text-gray font-poppins px-6 pb-4" v-html="item.answer"></p>
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
                    num: "01",
                    question: "Requirement Gathering",
                    answer: "Understanding your vision is our first step. We gather all necessary information about your project requirements, goals, and expectations. This involves detailed discussions and analysis to ensure we are aligned with your vision. We value your input and encourage you to actively participate in this phase.",
                    open: true
                },
                {
                    num: "02",
                    question: "Research and Planning",
                    answer: "Once we have a clear understanding of your requirements, we embark on a comprehensive research and planning phase. This involves in-depth market analysis, identification of the best technologies, and the creation of a detailed roadmap that outlines the project timeline and milestones. This thorough approach ensures that we are well-prepared to bring your vision to life.",
                    open: false
                },
                {
                    num: "03",
                    question: "UI/UX Design",
                    answer: "Our design team is dedicated to creating user interfaces that are not only visually appealing but also enhance the overall <a class='hover:text-primary-color' href='/ui-ux-design'>user experience</a>. We focus on aesthetics and functionality, ensuring that the design is intuitive and engaging. Your feedback is crucial in this phase, as it helps us develop and refine wireframes and prototypes that truly meet your users' needs.",
                    open: false
                },
                {
                    num: "04",
                    question: "Front-end Development",
                    answer: "In this phase, our front-end developers bring the design to life using the latest technologies. We ensure the website or application is responsive, interactive, and optimized for performance across all devices and browsers.",
                    open: false
                },
                {
                    num: "05",
                    question: "Back-end Development",
                    answer: "Our <a class='hover:text-primary-color' href='/services/dedicated-teams'>back-end development</a> team works on the application's server side, ensuring that the foundation is robust and scalable. We develop the core functionalities, integrate databases, and set up the server infrastructure to support seamless operation.",
                    open: false
                },
                {
                    num: "06",
                    question: "Testing and Quality Assurance",
                    answer: "Quality is paramount at ReformedTech.ca. We perform rigorous testing to identify and fix any issues. This includes functional, usability, performance, and <a class='hover:text-primary-color' href='/qa-testing'>security testing</a> to ensure the final product is flawless and meets all quality standards. Your project's security is our top priority, and we take all necessary measures to protect it during these phases.",
                    open: false
                },
                {
                    num: "07",
                    question: "Deployment and Launch",
                    answer: "Once the development and testing phases are complete, we <a class='hover:text-primary-color' href='/devops-solution'>prepare for deployment</a>. This involves setting up the production environment, transferring all files, and ensuring everything is configured correctly. We then launch the website or application, making it live for users.",
                    open: false
                },
                {
                    num: "08",
                    question: "Search Engine Optimization (SEO)",
                    answer: "To ensure your <a class='hover:text-primary-color' href='/digital-marketing'>website ranks</a> well on search engines, we implement SEO best practices from the ground up. This includes on-page SEO, keyword optimization, meta tag creation, and more to improve your site's visibility and attract organic traffic.",
                    open: false
                },
                {
                    num: "09",
                    question: "Ongoing Maintenance and Support",
                    answer: "Our commitment to your project doesn't end with the launch. We provide ongoing maintenance and support to ensure that your website or application continues to run smoothly. This includes regular updates, security patches, performance monitoring, and addressing any issues that may arise. Our goal is to ensure the long-term success of your digital solution.",
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
  