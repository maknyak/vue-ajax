<template>
  <div class="admin-layout">
    <navbar/>
    <sidebar/>
    <main class="main">
      <div class="container-fluid px-3">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
export default {
  name: 'adminlayout',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
