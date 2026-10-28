<template>
  <!-- Main Content Section -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
    <h1 class="text-4xl font-bold text-center tracking-wide text-[#BFD9C0] mb-6"> About Me </h1>

    <div class="flex justify-center">
      <Card
        cardClass="bg-[#141F15] rounded-2xl shadow-2xl shadow-[#49B650]/20 border border-emerald-900/40 w-full max-w-4xl"
        bodyClass="p-6 sm:p-8 md:p-10 lg:p-12 text-justify">

        <p class="text-sm sm:text-base md:text-lg leading-relaxed text-[#BFD9C0]">
          Knowledgeable in database querying and manipulation, as well as designing and developing web pages and mobile applications. I have applied these skills through 
          academic projects, including building a simple student information system, developing various applications, and creating a personal portfolio. Aiming to contribute
          a responsive and user-friendly website to the industry and community. 
          <br><br>
          Eager to expand my knowledge in programming tools, languages, and technologies through continuous learning and hands-on projects. Seeking opportunities in creativity, 
          data querying, and backend development where I can apply and further enhance my technical skills. Currently gaining more experience in web development and exploring an 
          interest in digital forensics.
        </p>
      </Card>
    </div>
  </main>
</template>

<script setup>
  import Card from '~/components/card.vue'
    useHead({
    title: 'About Me | Stephanie Bernardo',
    })

    useSeoMeta({
    title: 'About Me | Stephanie Bernardo',
    description: 'Get to know more Stephanie Bernardo',
    ogTitle: 'About Me | Stephanie Bernardo',
    ogDescription: "Learn more about Stephanie Bernardo's background in web development and systems.",
    })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>