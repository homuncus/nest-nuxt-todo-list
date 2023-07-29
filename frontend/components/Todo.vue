<template>
  <div class="px-4 py-5 sm:px-6">
    <div class="flex items-center justify-between">
      <h3 class="text-lg leading-6 font-medium text-gray-900">{{ todo.name }}</h3>
    </div>
    <div class="mt-4 flex items-center justify-between">
      <p class="text-sm font-medium text-gray-500">Created: <span class="text-gray-700">{{ dayjs(todo.createdAt).format('lll') }}</span></p>
      <div>
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Edit</a>
        <a href="#" class="font-medium text-red-600 hover:text-red-500" @click="remove">Delete</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Todo } from 'project-types';
import { dayjs } from 'element-plus';
import { todoService } from 'services';

const remove = () => {
  todoService.remove(props.todo.id)
}

const props = defineProps<{
  todo: Todo
}>()
</script>