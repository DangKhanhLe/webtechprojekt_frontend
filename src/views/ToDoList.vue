<template>
  <h1>Todolist Title</h1>
  <table class="table table-striped table-hover">
    <thead>
    <tr style="background-color: lightgray">
      <th scope="col">Task</th>
      <th scope="col">Due Date <img :src="'https://img.icons8.com/office/512/time-span.png'"></th>
      <th scope="col">Edit <img :src="'https://img.icons8.com/office/512/making-notes.png'"></th>
      <th scope="col">Delete <img :src="'https://img.icons8.com/emoji/512/cross-mark-emoji.png'"></th>
      <th scope="col">Done <img :src="'https://img.icons8.com/office/2x/checked.png'" width="550" height="17"></th>
    </tr>
    </thead>
    <tbody>
      <tr id="tasklist" v-for="task in tasks" :key="task.id">
        <th scope="row">{{ task.title }}</th>
        <td>{{ task.dueDate }}</td>
<!--        <td><button type="button" class="btn btn-outline-primary">Edit Task</button></td>-->
        <td><a :href="'/updatetask/' + task.id">Edit Task</a></td>
        <td><button type="button" class="btn btn-outline-primary" @click="deleteTask(task.id)">Delete Task</button></td>
        <td v-if="task.completed === true" class="true"><input type = "checkbox" checked></td>
        <td v-else class="false"><input type = "checkbox"></td>
<!--        <td><input type="checkbox" id="completed" name="completed" :value=task.completed v-model="task.completed" @click="updateCheckbox(task.id, task.title, task.dueDate, task.completed, task.toDoListId)"></td>-->
      </tr>
      <tr>
        <td colspan="5"><a :href="'/addtask/' + this.listID">add task</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tasks',
  data () {
    return {
      tasks: [],
      listID: this.$route.params.listID,
      payload: {
        title: undefined,
        dueDate: undefined,
        completed: undefined,
        toDoListId: undefined
      }
    }
  },
  methods: {
    deleteTask (id) {
      const endpoint2 = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks/' + id
      const requestOptions2 = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint2, requestOptions2)
        .then(response => response.json())

      location.reload()
    },
    updateCheckbox (id, title, date, status, listID) {
      this.payload.title = title
      this.payload.dueDate = date
      this.payload.completed = status
      this.payload.toDoListId = listID

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks/' + id
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.payload)
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json)
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
  .true {
    background-color: lightgreen
  }
  .false {
    background-color: lightcoral
  }
  img {
    max-width: 7%;
    max-height: 7%;
  }
</style>
