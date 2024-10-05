<template>
  <section>
    <ul class="flex pb-4 my-1 border-b justify-evenly [&_a]:text-blue-700">
      <li>
        <NuxtLink to="mailto:hey@owln.ai" itemprop="email">
          unai@owln.ai
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://www.linkedin.com/in/owlnai" itemprop="sameAs">
          in/owlnai
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://github.com/owlnai" itemprop="sameAs">
          gh/owlnai
        </NuxtLink>
      </li>
      <li>
        <span
          itemscope
          itemtype="http://schema.org/PostalAddress"
          itemprop="address"
        >
          Ávila, Spain
        </span>
      </li>
    </ul>
  </section>
</template>
