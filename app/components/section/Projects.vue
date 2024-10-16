<script setup>
const projects = [
  {
    title: "Is Nuxt 3 Ready?",
    description:
      "A website to track the progress of Nuxt 3 modules. Tracking over a hundred modules and its compatibility, it was later integrated into the official Nuxt documentation.",
  },
  {
    title: "Trello Board",
    description:
      "I actually didn't make this but I want to remind @afor_digital that never gonna give you up, never gonna let you down, never gonna run around and desert you.",
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
