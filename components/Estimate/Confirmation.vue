
<template>
    <div class="lg:pt-14 pt-7">
        <div class="container max-w-7xl m-auto px-4 relative">
            <MenuLinks />

            <div class="lg:rounded-confiramtion-tl-br bg-white lg:py-[150px] py-14 px-6 lg:mt-24 mt-14">
                <div class="flex flex-col justify-center items-center">
                    <img class="mb-10" src="~assets/img/get-estimate/confirmation-img.svg" alt="confirmation img">
                    <p class="text-base font-poppins text-gray lg:mb-20 mb-10 max-w-[350px] text-center leading-[25px]">“Thanks for reaching out! Our team will contact you soon to discuss the next steps. <span class="text-green"
                        >Have a great day!</span>"</p>

                        <div class="sm:w-[450px] w-full">
                            <button class="secondary-btn font-jost w-full">
                                <NuxtLink to="/services">Our services
                                </NuxtLink>
                            </button>
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

<style scoped></style>