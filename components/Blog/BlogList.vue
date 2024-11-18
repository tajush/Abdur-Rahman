<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:mb-14 mb-10">
                <h2
                    class="lg:text-[42px] text-3xl lg:leading-[54px] text-dark-black font-medium font-jost lg:mb-0 mb-4">
                    Blog list</h2>
                <div class="flex gap-x-5">
                    <div class="relative inline-block text-left border border-gray-light rounded-md py-1">
                        <!-- Dropdown button -->
                        <button @click="toggleDropdown" ref="dropdownButton"
                            class="lg:px-2.5 lg:py-2.5 px-2 py-1  inline-flex w-40 justify-between items-center text-base leading-6 text-black bg-white focus:outline-none">
                            <span class="text-sm text-gray font-poppins">Most popular</span>
                            <!-- Arrow down icon -->
                            <svg class="w-4 h-4 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div v-if="isDropdownOpen"
                            class="absolute z-[99999] right-0 mt-1 w-40 py-2 bg-white border border-gray-light shadow-lg">
                            <NuxtLink v-for="(item, index) in items" :key="index" :to="item.link"
                                class="flex capitalize px-4 py-2 text-sm text-black hover:bg-orange-light">
                                {{ item.text }}
                            </NuxtLink>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Blog List -->
            <ContentList path="/blog">
                <template #default="{ list }">
                    <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                        <div v-for="card in list" :key="card._path" class="lg:mb-10 mb-7">
                            <div class="shine h-[260px]">
                                <ImageComponent class="w-full h-full object-cover rounded-t-[20px]" :src="card.thumbnail" alt="blog image" />
                            </div>
                            <div
                                class="bg-orange-light border border-orange hover:border-white border-t-0 rounded-bl-3xl rounded-br-3xl hover:bg-white hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all cursor-pointer lg:p-6 p-4 min-h-[200px] blogs-card-content">
                                <div class="flex justify-between items-center mb-2.5">
                                    <p class="subtitle-primary text-sm">{{ card.postDate }}</p>
                                    <div class="flex items-center">
                                        <div class="w-5 h-[1px] bg-gray"></div>
                                        <p class="subtitle-primary text-sm ml-2">{{ card.author }}</p>
                                    </div>
                                </div>
                                <h4 class="lg:text-xl text-lg text-dark-black font-medium leading-[30px] capitalize">
                                    <NuxtLink :to="`/blog/${card.slug}`">
                                        {{ card.title }}
                                    </NuxtLink>
                                </h4>
                                <div class="flex mt-8 flex-wrap gap-y-[12px]">
                                    <div v-for="(tag, index) in card.tags" :key="index" class="chips mr-2">{{ tag }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <template #not-found>
                    <p>No articles found.</p>
                </template>
            </ContentList>

            <!-- Pagination -->
            <div class="flex flex-wrap justify-center items-center lg:mt-10 mt-5">
                <Icon class="text-3xl mr-3 cursor-pointer text-gray" name="ic:twotone-keyboard-arrow-left" />
                <div v-for="(pagination, i) in paginations" :key="i"
                    class="text-base font-jost w-[40px] h-[40px] mr-3 last:mr-0 border border-[#CDD4D5] rounded-full bg-white text-black flex items-center justify-center hover:bg-primary-color hover:text-white hover:border-primary-color transition-all cursor-pointer">
                    {{ pagination.text }}
                </div>
                <Icon class="text-3xl cursor-pointer text-gray" name="ic:round-keyboard-arrow-right" />
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import blogImg1 from '/assets/img/blogs/blog-img1.png'
import blogImg2 from '/assets/img/blogs/blog-img2.png'
import blogImg3 from '/assets/img/blogs/blog-img3.png'
import blogImg4 from '/assets/img/blogs/blog-img4.png'
import blogImg5 from '/assets/img/blogs/blog-img5.png'
import blogImg6 from '/assets/img/blogs/blog-img6.png'
import blogImg7 from '/assets/img/blogs/blog-img7.png'
import blogImg8 from '/assets/img/blogs/blog-img8.png'
import blogImg9 from '/assets/img/blogs/blog-img9.png'
export default {
    components: {
        ImageComponent
    },
    data() {
        return {
            isDropdownOpen: false,
            blogFilters: [
                {
                    name: "All"
                },
                {
                    name: "Design"
                },

                {
                    name: "Marketing"
                },
                {
                    name: "Technology"
                },
                {
                    name: "Development"
                },
                {
                    name: "Branding"
                },
                {
                    name: "Updates"
                },
            ],
            items: [
                {
                    link: "",
                    text: "10 Per Page"
                },

                {
                    link: "",
                    text: "20 Per Page"
                },

                {
                    link: "",
                    text: "30 Per Page"
                },

                {
                    link: "",
                    text: "40 Per Page"
                },
            ],
            cards: [
                {
                    delay: "100",
                    img: blogImg1,
                    altText: "blog-img1",
                    date: "May 16, 2022",
                    topics: "Design",
                    blogTitle: "Fast food restaurant management - diving deeper...",
                    chips: ['Company', 'Product', 'POS']
                },
                {
                    delay: "200",
                    img: blogImg2,
                    altText: "blog-img2",
                    date: "May 16, 2022",
                    topics: "AI",
                    blogTitle: "ChatGPT vs bard: which is better for coding...",
                    chips: ['Technology', 'AI']
                },
                {
                    delay: "300",
                    img: blogImg3,
                    altText: "blog-img3",
                    date: "May 16, 2022",
                    topics: "AI",
                    blogTitle: "Fast food restaurant management - diving deeper...",
                    chips: ['Technology', 'Learning', 'AI']
                },
                {
                    delay: "100",
                    img: blogImg4,
                    altText: "blog-img4",
                    date: "May 16, 2022",
                    topics: "Design",
                    blogTitle: "Fast food restaurant management - diving deeper...",
                    chips: ['Company', 'Product', 'POS']
                },
                {
                    delay: "200",
                    img: blogImg5,
                    altText: "blog-img5",
                    date: "May 16, 2022",
                    topics: "AI",
                    blogTitle: "ChatGPT vs bard: which is better for coding...",
                    chips: ['Technology', 'AI']
                },
                {
                    delay: "300",
                    img: blogImg6,
                    altText: "blog-img6",
                    date: "May 16, 2022",
                    topics: "AI",
                    blogTitle: "Fast food restaurant management - diving deeper...",
                    chips: ['Technology', 'Learning', 'AI']
                },
                {
                    delay: "100",
                    img: blogImg7,
                    altText: "blog-img7",
                    date: "May 16, 2022",
                    topics: "Design",
                    blogTitle: "Fast food restaurant management - diving deeper...",
                    chips: ['Company', 'Product', 'POS']
                },
                {
                    delay: "200",
                    img: blogImg8,
                    altText: "blog-img8",
                    date: "May 16, 2022",
                    topics: "AI",
                    blogTitle: "ChatGPT vs bard: which is better for coding...",
                    chips: ['Technology', 'AI']
                },
                {
                    delay: "300",
                    img: blogImg9,
                    altText: "blog-img9",
                    date: "May 16, 2022",
                    topics: "AI",
                    blogTitle: "Fast food restaurant management - diving deeper...",
                    chips: ['Technology', 'Learning', 'AI']
                },
            ],
            paginations: [
                {
                    text: "1"
                },
                {
                    text: "2"
                },
                {
                    text: "5"
                },
            ]
        }
    },

    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        handleClickOutside(event) {
            if (this.$refs.dropdownButton && !this.$refs.dropdownButton.contains(event.target)) {
                this.isDropdownOpen = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
}
</script>

<style scoped>
@import "/assets/css/blogs.css"
</style>