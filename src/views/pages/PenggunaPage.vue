<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <template slot="card-header-title">Master Pengguna</template>
        <div slot="card-body" class="card-body">
          <button class="btn btn-primary" @click="addUser">Buat Baru</button>
          <div class="form-inline mb-3 float-right">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Nama Pengguna">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <b-table bordered responsive id="my-table" :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage">
            <template slot="action" slot-scope="scope">
              <a href="#" @click.prevent="updateUser(scope.item.id)">Ubah</a> |
              <a href="#" @click.prevent="deleteUser(scope.item.id)">Hapus</a>
            </template>
          </b-table>
          <div class="text-right">
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" class="d-inline-flex mb-0"></b-pagination>
          </div>
        </div>
      </card>
    </div>

    <b-modal id="modal-user" title="Form Pengguna" centered ok-only :no-close-on-backdrop="true" @ok="saveUser" ok-title="Simpan">
      <div class="form-group row">
        <label for="firstname" class="col-sm-4 col-form-label">Nama Depan</label>
        <div class="col-sm-8">
          <input type="hidden" v-model="id">
          <input type="text" name="firstname" class="form-control" id="firstname" v-model="firstname" v-validate="'required'">
          <div class="invalid-feedback">{{ errors.first('firstname') }}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="lastname" class="col-sm-4 col-form-label">Nama Belakang</label>
        <div class="col-sm-8">
          <input type="text" name="lastname" class="form-control" id="lastname" v-model="lastname" v-validate="'required'">
          <div class="invalid-feedback">{{ errors.first('lastname') }}</div>
        </div>
      </div>
    </b-modal>
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
      id: 0,
      firstname: '',
      lastname: '',
      perPage: 3,
      currentPage: 1,
      fields: [
        { key: 'id', label: '#' },
        { key: 'firstname', label: 'Nama Depan' },
        { key: 'lastname', label: 'Nama Belakang' },
        { key: 'action', label: 'Aksi', thClass: 'text-center', tdClass: 'text-center' }
      ],
      items: [
        { id: 1, firstname: 'Fred', lastname: 'Flintstone' },
        { id: 2, firstname: 'Wilma', lastname: 'Flintstone' },
        { id: 3, firstname: 'Barney', lastname: 'Rubble' },
        { id: 4, firstname: 'Betty', lastname: 'Rubble' },
        { id: 5, firstname: 'Pebbles', lastname: 'Flintstone' },
        { id: 6, firstname: 'Bamm Bamm', lastname: 'Rubble' },
        { id: 7, firstname: 'The Great', lastname: 'Gazzoo' },
        { id: 8, firstname: 'Rockhead', lastname: 'Slate' },
        { id: 9, firstname: 'Pearl', lastname: 'Slaghoople' }
      ]
    }
  },
  methods: {
    addUser: function () {
      this.id = 0
      this.firstname = ''
      this.lastname = ''
      this.$bvModal.show('modal-user')
    },
    updateUser: function (id) {
      const index = id - 1
      this.id = this.items[index].id
      this.firstname = this.items[index].firstname
      this.lastname = this.items[index].lastname
      this.$bvModal.show('modal-user')
    },
    deleteUser: function (id) {
      const index = id - 1
      this.items.splice(index, 1)
    },
    saveUser: function (e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.id === 0) {
            this.items.push({
              id: this.items.length + 1,
              firstname: this.firstname,
              lastname: this.lastname
            })
          } else {
            const index = this.id - 1
            this.items[index].firstname = this.firstname
            this.items[index].lastname = this.lastname
          }

          this.$bvModal.hide('modal-user')
        }
      })
    }
  }
}
</script>
