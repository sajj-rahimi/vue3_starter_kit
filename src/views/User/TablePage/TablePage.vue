<script setup lang="ts">
import QDataTable from '@/components/QDataTable/QDataTable.vue'
import schema from './userTableSchema'
import { getUsers } from '@/api/TablePage'
</script>

<template>
    <div>
        <q-data-table
            :schema="schema"
            :request="getUsers"
            :title="'لیست کاربران'"
        />
    </div>
</template>

<style scoped></style>
