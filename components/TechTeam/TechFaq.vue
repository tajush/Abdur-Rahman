<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 "><span itemprop="text" class="text-green">Frequently</span> Asked Questions</h2>
            </header>

            <div>
                <div v-for="(item, index) in faqItems" :key="index" class="mb-7 max-w-[820px] mx-auto border-b border-[#EAECF0]">
                    <button @click="toggleItem(index)"
                        class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                        <div>
                            <span itemprop="text" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question }}</span>
                        </div>
                        <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg" alt="minus circle"></span>
                        <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg" alt="plus circle"></span>
                    </button>
                    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                            <p itemprop="description" class="text-base text-gray font-poppins pb-4">{{ item.answer }}</p>
                        </div>
                    </transition>
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
                    question: "Is outsourcing software development expensive?",
                    answer: "At ReformedTech.ca, we offer competitive pricing for outsourcing services, ensuring cost-effective solutions without compromising quality. Our flexible engagement models allow you to optimize costs based on your requirements.",
                    open: true
                },
                {
                    question: "Is using in-house developers better than outsourcing software?",
                    answer: "Both in-house and outsourced teams offer unique advantages. While in-house developers may have a deeper understanding of your organization, outsourcing to ReformedTech.ca provides access to specialized expertise, scalability, cost optimization, and the ability to focus on your core business operations.",
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

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: height 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
    height: 0;
}
</style>