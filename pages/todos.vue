<template>
  <v-container class="todo">
    <v-form ref="form">
      <v-row>
        <v-col cols="12" md="12">
          <task></task>
        </v-col>
      </v-row>
    </v-form>
    <board title="Todo" :todos="todos"></board>
    <board title="Done" :todos="dones"></board>
  </v-container>
</template>

<script>
import Board from '../components/Board.vue'
import Task from '../components/Task.vue'

export default {
  components: {
    Board,
    Task
  },
  computed: {
    todos() {
      return this.$store.getters['todos/orderdTodos'].filter(function(el) {
        return el.status === false
      }, this)
    },
    dones() {
      return this.$store.getters['todos/orderdTodos'].filter(function(el) {
        return el.status === true
      }, this)
    }
  },
  created() {
    this.$store.dispatch('todos/init')
  }
}
</script>

<style scoped>
.status.done {
  text-decoration: line-through;
}
</style>
