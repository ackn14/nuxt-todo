<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-list>
        <v-subheader>{{ title }}</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="todo in todos" :key="todo.id">
            <v-list-item-avatar>
              <v-checkbox
                :checked="todo.status"
                color="primary"
                @change="toggle(todo)"
              ></v-checkbox>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title :class="{ done: todo.status }">{{
                todo.task
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ todo.detail }}</v-list-item-subtitle>
              <v-list-item-title>
                <v-chip class="mt-2" color="grey lighten-4" label>
                  <v-avatar left>
                    <v-icon small color="primary">mdi-calendar</v-icon>
                  </v-avatar>
                  {{ todo.date }}
                </v-chip></v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon color="grey" text dark @click="remove(todo.id)">
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    dateFilter(date) {
      return moment(date).format('YYYY/MM/DD HH:mm')
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    todos: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      task: '',
      status: false
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('todos/remove', id)
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0;
}
</style>
