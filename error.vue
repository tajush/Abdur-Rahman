<template>
    <div class="py-5">
        <div class="container max-w-7xl m-auto px-4 relative">
            <MenuLinks />

            <div class="grid lg:grid-cols-2 grid-cols-1 place-items-center lg:mt-[220px] mt-20">
                <div>
                    <img class="mb-10" src="~assets/img/error/error-img.svg" alt="error img">
                </div>

                <div>
                    <p class="text-lg text-gray font-poppins mb-1 lg:text-left text-center">404 error</p>
                    <h1 class="text-[38px] text-dark-black font-medium font-jost capitalize mb-6 lg:text-left text-center">Page <span
                            class="text-green">Not Found</span></h1>
                    <p class="text-base text-gray font-poppins lg:mb-14 mb-10 lg:text-left text-center">Apologies, the page you're looking for may have been
                        moved or doesn't exist. Explore these helpful links instead.</p>
                    <div class="lg:flex gap-x-5">
                        <button class="font-jost lg:w-auto w-full lg:mb-0 mb-7">
                            <span class="primary-btn-v2 !px-14">
                                Go back
                            </span>
                        </button>
                        <button class="font-jost lg:w-auto w-full">
                            <span class=outline-btn-v2>
                                <NuxtLink to="/">Take me home
                                <Icon class="ml-1" name="material-symbols:arrow-outward" />
                            </NuxtLink>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
</style>