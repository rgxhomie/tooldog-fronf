<template>
    <button
        class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 disabled:bg-indigo-400"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: ['disabled']
}
</script>

