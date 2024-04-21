<template>
    <div
        class="mx-auto flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-900 to-green-900 text-white"
    >
        <form class="flex w-[30rem] flex-col space-y-10" @submit.prevent>
            <div class="text-center text-4xl font-medium">
                Sign Up
            </div>

            <TextInput
                type="text"
                placeholder="Email"
                v-model="email"
            ></TextInput>
            <TextInput
                type="text"
                placeholder="Username"
                v-model="username"
            ></TextInput>
            <TextInput
                type="password"
                placeholder="Password"
                v-model="passowrd"
            ></TextInput>

            <AuthButton
                @click="signUp()"
            >SIGN UP</AuthButton>

            <p class="text-center text-lg">
                Already signed up?
                <RouterLink
                    to="/login"
                >
                    <AuthLink>Log In</AuthLink>
                </RouterLink>
            </p>

        </form>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

import TextInput from '@/components/auth/TextInput.vue';
import AuthButton from '@/components/auth/AuthButton.vue';
import AuthLink from '@/components/auth/AuthLink.vue';
import { mapActions } from 'pinia';
import { useAuthStore } from '@/stores';

export default {
    components: {
        TextInput,
        AuthButton,
        AuthLink
    },

    data () {
        return {
            username: '',
            passowrd: '',
            email: ''
        }
    },

    methods: {
        ...mapActions(useAuthStore, ['signup']),

        async signUp() {
            try {
                await this.signup(this.username, this.email, this.passowrd);
            } catch (error) {
                console.log('signup error', error)
            }
        }
    }
}
</script>

<style scoped>

</style>
  