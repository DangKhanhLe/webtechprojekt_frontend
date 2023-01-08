<template>
  <h1>Add Task to list</h1>
  <form action="/action_page.php">
    <label for="title">Task: </label>
    <input type="text" id="title" name="title" value="Add your task"><br><br>
    <label for="duedate">Due Date: </label>
    <input type="text" id="duedate" name="duedate" value="yyyy-MM-dd"><br><br>
    <button type="button" class="btn btn-outline-primary" @click="trigger">Save</button>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      payload: {
        title: undefined,
        dueDate: undefined,
        completed: false,
        toDoListId: this.$route.params.listID
      }
    }
  },
  methods: {
    CreateRequestOption () {
      this.payload.title = document.getElementById('title').value
      this.payload.dueDate = document.getElementById('duedate').value
      return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.payload)
      }
    },
    trigger () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks'
      const requestOption = this.CreateRequestOption()
      fetch(endpoint, requestOption)
        .then(response => response.json)
        .then(data => (this.postID = data.id))
        .catch(error => console.log('error', error))
      history.back()
    }
  }
}
</script>

<style scoped>

</style>
