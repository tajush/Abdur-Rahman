<template>
    <div itemscope itemtype="https://schema.org/Article" class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <header class="max-w-[750px] mx-auto mb-16">
                <h2 itemprop="name" class="title-primary mb-4 ">Frequently <span itemprop="text" class="text-green">Asked Questions</span></h2>
                <p itemprop="description" class="subtitle-primary lg:text-lg text-base text-center leading-[22px]">Your Questions Answered by
                    ReformedTech.ca</p>
            </header>

            <div class="grid grid-cols-12 gap-x-7">
                <div class="lg:col-span-4 col-span-12">
                    <div class="sticky top-10 bg-white shadow-[0_6px_10px_rgba(255,183,183,0.60)] p-5">
                        <h2 class="text-2xl text-dark-black font-medium font-jost border-b border-gray pb-2">Quick Links
                        </h2>
                        <div class="mt-5">
                            <NuxtLink itemprop="url" to="#general" class="menu-link">
                                <h4 itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    General Questions
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#services">
                                <h4 itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Services
                                    ReformedTech.ca website
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#process">
                                <h4
                                  itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Process and Methodology
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#security">
                                <h4 itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Security and Compliance
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#collaboration">
                                <h4
                                    itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Collaboration and Communication
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#cost">
                                <h4
                                itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Cost and Engagement Models
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#success">
                                <h4
                                itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Success Stories
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#started">
                                <h4
                                itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Getting Started
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#support">
                                <h4
                                itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Support and Maintenance
                                </h4>
                            </NuxtLink>

                            <NuxtLink itemprop="url" class="menu-link" to="#additional">
                                <h4
                                itemprop="text"
                                    class="text-lg font-medium font-jost text-dark-black hover:text-primary-color transition-all mb-3">
                                    Additional Information
                                </h4>
                            </NuxtLink>
                        </div>
                    </div>
                </div>


                <div class="lg:col-span-8 col-span-12">
                    <div id="general" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">General Questions</h4>
                        <div v-for="(item, index) in genralfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="generalToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p class="text-base text-gray font-poppins pb-4 text-justify pr-7" v-html="item.answer">
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="services" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Services</h4>
                        <div v-for="(item, index) in servicefaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="serviceToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <div v-html="item.answer"
                                        class="text-base text-gray font-poppins pb-4 text-justify pr-7"></div>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="process" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Process and Methodology</h4>
                        <div v-for="(item, index) in processfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="processToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p itemprop="text" class="text-base text-gray font-poppins pb-4 text-justify pr-7">{{ item.answer }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="security" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Security and Compliance</h4>
                        <div v-for="(item, index) in securityfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="securityToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p itemprop="text" class="text-base text-gray font-poppins pb-4 text-justify pr-7">{{ item.answer }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="collaboration" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Collaboration and Communication
                        </h4>
                        <div v-for="(item, index) in collabfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="collabToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p itemprop="text" class="text-base text-gray font-poppins pb-4 text-justify pr-7">{{ item.answer }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="cost" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Cost and Engagement Models</h4>
                        <div v-for="(item, index) in costfaqItems" :key="index" class="mb-7 border-b border-[#EAECF0]">
                            <button @click="costToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p itemprop="text" class="text-base text-gray font-poppins pb-4 text-justify pr-7">{{ item.answer }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="success" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Success Stories</h4>
                        <div v-for="(item, index) in successfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="successToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p itemprop="text" class="text-base text-gray font-poppins pb-4 text-justify pr-7">{{ item.answer }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="started" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Getting Started</h4>
                        <div v-for="(item, index) in startedfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="startedToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p class="text-base text-gray font-poppins pb-4 text-justify pr-7" v-html="item.answer">
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="support" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Support and Maintenance</h4>
                        <div v-for="(item, index) in supportfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="supportToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p itemprop="description" class="text-base text-gray font-poppins pb-4 text-justify pr-7">{{ item.answer }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>

                    <div id="additional" class="max-w-[820px] mx-auto scroll-mt">
                        <h4 itemprop="name" class="text-dark-black text-3xl font-medium font-jost mb-5">Additional Information</h4>
                        <div v-for="(item, index) in additionalfaqItems" :key="index"
                            class="mb-7 border-b border-[#EAECF0]">
                            <button @click="additionalToggleItem(index)"
                                class="flex justify-between w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md pb-4">
                                <div>
                                    <span itemprop="description" class="lg:text-2xl text-lg text-dark-black font-jost">{{ item.question
                                        }}</span>
                                </div>
                                <span v-if="item.open"><img itemprop="image" src="~assets/img/web-development/minus-circle.svg"
                                        alt="minus circle"></span>
                                <span v-else><img itemprop="image" src="~assets/img/web-development/plus-circle.svg"
                                        alt="plus circle"></span>
                            </button>
                            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div v-show="item.open" class="overflow-hidden bg-white rounded-md">
                                    <p itemprop="text" class="text-base text-gray font-poppins pb-4 text-justify pr-7">{{ item.answer }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-orange-light rounded-2xl lg:p-8 p-4 flex flex-col justify-center items-center mt-20">
                <img itemprop="image" class="mb-8" src="~assets/img/faq/faq-avatar.png" alt="faq avatar">
                <h4 itemprop="text" class="text-xl text-dark-black font-medium font-jost mb-2">Do you have additional questions?</h4>
                <p itemprop="text" class="text-base leading-[24px] text-gray font-poppins lg:mb-8 mb-6 text-center lg:px-28 px-4">Our
                    friendly sales team is ready to discuss your technology initiatives and how ReformedTech can provide
                    value as your Canadian development partner. </p>
                <div>
                    <button class="secondary-btn py-3 px-10 font-jost lg:w-auto w-full">
                        <NuxtLink itemprop="url" to="/contact">
                            <span itemprop="text">
                                Contact us
                                <Icon class="ml-1" name="material-symbols:arrow-outward" />
                            </span>
                        </NuxtLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            genralfaqItems: [
                {
                    question: "What is ReformedTech.ca? ",
                    answer: "ReformedTech.ca is a premier <a class='hover:text-primary-color' href='/services/software-sourcing'>offshore software development</a> and <a class='hover:text-primary-color' href='/web-design'>web design company</a> based in Canada. We specialize in providing high-quality, cost-effective solutions tailored to the unique needs of Canadian businesses. Our services include custom software development, mobile app development, AI and ML development, e-commerce solutions, UI/UX design, IT consulting, and more.",
                    open: true
                },
                {
                    question: "Why should I choose ReformedTech.ca? ",
                    answer: "We combine a strong Canadian presence with global expertise to deliver locally relevant and globally competitive solutions. Our commitment to quality, innovation, customer satisfaction, and access to top-tier global talent ensures that we can meet and exceed your business needs.",
                    open: false
                }
            ],
            servicefaqItems: [
                {
                    question: "What services do you offer? ",
                    answer: "We offer a comprehensive range of services, including: <br><ul class='leading-[32px]'><li class='mt-2'>● <a class='hover:text-primary-color' href='/website-development'>Custom Software Development</a></li><li>● <a class='hover:text-priamry-color' href='/web-design'>Web Design and Development</a></li><li>● <a class='hover:text-primary-color' href='/mobile-app-development'>Mobile App Development</a></li><li>● <a class='hover:text-primary-color' href='/ai-ml-development'>AI and ML Development</a></li><li>● <a class='hover:text-primary-color' href='/ecommerce'>E-commerce Solutions</a></li><li>● <a class='hover:text-primary-color' href='/ui-ux-design'>UI/UX Design</a></li><li>● <a class='hover:text-primary-color' href='/digital-marketing'>Digital marketing</a></li><li>● <a class='hover:text-primary-color' href='/qa-testing'>Maintenance and Support</a></li></ul>",
                    open: false
                },
                {
                    question: "How do your software development services work? ",
                    answer: "Our software development process involves several stages: initial consultation, requirement analysis, design, development, testing, deployment, and maintenance. We use agile methodologies to ensure flexibility and transparency, keeping you informed and involved throughout the project lifecycle.",
                    open: false
                },
                {
                    question: "What industries do you specialize in?  ",
                    answer: "We have experience working across various sectors, including retail, healthcare, finance, logistics, and e-commerce. Our solutions are tailored to meet each industry's specific needs and challenges.",
                    open: false
                }
            ],
            processfaqItems: [
                {
                    question: "What is your development methodology? ",
                    answer: "We follow agile development methodologies, which allow us to adapt quickly to changes and deliver high-quality solutions promptly. This approach ensures continuous collaboration with our clients, providing transparency and flexibility throughout the development process.",
                    open: false
                },
                {
                    question: "How do you ensure the quality of your projects? ",
                    answer: "Quality is a top priority at ReformedTech.ca. We implement rigorous quality assurance and testing processes at every stage of development. Our dedicated QA team performs thorough testing, including manual and automated tests, to ensure your software meets the highest quality and performance standards.",
                    open: false
                },
                {
                    question: "How do you handle project management? ",
                    answer: "Our project management approach involves clear communication, regular updates, and collaboration tools to keep you informed and engaged. We assign a dedicated project manager to oversee your project, ensuring it stays on track and meets your goals.",
                    open: false
                }
            ],
            securityfaqItems: [
                {
                    question: "How do you ensure the security of my data? ",
                    answer: "We implement robust security measures to protect your data throughout the development lifecycle. This includes secure coding practices, data encryption, regular security audits, and compliance with industry standards and regulations to safeguard your information.",
                    open: false
                },
                {
                    question: "Are your solutions compliant with industry regulations? ",
                    answer: "Yes, our solutions adhere to industry standards and regulations, including GDPR, HIPAA, and others, depending on your project's requirements. We prioritize compliance to ensure your software is secure and legally compliant.",
                    open: false
                }
            ],
            collabfaqItems: [
                {
                    question: "How do you ensure effective communication during the project?",
                    answer: "We use various communication tools and platforms to communicate clearly and consistently with our clients. Regular meetings, progress reports, and collaboration tools ensure you are always informed and involved in the project.",
                    open: false
                },
                {
                    question: "Can your team work with our in-house developers? ",
                    answer: "Absolutely! Our team is experienced in collaborating with in-house developers and can seamlessly integrate into your existing workflows. We work closely with your team to ensure smooth collaboration and successful project outcomes.",
                    open: false
                }
            ],
            costfaqItems: [
                {
                    question: "What are your pricing models? ",
                    answer: "We offer a range of flexible pricing models for your project needs, including fixed-price, time and materials, and dedicated team models. Our aim is to empower you to choose the model that best suits your budget and project requirements, without compromising on quality.",
                    open: false
                },
                {
                    question: "How can I get a quote for my project? ",
                    answer: "You can get a quote by contacting us through our website or emailing us at support@reformedtech.ca. We will schedule an initial consultation to discuss your project requirements and provide a detailed proposal and quote.",
                    open: false
                }
            ],
            successfaqItems: [
                {
                    question: "Can you provide examples of successful projects? ",
                    answer: "Yes, we have a proven track record of delivering successful projects across various industries. Our website has case studies and success stories that explain how we have helped businesses achieve their goals.",
                    open: false
                }
            ],
            startedfaqItems: [
                {
                    question: "How do I start a project with ReformedTech.ca? ",
                    answer: "Starting a project with us is simple. Contact us through <a class='hover:text-primary-color' href='/hire-developer'>our website</a> or email us at <a class='hover:text-primary-color' href='mailto:contact@reformedtech.ca'>contact@reformedtech.ca</a>. We will schedule an initial consultation to understand your needs and discuss how we can help you achieve your business goals.",
                    open: false
                },
                {
                    question: "What is the typical timeline for a project? ",
                    answer: "The timeline depends on its complexity and scope. During the initial consultation, we will provide an estimated timeline based on your requirements and ensure we meet your deadlines.",
                    open: false
                }
            ],
            supportfaqItems: [
                {
                    question: "Do you offer ongoing support and maintenance? ",
                    answer: "Yes, we provide comprehensive support and maintenance services to ensure your software performs optimally after deployment. Our services include regular updates, bug fixes, performance monitoring, and more.",
                    open: false
                },
                {
                    question: "How can I contact your support team? ",
                    answer: "You can reach our support team by emailing us at support@reformedtech.ca or through our website's contact form. We are committed to providing prompt and effective support to address any issues or questions you may have.",
                    open: false
                }
            ],
            additionalfaqItems: [
                {
                    question: "Is ReformedTech a Canadian company?",
                    answer: "ReformedTech is a proudly Canadian technology firm with headquarters in Toronto and offices across major cities like Vancouver, Montreal, Calgary and Ottawa. Our talented workforce comprises IT professionals from all across Canada.",
                    open: false
                },
                {
                    question: "Where are ReformedTech's development teams located? ",
                    answer: "While our head office and some teams are based in Toronto, we have development centres in multiple provinces. This allows us to source top tech talent from cities like Vancouver, Montreal, Waterloo, and Halifax.",
                    open: false
                },
                {
                    question: "Do you follow industry standards and best practices? ",
                    answer: "Absolutely. We follow established standards and frameworks from bodies like ISO, IEEE, ISTQB and others. Our processes align with methodologies such as Agile, DevOps, ITIL and industry best practices to ensure high-quality deliverables.",
                    open: false
                },
                {
                    question: "Can you provide resources to supplement my in-house team? ",
                    answer: "Yes, our staff augmentation model allows you to access skilled Canadian developers, QA professionals, UI/UX designers and other experts to integrate with your internal teams on a project basis. This is a flexible and cost-effective way to scale your workforce.",
                    open: false
                },
                {
                    question: "What technology stacks and programming languages do you work with? ",
                    answer: "Our engineers have extensive experience across various stacks, including LAMP, Microsoft.NET, Java/J2EE, Python, Ruby on Rails and more. We work with AWS, Azure, GCP and other cloud platforms, as well as databases like MySQL, PostgreSQL, MongoDB and Cassandra.",
                    open: false
                },
                {
                    question: "Do you have experience with AI, machine learning, IoT and emerging tech?",
                    answer: "Yes, in addition to traditional application development, we have dedicated practices for AI/ML engineering, IoT solutions, blockchain development, AR/VR experiences and other advanced technology areas that are gaining prominence in Canada.",
                    open: false
                },
                {
                    question: "How do you ensure security and compliance? ",
                    answer: "Data security and compliance are of paramount importance to us. We follow industry best practices, such as the OWASP top 10 proactive controls. Our processes cover requirements from standards like GDPR, HIPAA, PCI-DSS, and those specific to Canadian laws/regulations.",
                    open: false
                },
                {
                    question: "What engagement models do you offer? ",
                    answer: "We offer flexible engagement models tailored to your needs - end-to-end project-based, staff augmentation, dedicated teams and more. Our customer success team will recommend the right model based on your scope, timelines and budgets.",
                    open: false
                },
                {
                    question: "How do you approach quality assurance and testing? ",
                    answer: "QA is deeply integrated into our development lifecycle. Our independent testing team leverages manual and automation frameworks to conduct different types of testing, including functional, security, performance, accessibility, compliance, and more.",
                    open: false
                },
                {
                    question: "Do you provide UI/UX design and product strategy services? ",
                    answer: "Our UX researchers and UI designers follow user-centred design principles to craft intuitive and visually appealing interfaces. We also assist with product strategy, rapid prototyping, and design systems to accelerate your time to market.",
                    open: false
                },
            ],
        };
    },
    methods: {
        generalToggleItem(index) {
            this.genralfaqItems[index].open = !this.genralfaqItems[index].open;
        },
        serviceToggleItem(index) {
            this.servicefaqItems[index].open = !this.servicefaqItems[index].open;
        },
        processToggleItem(index) {
            this.processfaqItems[index].open = !this.processfaqItems[index].open;
        },
        securityToggleItem(index) {
            this.securityfaqItems[index].open = !this.securityfaqItems[index].open;
        },
        collabToggleItem(index) {
            this.collabfaqItems[index].open = !this.collabfaqItems[index].open;
        },
        costToggleItem(index) {
            this.costfaqItems[index].open = !this.costfaqItems[index].open;
        },
        successToggleItem(index) {
            this.successfaqItems[index].open = !this.successfaqItems[index].open;
        },
        startedToggleItem(index) {
            this.startedfaqItems[index].open = !this.startedfaqItems[index].open;
        },
        supportToggleItem(index) {
            this.supportfaqItems[index].open = !this.supportfaqItems[index].open;
        },
        additionalToggleItem(index) {
            this.additionalfaqItems[index].open = !this.additionalfaqItems[index].open;
        },
        beforeEnter(el) {
            el.style.height = '0';
        },
        enter(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        leave(el) {
            el.style.height = el.scrollHeight + 'px';
            void el.offsetHeight; // trigger reflow
            el.style.height = '0';
        }
    }
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: height 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
    height: 0;
}

.scroll-mt{
    scroll-margin-top: 20px;
}
</style>