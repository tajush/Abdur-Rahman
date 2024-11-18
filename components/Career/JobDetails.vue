<template>
    <div class="lg:pt-28 pt-14">
        <div class="container max-w-7xl m-auto px-4">
            <div class="grid grid-cols-12 gap-x-7">
                <div class="lg:col-span-8 col-span-12 lg:mb-0 mb-10">
                    <img class="border border-gray-light rounded-tr-md rounded-tl-md"
                        src="/assets/img/career/job-details-img.png" alt="job details img">
                    <div class="border border-t-0 border-gray-light p-6 rounded-bl-md rounded-br-md">
                        <div class="mb-7">
                            <h2 class="mb-4 lg:text-4xl text-2xl text-dark-black font-jost">Sales Executive/Online
                                Bidder - Intern
                            </h2>
                            <div class="flex items-center gap-x-4">
                                <div class="flex">
                                    <Icon class="text-xl mr-2 text-gray" name="material-symbols:person" />
                                    <p class="text-gray font-poppins text-base">2 Vacancy</p>
                                </div>

                                <div class="bg-[#146476] text-white text- py-[3px] p-4 rounded-full border-none">Remote
                                </div>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-4 grid-cols-1 gap-x-4 mb-10">
                            <div v-for="(info, i) in jobsInfo" :key="i"
                                class="p-4 border rounded border-gray-light lg:mb-0 mb-7">
                                <p class="text-base text-gray font-poppins mb-1">{{ info.title }}</p>
                                <h4 class="text-lg text-dark-black font-jost">{{ info.description }}</h4>
                            </div>
                        </div>

                        <!-- Job description -->
                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Job Description
                            </h2>
                            <p class="text-base text-gray font-poppins">As a Product Designer, you will work within a
                                Product Delivery Team fused with UX, engineering, product and data talent. You will help
                                the team design beautiful interfaces that solve business challenges for our clients. We
                                work with a number of Tier 1 banks on building web-based applications for AML, KYC and
                                Sanctions List management workflows. This role is ideal if you are looking to segue your
                                career into the FinTech or Big Data arenas.</p>
                        </div>

                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Responsibilities
                            </h2>
                            <div v-for="(response, i) in responsibilities" :key="i"
                                class="flex items-center mb-3 last:mb-0">
                                <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                                <p class="text-base text-gray font-poppins">{{ response.text }}</p>
                            </div>
                        </div>

                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Requirements</h2>
                            <div v-for="(data, i) in requirements" :key="i" class="flex items-center mb-3 last:mb-0">
                                <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                                <p class="text-base text-gray font-poppins">{{ data.text }}</p>
                            </div>
                        </div>

                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Qualification
                            </h2>
                            <div v-for="(data, i) in qualification" :key="i" class="flex items-center mb-3 last:mb-0">
                                <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                                <p class="text-base text-gray font-poppins">{{ data.text }}</p>
                            </div>
                        </div>

                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Working Hours
                            </h2>
                            <p class="text-base text-gray font-poppins px-3">8 PM - 3 AM (Night Shift)</p>
                        </div>

                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Working Days</h2>
                            <p class="text-base text-gray font-poppins px-3 mb-1">Weekly: 5 days.</p>
                            <p class="text-base text-gray font-poppins px-3">Weekend: Saturday, Sunday.</p>
                        </div>

                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Nice to have</h2>
                            <div v-for="(data, i) in haveThings" :key="i" class="flex items-center mb-3 last:mb-0">
                                <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                                <p class="text-base text-gray font-poppins">{{ data.text }}</p>
                            </div>
                        </div>

                        <div class="mb-5">
                            <h2 class="text-2xl text-dark-black font-jost mb-3 font-medium capitalize">Compensation &
                                other benefits</h2>
                            <div v-for="(data, i) in Compensation" :key="i" class="flex items-center mb-3 last:mb-0">
                                <Icon class="w-8 text-xl mr-2 text-gray" name="mdi:star-four-points-outline" />
                                <p class="text-base text-gray font-poppins">{{ data.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Job overview -->
                <div class="lg:col-span-4 col-span-12">
                    <div class="border border-gray-light py-7 px-6 rounded-md">
                        <h2 class="text-2xl text-dark-black font-jost mb-10 font-medium capitalize">Job Overview</h2>
                        <div v-for="(data, i) in overviews" :key="i" class="flex gap-x-4 mb-7 last:mb-0">
                            <div class="w-14 h-14 bg-[#cfeeee] flex justify-center items-center rounded-full">
                                <Icon class="text-2xl text-[#146476]" :name="data.icon" />
                            </div>

                            <div>
                                <h4 class="text-base text-dark-black font-medium font-jost mb-1">{{ data.title }}</h4>
                                <p class="text-base text-gray font-poppins">{{ data.text }}</p>
                            </div>
                        </div>

                        <div class="w-full">
                            <button class="primary-btn font-jost lg:block hidden w-full">
                                <span>Apply Now
                                    <Icon class="ml-1 text-2xl" name="material-symbols:arrow-right-alt-rounded" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Responsibilities from '../DedicatedTeam/Responsibilities.vue';
import ImageComponent from '../ImageComponent.vue'

export default {
    components: {
        ImageComponent
    },
    data() {
        return {
            jobsInfo: [
                {
                    title: "Experience",
                    description: "Minimum 1 Year"
                },
                {
                    title: "Employee type",
                    description: "Full Time"
                },
                {
                    title: "Position",
                    description: "Senior"
                },
                {
                    title: "Offer Salary",
                    description: "$2150/ Month"
                },
            ],
            responsibilities: [
                {
                    text: "Have sound knowledge of commercial activities."
                },
                {
                    text: " Build next-generation web applications with a focus on the client side"
                },
                {
                    text: "Work on multiple projects at once, and consistently meet draft deadlines"
                },
                {
                    text: "Have already graduated or are currently in any year of study"
                },
                {
                    text: "Revise the work of previous designers to create a unified aesthetic for our brand materials"
                },
            ],

            requirements: [
                {
                    text: "Bachelor’s degree in Business, Marketing, or a related field."
                },
                {
                    text: "Preferred experience in online bidding and business development, preferably in a digital agency or IT services company."
                },
                {
                    text: "Excellent written and verbal communication skills."
                },
                {
                    text: "Strong negotiation and persuasion abilities."
                },
                {
                    text: "Ability to work independently and manage multiple projects simultaneously."
                },
                {
                    text: "Proficiency in using online bidding platforms and project management tools."
                },
            ],

            qualification: [
                {
                    text: "B.C.A / M.C.A under National University course complete."
                },
                {
                    text: "3 or more years of professional design experience"
                },
                {
                    text: " Have already graduated or are currently in any year of study"
                },
                {
                    text: " Advanced degree or equivalent experience in graphic and web design"
                }
            ],

            haveThings: [
                {
                    text: "Highly skilled in English communication, preferable in score 5-7 in IELTS or other certificate."
                },
                {
                    text: "Previous experience in client-facing roles such as sales or account management."
                },
                {
                    text: "Participation in industry events or conferences related to online bidding or business"
                },
                {
                    text: "Ability to work in USA time zone."
                },
                {
                    text: "Passionate about target fulfilling."
                },
                {
                    text: "Should have own laptop."
                },
            ],
            Compensation: [
                {
                    text: "Performance bonus"
                },
                {
                    text: "Weekly 2 holidays"
                },
                {
                    text: "Salary Review: Yearly"
                },
                {
                    text: "Festival Bonus: 2"
                },
                {
                    text: "Flexible working hours and friendly environment."
                },
                {
                    text: "Opportunity to work with the global team"
                },
            ],

            overviews: [
                {
                    icon: "material-symbols:person",
                    title: "Job Title",
                    text: "Product Designer"
                },
                {
                    icon: "material-symbols:kid-star-outline",
                    title: "Experience",
                    text: "0-3 Years"
                },
                {
                    icon: "material-symbols:location-on-outline",
                    title: "Location",
                    text: "Canada"
                },
                {
                    icon: "solar:dollar-linear",
                    title: "Offered Salary",
                    text: "$35k - $45k"
                },
                {
                    icon: "iconoir:graduation-cap",
                    title: "Qualification",
                    text: "Bachelor Degree"
                },
                {
                    icon: "solar:history-bold",
                    title: "Date Posted",
                    text: "Posted 2 hrs ago"
                },
            ]
        }
    }
}
</script>

<style scoped></style>