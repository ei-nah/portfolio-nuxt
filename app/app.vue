<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0f2a14] via-[#143115] to-black text-white flex flex-col justify-between">
    <NuxtRouteAnnouncer />
    
    <!-- Permanent Navigation Bar -->
    <Navbar />

    <!-- Displays the current page from pages/index.vue -->
    <main class="flex-1 flex items-center justify-center p-4">
      <NuxtPage />
    </main>
    
  </div>
</template>