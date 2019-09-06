<template>
  <div class="layout-login" :style="{ backgroundImage: `url(${loginbg})` }">
    <main class="main-login">
      <form class="box-login">
        <h1 class="title-login"><span class="text-muted">ICON</span> EACT</h1>
        <p class="tagline-login"><strong>Selamat datang!</strong> Silakan masuk <br/> menggunakan Username / Email yang terdaftar.</p>
        <div class="form-group">
          <input type="text" class="form-control form-control-lg" placeholder="Username / Email">
        </div>
        <div class="form-group">
          <input type="text" class="form-control form-control-lg" placeholder="Kata sandi">
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Masuk</button>
      </form>
      <div class="box-footer-login">
        <a href="">Lupa kata sandi?</a>
      </div>
    </main>
  </div>
</template>

<script>
import loginbg from '../../assets/images/login-bg.jpg'
export default {
  data: function () {
    return {
      loginbg: loginbg
    }
  }
}
</script>
