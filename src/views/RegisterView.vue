<script setup>
import { signUp } from '@/auth.js'

const email = ''
const password = ''
function register(email, password) {
  signUp(email, password)
}
</script>
<template>
  <h1>Registro</h1>
  <form action="" @submit.prevent="register(email, password)">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button>Registrarse</button>
  </form>
</template>
