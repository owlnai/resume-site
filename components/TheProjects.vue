<script setup>
const projects = [{
    degree: "Is Nuxt 3 Ready?",
    institution: "Open-source",
    period: "2021"
},
{
    degree: "Slidev Spanish docs",
    institution: "Open-source",
    period: "2021"
},
]
</script>
<template>
    <section>
        <h2 class="text-3xl font-bold">Projects</h2>
        <ol class="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-6 mt-6">

            <li itemprop="alumniOf"
                itemscope
                v-for="project in projects"
                itemtype="https://schema.org/EducationalOrganization"
                class="bg-white p-6 rounded-xl">


                <div class="flex gap-3">
                    <div class="w-full">
                        <div class="flex justify-between">
                            <h2 class="text-gray-600">{{ project.institution }}</h2>
                            <span class="text-sm">{{ project.period }}</span>
                        </div>
                        <span class="text-xl font-semibold">{{ project.degree }}</span>

                    </div>
                </div>
            </li>
        </ol>
    </section>
</template>