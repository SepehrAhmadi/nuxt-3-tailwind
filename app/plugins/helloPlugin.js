export default defineNuxtPlugin(() => {
  return { 
    provide : {
       hello : (msg) => console.log(`Hello ${msg}`) 
    }
  }
})