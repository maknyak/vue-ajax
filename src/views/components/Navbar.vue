<template>
  <nav class="navbar navbar-expand navbar-light bg-white sticky-top border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Admin Dashboard</a>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right href="http://10.14.204.20/internal/eact/icon-eact-new-web">Dokumentasi</b-nav-item>
          <b-nav-item-dropdown right>
            <template slot="button-content">Jhon Doe</template>
            <b-dropdown-item href="#">Profil</b-dropdown-item>
            <b-dropdown-item href="/login">Keluar</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
