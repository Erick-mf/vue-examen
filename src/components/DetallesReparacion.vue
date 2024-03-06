<script setup>
defineProps({
  fecha: String,
  descripcion: String,
  categoria: String
})
</script>
<template>
  <h1>Detalles de la reparación</h1>
  <p>Fecha: {{ fecha }}</p>
  <p>Categoria: {{ categoria }}</p>
  <p>Descripción: {{ descripcion }}</p>
</template>
