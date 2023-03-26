<script setup lang="ts">
const languages: { name: string, level: string }[] = [
    {
        name: 'Spanish',
        level: 'Native'
    },
    {
        name: 'English',
        level: 'Advanced'
    }
]
</script>
<template>
    <section>
        <h2 class="mb-2 text-xl font-bold">Languages</h2>
        <ul class="space-y-2">
            <li itemprop="knowsLanguage" class="hover:translate-x-2 transition duration-300" v-for="language in languages" :key="language.name">
                {{ language.name }} <span class="text-gray-500">({{ language.level }})</span>
            </li>
        </ul>
    </section>
</template>