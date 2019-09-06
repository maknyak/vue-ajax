<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <template slot="card-header-title">Master Pengguna</template>
        <template slot="card-header-action">
          <div class="form-inline">
            <div class="input-group input-group-sm">
              <input type="text" class="form-control" placeholder="Kata kunci">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button" id="button-addon2">
                  <i class="fa fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <button class="btn btn-primary btn-sm mx-1">
            <i class="fa fa-plus"></i>
          </button>
        </template>
        <template slot="card-body">
          <b-table id="my-table" :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage">
            <template slot="action" slot-scope="scope">
              <a href="#">Ubah</a> | <a href="#" @click.prevent="deletePengguna(scope.index)">Hapus</a>
            </template>
          </b-table>
        </template>
        <template slot="card-footer">
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" class="d-inline-flex mb-0"></b-pagination>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card
  },
  computed: {
    rows: function () {
      return this.items.length
    }
  },
  data: function () {
    return {
      perPage: 3,
      currentPage: 1,
      fields: [
        { key: 'id', label: '#' },
        { key: 'first_name', label: 'Nama Depan' },
        { key: 'last_name', label: 'Nama Belakang' },
        { key: 'action', label: 'Aksi' }
      ],
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  methods: {
    deletePengguna: function (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
