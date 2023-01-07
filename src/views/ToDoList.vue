<template>
    <h1>Todolist Title</h1>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Due Date</th>
      <th scope="col">Done</th>
      <th scope="col">Edit</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <th scope="row">{{ task.title }}</th>
        <td>{{ task.dueDate }}</td>
        <td><input type = "checkbox"></td>
        <td>404</td>
      </tr>
    </tbody>
  </table>
  <button type="button" class="btn btn-primary">Add new Task</button>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tasks',
  data () {
    return {
      tasks: [],
      toDoLists: []
    }
  },
  methods: {
    getCheckbox (task) {
      if (task.completed === true) {
        return 'type="checkbox" checked'
      } else if (task.completed === false) {
        return 'type="checkbox"'
      }
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
        this.tasks.push(task)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
