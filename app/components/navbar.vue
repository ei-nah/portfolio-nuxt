<template>
  <header class="sticky top-0 z-50 bg-[#111d13] text-[#BFD9C0] shadow-md border-b border-emerald-900/30">
    <div class="navbar max-w-7xl mx-auto px-4 sm:px-6">
    
      <!-- Logo -->
      <div class="navbar-start">
        <NuxtLink to="/" class="text-2xl font-bold tracking-wider text-[#BFD9C0] hover:text-[#6EC471] transition-colors">
          SAB </NuxtLink>
      </div>

      <!-- Desktop Links -->
      <div class="navbar-end flex justify-end">
        <ul class="menu menu-horizontal hidden sm:flex flex-nowrap px-1 gap-1 font-medium">
          <li>
            <NuxtLink 
              to="/" 
              class="text-lg md:text-xl text-[#BFD9C0] hover:text-[#6EC471] hover:bg-emerald-950/40 focus:bg-transparent active:bg-transparent transition-all duration-300 whitespace-nowrap"
              exact-active-class="!bg-transparent !text-[#6EC471]"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/about" 
              class="text-lg md:text-xl text-[#BFD9C0] hover:text-[#6EC471] hover:bg-emerald-950/40 focus:bg-transparent active:bg-transparent transition-all duration-300 whitespace-nowrap"
              exact-active-class="!bg-transparent !text-[#6EC471]"> About </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/tech-stack" 
              class="text-lg md:text-xl text-[#BFD9C0] hover:text-[#6EC471] hover:bg-emerald-950/40 focus:bg-transparent active:bg-transparent transition-all duration-300 whitespace-nowrap"
              exact-active-class="!bg-transparent !text-[#6EC471]"> Tech Stack </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/certifications" 
              class="text-lg md:text-xl text-[#BFD9C0] hover:text-[#6EC471] hover:bg-emerald-950/40 focus:bg-transparent active:bg-transparent transition-all duration-300 whitespace-nowrap"
              exact-active-class="!bg-transparent !text-[#6EC471]"> Certifications </NuxtLink>
          </li>

        </ul>

        <!-- Mobile Hamburger Menu (Hugeicons) -->
        <div class="dropdown dropdown-end sm:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle text-[#BFD9C0] hover:bg-emerald-950/50 flex items-center justify-center">
            <HugeiconsIcon :icon="Menu01Icon" class="w-6 h-6" />
          </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-[#111d13] border border-emerald-900/50 rounded-box w-52 text-base">
                <li>
                <NuxtLink 
                    to="/" 
                    class="text-[#BFD9C0] hover:text-[#6EC471] py-2 focus:bg-transparent active:bg-transparent" 
                    exact-active-class="!bg-transparent !text-[#6EC471]"> Home </NuxtLink>
                </li>
                <li>
                <NuxtLink 
                    to="/about" 
                    class="text-[#BFD9C0] hover:text-[#6EC471] py-2 focus:bg-transparent active:bg-transparent" 
                    exact-active-class="!bg-transparent !text-[#6EC471]"> About </NuxtLink>
                </li>
                <li>
                <NuxtLink 
                    to="/tech-stack" 
                    class="text-[#BFD9C0] hover:text-[#6EC471] py-2 focus:bg-transparent active:bg-transparent" 
                    exact-active-class="!bg-transparent !text-[#6EC471]"> Tech Stack </NuxtLink>
                </li>
                <li>
                <NuxtLink 
                    to="/certifications" 
                    class="text-[#BFD9C0] hover:text-[#6EC471] py-2 focus:bg-transparent active:bg-transparent" 
                    exact-active-class="!bg-transparent !text-[#6EC471]"> Certifications </NuxtLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { HugeiconsIcon } from '@hugeicons/vue'
import { Menu01Icon } from '@hugeicons/core-free-icons'
</script>