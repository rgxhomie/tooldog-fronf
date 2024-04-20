<template>
    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        type: 'string',
        placeholder: 'string',
        modelValue: 'string'
    }
}
</script>

<style scoped>
</style>
  