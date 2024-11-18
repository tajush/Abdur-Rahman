<template>
  <div>
    <PrimaryHeroSection :title="title" :subTitle="subTitle" :img="img" />
    <section class="lg:pt-28 pt-14">
      <div class="container max-w-7xl m-auto px-4">
        <div class="grid grid-cols-12 gap-x-7">
          <div class="lg:col-span-8 col-span-12 lg:mb-0 mb-10">
            <img class="border border-gray-light rounded-tr-md rounded-tl-md"
              src="/assets/img/career/job-details-img.png" alt="job details img">
            <div class="border border-t-0 border-gray-light p-6 rounded-bl-md rounded-br-md">
              <div class="mb-7">
                <h2 class="mb-4 lg:text-4xl text-2xl text-dark-black font-jost">{{ job.jobTitle }}</h2>
                <div class="flex items-center gap-x-4">
                  <div class="flex">
                    <Icon class="text-xl mr-2 text-gray" name="material-symbols:person" />
                    <p class="text-gray font-poppins text-base">{{ job.vacancyPosition }} Vacancy</p>
                  </div>
                  <div class="bg-[#146476] text-white py-[3px] px-4 rounded-full border-none">{{ job.jobType }}</div>
                </div>
              </div>

              <!-- Job Information Section -->
              <div class="grid lg:grid-cols-4 grid-cols-1 gap-x-4 mb-10">
                <div v-for="(info, i) in jobInfo" :key="i" class="p-4 border rounded border-gray-light lg:mb-0 mb-7">
                  <p class="text-base text-gray font-poppins mb-1">{{ info.title }}</p>
                  <h4 class="text-lg text-dark-black font-jost">{{ info.description }}</h4>
                </div>
              </div>

              <!-- Job Description -->
              <div class="mb-5">
                <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Job Description</h2>
                <p class="text-base text-gray font-poppins" v-html="job.jobDescription"></p>
              </div>

              <!-- Responsibilities -->
              <div class="mb-5">
                <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Responsibilities</h2>
                <div v-for="(response, i) in job.responsibilities" :key="i" class="flex items-center mb-3 last:mb-0">
                  <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                  <p class="text-base text-gray font-poppins">{{ response }}</p>
                </div>
              </div>

              <!-- Requirements -->
              <div class="mb-5">
                <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Requirements</h2>
                <div v-for="(data, i) in job.requirements" :key="i" class="flex items-center mb-3 last:mb-0">
                  <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                  <p class="text-base text-gray font-poppins">{{ data }}</p>
                </div>
              </div>

              <!-- Qualifications -->
              <div class="mb-5">
                <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Qualifications</h2>
                <div v-for="(data, i) in job.qualifications" :key="i" class="flex items-center mb-3 last:mb-0">
                  <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                  <p class="text-base text-gray font-poppins">{{ data }}</p>
                </div>
              </div>

              <!-- Working Hours -->
              <div class="mb-5">
                <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Working Hours</h2>
                <p class="text-base text-gray font-poppins">{{ job.workingHours }}</p>
              </div>

              <!-- Working Days -->
              <div class="mb-5">
                <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Working Days</h2>
                <div v-for="(day, index) in job.workingDays" :key="index">
                  <p class="text-base text-gray font-poppins mb-2">{{ day }}</p>
                </div>
              </div>

              <!-- Compensation & Other Benefits -->
              <div class="mb-5">
                <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Compensation & other benefits
                </h2>
                <div v-for="(data, i) in job.compensationAndOtherBenefits" :key="i"
                  class="flex items-center mb-3 last:mb-0">
                  <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                  <p class="text-base text-gray font-poppins">{{ data }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Overview Section -->
          <div class="lg:col-span-4 col-span-12">
            <div class="border border-gray-light py-7 px-6 rounded-md">
              <h2 class="text-2xl text-dark-black font-jost mb-10 font-medium capitalize">Job Overview</h2>
              <div v-for="(data, i) in overviews" :key="i" class="flex gap-x-4 mb-7 last:mb-0">
                <div class="min-w-14 h-14 bg-[#cfeeee] flex justify-center items-center rounded-full">
                  <Icon class="text-2xl text-[#146476]" :name="data.icon" />
                </div>
                <div>
                  <h4 class="text-base text-dark-black font-medium font-jost mb-1">{{ data.title }}</h4>
                  <p class="text-base text-gray font-poppins">{{ data.text }}</p>
                </div>
              </div>
              <a :href="job.jobLink" target="_blank">
                <button class="primary-btn font-jost lg:block hidden w-full">
                  <span>Apply Now
                    <Icon class="ml-1 text-2xl" name="material-symbols:arrow-right-alt-rounded" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import heroSectionImg from '/assets/img/our-story/story-hero-section-img.svg'
import { useRoute } from 'vue-router';
import jobData from '~/static/data.json'; // Adjust path as per your project structure
import { useSeoMeta } from '@unhead/vue';

const route = useRoute();
const jobId = route.params.id;

const job = jobData.find(job => job.id === jobId);

// Sample data structure to match your JSON
const jobInfo = [
  { title: 'Experience', description: job.jobSpecifications.experience },
  { title: 'Employee Type', description: job.jobSpecifications.employeeType },
  { title: 'Position', description: job.jobSpecifications.position },
  { title: 'Offered Salary', description: job.jobSpecifications.offeredSalary },
];

const responsibilities = job.responsibilities.map(responsibility => ({ text: responsibility }));
const requirements = job.requirements.map(requirement => ({ text: requirement }));
const qualification = job.qualifications.map(qualification => ({ text: qualification }));
const Compensation = job.compensationAndOtherBenefits.map(benefit => ({ text: benefit }));

const overviews = [
  { icon: 'material-symbols:person', title: 'Job Title', text: job.overview.jobTitle },
  { icon: 'material-symbols:kid-star-outline', title: 'Experience', text: job.overview.experience },
  { icon: 'material-symbols:location-on-outline', title: 'Location', text: job.overview.location },
  { icon: 'solar:dollar-linear', title: 'Offered Salary', text: job.overview.offeredSalary },
  { icon: 'iconoir:graduation-cap', title: 'Qualification', text: job.overview.qualification },
  { icon: 'solar:history-bold', title: 'Date Posted', text: job.overview.jobPosted },
];

const img = heroSectionImg;
const title = "Looking for <span class='text-green'>career opportunities</span> at ReformedTech.<span class='lowercase'>ca</span>?";
const subTitle = "Join our team, and let's shape the future of technology. As a Canadian company, we prioritize diversity.";

// Setting up dynamic SEO meta tags
const dynamicTitle = computed(() => `${job.jobTitle} | ReformedTech Career`);

const canonicalUrl = `https://reformedtech.ca${route.path}`;

useHead({
  title: dynamicTitle,
  meta: [
    { name: 'description', content: "Join our team, and let's shape the future of technology. As a Canadian company, we prioritise diversity, collaboration, and excellence. We are a leading offshore software development and web design company committed to delivering top-notch services to our clients." },
    { property: 'og:title', content: dynamicTitle },
    { property: 'og:description', content: "Join our team, and let's shape the future of technology. As a Canadian company, we prioritise diversity, collaboration, and excellence. We are a leading offshore software development and web design company committed to delivering top-notch services to our clients." },
    { property: 'og:image', content: 'https://reformedtech.ca/logo-02.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ]
});
</script>
