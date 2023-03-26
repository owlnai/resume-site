<template>
    <div class="flex justify-between text-sm">
        <a href="/resume.pdf"
           download
           class="underline decoration-wavy decoration-gray-400 underline-offset-2 print:hidden">Download
            PDF</a>
        <NuxtLink to="https://resume.owln.ai"
                  class="underline decoration-wavy decoration-gray-400 underline-offset-2 hidden print:block">
            https://resume.owln.ai</NuxtLink>
        <NuxtLink to="https://github.com/owlnai/resume" class="underline decoration-wavy decoration-gray-400 underline-offset-2">Last updated on 10/19/2022</NuxtLink>
    </div>
</template>