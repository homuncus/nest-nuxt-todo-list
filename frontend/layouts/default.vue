<template>
  <el-header>
    <div class="ml-auto mr-5">
      <el-dropdown>
        <div class="font-bold text-sm">
          {{ userStore.user.username }}
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
  <el-main>
    <slot />
  </el-main>
</template>

<script lang="ts" setup>
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
</script>