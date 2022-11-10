<script setup lang="ts">
useHead({
  title: 'Resumé'
})
</script>
<template>
  <div class="font-sans print:text-sm text-gray-700 min-h-screen bg-gray-50 print:bg-white">
    <div class="container grid max-w-5xl grid-cols-1 mx-auto sm:grid-cols-3 print:grid-cols-3 p-8 gap-6 sm:gap-12 print:gap-12"
         itemscope
         itemtype="https://schema.org/Person">
      <div class="flex flex-col gap-5">
        <TheIntro />
        <TheDetails />
        <TheSocials />
        <TheSkills />
      </div>
      <div class="flex flex-col col-span-2 gap-5">
        <TheExperience />
        <TheEducation />
        <TheProjects />
        <TheFooter />
      </div>
    </div>
  </div>
</template>
