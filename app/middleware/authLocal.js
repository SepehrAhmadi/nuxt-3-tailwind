export default defineNuxtRouteMiddleware((to ,from) => {
  console.log("This is auth local middleware");
})