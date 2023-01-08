<template>
  <h1>Your Todolists</h1>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">See more</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todolist in toDoLists" :key="todolist.id">
      <td>{{ todolist.title }}</td>
      <td>{{ todolist.description }}</td>
<!--      <td><a href="/todolist">click here </a></td>-->
      <td><a :href="'/todolist/' + todolist.id">click here </a></td>
    </tr>
    </tbody>
  </table>
</template>

<script>

// import ToDoList from '@/views/ToDoList.vue'

export default {
  // components: {
  //   ToDoList
  // },
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
