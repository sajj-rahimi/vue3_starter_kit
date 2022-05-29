<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Schema, Form } from '@/types/components/QFormUi'
import useForm from '@/composables/form/useForm'

interface PropType {
    schema: Schema
    request: (form: Form) => Promise<any>
    values: any
}
const props = withDefaults(defineProps<PropType>(), {
    schema: {},
    request: () => Promise.resolve(null),
    values: {},
})
const { createForm, fillForm, beforeSubmitFormatter } = useForm()

const form = ref<Form>({})
const defaultTheme = ref('cyan-8' as string)
const handleSubmit = () => {
    const formattedData = beforeSubmitFormatter(props.schema, form.value)
}

watch(
    () => props.schema,
    (schema: Schema) => {
        form.value = createForm(schema)
    },
    { immediate: true, deep: true }
)
watch(
    () => props.values,
    (values: Form) => {
        form.value = fillForm(props.schema, values)
    },
    { immediate: true, deep: true }
)
watch(
    form,
    (form: Form) => {
        console.log('submitted', form)
    },
    { immediate: true, deep: true }
)
</script>

<template>
    <q-form @submit="handleSubmit">
        <div class="row">
            <div v-if="props.schema.title" class="col-12 q-pa-sm">
                <h6 class="q-my-none">{{ props.schema.title }}</h6>
            </div>
            <div
                v-for="(field, index) in props.schema.fields"
                :key="index"
                :class="[
                    'row column',
                    `col-sm-${field.size || props.schema.defaultSize || '6'}`,
                    'col-12',
                    'q-my-md',
                    'q-px-md',
                ]"
            >
                <p :class="`${field.name}__title q-ma-none q-pb-sm`">
                    {{ field.title }}
                </p>
                <div :class="[`${field.name}__field`]">
                    <q-input
                        v-if="field.type === 'input'"
                        v-model="form[field.name]"
                        :color="props.schema.theme"
                        :label-color="props.schema.theme || defaultTheme"
                        v-bind="{
                            ...(field.attrs || {}),
                        }"
                    ></q-input>
                    <q-select
                        v-if="field.type === 'select'"
                        v-model="form[field.name]"
                        :color="props.schema.theme"
                        :label-color="props.schema.theme || defaultTheme"
                        v-bind="{
                            ...(field.attrs || {}),
                        }"
                    ></q-select>
                    <q-checkbox
                        v-if="field.type === 'checkbox'"
                        v-model="form[field.name]"
                        :color="props.schema.theme"
                        :label-color="props.schema.theme || defaultTheme"
                        v-bind="{
                            ...(field.attrs || {}),
                        }"
                    ></q-checkbox>
                </div>
            </div>

            <!-- <q-file></q-file>
            <q-radio></q-radio> -->
            <!-- <q-toggle></q-toggle> -->
            <!-- <q-option-group ></q-option-group>
            -->
        </div>
        <div class="row justify-end">
            <q-btn type="submit" :color="props.schema.theme || defaultTheme">{{
                'ثبت'
            }}</q-btn>
        </div>
    </q-form>
</template>
