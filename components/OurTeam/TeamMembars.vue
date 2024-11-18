<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-5">
                <h2 itemprop="headline" class="title-primary mb-4 ">Each of our experts was the best among several <span
                        itemprop="text" class="text-green">thousand others</span></h2>
            </header>

            <div class="flex justify-center items-center mb-16">
                <img itemprop="image" src="~assets/img/our-team/team-membars.svg" alt="team membars img">
            </div>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-7 place-items-center">
                <div class="lg:order-1 order-2">
                    <h2 itemprop="name" class="text-dark-black text-[38px] font-medium font-jost">Ready to Start Your
                        Career with Us!
                    </h2>
                    <div class="mt-5">
                        <p itemprop="description" class="text-base text-gray font-poppins mb-5">Embark on a thrilling
                            journey with
                            ReformedTech!
                            Explore
                            enticing career opportunities and become an integral part of our dynamic team.</p>
                        <p itemprop="description" class="text-base text-gray font-poppins">Join us in shaping the future
                            as we strive for
                            excellence and innovation in every endeavor. Your career path awaits at ReformedTech; let's
                            create something extraordinary together!</p>
                        <NuxtLink itemprop="url" to="/career">
                            <button class="font-jost lg:w-auto w-full mt-10">
                                <span itemprop="text" class="primary-btn-v2">We’re hiring
                                    <Icon class="ml-1" name="material-symbols:arrow-outward" />
                                </span>
                            </button>
                        </NuxtLink>
                    </div>
                </div>

                <div class="lg:order-2 order-1 lg:mb-0 mb-7">
                    <img itemprop="image" src="~assets/img/our-team/membars-img.png" alt="team membars">
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