<template>
    <section>
        <h2 class="mb-2 text-xl font-bold">Personal details</h2>
        <ul class="space-y-2">
            <li>
                <NuxtLink to="mailto:hey@owln.ai"
                          class="flex gap-3"
                          itemprop="email">
                    <UnoIcon class="i-carbon-email" /> hey@owln.ai
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://owln.ai"
                          class="flex gap-3"
                          itemprop="sameAs">
                    <UnoIcon class="i-carbon-http" />owln.ai
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://owln.ai"
                          class="flex gap-3"
                          itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" >
                    <UnoIcon class="i-carbon-map" />Ávila, Spain
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>