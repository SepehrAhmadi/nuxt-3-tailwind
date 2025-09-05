<template>
  <div class="flex justify-center align-center">
    <icons-account class="text-2xl me-1"/>
    Profile Page
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custome",
  middleware : "auth-local"
});

const {sayHello} = useSayHello()

sayHello()
</script>
