<script setup lang="ts">
  const skills = {
  "Technical Skills": [
    "Full-stack Development",
    "Cloud Computing",
    "DevOps",
    "Accessibility",
    "Responsive Design",
    "Performance Optimization"
  ],
  "Cloud & DevOps": [
    "Google Cloud Platform",
    "Docker",
    "CI/CD",
    "Git"
  ],
  "Databases": [
    "PostgreSQL",
    "Firebase",
    "BigQuery SQL"
  ],
  "Methodologies": [
    "Agile",
    "Scrum",
    "Kanban",
    "Test-Driven Development (TDD)"
  ],
  "Soft Skills": [
    "Problem Solving",
    "Team Leadership",
    "Cross-functional Collaboration",
    "Technical Writing",
    "Speaking"
  ]
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
