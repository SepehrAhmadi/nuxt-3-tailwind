<template>
  <div>Edit Profile Page : {{ route.params.id }}</div>
</template>

<script setup>
definePageMeta({
  layout: "custome",
});

const route = useRoute();
</script>
