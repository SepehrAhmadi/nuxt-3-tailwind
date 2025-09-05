export default defineNuxtRouteMiddleware((to, from) => {
  const logedIn = true;
  if (logedIn) {
    console.log("logIn middleware true");
    if (to.path === "/logIn") {
      return navigateTo("/");
    }
  } else {
    console.log("logIn middleware false");
    if (to.path !== "/logIn") {
      return navigateTo("/logIn");
    }
  }
});
