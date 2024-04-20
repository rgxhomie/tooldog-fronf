<template>
  <div>
    <button @click.prevent="logOut">LOG OUT</button>

    <button @click.prevent="refresToken">REFRESH</button>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores';
import { mapActions } from 'pinia';

export default {

  methods: {
    ...mapActions(useAuthStore, ['logout', 'refresh']),
    logOut() {
      this.logout();
    },
    refresToken() {
      this.refresh();
    }
  }
}
</script>

<style scoped>
</style>
  