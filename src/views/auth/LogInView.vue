<template>
    <div
        class="mx-auto flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-900 to-green-900 text-white"
    >
        <form class="flex w-[30rem] flex-col space-y-10" @submit.prevent>
            <div class="text-center text-4xl font-medium">
                Log In
            </div>

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
                @click="logIn()"
                :disabled="isButtonDisabled"
            >LOG IN</AuthButton>

            <p class="text-center text-lg">
                No account?
                <RouterLink
                    to="/signup"
                >
                    <AuthLink>Sign Up</AuthLink>
                </RouterLink>
            </p>

        </form>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';

import TextInput from '@/components/auth/TextInput.vue';
import AuthButton from '@/components/auth/AuthButton.vue';
import AuthLink from '@/components/auth/AuthLink.vue';
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
            isButtonDisabled: false
        }
    },

    methods: {
        ...mapActions(useAuthStore, ['login']),

        async logIn() {

            try {
                await this.login(this.username, this.passowrd);
            } catch (error) {
                console.log({ error })
            }
        }
    }
}
</script>

<style scoped>

</style>
  