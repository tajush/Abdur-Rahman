<template>
  <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
    <div class="container max-w-7xl m-auto px-4">
      <div class="flex flex-col items-center bg-orange-light lg:py-[64px] py-10 lg:px-[64px] px-6 rounded-[20px]">
        <header class="mx-auto">
          <h2 itemprop="headline" class="title-primary  mb-[20px] ">Can’t see a position that <span itemprop="text" class='text-green'>suits you?</span> </h2>
          <p itemprop="description" class="subtitle-primary lg:text-lg text-sm text-center mx-auto leading-[22px]  max-w-[768px]">We’re always
            looking for smart, motivated people.Python, PHP/Laravel, JS, Java, NodeJS, VueJS/ReactJS, React Native, SQA
            etc.</p>
        </header>
        <NuxtLink itemprop="url" to="/contact">
          <button class="py-3 px-14 font-jost lg:w-auto w-full mt-7">
            <span itemprop="text" class="primary-btn-v2">Send us your resume
            </span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>