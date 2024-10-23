<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: 'Volver',
  },
});

const router = useRouter();

function goTo() {
  router.push(props.link);
}
</script>

<template>
  <button @click="goTo">{{ buttonText }}</button>
</template>

<style scoped>
button {
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    margin: 0 4px;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
}

button:hover {
    background-color: #2a2b38;
}
</style>