<template>
    <div>
        <div class="flex justify-center items-center text-base gap-x-1.5 font-poppins mt-12">
            <NuxtLink to="/"><p class="text-gray">Home</p></NuxtLink>
            <Icon class="ml-1" name="material-symbols:arrow-right-alt-rounded" />
            <div class="flex items-center">
                <NuxtLink
                >
                    {{ text }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: { type: String }
    },
}
</script>

<style scoped></style>
