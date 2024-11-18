<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4" v-html="title"></h2>
            </header>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                <div class="lg:mb-0 mb-7">
                    <div v-for="(item, index) in developmentFaqItems" :key="index"
                        class="mb-7 max-w-[650px] border-b border-[#6A797C]">
                        <button @click="toggleItem(index)"
                            class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                            <div>
                                <span itemprop="description"
                                    class="lg:text-xl text-lg text-dark-black font-jost block">{{ item.question
                                    }}</span>
                            </div>
                            <span v-if="item.open"><img itemprop="image"
                                    src="~assets/img/web-development/minus-circle.svg" alt="minus circle"></span>
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
                                                <p itemprop="text"
                                                    class="text-dark-black font-medium font-jost text-lg mr-2">{{
                                                        answer.title }}</p>
                                                <p itemprop="description" class="text-dark-black text-base font-poppins"
                                                    v-html="answer.description"></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </div>

                <div>
                    <img itemprop="image" class="rounded-[10px]" :src="img" alt="our process img">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        toggleItem(index) {
            this.developmentFaqItems.forEach((item, i) => {
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
    },
    props: {
        developmentFaqItems: {
            type: Array,
            required: true
        },
        title: {
            type: String
        },
        img: {
            type: String
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