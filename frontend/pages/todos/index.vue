<template>
  <el-form :model="formData" v-loading="loading">
    <el-form-item class="grid-cols-9 row-auto">
      <el-input v-model="formData.name" placeholder="sosig" class="col-span-8"></el-input>
      <el-button @click="create" class="col-span-1 bg-green-500 hover:bg-green-600">+</el-button>
    </el-form-item>
  </el-form>
  <Todo v-for="todo in todos" :todo="todo" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

import { todoService } from 'services'
import type { Todo } from 'project-types'

const loading = ref(false)
const todos = ref<Todo[]>([])
const formData = ref({
  name: ''
})

const create = async () => {
  loading.value = true
  await todoService.create(formData.value)
  formData.value.name = ''
  loading.value = false
}

onMounted(async () => {
  todos.value = await todoService.getAll()
})
</script>
