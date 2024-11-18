<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="bg-call-action lg:px-24 px-6 lg:pt-24 pt-14 rounded-[40px]">
                <div class="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center">
                    <div class="lg:mb-0 mb-7">
                        <h2 itemprop="headline" class="title-primary lg:text-left mb-8 text-center"><span class="text-green">Ready to zoom </span> past your competitors?</h2>
                        <div class="lg:text-left text-center">
                            <NuxtLink itemprop="url" to="/contact">
                            <button class="font-jost">          
                                <span itemprop="text" class="secondary-btn-v2">
                                    Reach out now
                                <Icon class="ml-1" name="material-symbols:arrow-outward" />
                                </span>
                        </button>
                    </NuxtLink>
                        </div>
                    </div>
                    <div>
                        <img itemprop="image" class="lg:min-h-[280px]" src="~assets/img/talent-retention/call-to-action-img.svg" alt="call to action img">
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
.bg-call-action{
    background: linear-gradient(302deg, #146476 0.82%, #94B7BF 40.77%, #EDF8F8 69.99%);
}
</style> 