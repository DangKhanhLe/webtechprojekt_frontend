<template>
  <h1>Your Todolists</h1>
  <table class="table table-striped table-hover">
    <thead>
    <tr style="background-color: lightgray">
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">See more</th>
      <th scope="col">Edit<img :src="'https://img.icons8.com/office/512/making-notes.png'"></th>
      <th scope="col">Delete<img :src="'https://img.icons8.com/emoji/512/cross-mark-emoji.png'"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todolist in toDoLists" :key="todolist.id">
      <td>{{ todolist.title }}</td>
      <td>{{ todolist.description }}</td>
      <td><a :href="'/todolist/' + todolist.id">click here </a></td>
      <td>Edit</td>
      <td><button type="button" class="btn btn-outline-primary" @click="deleteTodolist(todolist.id)">Delete List</button></td>
    </tr>
    <tr>
      <td colspan="5"><a :href="'/addtodolist/'">add new todolist</a></td>
    </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'AllToDoLists',
  data () {
    return {
      toDoLists: []
    }
  },
  methods: {
    deleteTodolist (id) {
      const endpoint2 = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolists/' + id
      const requestOptions2 = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint2, requestOptions2)
        .then(response => response.json())

      location.reload()
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolists'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(todolist => {
        this.toDoLists.push(todolist)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
img {
  max-width: 5%;
  max-height: 5%;
}
</style>
