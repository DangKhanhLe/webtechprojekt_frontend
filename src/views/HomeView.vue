<template>
  <div class="home">
    <HelloWorld msg="Welcome to this ToDoList App"/>
  </div>
  <button type="button" class="btn btn-outline-primary"><a :href="'/alltodolists'">Get Started</a></button>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
