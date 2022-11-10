<template>
    <section>
        <h2 class="mb-2 text-xl font-bold">Socials</h2>
        <ul class="space-y-2">
            <li>
                <NuxtLink to="mailto:hey@owln.ai"
                          class="flex gap-3"
                          itemprop="email">
                    <UnoIcon class="i-simple-icons-twitter" /> owln_ai
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://owln.ai"
                          class="flex gap-3"
                          itemprop="sameAs">
                    <UnoIcon class="i-simple-icons-github" /> owlnai
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://owln.ai"
                          class="flex gap-3"
                          itemprop="sameAs">
                    <UnoIcon class="i-simple-icons-polywork" /> unai
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://discord.com"
                          class="flex gap-3"
                          itemprop="sameAs">
                    <UnoIcon class="i-simple-icons-linkedin" /> unaimengual
                </NuxtLink>
            </li>

        </ul>
    </section>
</template>