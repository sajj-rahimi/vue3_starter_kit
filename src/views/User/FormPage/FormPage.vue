<script setup lang="ts">
import QFormUi from '@/components/QFormUi/QFormUi.vue'
import schema from './userFormSchema'
</script>

<template>
    <div>
        <q-form-ui :schema="schema" />
    </div>
</template>

<style scoped></style>
