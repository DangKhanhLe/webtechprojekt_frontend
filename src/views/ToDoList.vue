<template>
  <h1>Todolist Title</h1>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Due Date</th>
      <th scope="col">Done</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
    </thead>
    <tbody>
      <tr id="tasklist" v-for="task in tasks" :key="task.id" >
        <th scope="row">{{ task.title }}</th>
        <td>{{ task.dueDate }}</td>
        <td><input type = "checkbox"></td>
        <td>{{ 404 }}</td>
        <td><button type="button" class="btn btn-outline-primary" @click="deleteTask(task.id)">Delete Task</button></td>
      </tr>
    </tbody>
    <div>
      <a :href="'/addtask/' + this.listID">
        add task
      </a>
    </div>
  </table>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tasks',
  data () {
    return {
      tasks: [],
      toDoLists: [],
      listID: this.$route.params.listID
    }
  },
  methods: {
    getCheckbox (task) {
      if (task.completed === true) {
        return 'type="checkbox" checked'
      } else if (task.completed === false) {
        return 'type="checkbox"'
      }
    },
    deleteTask (id) {
      const endpoint2 = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks/' + id
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
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(task => {
        if (String(task.toDoListId) === this.listID) {
          this.tasks.push(task)
        }
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
