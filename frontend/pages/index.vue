<template>
  <Todo v-for="todo in todos" :todo="todo" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

import { todoService } from 'services'
import type { Todo } from 'project-types'

const todos = ref<Todo[]>([])

onMounted(async () => {
  todos.value = await todoService.getAll()
})
</script>
