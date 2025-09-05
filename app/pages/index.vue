<template>
  <div class="flex justify-center align-center">
    <IconsHome class="text-2xl me-1" />
    Home Page
  </div>
  <Alert />
</template>

<script setup>
const { $hello } = useNuxtApp();
$hello("FiNiK");

const { sayHello } = useSayHello();
sayHello();
</script>
