<!-- app/components/CardComponent.vue -->
<template>
  <div :class="['card', cardClass]">
    <!-- Optional Figure/Image Slot -->
    <figure v-if="$slots.figure" :class="figureClass">
      <slot name="figure" />
    </figure>

    <!-- Card Body -->
    <div :class="['card-body', bodyClass]">
      <!-- Optional Title (or passed via prop/slot) -->
      <h2 v-if="title || $slots.title" :class="['card-title', titleClass]">
        <slot name="title">{{ title }}</slot>
      </h2>

      <!-- Main Body Content -->
      <slot />

      <!-- Card Actions Slot -->
      <div v-if="$slots.actions" :class="['card-actions', actionsClass]">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  cardClass: {
    type: String,
    default: 'bg-base-100/10 backdrop-blur-md shadow-2xl border border-white/10'
  },
  figureClass: {
    type: String,
    default: ''
  },
  bodyClass: {
    type: String,
    default: 'items-center text-center p-6'
  },
  titleClass: {
    type: String,
    default: ''
  },
  actionsClass: {
    type: String,
    default: 'justify-center mt-4 w-full'
  }
})
</script>