<template>
  <h1>Edit your Task</h1>
  <form>
    <label for="title">Task: </label>
    <input type="text" id="title" name="title" :value="this.CurrentTaskTitle"><br><br>
    <label for="duedate">Due Date: </label>
    <input type="text" id="duedate" name="duedate" :value="this.CurrentTaskDueDate"><br><br>
    <label for="completed">Completed: </label>
    <input type="checkbox" id="completed" name="completed" :value=this.CurrentTaskStatus v-model="CurrentTaskStatus"><br><br>
    <label for="todolistID">Todolist: </label>
    <input type="number" id="todolistID" name="todolistID" :value="this.CurrentTaskList"><br><br>
    <button type="button" class="btn btn-outline-primary" @click="trigger">Save</button>
  </form>
<!--  <label for="checkbox">{{ CurrentTaskStatus }}</label>-->
<!--  <input type="checkbox" id="checkbox" v-model="CurrentTaskStatus">-->
</template>

<script>
export default {
  name: 'UpdateTask',
  data () {
    return {
      CurrentTaskId: undefined,
      CurrentTaskTitle: undefined,
      CurrentTaskDueDate: undefined,
      CurrentTaskStatus: undefined,
      CurrentTaskList: undefined,
      payload: {
        title: undefined,
        dueDate: undefined,
        completed: undefined,
        toDoListId: undefined
      }
    }
  },
  methods: {
    CreateRequestOption () {
      this.payload.title = document.getElementById('title').value
      this.payload.dueDate = document.getElementById('duedate').value
      this.payload.completed = document.getElementById('completed').value
      this.payload.toDoListId = document.getElementById('todolistID').value
      return {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.payload)
      }
    },
    trigger () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks/' + this.$route.params.taskID
      const requestOptions = this.CreateRequestOption()
      fetch(endpoint, requestOptions)
        .then(response => response.json)
      history.back()
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks/' + this.$route.params.taskID
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(data => {
        this.CurrentTaskId = data.id
        this.CurrentTaskDueDate = data.dueDate
        this.CurrentTaskTitle = data.title
        this.CurrentTaskStatus = data.completed
        this.CurrentTaskList = data.toDoListId
      })
  }
}
</script>

<style scoped>

</style>
