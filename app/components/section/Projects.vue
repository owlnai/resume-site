<script setup>
const projects = [
  {
    title: "Is Nuxt 3 Ready?",
    description:
      "A website to track the progress of Nuxt 3 modules. Tracking over a hundred modules and its compatibility, it was later integrated into the official Nuxt documentation.",
  },
  {
    title: "Slidev Spanish docs",
    description:
      "Spanish translation of the Slidev documentation. Slidev is a presentation tool built with Vue 3.",
  },
];
</script>
<template>
  <uiSection title="Projects">
    <ol class="">
      <li
        itemprop="alumniOf"
        itemscope
        v-for="project in projects"
        itemtype="https://schema.org/EducationalOrganization"
      >
        <h2 class="inline font-semibold">{{ project.title }}</h2>
        <span class="">&nbsp;{{ project.description }}</span>
      </li>
    </ol>
  </uiSection>
</template>
