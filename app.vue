<script setup lang="ts">
useHead({
  title: 'Resumé'
})
</script>
<template>
  <div class="font-serif print:text-sm min-h-screen bg-[#ffffff] print:bg-white">
    <div class="container max-w-5xl px-8 pt-4 mx-auto"
         itemscope
         itemtype="https://schema.org/Person">
        <SectionIntro />      
        <SectionDetails />
        <SectionSummary />
        <SectionExperience />
        <SectionEducation />
        <SectionSkills />
        <SectionProjects />
        <SectionFooter />
  </div>
  </div>
</template>
