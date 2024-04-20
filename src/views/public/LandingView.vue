<template>
<div class="bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-auto">
  <div class="container max-w-5xl mx-auto px-4">
    <div class="w-4/5">
      <h1 class="mt-32 text-white text-6xl font-bold">Everything you need <br /><span class="text-blue-400">in one place.</span></h1>
    </div>
    <div class="w-5/6 my-10 ml-6">
      <h3 class="text-gray-300">
        Create, save and use any day-to-day tools <br />
        <strong class="text-white">right in your browser</strong>
      </h3>
    </div>

    <div class="flex min-w-5xl flex-row space-x-5 text-center text-lg text-white">
      <RouterLink to="/signup">
        <ButtonPrimary>
          Sign Up!
        </ButtonPrimary>
      </RouterLink>
      <RouterLink to="/login">
        <ButtonSecondary>
          Log In!
        </ButtonSecondary>
      </RouterLink>
    </div>
  </div>
</div>
</template>

<script>
import { RouterLink } from "vue-router";
import ButtonPrimary from '@/components/landing/ButtonPrimary.vue'
import ButtonSecondary from '@/components/landing/ButtonSecondary.vue'

export default {
  components: {
    ButtonPrimary,
    ButtonSecondary
  }
}
</script>

<style scoped>

</style>
  