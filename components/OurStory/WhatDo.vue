<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid grid-cols-12 bg-orange-light lg:pt-10 pb-10 lg:px-20 rounded-[20px] border border-orange">
                <div class="lg:col-span-6 col-span-12">
                    <img itemprop="image" class="lg:rounded-[10px] lg:mb-0 mb-5 h-full"
                        src="/assets/img/our-story/what-we-do.png" alt="who we image">
                </div>
                <div class="lg:col-span-6 col-span-12 lg:px-0 px-4">
                    <h2 itemprop="headline" class="text-3xl text-dark-black font-medium font-jost mb-5 lg:mt-0 mt-5">
                        What <span itemprop="text" class="text-green">We Do</span></h2>
                    <div v-for="(item, i) in items" :key="i" class="flex items-center mb-4">
                        <Icon class="mr-4 text-primary-color text-2xl" name="uis:arrow-circle-right" />
                        <NuxtLink :to="item.link">
                            <div itemprop="text"
                                class="text-lg text-dark-black font-poppins hover:text-primary-color transition-all">
                                {{ item.text }}
                            </div>
                        </NuxtLink>
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
            items: [
                {
                    link: "/services/dedicated-teams",
                    text: "Custom Software Development"
                },
                {
                    link: "/website-development",
                    text: "Web Design and Development"
                },
                {
                    link: "/mobile-app-development",
                    text: "Mobile App Creation"
                },
                {
                    link: "/ai-ml-development",
                    text: "AI and ML Development"
                },
                {
                    link: "/ecommerce",
                    text: "E-commerce Solutions"
                },
                {
                    link: "/services/software-outsourcing",
                    text: "Cloud-Based Applications"
                },
                {
                    link: "/ui-ux-design",
                    text: "UI/UX Design"
                },
                {
                    link: "/qa-testing",
                    text: "Quality Assurance and Testing"
                },
                {
                    link: "/digital-marketing",
                    text: "Digital Marketing"
                },
                {
                    link: "/services/staff-augmentation",
                    text: "IT consulting and Support"
                }
            ]
        }
    }
}
</script>

<style scoped></style>