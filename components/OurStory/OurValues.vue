<template>
    <div itemscope
    itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Our <span itemprop="text" class="text-green">Values</span></h2>
            </header>

                <div
                    class="bg-orange-light border border-orange rounded-[20px] lg:py-12 py-7 lg:px-8 px-4 relative lg:mb-0 mb-7 max-w-[900px] mx-auto">
                    <div>
                        <div class="mb-10 last:mb-0 flex" v-for="(work, i) in works" :key="i">
                            <div>
                                <Icon class="mr-2 text-primary-color text-2xl" name="humbleicons:check-circle" />
                            </div>
                            <div>
                                <span itemprop="text" class="text-xl text-dark-black font-medium font-jost mr-2">{{ work.text }}</span>
                                <span itemprop="description" class="text-base text-gray font-poppins">{{ work.description }}</span>
                            </div>
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
            works: [
                {
                    text: "Innovation:",
                    description: "We continuously explore new technologies and methodologies to deliver state-of-the-art solutions that keep our clients ahead of the curve."
                },
                {
                    text: "Integrity: ",
                    description: "Honesty and transparency are the cornerstones of our business. We build trust through open communication and ethical practices."
                },
                {
                    text: "Customer-Centric Approach: ",
                    description: "Our client's success is our top priority. We tailor our services to meet their needs and deliver results exceeding expectations."
                },
                {
                    text: "Excellence: ",
                    description: "We strive for excellence in every project, ensuring the highest quality standards in our work."
                },
                {
                    text: "Maintain Relationship: ",
                    description: "We aim to maintain strong relations with clients to provide the best services with the best qualities."
                }
            ]
        }
    }
}
</script>

<style scoped></style>