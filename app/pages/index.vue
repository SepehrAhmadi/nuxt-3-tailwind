<template>
  <div class="flex justify-center align-center">
    <IconsHome class="text-2xl me-1" />
    Home Page
  </div>
  <div class="flex justify-center align-center my-6">
    <div class="text-center">
      <div class="text-2xl font-bold mb-1">count : {{ baseStore.count }}</div>
      <button
        @click="baseStore.increment"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
      >
        +
      </button>
      <button
        @click="baseStore.resetCount"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
        mx-2
      >
        Reset Counter
      </button>
      <button
        @click="baseStore.decrement"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
      >
        -
      </button>
    </div>
  </div>
  <Alert />
</template>

<script setup>
import { useBaseStore } from '~/store/base';
import { useOperationStore } from '~/store/operation';


const baseStore = useBaseStore();
const operationStore = useOperationStore()

const { $hello } = useNuxtApp();
$hello("FiNiK");

const { sayHello } = useSayHello();
sayHello();
</script>
