<template>
  <div itemscope itemtype="https://schema.org/WebContent" class="lg:pt-28 pt-14">
    <div class="container max-w-7xl m-auto">
      <div itemscope itemtype="https://schema.org/Museum" class="w-full bg-white shadow-[0_6px_10px_#edf8f8]">
          <iframe itemprop="url" class=w-full src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.35920975286!2d-120.34330119999998!3d50.6575908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2dd22d38aed3%3A0x4e709c997c4f9d03!2sReformedTech.ca!5e0!3m2!1sen!2sbd!4v1725015062738!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="grid grid-cols-12 form-shadow ">
        <div class="lg:col-span-8 col-span-12 lg:mb-0 mb-10">
          <form class="lg:px-[152px] px-4 lg:pt-[76px] pt-40">
            <header class="max-w-[750px] text-left mb-[48px]">
              <h2 itemprop="headline" class="title-primary text-left mb-4">Level Up <span itemprop="text" class="text-green">Your Brand</span> </h2>
              <p itemprop="description" class="subtitle-primary text-left lg:text-lg text-sm  leading-[22px]">Complete this brief form, and
                we'll
                promptly respond.</p>
            </header>
            <div>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-4">
                <div class="mb-6">
                  <label itemprop="name" class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5">Full name<span
                      class="text-red-600">*</span></label>
                  <input :class="nameState || nameState === null ? 'mb-3' : ''" v-model="name" :state="nameState"
                    @keyup="nameEnter" class="w-full p-[14px] text-sm  border border-orange rounded-md outline-none"
                    type="text" placeholder="Full name">
                  <p itemprop="text" class="text-red-600 font-poppins text-base" v-if="nameCount == 1 && !name || errors.name">{{ errors
                    && errors.name ? errors.name[0] : "Please enter fullname" }}</p>
                </div>

                <div class="mb-6">
                  <label itemprop="name" class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5" for="email">
                    Email<span class="text-red-600">*</span>
                  </label>
                  <input class="w-full p-[14px] text-sm placeholder: border border-orange rounded-md outline-none"
                    type="email" placeholder="you@company.com" v-model="email" @input="validateEmail">
                  <p itemprop="text" class="text-red-600 font-poppins text-base" v-if="emailError">{{ emailError }}</p>
                </div>

              </div>

              <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-4">
                <div class="mb-6">
                  <label itemprop="name" class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5">Phone Number</label>
                  <input class="w-full p-[14px] border border-orange text-sm rounded-md outline-none" type="number"
                    placeholder="Phone number" v-model="phone" :state="phoneState" @keyup="phoneEnter">
                </div>

                <div class="mb-6">
                  <label itemprop="text" class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5" for="budget">Project
                    budget</label>
                  <select class="w-full p-[14px] text-sm text-[#6A797C] border border-orange rounded-md outline-none"
                    v-model="budget" name="budget">
                    <option class="text-sm" value="">Select your range</option>
                    <option value="$5K - $10K">$5K - $10K</option>
                    <option value="$20K - $50K">$20K - $50K</option>
                    <option value="$50K - $100K">$50K - $100K</option>
                    <option value="$100k and up">$100k and up</option>
                  </select>
                </div>
              </div>

              <div class="mb-6">
                <label itemprop="name" class="font-poppins text-[16px] leading-[25.6px] font-normal block mb-1.5"
                  for="messages">Messages<span class="text-red-600">*</span></label>
                <textarea itemprop="text" class="w-full border border-orange rounded-md outline-none p-[14px]" name="" id="" cols="30"
                  rows="7" v-model="message" :state="commentState" @keyup="commentEnter"
                  :class="commentState || commentState === null ? 'mb-3' : ''"></textarea>
                <p itemprop="text" class="text-red-600 font-poppins text-base" v-if="commentCount == 1 && !message || errors.message">
                  {{ errors && errors.message ? errors.message[0] : "Please write something" }}</p>
              </div>

              <div>
                <h5 itemprop="headline" class="font-poppins text-[16px] leading-[25px] font-normal mb-4">Services</h5>
                <div class="grid grid-cols-2 lg:gap-x-5 gap-x-2">
                  <div v-for="(service, index) in servicesList" :key="index" class="mb-4">
                    <label class="checkbox-container">
                      <div class="flex items-center gap-2">
                        <input type="checkbox" :value="service" v-model="services">
                        <span class="custom-checkbox"></span>
                        {{ service }}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 mb-3">
              <p itemprop="text">*By continuing, I agree with your <NuxtLink class="hover:text-primary-color" to="/terms">Terms of
                  Service</NuxtLink> and <NuxtLink class="hover:text-primary-color" to="/privacy-policy">Privacy Policy.
                </NuxtLink>
              </p>
            </div>
          </form>

          <div @click="postData"
            class="lg:mx-[152px] mx-4 mb-[76px] flex gap-2 items-center text-white hover:text-dark-black justify-center py-[14px] px-[17px] bg-primary-color hover:bg-transparent border border-primary-color rounded-lg cursor-pointer transition-all">
            <button itemprop="text" type="button">Send Message</button>
            <Icon class="ml-1" name="material-symbols:arrow-outward" />
          </div>
        </div>

        <div itemscope itemtype="https://schema.org/Article" class="bg-[#edf8f8] mt-4 md:mt-0 lg:px-[32px] px-6 lg:py-[60px] py-10 lg:col-span-4 col-span-12">
          <div class="mb-7">
            <div class="flex justify-center items-center">
              <img itemprop="image" class="w-64" src="/assets/img/contact/phone-gif.gif" alt="phone gif">
            </div>
            <h3 itemprop="name" class="text-[24px] font-jost font-normal leading-[33.6px] mt-[32px] mb-2">Let's build a meaningful
              connection</h3>
            <p itemprop="description" class="subtitle-primary text-left lg:text-base text-sm font-medium">Thank you for considering
              ReformedTech.ca for your needs. Feel free to reach out to us using the following contact information:</p>
          </div>

          <div class=" flex items-start gap-2 pb-[20px]  md:pb-7">
            <div>
              <h2 itemprop="text" class=" font-jost text-[22px] leading-[30.8px] font-normal mb-2">General Inquiries & Technical Support
              </h2>
              <p
                class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px] mb-2">
                <Icon class='mr-2 text-black text-2xl' name='ic:outline-mail' /> <a itemprop="url"
                  href='mailto:contact@reformedtech.ca'>contact@reformedtech.ca</a>
              </p>

              <p class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px]">
                <Icon class="mr-1 text-black text-2xl" name="ic:baseline-whatsapp" /> <a itemprop="url" href='tel:+1 778 538 4001'>+1
                  778 538 4001 </a>
              </p>
            </div>
          </div>

          <div class=" flex items-start gap-2 pb-[20px]  md:pb-7">
            <div>
              <h2 itemprop="text" class=" font-jost text-[22px] leading-[30.8px] font-normal mb-2">Sales and Business Development</h2>
              <p itemprop="description" class="font-poppins text-[#4F5B5E] text-left lg:text-base text-sm  leading-[22px] mb-4">For inquiries
                related to our services, pricing, or project proposals, please get in touch with our sales team:
              </p>
              <p
                class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px] mb-2">
                <Icon class='mr-2 text-black text-2xl' name='ic:outline-mail' /> <a itemprop="url"
                  href='mailto:kazi@reformedtech.ca'>kazi@reformedtech.ca</a>
              </p>

              <p class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px]">
                <Icon class="mr-1 text-black text-2xl" name="ic:baseline-whatsapp" /> <a itemprop="url" href='tel:+1 778 538 4001'>+1
                  778 538 4001 </a>
              </p>
            </div>
          </div>

          <div class=" flex items-start gap-2">
            <div class="md:pb-7">
              <h2 itemprop="text" class=" font-jost text-[22px] leading-[30.8px] font-normal mb-2">Visit Our Office</h2>
              <p itemprop="description" class="font-poppins text-[#4F5B5E] text-left lg:text-base text-sm  leading-[22px]">We'd love to
                meet you in person! Our office:
              </p>
              <div class="my-6">
                <button itemprop="text"
                  :class="['text-black text-base font-poppins rounded-md border border-gray px-4 py-1 mr-4', { 'bg-[#146476] text-white border-[#146476]': selectedButton === 'Canada' }]"
                  @click="selectButton('Canada')">
                  Canada
                </button>
                <button itemprop="text"
                  :class="['text-black text-base font-poppins rounded-md border border-gray px-4 py-1', { 'bg-[#146476] text-white border-[#146476]': selectedButton === 'Bangladesh' }]"
                  @click="selectButton('Bangladesh')">
                  Bangladesh
                </button>
              </div>

              <div v-if="selectedButton === 'Canada'">
                <p itemprop="text"
                  class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px] mb-1">
                  291, Gordonhorn Crescent, Kamloops,
                </p>

                <p itemprop="text"
                  class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px]">
                  BC V2E 1G6, Canada.
                </p>
              </div>

              <div v-if="selectedButton === 'Bangladesh'">
                <p itemprop="text"
                  class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px] mb-1">
                  House: 32/1, Road: 03
                </p>

                <p itemprop="text"
                  class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px]">
                  Shyamoli, Dhaka-1207, Bangladesh.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 itemprop="text" class=" font-jost text-[22px] leading-[30.8px] font-normal mb-3">Buisness Hour</h2>
            <p itemprop="description" class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px]">
              Monday to Friday: 9:00 AM - 6:00 PM.
            </p>

            <p itemprop="description" class="font-poppins text-[#03141A] text-left lg:text-lg text-sm flex items-center !leading-[32px]">
              Saturday: 10:00 AM - 2:00 PM. (by appointment only)
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <transition name="fade">
      <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center">
        <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-40"></div>
        <div class="w-full max-w-lg p-5 relative z-50 mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div class="text-center p-3 flex-auto justify-center leading-6">
            <Icon class="w-16 h-16 flex items-center text-green mx-auto" name="icon-park-solid:success" />
            <h2 class="text-2xl font-bold py-4 text-dark-black font-jost">Thank You</h2>
            <p class="text-md text-gray px-8 font-poppins">We'll contact with you shortly </p>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import Validation from "@/mixins/validationMixins";
import ImageComponent from '../ImageComponent.vue'
export default {
  mixins: [Validation],
  components: {
    ImageComponent
  },
  data() {
    return {
       selectedButton: 'Canada',
      location: [
        {
          title: "General Inquiries & Technical Support",
          contact: "Email: <a href='mailto:contact@reformedtech.ca'>contact@reformedtech.ca</a> <br> Phone + What's Up: <a href='tel:+1 778 538 4001'>+1 778 538 4001 </a>"

        },
        {
          title: "Sales and Business Development",
          subTitle: "For inquiries related to our services, pricing, or project proposals, please get in touch with our sales team:",
          contact: "<div><Icon class='mr-1 text-black text-xl' name='ic:outline-mail' /> <a href='mailto:Kazi@reformedtech.ca'>Kazi@reformedtech.ca</a></div> <br> Phone + What's Up: <a href='tel:+1 778 538 4001'>+1 778 538 4001 </a>"

        },
        {
          title: "Visit Our Office",
          subTitle: "We'd love to meet you in person! Our office:",
          contact: "291, Gordonhorn Crescent, Kamloops. <br> BC V2E 1G6 , Canada. <br> Monday to Friday: 9:00 AM - 6:00 PM. <br> Saturday: 10:00 AM - 2:00 PM. (by appointment only)"
        }
      ]
    }
  },

  methods: {
    selectButton(button){
      this.selectedButton = button
    }
  }
}
</script>

<style>
input[type=file]::file-selector-button {
  border: 1px solid #FF725E;
  background-color: transparent;
  border-radius: 4px;

}

/* Hide the default checkbox */
input[type="checkbox"] {
  display: none;
}

/* Style the custom checkbox container */
.checkbox-container {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

/* Style the custom checkbox */
.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #FFCEC7;
  /* Set the border color */
  border-radius: 4px;
  /* Optional: Rounded corners */
}

/* Style the custom checkbox checkmark */
.custom-checkbox::after {
  content: "";
  display: none;
  position: absolute;
  top: 2px;
  left: 6px;
  width: 6px;
  height: 12px;
  border: solid #FF725E;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

/* Show the custom checkmark when the checkbox is checked */
input[type="checkbox"]:checked+.custom-checkbox::after {
  display: block;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>