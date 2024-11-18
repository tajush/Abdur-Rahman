<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid grid-cols-12 gap-x-7">
                <div class="lg:col-span-8 col-span-12 lg:mb-0 mb-10">
                    <div class="bg-white lg:py-12 py-8 shadow-[0_6px_10px_rgba(255,183,183,0.60)] rounded-[20px]">
                        <div class="lg:px-6 px-4 lg:mb-12 mb-8">
                            <h2 class="lg:text-[32px] text-2xl text-dark-black font-medium font-jost mb-5">Designers Who Changed the Web
                            </h2>
                            <div class="flex lg:gap-x-5 gap-x-2">
                                <div v-for="(item, i) in postTime" :key="i" class="flex items-center">
                                    <Icon class="text-gray text-xl mr-2" :name="item.icon" />
                                    <p class="text-sm text-gray font-poppins">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="lg:pb-12 pb-8 lg:px-6 px-4">
                            <img src="~assets/img/blogs/blog-details-img1.png" alt="blog details img1">
                            <div class="lg:mt-12 mt-8">
                                <p class="text-base text-gray font-poppins mb-6">The web landscape we experience today is a result of the tireless efforts of countless designers. From the early pioneers who established usability principles to the contemporary innovators pushing the boundaries of user experience, their work has fundamentally shaped how we interact with information online. This section isn't intended to be an exhaustive list, but rather a tribute to some of the visionaries who have made a significant impact:</p>
                                <p class="text-base text-gray font-poppins mb-6">Bugger all mate chinwag skive off bender
                                    cack chap baking cakes brown bread bodge wind up, mush David lurgy burke blow off bits
                                    and bobs faff about dropped a clanger, such a fibber so I said spiffing codswallop bite 
                                    your arm off my lady bleeding tosser.</p>
                                <ul class="list-disc px-[22px]">
                                    <li v-for="(list, i) in listing" :key="i" class="text-gray text-base font-poppins mb-2">{{
                                        list.text }}</li>
                                </ul>
                            </div>
                        </div>

                        <div class="lg:pb-12 pb-8 lg:px-6 px-4">
                            <img src="~assets/img/blogs/blog-details-img2.png" alt="blog details img2">
                            <div class="lg:mt-12 mt-8">
                                <p class="text-2xl text-gray font-jost mb-6">This response is important for our ability to
                                    from mistakes but it also gives rise to self-criticism.</p>
                                <p class="text-base text-gray font-poppins">He legged it that blatant brown bread some
                                    dodgy chav super a blinding shot my lady lavatory cup of char cor blimey guvnor get
                                    stuffed mate you mug cobblers off his nut pukka, give us a bell ummm I'm telling burke A
                                    bit of how's your father starkers daft hanky panky bog-standard golly gosh William.</p>
                            </div>
                        </div>

                        <div class="lg:pt-[38px] pt-6 border-t border-[#E9E9E9] px-6">
                            <div class="lg:flex justify-between">
                                <div class="flex items-center lg:mb-0 mb-5">
                                    <h4 class="text-base text-[#6A797C] font-semibold font-jost mr-4">Tags: </h4>
                                    <div class="flex">
                                        <div v-for="(chip, index) in chips" :key="index" class="chips mr-2">{{ chip }}</div>
                                    </div>
                                </div>

                                <div class="flex items-center">
                                    <h4 class="text-base text-[#6A797C] font-semibold font-jost mr-4">Share: </h4>
                                    <div class="flex gap-x-4">
                                        <div v-for="(share, i) in shares" :key="i"
                                            class="w-[35px] h-[35px] border border-[#B4BEC1] rounded-full flex justify-center items-center bg-white hover:bg-dark-black text-dark-black hover:text-white">
                                            <Icon class="text-lg" :name="share.icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <div class="mb-12">
                        <h4 class="text-2xl text-dark-black font-medium font-jost border-b border-[#CDD4D5] pb-2">Post
                            Categories</h4>
                        <ul class="list-square px-5 mt-7">
                            <li v-for="(category, i) in postCategories" :key="i"
                                class="text-[#6A797C] hover:text-primary-color text-base font-poppins leading-[25px] cursor-pointer mb-4">
                                <span class="mr-2">{{ category.item }}</span>
                                <span>({{ category.num }})</span>
                            </li>
                        </ul>
                    </div>

                    <div class="mb-12">
                        <h4 class="text-2xl text-dark-black font-medium font-jost border-b border-[#CDD4D5] pb-2">Unveiling
                            Our Latest Post</h4>
                        <div class="mt-7">
                            <div v-for="(post, i) in latestPost" :key="i" class="flex gap-x-6 mb-7 last:mb-0">
                                <ImageComponent :src="post.img" :alt="post.altText" />
                                <div>
                                    <h4 class="text-base text-dark-black leading-[25px] font-poppins mb-4">{{ post.title }}
                                    </h4>
                                    <div class="flex items-center gap-x-1.5">
                                        <Icon class="cursor-pointer text-gray"
                                            name="material-symbols:calendar-today-outline-rounded" />
                                        <p class="text-gray text-sm font-poppins">{{ post.date }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-2xl text-dark-black font-medium font-jost border-b border-[#CDD4D5] pb-2">Tags</h4>
                        <div class="flex mt-7">
                            <div v-for="(chip, index) in chips" :key="index" class="chips mr-2">{{ chip }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
import latestPostImg1 from '/assets/img/blogs/latest-post-img1.png'
import latestPostImg2 from '/assets/img/blogs/latest-post-img2.png'
import latestPostImg3 from '/assets/img/blogs/latest-post-img3.png'
import latestPostImg4 from '/assets/img/blogs/latest-post-img4.png'
export default {
    components: {
    ImageComponent
  },
    data() {
        return {
            postTime: [
                {
                    icon: "material-symbols:bookmarks-outline",
                    text: "Design"
                },
                {
                    icon: "material-symbols:calendar-today-outline-rounded",
                    text: "Dec 20, 2022"
                },
                {
                    icon: "material-symbols:alarm-outline",
                    text: "7 Min Read"
                },
            ],

            listing: [
                {
                    text: "Shop configurations"
                },
                {
                    text: " Installing Sylius ecommerce shop"
                },
                {
                    text: "Setting up the database"
                },
                {
                    text: " Loading sample data for the environment"
                },
            ],
            chips: ['Technology', 'Learning', 'AI'],
            shares: [
                {
                    icon: "ph:copy-simple-light"
                },
                {
                    icon: "bx:bxl-facebook"
                },
                {
                    icon: "bi:twitter-x"
                },
                {
                    icon: "bxl:linkedin"
                }
            ],
            postCategories: [
                {
                    item: "Creative",
                    num: "12"
                },
                {
                    item: "Inspiration",
                    num: "8"
                },
                {
                    item: "AI",
                    num: "10"
                },
                {
                    item: "News",
                    num: "3"
                },
                {
                    item: "Tech",
                    num: "4"
                },
                {
                    item: "Skill",
                    num: "12"
                },
                {
                    item: "Development ",
                    num: "15"
                },
                {
                    item: "Programming ",
                    num: "5"
                }
            ],
            latestPost: [
                {
                    img: latestPostImg1,
                    altText: "latest post img1",
                    title: "Is It Worth Buying A Premium Form Builder.",
                    date: "Jan 16, 2024"
                },
                {
                    img: latestPostImg2,
                    altText: "latest post img2",
                    title: "Is It Worth Buying A Premium Form Builder.",
                    date: "May 16, 2023"
                },
                {
                    img: latestPostImg3,
                    altText: "latest post img3",
                    title: "Is It Worth Buying A Premium Form Builder.",
                    date: "May 16, 2023"
                },
                {
                    img: latestPostImg4,
                    altText: "latest post img4",
                    title: "Is It Worth Buying A Premium Form Builder.",
                    date: "Dec 20, 2022"
                },
            ]
        }
    }
}
</script>

<style scoped></style>