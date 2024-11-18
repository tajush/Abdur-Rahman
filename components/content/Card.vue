<template>
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                <div class="lg:mb-10 mb-7">
                    <div class="shine">
                        <!-- <ImageComponent :src="card.img" :alt="card.altText" /> -->
                    </div>
                    <div
                        class="bg-orange-light border border-orange hover:border-white border-t-0 rounded-bl-3xl rounded-br-3xl hover:bg-white hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all cursor-pointer lg:p-6 p-4 min-h-[230px] blogs-card-content">
                        <div class="flex justify-between items-center mb-2.5">
                            <p class="subtitle-primary text-sm">
                                <slot name="date"></slot>
                            </p>
                            <div class="flex items-center">
                                <div class="w-5 h-[1px] bg-gray"></div>
                                <p class="subtitle-primary text-sm ml-2">
                                    <slot name="topics" />
                                </p>
                            </div>
                        </div>
                        <h4 class="lg:text-xl text-lg text-dark-black font-medium leading-[30px] capitalize">
                            <NuxtLink to="blog-details">
                                <slot name="blogTitle" />
                            </NuxtLink>
                        </h4>
                        <div class="flex mt-8">
                            <!-- <div v-for="(chip, index) in card.chips" :key="index" class="chips mr-2">{{ chip }}</div> -->
                        </div>
                    </div>
                </div>
            </div>
</template>