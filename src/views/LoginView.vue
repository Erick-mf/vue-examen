<script setup>
import { signInWithGoogle, signInWithGitHub, signIn } from '@/auth.js'

function google() {
  signInWithGoogle()
}

function github() {
  signInWithGitHub()
}

function login(email, password) {
  signIn(email, password)
}
</script>
<template>
  <h1>Login</h1>
  <form action="" @submit.prevent="login">
    <input type="email" placeholder="email" />
    <input type="password" placeholder="password" />
    <button>Login</button>
  </form>
  <h2>iniciar sesion con</h2>
  <button @click="google()">Google</button>
  <button @click="github()">GitHub</button>
  <router-link to="/register">Registrarse</router-link>
</template>
