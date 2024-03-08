<script setup>
import { ref } from 'vue'
import {
  collection,
  doc,
  deleteDoc,
  updateDoc,
  getFirestore,
  getDocs,
  query,
  where
} from 'firebase/firestore'
import DetallesRepacion from '@/components/DetallesReparacion.vue'
import { getAuth } from 'firebase/auth'

const db = getFirestore()
const user = getAuth().currentUser
const reparacionesRef = collection(db, 'presupuestos')
const reparacionesUserQuery = query(reparacionesRef, where('usuario', '==', user.email))

let reparacionesUser = ref([])
getDocs(reparacionesUserQuery).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    reparacionesUser.value.push({
      id: doc.id,
      ...doc.data()
    })
  })
})
function actualizar(id) {
  updateDoc(doc(db, 'presupuestos', id), {
    completado: true
  })
}
function borrar(id) {
  deleteDoc(doc(db, 'presupuestos', id))
}
</script>
<template>
  <h3>Lista de reparaciones</h3>
  <ul>
    <li v-for="reparacion in reparacionesUser" :key="reparacion.id">
      <p>{{ reparacion.fecha }} - {{ reparacion.descripcion }}</p>
      <p>Estado:{{ reparacion.completado ? 'Completada' : 'Pendiente' }}</p>
      <button @click="actualizar(reparacion.id)">Completar</button>
      <button @click="borrar(reparacion.id)">Borrar</button>
      <DetallesRepacion
        :fecha="reparacion.fecha"
        :categoria="reparacion.categoria"
        :descripcion="reparacion.descripcion"
      />
      <hr />
    </li>
  </ul>
</template>
