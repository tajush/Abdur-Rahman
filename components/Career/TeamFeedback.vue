<template>
  <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-24 pt-14">
    <div class="container max-w-7xl m-auto px-4">
      <header class="max-w-[750px] mx-auto lg:mb-16 mb-7">
        <h2 itemprop="headline" class="title-primary mb-4">What our team says <span itemprop="text" class="text-green">about us</span></h2>
      </header>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <div class="lg:mt-28 lg:mb-0 mb-10">
          <swiper @swiper="onSwiper" :slidesPerView="1" :spaceBetween="30" :loop="true" class="mySwiper">

            <swiper-slide v-for="(slide,i) in slides" :key="i">
              <p itemprop="text" class="text-dark-blackfont-jost lg:text-lg text-sm text-left leading-[22px] mb-[48px]">
               {{ slide.text }}
              </p>
              <div class="flex">
                <img itemprop="image" class="mr-3 w-[56px] h-[56px]" src="~assets/img/career/dummy-profile-img1.jpg" alt="dummy profile image">
                <div>
                  <h2 itemprop="name" class="text-base text-dark-black font-medium font-jost ">{{ slide.name }}</h2>
                  <p itemprop="description" class="text-sm text-gray font-poppins">{{ slide.designation }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="flex gap-x-3 lg:justify-end justify-start lg:mt-0 mt-5">
            <div @click="slidePrev" class="flex justify-center items-center border border-[#EAECF0] rounded-full lg:w-[56px] w-[40px] lg:h-[56px] h-[40px] cursor-pointer">
              <Icon class="text-2xl text-gray" name="mdi:arrow-left" />
            </div>
            <div @click="slideNext" class="flex justify-center items-center border border-[#EAECF0] rounded-full lg:w-[56px] w-[40px] lg:h-[56px] h-[40px] cursor-pointer">
              <Icon class="text-2xl text-gray" name="mdi:arrow-right" />
            </div>
          </div>

        </div>

        <div>
          <img itemprop="image" src="~assets/img/career/about-team-img.png" alt="about team img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import required modules

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref([
      {
        text: "It is a great opportunity to join ReformedTech. The team is open to bringing new ideas to the table. I am glad to work in such a challenging and positive work environment where the focus is to solve problems through team cooperation and moving towards a common vision.",
        name: "Ashfaqur Rahman",
        designation: "Lead UI/UX Engineer"
      },
      {
        text: "The culture of innovation at ReformedTech is truly inspiring. As a full-stack developer, I have the freedom to experiment with new ideas and technologies, which keeps my work exciting and fresh.",
        name: "Tanveer Qureshee",
        designation: "Sr. Full Stack Developer"
      },
      {
        text: "At ReformedTech, I have been given an incredible opportunity to collaborate with top-tier software engineers from around the globe. This experience has not only expanded my technical expertise but has also allowed me to immerse myself in a diverse and innovative environment. Working alongside such talented professionals has been both inspiring and educational, making my journey at ReformedTech truly invaluable.",
        name: "Sarjis Abdullah",
        designation: "Software Engineer"
      },
    ])
    const swiperRef = ref(null);

    const slidePrev = () => {
      swiperRef.value?.slidePrev();
    };

    const slideNext = () => {
      swiperRef.value?.slideNext();
    };

    const onSwiper = (swiper) => {
      swiperRef.value = swiper;
    };

    return {
      swiperRef,
      slidePrev,
      slideNext,
      onSwiper,
      slides
    };
  },
};
</script>

<style></style>