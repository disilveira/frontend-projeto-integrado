<template>
  <div class="login text-center">
    <form class="form-signin">
      <img
        class="mb-4"
        src="../../assets/logo.png"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">E-mail</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="E-mail"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Senha</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Senha"
        required
      />
      <p><a href="#">Esqueceu a senha?</a></p>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Acessar
      </button>
      <p class="mt-5 mb-3 text-muted">
        PUC Minas - Projeto Integrado de Aplicações
      </p>
    </form>
  </div>
</template>

<script>
export default {
  title: 'Login'
}
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
