<template>
  <div>
    <div class="layout-login" :style="{ backgroundImage: `url(${loginbg})` }">
      <main class="main-login">
        <div class="box-login">
          <div class="left-login" :style="{ backgroundImage: `url(${iconbg})` }"></div>
          <div class="right-login">
            <h1 class="title-login">EACT</h1>
            <p class="tagline-login"><strong>Selamat datang!</strong> Silakan masuk <br/> menggunakan Username / Email yang terdaftar.</p>

            <form novalidate @submit.prevent="login">
              <div class="form-group">
                <input type="text" name="username" class="form-control" placeholder="Username / Email" v-model="username" v-validate="'required'">
                <div class="invalid-feedback">{{ errors.first('username') }}</div>
              </div>
              <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="Kata sandi" v-model="password" v-validate="'required'">
                <div class="invalid-feedback">{{ errors.first('password') }}</div>
              </div>
              <button type="submit" class="btn btn-primary">Masuk</button>
              <a class="btn btn-outline-primary mx-2" href="#">Lupa kata sandi</a>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import loginbg from '../../assets/images/login-bg.jpg'
import iconbg from '../../assets/images/icon-bg.jpg'
export default {
  data: function () {
    return {
      loginbg: loginbg,
      iconbg: iconbg,
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
