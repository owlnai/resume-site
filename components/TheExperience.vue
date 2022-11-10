<script setup>
const experiences = [
  {
    company: "Toontales",
    period: "Jul 2021 - Nov 2021",
    position: "Software Contractor",
    description:
      "Toontales is an entertainment platform and sandbox for all ages to interact and play together safely.",
    tasks: [
      "Worked on a web platform that interacted with the game services, subscription management and custom blogging system.",
    ],
    logo: "toontales.png",
  },
  {
    company: "Webspace",
    period: "Apr 2020 - Sep 2020",
    position: "Web Engineer",
    description:
      "Music & video platform that empowered creators and their fans.",
    tasks: [
      "Co-founded the company and led the tech team.",
      "Created a corporate website and developed in-house cloud tools.",
    ],
    logo: "webspace.png",
  },

  {
    company: "Fandom",
    period: "Aug 2019 - Jun 2020",
    position: "Anime Wiki Manager",
    description:
      "The world's largest fan platform and the #1 source for in-depth information on pop culture, entertainment & gaming.",
    tasks: [
      "Managed +100 multi-lingual online communities ('wikis') on the platform with bi-weekly checkups and user liaision and seeding new content.",
      "Developed tools and scripts to increase productivity in the team.",
    ],
    logo: "fandom.jpg",
  },
];
</script>
<template>
  <section>
    <h2 class="text-3xl font-bold">Experience</h2>
    <ol class="flex flex-col gap-6 mt-6">
      <li v-for="experience in experiences" class="bg-white p-6 rounded-xl">
        <div class="flex flex-col sm:flex-row print:flex-row gap-3">
          <img
            :src="'/companies/' + experience.logo"
            :alt="`${experience.company}'s logo'`"
            height="12"
            class="w-12 h-full rounded-full"
          />
          <div class="w-full">
            <div class="flex justify-between items-center">
              <h2 class="text-gray-600 font-medium" itemprop="name">
                {{ experience.company }}
              </h2>
              <span class="text-sm text-gray-500">{{ experience.period }}</span>
            </div>
            <span class="text-xl block mt-2 sm:mt-0 print:mt-0 font-semibold">{{
              experience.position
            }}</span>
          </div>
        </div>
        <p class="my-2 text-sm text-gray-600">
          {{ experience.description }}
        </p>
        <div class="prose-sm prose">
          <ul>
            <li v-for="task in experience.tasks">{{ task }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
