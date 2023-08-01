<template>
<div v-if="loading">
  Loading...
</div>
<div v-else class="text-center">
  {{ todo?.name }}
</div>
</template>

<script lang="ts" setup>
import { todoService } from 'services';
import type { Todo } from 'project-types'

const route = useRoute()
const loading = ref(true)
const todo = ref<Todo>()

onMounted(async () => {
  todo.value = await todoService.get(route.params.id as string)
  loading.value = false
})
</script>