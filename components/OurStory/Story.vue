<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="name" class="title-primary mb-4 ">Our <span itemprop="text" class="text-green">Mission</span></h2>
            </header>

            <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-24 gap-x-4 place-items-center">
                <div class="lg:mb-0 mb-5">
                    <div class="lg:flex gap-x-4">
                        <img itemprop="image" class="w-full lg:mb-0 mb-5 rounded-[20px]" src="~assets/img/our-story/story-img1.png"
                            alt="story img1">
                        <img itemprop="image" class="w-full roudned-[20px]" src="~assets/img/our-story/story-img2.png" alt="story img2">
                    </div>
                </div>

                <div>
                    <p itemprop="description" v-for="(article, i) in articles" :key="i"
                        class="text-base text-dark-black leading-7 font-poppins mb-7 last:mb-0">{{ article.text }}</p>
                    <div>
                        <a itemprop="url" download href="reformedtech-company-profile.pdf"
                            class="text-primary-color text-base font-medium font-jost cursor-pointer">
                            <button class="font-jost">
                                <span itemprop="text" class="outline-btn-v2">
                                    Download Company Profile
                                    <Icon class="ml-1 text-xl" name="material-symbols:download" />
                                </span>
                            </button>
                        </a>

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
            articles: [
                {
                    text: "ReformedTech.ca is committed to empowering Canadian businesses by utilizing advanced technology to boost growth, cost efficiency, and high-quality services. We aim to lead the digital transformation and assist our clients in confidently navigating the constantly evolving tech landscape and achieving success."
                }
            ]
        }
    }
}
</script>

<style scoped></style>