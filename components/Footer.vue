<template>
    <div itemscope itemtype="https://schema.org/WPFooter">
        <div class="-mb-36 relative z-50">
            <Newsletter />
        </div>
        <div class="bg-dark-black rounded-t-[300px] lg:pt-60 pt-48 pb-14">
            <div class="container max-w-7xl m-auto px-4">

                <div class="grid grid-cols-12 gap-x-7 ">
                    <div class="lg:col-span-3 col-span-12">
                        <div class="lg:block flex flex-col justify-center items-center">
                            <img itemprop="image" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                                class="mb-14 lg:block hidden w-[60%]" src="~assets/img/footer-logo.svg" alt="logo white">
                            <img itemprop="image" class="mb-7 lg:hidden block w-[40%]" src="~assets/img/new-logo-white.svg" alt="logo white">
                            <div data-aos="fade-up" :data-aos-delay="motive.delays" data-aos-duration="1000"
                                v-for="(motive, i) in motivations" :key="i" class="flex items-center gap-x-3 mb-7">
                                <p itemprop="text" class="lg:text-2xl text-[22px] font-medium text-[#CDD4D5] opacity-[0.7]">{{
                                    motive.firstWord
                                    }}</p>
                                <div class="w-2.5 h-2.5 bg-[#133B47]"></div>
                                <p itemprop="text" class="lg:text-2xl text-[22px] font-medium text-[#CDD4D5] opacity-[0.7]">{{
                                    motive.secondWord
                                    }}</p>
                            </div>

                            <div class="max-w-[230px] flex justify-center items-center">
                                <img itemprop="image" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                                    src="~assets/img/home/victory-sign.svg" alt="victory sign">
                            </div>
                        </div>

                    </div>

                    <div class="lg:col-span-2 col-span-12">
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="lg:block hidden">
                            <h2 itemprop="name" class="text-lg text-[#E6EAEB] leading-8 font-jost font-semibold">Company</h2>
                            <ul class="list-none mt-2.5">
                                <li v-for="(item, i) in quickLinks" :key="i"
                                    class="text-base text-[#CDD4D5] hover:text-primary-color transition-all leading-[36px] font-poppins">
                                    <NuxtLink itemprop="archivedAt" :to="item.link">{{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>

                        <div class="lg:hidden block lg:mt-0 mt-12">
                            <div class="lg:mb-0 mb-7 last:mb-0" v-for="(path, i) in paths" :key="i">
                                <div @click="toggleDropdown(path.dropname)" class="flex justify-between cursor-pointer">
                                    <h2 itemprop="text" class="text-lg text-[#E6EAEB] leading-8 font-jost font-semibold">{{
                                        path.dropname }}
                                    </h2>
                                    <div :class="dropdowns[path.dropname] ? 'rotate-180' : ''">
                                        <Icon class="ml-1 text-white" name="ion:chevron-down-outline" />
                                    </div>
                                </div>
                                <div v-if="dropdowns[path.dropname]" class="pl-4">
                                    <a itemprop="url" v-for="subpath in path.subpaths" :key="subpath.name" :href="subpath.link"
                                        class="block py-2 text-base text-[#CDD4D5] hover:text-primary-color transition-all lg:leading-[36px] font-poppins">
                                        {{ subpath.name }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 col-span-12 lg:block hidden">
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <h2 itemprop="name" class="text-lg text-[#E6EAEB] leading-8 font-jost font-semibold">Services</h2>
                            <ul class="list-none mt-2.5">
                                <li v-for="(item, i) in services" :key="i"
                                    class="text-base text-[#CDD4D5] hover:text-primary-color transition-all leading-[36px] font-poppins">
                                    <NuxtLink itemprop="archivedAt" :to="item.link">{{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="lg:col-span-4 col-span-12 lg:mt-0 mt-12">
                        <h2 itemprop="name" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                            class="text-lg text-[#E6EAEB] leading-8 font-jost font-semibold lg:text-left text-center">
                            Follow Us
                        </h2>
                        <div class="flex lg:justify-start justify-center items-center mt-4 mb-5">
                            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                                v-for="(social, i) in socialLinks" :key="i" class="mr-3">
                                <NuxtLink itemprop="archivedAt" target="_blank" :to="social.link"
                                    class=" bg-[#CDD4D5] hover:bg-white text-gray hover:text-dark-black transition-all p-3 flex justify-center items-center rounded-md">
                                    <Icon class="text-2xl" :name="social.icon" />
                                </NuxtLink>
                            </div>
                        </div>

                        <h2 itemprop="name" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                            class="text-lg text-[#E6EAEB] leading-8 font-jost font-semibold lg:text-left text-center">
                            Membership
                        </h2>
                        <div class="flex justify-center lg:justify-start mt-3 mb-5">
                            <NuxtLink to="https://business.kamloopschamber.ca/list/member/reformedtech-ca-7861" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                <img src="~assets/img/membership-badges/membership-badge.svg" alt="Membership Badge" class="w-auto h-12 rounded-md" />
                            </NuxtLink>
                        </div>

                        <div  itemscope
                        itemtype="https://schema.org/ContactPoint">
                            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" class="mb-5">
                            <h2 itemprop="name"
                                class="text-lg text-[#E6EAEB] leading-8 font-jost font-semibold lg:text-left text-center">
                                General Inquiries
                            </h2>
                            <p itemprop="email" class="text-base text-[#CDD4D5] lg:leading-[36px] font-poppins">
                                <Icon class="mr-1 text-white text-xl" name="ic:outline-mail" /> <a class="ml-1"
                                    href="mailto:contact@reformedtech.ca">contact@reformedtech.ca</a>
                            </p>

                            <p itemprop="telephone" class="text-base text-[#CDD4D5] lg:leading-[36px] font-poppins">
                                <Icon class="mr-1 text-white text-xl" name="ic:baseline-whatsapp" /> <a class="ml-1"
                                    href="tel:+1 778 538 4001">+1 778 538 4001</a>
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="mb-5">
                            <h2 itemprop="name"
                                class="text-lg text-[#E6EAEB] leading-8 font-jost font-semibold lg:text-left text-center">
                                Visit Our Office
                            </h2>
                            <p itemprop="contactOption" class="text-base text-[#CDD4D5] lg:leading-[36px] font-poppins">
                                291, Gordonhorn Crescent, Kamloops.
                            </p>

                            <p itemprop="contactOption" class="text-base text-[#CDD4D5] lg:leading-[36px] font-poppins">
                                BC V2E 1G6 , Canada.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade" data-aos-delay="100" data-aos-duration="1000"
                    class="flex flex-wrap lg:justify-between justify-center items-center lg:pt-24 pt-10">
                    <div itemprop="copyrightNotice" class="text-sm font-poppins text-[#819297] mr-2">© {{ currentYear }} <a itemprop="url"
                            class="hover:text-primary-color" href="https://reformedtech.org/">ReformedTech</a>, All
                        rights reserved.</div>
                    <div>
                        <NuxtLink  itemprop="archivedAt" to="/terms" class="text-sm font-poppins underline text-[#819297] mr-3">Legal & Terms
                        </NuxtLink>
                        <NuxtLink  itemprop="archivedAt" to="/privacy-policy" class="text-sm font-poppins underline text-[#819297]">Privacy
                            policy</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <button 
            class="back-to-top" 
            @click="scrollToTop" 
            v-show="showButton"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24"><path fill="currentColor" d="m12 4l-.354-.354l.354-.353l.354.353zm.5 15a.5.5 0 0 1-1 0zM5.646 9.646l6-6l.708.708l-6 6zm6.708-6l6 6l-.708.708l-6-6zM12.5 4v15h-1V4z"/></svg>
        </button>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'

export default {
    setup() {
        const state = reactive({
            currentYear: new Date().getFullYear(),
            showButton: false,
            motivations: [
                {
                    delay: "100",
                    firstWord: "Think",
                    secondWord: "Design"
                },
                {
                    delay: "200",
                    firstWord: "Develop",
                    secondWord: "Launch"
                },
                {
                    delay: "300",
                    firstWord: "Repeat",
                    secondWord: "Success"
                }
            ],

            quickLinks: [
                {
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'Services',
                    link: '/services'
                },
                {
                    name: 'Our Team',
                    link: '/our-team'
                },
                {
                    name: 'Blog',
                    link: '/blog'
                },
                {
                    name: 'Careers',
                    link: '/career'
                },
                {
                    name: 'Web Design',
                    link: '/web-design'
                },
                {
                    name: 'Case Studies',
                    link: '/case-studies'
                },
                {
                    name: 'Contact us',
                    link: '/contact'
                },
                {
                    name: 'FAQ',
                    link: '/faq'
                },
            ],

            services: [
                {
                    name: 'Website Development',
                    link: '/website-development'
                },
                {
                    name: 'Mobile App Development',
                    link: '/mobile-app-development'
                },
                {
                    name: 'Devops Solution',
                    link: '/devops-solution'
                },
                {
                    name: 'AI and ML Development',
                    link: '/ai-ml-development'
                },
                {
                    name: 'MVP Development',
                    link: '/mvp-development'
                },
                {
                    name: 'UI/UX Design',
                    link: '/ui-ux-design'
                },
                {
                    name: 'Digital Marketing',
                    link: '/digital-marketing'
                },
                {
                    name: 'QA & Testing',
                    link: '/qa-testing'
                },
                {
                    name: 'eCommerce Solution',
                    link: '/ecommerce'
                }
            ],

            socialLinks: [
                {
                    link: "https://www.facebook.com/ReformedTech.ca",
                    icon: "bx:bxl-facebook"
                },

                {
                    link: "https://www.instagram.com/reformedtech.ca",
                    icon: "ion:logo-instagram"
                },

                {
                    link: "https://www.linkedin.com/company/reformedtechca",
                    icon: "bxl:linkedin"
                },

                {
                    link: "https://x.com/ReformedTechca",
                    icon: "bi:twitter-x"
                },
                {
                    link: "http://www.pinterest.com/reformedtechca",
                    icon: "bi:pinterest"
                },
                {
                    link: "https://www.youtube.com/@ReformedTechca",
                    icon: "bi:youtube"
                },
            ],
            dropdowns: {},
            paths: [
                {
                    dropname: 'Company',
                    subpaths: [
                        {
                            name: 'Home',
                            link: '/'
                        },
                        {
                            name: 'Services',
                            link: '/services'
                        },
                        {
                            name: 'Our Team',
                            link: '/our-team'
                        },
                        {
                            name: 'Blog',
                            link: '/blog'
                        },
                        {
                            name: 'Careers',
                            link: '/career'
                        },
                        {
                            name: 'Contact us',
                            link: '/contact'
                        },
                        {
                            name: 'FAQ',
                            link: '/faq'
                        },
                    ]
                },
                {
                    dropname: 'Services',
                    subpaths: [
                        {
                            name: 'Hire Offshore Team',
                            link: '/'
                        },
                        {
                            name: 'Web Development',
                            link: '#'
                        },
                        {
                            name: 'UI/UX Design',
                            link: '#'
                        },
                        {
                            name: 'Mobile App',
                            link: '#'
                        },
                        {
                            name: 'Digital Marketing',
                            link: '#'
                        },
                        {
                            name: 'Shopify Development',
                            link: '#'
                        },
                        {
                            name: 'Webflow Development',
                            link: '#'
                        },
                        {
                            name: 'WordPress Development',
                            link: '#'
                        },
                    ]
                }
            ]
        })

        const toggleDropdown = (name) => {
            state.dropdowns[name] = !state.dropdowns[name];
        };
         const handleScroll = () => {
            state.showButton = window.scrollY > 300
        }

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll)
        })

        return {
            ...toRefs(state),
            toggleDropdown,
            scrollToTop
        }
    }
}
</script>

<style scoped>
.back-to-top {
        position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #F8523B;
    color: white;
    padding: 10px 15px;
    width: 60px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    /* opacity: 0.8; */
    z-index: 1000;
    transition: opacity 0.3s;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.back-to-top:hover {
    opacity: 1;
}
</style>