<script setup lang="ts">
const skills: string[] = [
    'Web Development',
    'MediaWiki',
    'Nuxt',
    'Vue.js',
    'UX/UI Design',
    'Community Management'
]
</script>
<template>
    <section>
        <h2 class="mb-2 text-xl font-bold">Skills</h2>
        <ul class="flex flex-wrap gap-2">
            <li v-for="skill in skills"
                class="px-4 py-2 text-sm rounded-md bg-slate-200" itemprop="knowsAbout">{{ skill }}</li>
        </ul>
    </section>
</template>