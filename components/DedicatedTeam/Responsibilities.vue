<template>
    <div>
        <div itemscope
        itemtype="https://schema.org/WebContent" class="container max-w-7xl m-auto px-4">
            <!-- <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5 my-14">
                <div v-for="(feature, i) in features" :key="i"
                    class="bg-orange-light text-dark-black text-lg font-poppins leading-[30px] p-7 rounded-[20px] hover:bg-white hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all lg:mb-0 mb-7 last:mb-0">
                    {{ feature.text }}
                </div> 
            </div> -->

            <div class="flex justify-center items-center mt-14">
                <img itemprop="image" src="~assets/img/dedicated-team/roles-expertise-style.svg" alt="roles and expertise style img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    text: "ReformedTech staffs the breadth of different talent needed as you grow and scale - no more cobbling together random freelancers!"
                },
                {
                    text: "We custom recruit each role exactly to your specifications so you always get the perfect fit for you."
                },
                {
                    text: "We also handle all the administrative aspects of a dedicated team, including payroll, legal, taxes, computers, and benefits."
                }
            ]
        }
    }
}
</script>

<style scoped></style>