<template>
  <nav class="navbar navbar-expand navbar-dark bg-primary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Admin Dashboard</a>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>Dokumentasi</b-nav-item>
          <b-nav-item-dropdown right>
            <template slot="button-content">Jhon Doe</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
