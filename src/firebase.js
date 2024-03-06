import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDMSmKJ_YewQmR4KCaEteJQSujJrMrVY8Y',
  authDomain: 'recuperacion-vue.firebaseapp.com',
  projectId: 'recuperacion-vue',
  storageBucket: 'recuperacion-vue.appspot.com',
  messagingSenderId: '481059789971',
  appId: '1:481059789971:web:f17caa45fd7a1304198166'
})

export const db = getFirestore(firebaseApp)
