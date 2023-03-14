<script setup lang="ts">
const firstLesson = await useFirstLesson();
</script>

<template>
  <NuxtLink class="underline font-medium" :to="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>
