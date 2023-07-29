<template>
  <h2>Sign up</h2>
  <el-form :model="formData" label-position="right" size="large" :rules="validationRules" ref="form" status-icon>
    <el-form-item prop="username">
      <el-input v-model="formData.username" placeholder="Username" :prefix-icon="User" autofocus></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input v-model="formData.password" type="password" placeholder="Password" :prefix-icon="Lock"></el-input>
    </el-form-item>

    <el-form-item prop="confirmPassword">
      <el-input v-model="formData.confirmPassword" type="password" placeholder="Confirm password"
        :prefix-icon="Lock"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="signup" :loading="loading">Sign up</el-button>
    </el-form-item>
  </el-form>
  <NuxtLink to="login">Have an account?</NuxtLink>
</template>

<script lang="ts" setup>
import { FormRules } from 'element-plus';
import { authService, userService } from 'services';
import { User, Lock } from '@element-plus/icons-vue';

definePageMeta({
  layout: false
})

interface SignupForm {
  username: string,
  password: string,
  confirmPassword: string,
}

const router = useRouter()
const loading = ref(false)
const form = ref()
const formData = ref<SignupForm>({
  username: '',
  password: '',
  confirmPassword: '',
})

async function signup() {
  loading.value = true;
  let valid = await form.value.validate();
  if (!valid) {
    loading.value = false;
    return;
  }
  const { confirmPassword, ...userData } = formData.value;

  await userService.create(userData);
  await authService.attempt(userData.username, userData.password);
  loading.value = false;
  router.push('/todos')
}

const validationRules = reactive<FormRules<SignupForm>>({
  username: [
    {
      asyncValidator: async (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Username is required'))
        }

        if (await userService.find(value)) {
          return callback(new Error('This username is already taken'))
        }
      },
      trigger: 'blur'
    },
  ],
  password: [
    { required: true, message: "Password is required", trigger: "blur" },
    {
      min: 5,
      message: "Password length should be at least 5 characters",
      trigger: "blur"
    }
  ],
  confirmPassword: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Password confirmation is required'))
        }
        if (value.length < 5) {
          return callback(new Error('Password length should be at least 5 characters'))
        }
        if (value !== formData.value.password) {
          return callback(new Error('Passwords don\'t match'))
        }
      },
    }
  ]
})
</script>