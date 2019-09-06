<template>
  <div>
    <div class="layout-login" :style="{ backgroundImage: `url(${loginbg})` }">
      <main class="main-login">
        <div class="box-login">
          <div class="left-login" :style="{ backgroundImage: `url(${iconbg})` }"></div>
          <div class="right-login">
            <h1 class="title-login">EACT</h1>
            <p class="tagline-login"><strong>Selamat datang!</strong> Silakan masuk <br/> menggunakan Username / Email yang terdaftar.</p>

            <form action="">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Username / Email">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Kata sandi">
              </div>
              <div class="form-group">
                <a href="">Lupa kata sandi?</a>
              </div>
              <button type="submit" class="btn btn-primary">Masuk</button>
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
      iconbg: iconbg
    }
  }
}
</script>
