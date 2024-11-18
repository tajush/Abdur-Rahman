<template>
   <div class="lg:pt-28 pt-14"><div class="container max-w-7xl m-auto px-4">
    <header class="max-w-[750px] mx-auto mb-16">
                <h2 class="title-primary">Perks & Benefits</h2>
            </header>
        <div class="grid grid-cols-2 lg:grid-cols-4 md:gap-x-[96px]  gap-x-[16px] ">
          <div v-for="(benefit, i) in benefits" :key="i" class="text-center lg:mb-20 mb-7">
            <ImageComponent class="mx-auto mb-[30px] " :src="benefit.icon" alt="" />

            <p class="mx-auto subtitle-primary lg:text-base text-sm">{{ benefit.title }}</p>

          </div>
          <div class="w-full">
            <img class="w-full" src="~assets/img/career/horizontal.svg" alt="">
          </div>

        </div>
      </div></div>
</template>

<script>

import { reactive, toRefs } from 'vue'
import ImageComponent from '../ImageComponent.vue'
import bonus from '/assets/img/career/bonus.svg'
import planning from '/assets/img/career/planning.svg'
import taco from '/assets/img/career/taco.svg'
import beach from '/assets/img/career/beach.svg'
import workplace from '/assets/img/career/bonus.svg'
import group from '/assets/img/career/group.svg'
import Frame from '/assets/img/career/Frame.svg'
import reading from '/assets/img/career/reading.svg'

export default {
  components: {
    ImageComponent
  },
  setup() {
    const state = reactive({
      
      benefits: [
        {
          icon: bonus,
          title: "Yearly 2 Festive Bonus (50% of Basic Salary)"

        },

        {
          icon: planning,
          title: "Weekly 2 Holidays (Saturday & Sunday)"

        },

        {
          icon: taco,
          title: "Free Snacks, Lunch and Coffee"
        },

        {
          icon: beach,
          title: "Annual Tour"
        },

        {
          icon: workplace,
          title: "Easy, Breezy, Open-Work Environment"
        },

        {
          icon: group,
          title: "Team Learning Program"
        },
        {
          icon: Frame,
          title: "Prayer facilities"
        },
        {
          icon: reading,
          title: "Free Books for Growth"
        }
      ]
    });
    

    return {
      ...toRefs(state)
    
    }
  }
}

</script>

<style>


</style>