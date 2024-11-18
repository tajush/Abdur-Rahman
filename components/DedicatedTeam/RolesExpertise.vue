<template>
    <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="headline" class="title-primary mb-4 ">Your dedicated development team can come in <span itemprop="text" class="text-green">all
                        shapes and sizes!</span></h2>
            </header>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                <div class="bg-orange-light border border-orange rounded-[20px] lg:py-10 py-7 lg:px-8 px-4 relative lg:mb-0 mb-7">
                    <div class="absolute top-0 right-0 rounded-secondary-tl-br  bg-orange lg:py-7 py-4 lg:px-8 px-5 border border-orange">
                        <img itemprop="image" class="w-[50px]" src="~assets/img/dedicated-team/roles-icon.svg" alt="roles icon">
                    </div>
                    <h4 itemprop="name" class="lg:text-[32px] text-2xl text-gray font-medium font-jost">Roles</h4>
                    <div class="mt-10">
                        <p itemprop="text" v-for="(role, i) in roles" :key="i" class="lg:text-2xl text-xl font-jost leading-[42px] lg:leading-[52px] text-gray">{{ role }}
                        </p>
                    </div>
                </div>

                <div class="bg-orange-light border border-orange rounded-[20px] lg:py-10 py-7 lg:px-8 px-4 relative">
                    <div class="absolute top-0 left-0 rounded-tertiary-tl-br  bg-orange lg:py-7 py-4 lg:px-8 px-5 border border-orange ">
                        <img itemprop="image" class="w-[50px]" src="~assets/img/dedicated-team/expertise-icon.svg" alt="expertise icon">
                    </div>
                    <h4 itemprop="name" class="lg:text-[32px] text-2xl text-gray font-medium font-jost text-right">Expertise</h4>
                    <div class="mt-10 text-right">
                        <p itemprop="text" v-for="(expert, i) in expertise" :key="i" class="lg:text-2xl text-xl font-jost leading-[42px] lg:leading-[52px] text-gray">{{
                            expert }}</p>
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
            roles: [
                'Front & Backend developers',
                'Product owners & managers',
                'DevOps and security engineers',
                'Automation & Manual QA ',
                'UI/UX designers',
                'Implementation & Integration Engineers',
                'Mobile developers',
                'Technical support specialists',
                'Software architects',
                'More...',
            ],
            expertise: [
                'PHP',
                'Java, Javascript',
                'C, C++, NET',
                'React, React Native ',
                'Pyton, Go, MySQL, NodeJs',
                'Mogno DB, ElasticSearch',
                'Angular, VUE',
                'AAWS, Azure, Google Cloud',
                ' Docker, Kubernetes, Jenkins',
                'More...',
            ],
        }
    }
}
</script>

<style scoped></style>