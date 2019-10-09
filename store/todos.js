import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const todosRef = db.collection('todos')

export const state = () => ({
  todos: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todosRef)
  }),
  add: firestoreAction((context, { task, detail, date }) => {
    if (task.trim()) {
      todosRef.add({
        task,
        detail,
        date,
        status: false
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      status: !todo.status
    })
  })
}

export const getters = {
  orderdTodos: (state) => {
    return _.orderBy(state.todos, 'date', 'asc')
  }
}
