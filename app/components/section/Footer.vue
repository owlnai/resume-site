<template>
    <div class="flex justify-between text-sm print:hidden">
        <a href="/resume.pdf"
           download
           class="underline decoration-wavy decoration-gray-400 underline-offset-2 print:hidden">Download
            PDF</a>
        <NuxtLink to="https://resume.owln.ai"
                  class="hidden underline decoration-wavy decoration-gray-400 underline-offset-2 print:block">
            https://resume.owln.ai</NuxtLink>
        <NuxtLink to="https://github.com/owlnai/resume" class="underline decoration-wavy decoration-gray-400 underline-offset-2">Last updated on 10/12/2024</NuxtLink>
    </div>
</template>