<script setup>
const experiences = [
  {
    company: "MRM Spain",
    period: "Jul 2023 - Present",
    position: "Full Stack Developer",
    location: "Madrid, Spain",
    description:
      "A modern marketing agency that grows meaningful relationships with people through the power of data, strategy, creativity and technology.",
    tasks: [
      "Developed robust solutions to meet client's security and scalability requirements.",
      "Assisted in query optimization and code modernization according to best practices, drastically improving application performance and stability.",
      "Participated in code reviews and implemented best practices to ensure code quality across multiple projects.",
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
      "Built a corporate website, including investor portal, a web-based video editor prototype and cloud-based tools for content management",
    ],
  },

  {
    company: "Fandom",
    period: "Aug 2019 - Jun 2020",
    position: "Anime Wiki Manager",
    location: "San Francisco, CA",
    description:
      "The world's largest fan platform and the #1 source for in-depth information on pop culture, entertainment & gaming.",
    tasks: [
      "Managed and created over 100 online communities, providing design and scripting support.",
      "Developed in-house tools to increase team productivity.",
      "Served as a liaison between the community and the company, effectively managing communication and resolving issues.",
    ],
  },
];
</script>
<template>
  <uiSection title="Professional experience">
    <ol class="flex flex-col gap-2">
      <li
        v-for="experience in experiences"
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
                <span itemprop="name"> {{ experience.company }}</span>
              </h2>
              <span
              itemprop="roleName"
              class="block mt-2 font-semibold text-md sm:mt-0 print:mt-0"
              >{{ experience.position }}</span
            >
            </div>
              <span class="flex flex-col text-sm" itemprop="startDate"
                >{{ experience.period }}<span class="italic">{{ experience.location }}</span></span
              >
            </div>
  
          </div>
        </div>
        <p class="text-sm" itemprop="description">
          {{ experience.description }}
        </p>
        <div
          class="prose-sm prose text-black max-w-none"
          itemprop="hasOccupation"
          itemscope
          itemtype="http://schema.org/Occupation"
        >
          <ul>
            <li v-for="task in experience.tasks" itemprop="skills">
              {{ task }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </uiSection>
</template>
