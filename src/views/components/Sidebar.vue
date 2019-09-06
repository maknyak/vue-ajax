<template>
  <aside class="sidebar">
    <ul class="sidebar-nav">
      <router-link tag="li" to="/dashboard" active-class="active">
        <a href="#">
          <i class="fa fa-tachometer fa-fw" aria-hidden="true"></i>
          <span class="sidebar-nav-text">Dashboard</span>
        </a>
      </router-link>
      <li class="sidebar-nav-title">Data Master</li>
      <router-link tag="li" to="/pengguna" active-class="active">
        <a href="#">
          <i class="fa fa-user fa-fw" aria-hidden="true"></i>
          <span class="sidebar-nav-text">Master Pengguna</span>
        </a>
      </router-link>
      <router-link tag="li" to="/blank" active-class="active">
        <a href="#">
          <i class="fa fa-file-o fa-fw" aria-hidden="true"></i>
          <span class="sidebar-nav-text">Blank Page</span>
        </a>
      </router-link>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>
