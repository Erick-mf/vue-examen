<script setup>
import { addDoc, collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { getAuth } from 'firebase/auth'

const db = useFirestore()
let descripcion
let categoria

function darDeAlta() {
  const fecha = new Date()
  const user = getAuth().currentUser
  if (descripcion !== '' && categoria !== '') {
    addDoc(collection(db, 'presupuestos'), {
      descripcion: descripcion,
      categoria: categoria,
      usuario: user.email,
      completado: false,
      fecha: fecha.toLocaleDateString()
    })
  }
}
</script>
<template>
  <h1>Nueva reparación</h1>
  <form action="" @keyup.enter.prevent="darDeAlta">
    <input type="text" v-model="descripcion" required placeholder="descripcion" />
    <select v-model="categoria" required>
      <option value="" disabled selected>Categoria</option>
      <option value="Lavadora">Lavadora</option>
      <option value="Microondas">Microondas</option>
      <option value="Lavavajillas">Lavavajillas</option>
      <option value="Frigorifico">Frigorifico</option>
    </select>
  </form>
</template>
