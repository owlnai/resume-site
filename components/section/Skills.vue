<script setup lang="ts">
  const skills = {
  "Technical Skills": [
    "Full-stack Development",
    "Cloud Computing",
    "Accessibility",
    "Responsive Design",
    "Performance Optimization"
  ],
  "Languages": [
    "Spanish (Native)",
    "English (C1)"
  ],
  "Frameworks/Libraries": [
    "Vue.js",
    "Angular",
    "Nuxt",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Vitest",
  ],
  "Methodologies": [
    "Agile",
    "Scrum",
    "Kanban",
    "TDD",
    "BDD"
  ],
  "Soft Skills": [
    "Problem Solving",
    "Team Leadership",
    "Cross-functional Collaboration",
    "Technical Writing",
    "Speaking"
  ],
  "Others": [
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Docker",
    "Google Cloud Platform",
    "WebAssembly",
    "Figma"
  ],
};
</script>
<template>
  <uiSection title="Expert-level Skills">
    <ul class="">
      <li
        v-for="(values, key) in skills"
        :key="key"
      >
        <span class="font-semibold">{{ key.charAt(0).toUpperCase() + key.slice(1) }}: </span>
        <span>{{ values.join(', ') }}</span>
      </li>
    </ul>
  </uiSection>
</template>
