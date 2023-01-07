<template>
  <h1>Your Todolists</h1>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todolist in toDoLists" :key="todolist.id">
      <td><a href="/todolist">{{ todolist.title }}</a></td>
      <td><a href="/todolist">{{ todolist.description }}</a></td>
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
tr:hover {
  background: lightblue;
}
td a {
  display: block;
}
</style>
