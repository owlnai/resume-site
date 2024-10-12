<script setup>
const educations = [
  {
    degree: "B.S. in Computer Engineering",
    institution: "UCAM",
    period: "2021 - Present (Expected graduation: 2026)",
    location: "Murcia, Spain",
  },
];
</script>
<template>
  <uiSection title="Education">
    <ol class="">
      <li
        itemprop="alumniOf"
        itemscope
        v-for="education in educations"
        itemtype="https://schema.org/EducationalOrganization"
      >
        <div class="flex gap-3">
          <div class="w-full">
            <div class="flex">
              <h2 class="text-sm">{{ education.institution }}&nbsp;</h2>
              <span class="text-sm">· {{ education.location }}&nbsp;</span>
              <span class="text-sm">· {{ education.period }}</span>
            </div>
            <span class="font-semibold">{{ education.degree }}</span>
          </div>
        </div>
      </li>
    </ol>
  </uiSection>
</template>
