<script setup>
const experiences = [
  {
    company: "MRM Spain",
    period: "Jul 2023 - Present",
    position: "Full Stack Developer",
    location: "Madrid, Spain",
    description:
      "A modern marketing agency that grows meaningful relationships with people through the power of data, strategy, creativity and technology.",
    clients: [
      {
        name: "L'Oréal",
        tasks: [
          "Developed robust, scalable solutions meeting stringent client security requirements.",
          "Optimized database queries and modernized legacy code, improving application performance by 40% and reducing server load by 25%.",
        ],
      },
      {
        name: "Parques Reunidos",
        tasks: [
          "Led the migration of a major client's platform to a microservices architecture, reducing processing times and improving system reliability.",
        ],
      },
    ],
  },
  {
    company: "Freelance",
    period: "Oct 2019 - Jun 2023",
    position: "Web Developer & UX/UI Designer",
    location: "Remote",
    description:
      "Web developer on several projects in various industries, including e-commerce and entertainment. Details provided on request. Featured projects:",
    tasks: [
      "Developed a custom e-commerce platform for a local retailer, increasing online sales by 30% and SEO by 215%.",
      "Built and designed a DoP portfolio website, with a custom CMS for tailored content management.",
      "Designed a mobile app for a pet adoption agency, helping them reach a wider audience and increase adoptions by 40%.",
    ],
  },
  {
    company: "Webspace Technologies",
    period: "Apr 2020 - Sep 2020",
    location: "San Mateo County, CA",
    position: "Web Engineer",
    description:
      "Cofounded a music & video startup that empowered artists and their fans.",
    tasks: [
      "Architected and developed a comprehensive corporate website using Vue.js and Nuxt, including a secure investor portal.",
      "Built a prototype web-based video editor utilizing WebGL and FFmpeg, enabling real-time video manipulation in the browser.",
      "Developed cloud-based content management tools using Google Cloud Platform.",
    ],
  },
];
</script>
<template>
  <uiSection title="Professional experience">
    <ol class="flex flex-col gap-2 space-y-3">
      <li
        v-for="experience in experiences"
        :key="experience.company"
        itemscope
        itemtype="http://schema.org/OrganizationRole"
      >
        <div class="flex flex-col gap-3 sm:flex-row print:flex-row">
          <div class="w-full">
            <div class="flex items-center justify-between">
              <div>
                <h2
                  class="text-sm font-medium"
                  itemprop="memberOf"
                  itemscope
                  itemtype="http://schema.org/Organization"
                >
                  <span itemprop="name">{{ experience.company }}</span> |
                  <span class="text-sm" itemprop="startDate">
                    {{ experience.period }} |
                    <span class="italic">{{ experience.location }}</span>
                  </span>
                </h2>
                <span
                  itemprop="roleName"
                  class="block mt-2 font-semibold text-md sm:mt-0 print:mt-0"
                >
                  {{ experience.position }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-sm" itemprop="description">
          {{ experience.description }}
        </p>
        <div
          class="mt-0 text-black max-w-none"
          itemprop="hasOccupation"
          itemscope
          itemtype="http://schema.org/Occupation"
        >
          <ul class="space-y-1 list-disc list-inside">
            <li v-for="task in experience.tasks" :key="task" itemprop="skills">
              {{ task }}
            </li>
          </ul>
          <div
            class="pl-4 mt-1 border-l-2"
            v-for="client in experience.clients"
            :key="client.name"
          >
            <h3 class="font-semibold">{{ client.name }} (Client)</h3>
            <ul class="space-y-1 list-disc list-inside">
              <li v-for="task in client.tasks" :key="task" itemprop="skills">
                {{ task }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
  </uiSection>
</template>
