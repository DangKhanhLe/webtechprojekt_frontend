<template>
  <h1>Add Task to list</h1>
  <form action="/action_page.php">
    <label for="title">Todolist title: </label>
    <input type="text" id="title" name="title" value="Add the title"><br><br>
    <label for="description">Description: </label>
    <input type="text" id="description" name="description" value="What is this todolist about"><br><br>
    <button type="button" class="btn btn-outline-primary" @click="trigger">Save</button>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      payload: {
        title: 'A simple todolist',
        description: 'Just a todolist'
      }
    }
  },
  methods: {
    CreateRequestOption () {
      this.payload.title = document.getElementById('title').value
      this.payload.description = document.getElementById('description').value
      return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.payload)
      }
    },
    trigger () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolists'
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
