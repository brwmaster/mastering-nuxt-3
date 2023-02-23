<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect:
      '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  });
};
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col">
      <div v-if="error.statusCode === '404'" class="prose">
        <h1 class="text-6xl text-center">{{ error.statusCode }}</h1>
        <p>I guess that page doesn't exist.</p>
      </div>

      <div v-else class="prose">
        <h1 class="text-6xl text-center">{{ error.statusCode }}</h1>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </div>
      <div class="prose">
        <p>
          <strong>{{ error.message }}</strong>
        </p>
        <div
          class="border border-blue-500 py-2 px-4 text-center rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white transition ease-in-out duration-300"
          @click="handleError"
        >
          Go to the first lesson.
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
