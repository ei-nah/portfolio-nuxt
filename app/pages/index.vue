<template>
  <div class="flex items-center justify-center my-12 px-4">
    <Card
      cardClass="w-full max-w-2xl bg-base-100/10 backdrop-blur-md shadow-2xl border border-white/10 text-center p-8"
      bodyClass="items-center text-center p-0"
    >
      <div class="avatar justify-center mb-6">
        <div class="w-48 h-48 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2 overflow-hidden shadow-lg">
          <img src="/image/self-portrait.JPG" alt="Stephanie Bernardo" class="object-cover w-full h-full" />
        </div>
      </div>

      <h1 class="text-3xl md:text-5xl font-extrabold text-emerald-200 tracking-wide"> Stephanie Bernardo </h1>

      <p class="mt-2 text-base md:text-xl text-emerald-100/80 leading-relaxed max-w-xl mx-auto">
        An aspiring web developer, UI/UX designer, and system architect with a passion for building user-friendly and efficient systems.
      </p>

      <template #actions>
        <a 
          href="https://github.com/ei-nah" 
          target="_blank" 
          class="btn btn-square btn-lg btn-ghost text-emerald-200 hover:text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300">
          <HugeiconsIcon :icon="GithubIcon" class="w-8 h-8" />
        </a>

        <a 
          href="https://www.linkedin.com/in/bernardo-stephanie/" 
          target="_blank" 
          class="btn btn-square btn-lg btn-ghost text-emerald-200 hover:text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300">
          <HugeiconsIcon :icon="Linkedin02Icon" class="w-8 h-8" />
        </a>
      </template>
    </Card>
  </div>
</template>

<script setup>
  import Card from '~/components/card.vue'
  import { HugeiconsIcon } from '@hugeicons/vue'
  import { GithubIcon, Linkedin02Icon } from '@hugeicons/core-free-icons'

    useHead({
      title: 'Home | Stephanie Bernardo',
    })

    useSeoMeta({
      title: 'Home | Stephanie Bernardo',
      ogTitle: 'Stephanie Bernardo | Portfolio',
      description: 'An aspiring web developer, UI/UX designer, and system architect with a passion for building user-friendly and efficient systems.',
      ogDescription: 'An aspiring web developer, UI/UX designer, and system architect.',
      ogImage: '/image/self-portrait.JPG',
      twitterCard: 'summary_large_image',
    })
</script>