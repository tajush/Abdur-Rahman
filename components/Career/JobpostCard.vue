<template>
  <div class=" border border-[#B4BEC1] rounded-[16px] p-[24px]">
    <div class="flex justify-between "><span class="text-primary-color mb-2 text-[14px] leading-[20px] font-semibold">{{
      category }}</span>
      <div class="flex items-center gap-1">
         <NuxtLink to="/career/job-details">
          <button class="text-primary-color">View job <Icon class="ml-1" name="material-symbols:arrow-outward" /></button>
         </NuxtLink>
      </div>
    </div>
    <div class="flex items-center gap-4 mb-4">
      <h2 class="font-medium text-[18px] leading-[27px]"> {{ title }}</h2>
      <div class="flex items-center gap-1">
        <ImageComponent :src="icon" alt="Icon" class="icon" />
        <p class="text-[14px] leading-[20px] font-semibold" :style="{ color: color }">{{ department }}</p>
      </div>
    </div>
    <p class="text-left mb-4 font-normal text-[16px] leading-[25.6px] font-poppins">We’re looking for a mid-level
      product designer to join our team.</p>
    <div class="flex items-center gap-4">
      <div class="flex gap-2"><img src="~assets/img/career/marker-pin-02.svg" alt="">
        <h3>Remote</h3>
      </div>
      <div class="flex gap-2"><img src="~assets/img/career/clock.svg" alt="">
        <h3>Full-time</h3>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue'
export default {
  name: 'JobpostCard',
  components: {
    ImageComponent
  },
  props: {
    category: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#000' // default color
    },
    icon: {
      type: String
    },
  }
}
</script>

<style scoped>

</style>