<script setup>
const educations = [{
    degree: "B.S. in Computer Engineering",
    institution: "UCAM",
    logo: "ucam.jpg",
    period: "2019 - Present"
},
]
</script>
<template>
    <section>
        <h2 class="text-3xl font-bold">Education</h2>
        <ol class="flex flex-col gap-6 mt-6">

            <li itemprop="alumniOf"
                itemscope
                v-for="education in educations"
                itemtype="https://schema.org/EducationalOrganization"
                class="bg-white p-6 rounded-xl">


                <div class="flex gap-3">
                    <img :src="'/companies/' + education.logo"
                         height="12"
                         :alt="`${education.institution}'s logo'`"
                         class="w-12 h-full rounded-full">
                    <div class="w-full">
                        <div class="flex justify-between">
                            <h2 class="text-gray-600">{{ education.institution }}</h2>
                            <span class="text-sm">{{education.period }}</span>
                        </div>
                        <span class="text-xl font-semibold">{{ education.degree }}</span>

                    </div>
                </div>
            </li>
        </ol>
    </section>
</template>