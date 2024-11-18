<template>
  <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
    <div class=" container max-w-7xl m-auto px-4">
      <div class="flex flex-col items-center bg-orange-light lg:py-[64px] py-10 lg:px-[64px] px-6 rounded-[20px]">
        <header class=" mx-auto ">
          <h2 itemprop="headline" class="title-primary  mb-[20px] "><span class="text-green">Get in </span>touch</h2>
          <p itemprop="description" class="subtitle-primary lg:text-lg text-sm text-center mx-auto leading-[22px]  max-w-[768px]">Get in touch
            today for a consultation or to learn more about how ReformedTech.ca can help you achieve your business
            goals. Let's build something extraordinary together!</p>
        </header>
        <NuxtLink itemprop="url" to="/contact">
          <button class="font-jost lg:w-auto w-full mt-11 lg:mb-0 mb-7">
            <span itemprop="text" class="primary-btn-v2">
              Contact us
              <Icon class="ml-1" name="material-symbols:arrow-outward" />
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