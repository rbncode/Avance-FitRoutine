<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Volver",
  },
});

const router = useRouter();

function goBack() {
  router.push(props.link);
}
</script>

<template>
  <button @click="goBack">{{ buttonText }}</button>
</template>

<style scoped>
button {
  background-color: #d22;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
}

button {
  width: 120px;
  height: 45px;
  padding: 10px;
}

button:hover {
  background-color: #c00;
}
</style>
