<script setup>
import AltaPresupuesto from '@/components/AltaPresupuesto.vue'
import ListaPresupuesto from '@/components/ListaPresupuesto.vue'
import { signOut } from '@/auth.js'

function cerrarSesion() {
  signOut()
}
</script>
<template>
  <button @click="cerrarSesion">cerrar sesion</button>
  <AltaPresupuesto />
  <ListaPresupuesto />
</template>
