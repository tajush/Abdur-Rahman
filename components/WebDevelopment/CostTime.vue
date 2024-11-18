<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline"class="title-primary mb-4 "><span itemprop="text" class="text-green">Costs</span> and time</h2>
            </header>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-7 mb-7">
                <div class="border border-orange rounded-[20px] cost-left-card lg:mb-0 mb-7">
                    <div class="mt-10  px-6">
                        <img itemprop="image" class="mb-5" src="~assets/img/web-development/clock-icon.svg" alt="clock icon">
                        <h2
                        itemprop="name"
                            class="max-w-[250px] text-[28px] leading-[36px] text-dark-black font-medium font-jost capitalize">
                            Standard web app development</h2>
                        <div class="mb-6 mt-12">
                            <p itemprop="text" class="text-base text-gray font-jost">Starting From</p>
                            <h4 itemprop="text" class="text-[22px] text-dark-black font-medium font-jost">$15,000</h4>
                        </div>

                        <div>
                            <p itemprop="name"class="text-base text-gray font-jost">Timeline</p>
                            <h4 itemprop="text" class="text-[22px] text-dark-black font-medium font-jost">Depends on requirements.</h4>
                        </div>
                    </div>
                </div>

                <div class="border border-orange rounded-[20px] cost-right-card">
                    <div class="mt-10  px-6">
                        <img itemprop="image" class="mb-5" src="~assets/img/web-development/thunder-icon.svg" alt="thunder icon">
                        <h2
                            itemprop="name"
                            class="max-w-[250px] text-[28px] leading-[36px] text-dark-black font-medium font-jost capitalize">
                            Urgent web app development</h2>
                        <div class="mb-6 mt-12">
                            <p itemprop="text" class="text-base text-gray font-jost">Starting From</p>
                            <h4 itemprop="text" class="text-[22px] text-dark-black font-medium font-jost">$55,000</h4>
                        </div>

                        <div>
                            <p itemprop="name" class="text-base text-gray font-jost">Timeline</p>
                            <h4 itemprop="text" class="text-[22px] text-dark-black font-medium font-jost">Depends on requirements.</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rounded-[20px] subscription-card lg:py-24 py-14 px-6">
                <div class="flex lg:mb-20 mb-10">
                    <Icon class="mr-3 text-white text-3xl" name="codicon:tools" />
                    <h2 itemprop="text" class="text-[28px] leading-[36px] text-white font-medium font-jost">Post-release maintenance
                    </h2>
                </div>

                <div class="lg:flex gap-x-20">
                    <div class="lg:mb-0 mb-5">
                        <p itemprop="name" class="text-base text-white font-jost">Starting From</p>
                        <h4 itemprop="text" class="text-[22px] text-white font-medium font-jost">$1,000+/month</h4>
                        <p itemprop="text" class="text-lg text-white font-jost">Subscription fee</p>
                    </div>

                    <div>
                        <p itemprop="name" class="text-lg text-white font-jost">Includes</p>
                        <h4 itemprop="text" class="text-[22px] text-white font-medium font-jost">Infrastructure support,</h4>
                        <h4 itemprop="description" class="text-[22px] text-white font-medium font-jost">bug fixing, and more</h4>
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

        }
    }
}
</script>

<style scoped>
@import "/assets/css/cost-time.css"
</style>