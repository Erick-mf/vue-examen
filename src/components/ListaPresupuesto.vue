<script setup>
import { collection, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'
import { RouterLink } from 'vue-router'
import DetallesRepacion from '@/components/DetallesReparacion.vue'
import { getAuth } from 'firebase/auth'

const db = useFirestore()
const user = getAuth().currentUser
const reparaciones = useCollection(collection(db, 'presupuestos'))

function actualizar(id) {
  updateDoc(doc(db, user, id), {
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
    <li v-for="reparacion in reparaciones" :key="reparacion.id">
      <p>
        {{ reparacion.fecha.toDate().toLocaleString() }} - {{ reparacion.descripcion }}
        {{ reparacion.completado ? 'Completada' : 'Pendiente' }}
      </p>
      <button @click="actualizar(reparacion.id)">Completar</button>
      <button @click="borrar(reparacion.id)">Borrar</button>
      <DetallesRepacion
        :reparacion.fecha="reparacion.fecha.toDate().toLocaleString()"
        :reparacion.categoria="reparacion.categoria"
        :reparacion.descripcion="reparacion.descripcion"
      />
      <hr />
    </li>
  </ul>
</template>
