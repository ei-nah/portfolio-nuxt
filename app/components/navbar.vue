<template>
  <header class="sticky top-0 z-50 bg-[#111d13] text-[#BFD9C0] shadow-md border-b border-emerald-900/30">
    <div class="navbar max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
    
      <!-- Logo -->
      <div class="navbar-start w-auto">
        <NuxtLink to="/" class="text-2xl font-bold tracking-wider text-[#BFD9C0] hover:text-[#6EC471] transition-colors">
          SAB
        </NuxtLink>
      </div>

      <!-- Desktop Links -->
      <div class="navbar-end w-auto flex justify-end">
        <ul class="menu menu-horizontal hidden sm:flex flex-nowrap px-1 gap-1 font-medium items-center">
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

        <!-- Mobile Hamburger Menu -->
        <div class="dropdown dropdown-end sm:hidden">
          <div 
            tabindex="0" 
            role="button" 
            @click="isOpen = !isOpen"
            class="btn btn-ghost btn-circle text-[#BFD9C0] hover:bg-emerald-950/50 flex items-center justify-center cursor-pointer">
            <HugeiconsIcon v-if="!isOpen" :icon="Menu01Icon" class="w-6 h-6" />
            <HugeiconsIcon v-else :icon="Cancel01Icon" class="w-6 h-6" />
          </div>

          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-[#111d13] border border-emerald-900/50 rounded-box w-52 text-base">
            <li>
              <NuxtLink 
                to="/" 
                @click="closeMenu"
                class="flex items-center gap-3 py-2 text-[#BFD9C0] hover:text-[#6EC471] focus:bg-transparent active:bg-transparent" 
                exact-active-class="!bg-transparent !text-[#6EC471]">
                <HugeiconsIcon :icon="Home07Icon" class="w-5 h-5 shrink-0 text-[#6EC471]"/>
                <span>Home</span> 
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/about" 
                @click="closeMenu"
                class="flex items-center gap-3 py-2 text-[#BFD9C0] hover:text-[#6EC471] focus:bg-transparent active:bg-transparent" 
                exact-active-class="!bg-transparent !text-[#6EC471]">
                <HugeiconsIcon :icon="User02Icon" class="w-5 h-5 shrink-0 text-[#6EC471]" />
                <span>About</span> 
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/tech-stack" 
                @click="closeMenu"
                class="flex items-center gap-3 py-2 text-[#BFD9C0] hover:text-[#6EC471] focus:bg-transparent active:bg-transparent" 
                exact-active-class="!bg-transparent !text-[#6EC471]">
                <HugeiconsIcon :icon="JavaIcon" class="w-5 h-5 shrink-0 text-[#6EC471]"/>
                <span>Tech Stack</span> 
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/certifications" 
                @click="closeMenu"
                class="flex items-center gap-3 py-2 text-[#BFD9C0] hover:text-[#6EC471] focus:bg-transparent active:bg-transparent" 
                exact-active-class="!bg-transparent !text-[#6EC471]">
                <HugeiconsIcon :icon="Certificate01Icon" class="w-5 h-5 shrink-0 text-[#6EC471]"/>
                <span>Certifications</span> 
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { HugeiconsIcon } from '@hugeicons/vue'
  import { 
    Menu01Icon, 
    Cancel01Icon,
    Home07Icon, 
    User02Icon, 
    JavaIcon, 
    Certificate01Icon
  } from '@hugeicons/core-free-icons'

  // Identify if dropdown is open
  const isOpen = ref(false)

  // Function to close menu and reset icon state
  const closeMenu = () => {
    isOpen.value = false
    document.activeElement?.blur()
  }

</script>