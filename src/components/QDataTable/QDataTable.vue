<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { Schema } from '@/types/components/QDataTable'
interface PropType {
    schema: Schema
    request: (variables: any) => Promise<any>
    title: string
    showEdit: boolean
    showDelete: boolean
}
const props = withDefaults(defineProps<PropType>(), {
    schema: {},
    request: () => Promise.resolve(null),
    title: 'لیست',
    showEdit: true,
    showDelete: true,
})

const loading = ref(false as boolean)
const rows = ref([] as Array<any>)

const pagination = reactive({
    total: 50 as number,
    limit: 5 as number,
    limitOptions: [5, 10, 15, 20] as number[],
    page: 1 as number,
    maxPages: 6 as number,
})

const getRows = async (variables: any) => await props.request(variables)
watch(
    pagination,
    async (val) => {
        loading.value = true
        rows.value = await getRows({ limit: val.limit, page: val.page })
        loading.value = false
    },
    { immediate: true }
)
</script>

<template>
    <div class="q-pa-md">
        <q-table
            :loading="loading"
            :title="props.title"
            :rows="rows"
            :columns="props.schema.columns"
            row-key="name"
            hide-pagination
            :rows-per-page-options="[0]"
        >
            <template #top>
                <q-form> </q-form>
            </template>
            <template #header="vars">
                <q-tr>
                    <q-th
                        v-for="item in props.schema.columns"
                        :key="`${item.name}`"
                        :props="vars"
                    >
                        {{ item.label }}
                    </q-th>
                    <q-th v-if="props.showEdit" key="edit"> </q-th>
                    <q-th v-if="props.showDelete" key="delete"> </q-th>
                </q-tr>
            </template>
            <template #loading>
                <q-inner-loading showing color="cyan-8" />
            </template>
            <template #body="vars">
                <q-tr :props="vars">
                    <q-td
                        v-for="item in props.schema.columns"
                        :key="`${item.name}`"
                        :props="vars"
                    >
                        <template v-if="item.field">
                            <div v-if="typeof item.field === 'function'">
                                {{
                                    item.format
                                        ? item.format(
                                              item.field(vars.row),
                                              vars.row
                                          )
                                        : item.field(vars.row)
                                }}
                            </div>
                            <div v-else>
                                {{ vars.row[item.field] }}
                            </div>
                        </template>
                    </q-td>
                    <q-td v-if="props.showEdit" key="edit" align="left">
                        <q-btn
                            color="cyan-8"
                            icon="edit"
                            size="sm"
                            padding="5px"
                        />
                    </q-td>
                    <q-td v-if="props.showDelete" key="delete" align="left">
                        <q-btn
                            color="red-5"
                            icon="delete"
                            size="sm"
                            padding="5px"
                        />
                    </q-td>
                </q-tr>
            </template>
            <template #bottom>
                <div
                    class="q-pa-lg flex justify-between align-center"
                    style="width: 100%"
                >
                    <q-pagination
                        v-model="pagination.page"
                        color="cyan-8"
                        :max="Math.ceil(pagination.total / pagination.limit)"
                        :max-pages="pagination.maxPages"
                        boundary-links
                    />
                    <q-select
                        v-model="pagination.limit"
                        :style="{ width: '120px' }"
                        color="cyan-8"
                        filled
                        :options="pagination.limitOptions"
                        label="تعداد در صفحه"
                        dense
                    />
                </div>
            </template>
        </q-table>
    </div>
</template>

<style scoped></style>
