<template>
    <NuxtPicture src="/color.png"
                 alt="Unai's portrait"
                 width="256"
                 height="256"
                 sizes="sm:100vw md:50vw lg:256px"
                 itemprop="image"
                 :imgAttrs="{class: 'object-cover h-64 rounded-lg'}" />
    <div>
        <h1 itemprop="name"
            class="text-3xl font-bold">Unai Mengual</h1>
        <span itemprop="jobTitle"
              class="font-medium text-gray-500">Full-stack web developer</span>
    </div>
    <p class="prose" itemprop="description">I'm a web developer based in Spain who always has a project in the works, with a
        passion
        for
        products that are beautiful
        and easy to use.</p>
</template>