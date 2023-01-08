<template>
  <h1>Edit your Todolist</h1>
  <form>
    <label for="title">Title: </label>
    <input type="text" id="title" name="title" :value="this.CurrentListitle"><br><br>
    <label for="description">Description: </label>
    <input type="text" id="description" name="description" :value="this.CurrentListDescription"><br><br>
    <button type="button" class="btn btn-outline-primary" @click="trigger">Save</button>
  </form>
</template>

<script>
export default {
  name: 'UpdateTodolist',
  data () {
    return {
      CurrentListId: undefined,
      CurrentListitle: undefined,
      CurrentListDescription: undefined,
      payload: {
        title: undefined,
        description: undefined
      }
    }
  },
  methods: {
    CreateRequestOption () {
      this.payload.title = document.getElementById('title').value
      this.payload.description = document.getElementById('description').value
      return {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.payload)
      }
    },
    trigger () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolists/' + this.$route.params.listID
      const requestOptions = this.CreateRequestOption()
      fetch(endpoint, requestOptions)
        .then(response => response.json)
      history.back()
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolists/' + this.$route.params.listID
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(data => {
        this.CurrentListitle = data.title
        this.CurrentListDescription = data.description
      })
  }
}
</script>

<style scoped>

</style>
