<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div class="row flex-grow">
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center"
          >
            <div class="auth-form-transparent text-left p-3">
              <div class="brand-logo">
                <h1>SS Telemática</h1>
              </div>
              <h6 class="font-weight-light">
                Dashboard de Estatísticas de Frota
              </h6>
              <form @submit.prevent="submit()" class="pt-3">
                <div class="form-group">
                  <label for="exampleInputEmail">Usuário</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span
                        class="input-group-text bg-transparent border-right-0"
                      >
                        <i class="ti-user text-primary"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control form-control-lg border-left-0"
                      id="exampleInputEmail"
                      placeholder="Email"
                      v-model="form.email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword">Senha</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span
                        class="input-group-text bg-transparent border-right-0"
                      >
                        <i class="ti-lock text-primary"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control form-control-lg border-left-0"
                      id="exampleInputPassword"
                      placeholder="Senha"
                      v-model="form.password"
                      required
                    />
                  </div>
                </div>
                <div
                  class="my-2 d-flex justify-content-between align-items-center"
                >
                  <a href="#" class="auth-link text-black"
                    >Esqueceu sua senha?</a
                  >
                </div>
                <div class="my-3">
                  <button
                    class="
                      btn btn-block btn-primary btn-lg
                      font-weight-medium
                      auth-form-btn
                    "
                  >
                    ACESSAR
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 login-half-bg d-flex flex-row">
            <p
              class="
                text-white
                font-weight-medium
                text-center
                flex-grow
                align-self-end
              "
            >
              Copyright &copy; 2021 Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  title: "Login",

  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    submit() {
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
</style>
