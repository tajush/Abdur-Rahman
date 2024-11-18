<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid grid-cols-12 gap-x-2">
                <div class="lg:col-span-7 col-span-12">
                    <div class="max-w-[650px]">
                        <h2 itemprop="headline" class="title-primary text-left mb-7">Let's know about <span class="text-green">staff augmentation!</span>
                        </h2>
                        <p itemprop="description" class="subtitle-primary text-base leading-[25px] mb-4">Staff augmentation involves augmenting your existing team with additional talent through a third party, such as a staffing agency or a professional services firm. This could include adding 10 engineers to 10 different teams or bringing in a single developer with specialized expertise. The third party is responsible for sourcing, vetting, and managing the additional talent, while you retain control over the project and the team's overall direction.
                        </p>
                        <p class="subtitle-primary text-base leading-[25px]">Staff augmentation eliminates the overhead of finding, hiring, training, and retaining talent. It empowers you to meet short- and long-term technology objectives with increased flexibility and immediate access to a high-quality talent pool.</p>
                        <NuxtLink itemprop="url" to="/contact">
                            <button class="font-jost lg:w-auto w-full mt-11 lg:mb-0 mb-7">
                                <span itemprop="text" class="primary-btn-v2">
                                    Contact us
                                <Icon class="ml-1" name="material-symbols:arrow-outward" />
                                </span>
                            </button>
                        </NuxtLink>
                    </div>
                </div>

                <div class="lg:col-span-5 col-span-12">
                    <img itemprop="image" src="~assets/img/dedicated-team/function-development-img.png" alt="function development img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>