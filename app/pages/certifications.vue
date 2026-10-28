<template>
  <div class="min-h-screen text-[#BFD9C0] font-['Montserrat_Alternates'] pb-20 pt-10">
    
    <main class="text-center px-4 mb-10">
      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-wide text-[#BFD9C0] drop-shadow-md"> Certifications </h1>
    </main>

    <!-- Certifications Grid Container -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <!-- Certification Card -->
        <Card 
          v-for="(cert, index) in certifications" 
          :key="index"
          cardClass="bg-[#0A190B] border border-emerald-900/30 shadow-2xl shadow-[#1E481F]/40 hover:scale-105 hover:border-emerald-500/40 transition-all duration-300 w-full group overflow-hidden"
          figureClass="px-5 pt-5 cursor-pointer overflow-hidden"
          bodyClass="items-center text-center p-6 flex flex-col justify-between"
          titleClass="text-xl font-bold text-emerald-300"
          :title="cert.title">

          <template #figure>
            <img 
              :src="cert.image" 
              :alt="cert.title"
              @click="selectedImage = cert.image"
              class="rounded-xl aspect-[6/5] object-cover w-full group-hover:scale-105 transition-transform duration-300"/>
          </template>

          <template #actions>
            <a 
              :href="cert.verificationUrl" 
              target="_blank" 
              class="btn bg-[#80B380] hover:bg-[#6EC471] text-black font-semibold border-none w-full flex items-center justify-center gap-2 rounded-lg transition-colors">    
              <div class="flex items-center justify-center gap-2 mx-auto">
                <span>Verify Certificate</span>
              </div>
            </a>
          </template>
        </Card>
      </div>
    </div>

    <!-- DaisyUI Modal Preview -->
    <dialog class="modal" :class="{ 'modal-open': selectedImage }">
      <div class="modal-box bg-[#0f2a14]/90 border border-emerald-800/40 p-4 max-w-xl relative flex items-center justify-center">
        <button 
          @click="selectedImage = null" 
          class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-emerald-200 z-10"> ✕ 
        </button>
        
        <img 
          v-if="selectedImage" 
          :src="selectedImage" 
          alt="Certificate Preview" 
          class="w-full h-auto rounded-lg max-h-[60vh] object-contain mx-auto"/>
      </div>
      <form method="dialog" class="modal-backdrop bg-black/80">
        <button @click="selectedImage = null">close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Card from '~/components/card.vue'
    const selectedImage = ref(null)
      const certifications = [
        {
          title: 'MS Word Associate',
          image: 'image/ms-word-associate.jpg',
          verificationUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx'
        },
        {
          title: 'IT Specialist in Java',
          image: 'image/IT-specialist-java.jpg',
          verificationUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx'
        },
        {
          title: 'MS Excel Associate',
          image: 'image/ms-excel-associate.jpg',
          verificationUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx'
        }
      ]

      useHead({
        title: 'Tech-Stack | Stephanie Bernardo',
      })

      useSeoMeta({
        title: 'Certifications | Stephanie Bernardo',
        description: 'An aspiring web developer, UI/UX designer, and system architect with a passion for building user-friendly and efficient systems.',
        ogTitle: 'Certifications | Stephanie Bernardo',
        ogDescription: 'An aspiring web developer, UI/UX designer, and system architect.',
      })
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>