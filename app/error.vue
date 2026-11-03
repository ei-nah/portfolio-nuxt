<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-[#0d1b12] text-white flex flex-col items-center justify-center px-4">
    <div class="text-center max-w-lg">
      
      <!-- Error Code Badge -->
      <span class="text-6xl font-extrabold text-emerald-500 tracking-wider">
        {{ error?.statusCode || '404' }}
      </span>

      <!-- Heading -->
      <h1 class="text-3xl font-bold mt-4">
        Page not found
      </h1>

      <!-- Description -->
      <p class="text-gray-400 mt-2">
        The page you are looking for might have been removed or temporarily unavailable.
      </p>

      <!-- Button -->
      <div class="mt-8">
        <button 
          @click="handleError"
          class="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6"> Back to Home Page
        </button>
      </div>

    </div>
  </div>
</template>

<style>
  @import "~/assets/css/main.css"; 
</style>