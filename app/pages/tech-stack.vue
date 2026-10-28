<template>
  <div class="min-h-screen text-[#BFD9C0] font-['Montserrat_Alternates'] pb-16 pt-10">
    
    <!-- Title Section -->
    <main class="text-center px-4 mb-8">
      <h1 class="text-4xl font-bold tracking-wide text-[#BFD9C0]"> Tech Stack </h1>
    </main>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
      <div class="flex flex-col sm:flex-row w-full items-center justify-center my-2 gap-4 sm:gap-2">
        <!-- Category 1: Programming Language -->
        <div class="flex items-center justify-center px-6 py-3 w-full sm:w-1/3 rounded-2xl bg-[#3A9240]/60 border border-emerald-500/30 shadow-md hover:scale-105 transition-transform duration-200">
          <span class="text-sm sm:text-base font-bold text-white tracking-wide">Programming Language</span>
        </div>

        <div class="divider sm:divider-horizontal text-emerald-800/60 font-bold my-1 sm:my-0"></div>

        <!-- Category 2: Database -->
        <div class="flex items-center justify-center px-6 py-3 w-full sm:w-1/3 rounded-2xl bg-[#49B650]/20 border border-emerald-500/30 shadow-md hover:scale-105 transition-transform duration-200">
          <span class="text-sm sm:text-base font-bold text-white tracking-wide">Database</span>
        </div>

        <div class="divider sm:divider-horizontal text-emerald-800/60 font-bold my-1 sm:my-0"></div>

        <!-- Category 3: Tools -->
        <div class="flex items-center justify-center px-6 py-3 w-full sm:w-1/3 rounded-2xl bg-[#6DC573]/95 border border-emerald-400/40 shadow-md hover:scale-105 transition-transform duration-200">
          <span class="text-sm sm:text-base font-bold text-[#0f2a14] tracking-wide">Tools</span>
        </div>
      </div>

      <!-- Tech Stack Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        <Card
          v-for="(tech, index) in techStack" 
          :key="index"
          cardClass="bg-[#1a2e1d]/40 backdrop-blur-lg border border-emerald-900/30 shadow-xl shadow-[#0b170d] hover:scale-105 hover:border-emerald-500/50 hover:shadow-emerald-900/20 transition-all duration-300 w-full group"
          figureClass="px-6 pt-6"
          bodyClass="items-center text-center p-4"
          titleClass="text-base sm:text-lg font-bold text-[#BFD9C0] group-hover:text-white transition-colors"
          :title="tech.name">

          <template #figure>
            <div 
              class="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105"
              :class="tech.bgColorClass">
              <img 
                :src="`/tech-stack-logo/${tech.logo}`" 
                :alt="tech.name"
                class="max-w-full max-h-full object-contain filter drop-shadow" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Card from '~/components/card.vue'
    // Tech stack array for scalable rendering
    const techStack = [
      { name: 'Java', logo: 'java.png', bgColorClass: 'bg-[#3A9240]/60' },
      { name: 'HTML', logo: 'html.png', bgColorClass: 'bg-[#3A9240]/60' },
      { name: 'CSS', logo: 'css.png', bgColorClass: 'bg-[#3A9240]/60' },
      { name: 'JavaScript', logo: 'javascript.png', bgColorClass: 'bg-[#3A9240]/60' },
      { name: 'PostgreSQL', logo: 'postgresql.png', bgColorClass: 'bg-[#49B650]/20' },
      { name: 'MongoDB', logo: 'mongodb.png', bgColorClass: 'bg-[#49B650]/20' },
      { name: 'VS Code', logo: 'visual-studio-code.png', bgColorClass: 'bg-[#6DC573]/95' },
      { name: 'Git', logo: 'git.png', bgColorClass: 'bg-[#6DC573]/95' },
      { name: 'GitHub', logo: 'github.png', bgColorClass: 'bg-[#6DC573]/95' },
      { name: 'Android Studio', logo: 'android-studio.png', bgColorClass: 'bg-[#6DC573]/95' },
      { name: 'SSMS', logo: 'ssms.png', bgColorClass: 'bg-[#6DC573]/95' }
    ]

    useHead({
      title: 'Tech-Stack | Stephanie Bernardo',
    })

    useSeoMeta({
      title: 'Tech-Stack | Stephanie Bernardo',
      description: 'Programming Languages, Database, and Tools used.',
      ogTitle: 'Tech-Stack | Stephanie Bernardo',
      ogDescription: 'Programming Languages, Database, and Tools used.',
    })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>