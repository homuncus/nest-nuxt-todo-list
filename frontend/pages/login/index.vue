<template>
  <h2>Login</h2>
  <el-form :model="formData" label-position="right" size="large" :rules="validationRules" ref="form" status-icon>
    <el-form-item prop="username">
      <el-input v-model="formData.username" placeholder="Username" :prefix-icon="User" autofocus></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input v-model="formData.password" type="password" placeholder="Password" :prefix-icon="Lock"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="login" :loading="loading">Login</el-button>
    </el-form-item>
  </el-form>
  <NuxtLink to="/signup">Dont have an account?</NuxtLink>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false
})

import { authService } from 'services'
import { User, Lock } from '@element-plus/icons-vue'
import { FormRules } from 'element-plus';

interface AuthForm {
  username: string,
  password: string,
}

const loading = ref(false)
const router = useRouter()

const form = ref()
const formData = ref<AuthForm>({
  username: '',
  password: ''
})

async function login() {
  loading.value = true;
  let valid = await form.value.validate();
  if (!valid) {
    loading.value = false;
    return;
  }

  const { username, password } = formData.value
  try {
    await authService.attempt(username, password)
    router.push('/todos')
  } catch(e) {
    /* auth fail message or something */
    throw e;
  } finally {
    loading.value = false;
  }
}

const validationRules = reactive<FormRules<AuthForm>>({
  username: [
    {
      required: true,
      message: "Username is required",
      trigger: "blur"
    },
    {
      min: 4,
      message: "Username length should be at least 4 characters",
      trigger: "blur"
    }
  ],
  password: [
    { required: true,
      message: "Password is required",
      trigger: "blur"
    },
    {
      min: 5,
      message: "Password length should be at least 5 characters",
      trigger: "blur"
    }
  ]
})
</script>