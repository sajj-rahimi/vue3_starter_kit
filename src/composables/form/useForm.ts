import { Schema, Form } from '@/types/components/QFormUi'

export default function useForm() {
    const createForm = (schema: Schema) => {
        const form = {} as Form
        for (const item of schema.fields) {
            form[item.name] = item.hasOwnProperty('defaultValue')
                ? item.defaultValue
                : ''
        }
        return form
    }
    const fillForm = (schema: Schema, values: Form) => {
        const form = {} as typeof values
        if (Object.keys(values).length === 0) {
            return createForm(schema)
        }
        const schemaFieldNames = schema.fields.map((item) => item.name)
        for (const key in values) {
            if (schemaFieldNames.includes(key)) {
                form[key] = values[key]
            }
        }
        return form
    }
    const beforeSubmitFormatter = (schema: Schema, form: Form) => {
        const formattedForm = {} as typeof form
        schema.fields.forEach((item: any) => {
            formattedForm[item.name] = item.hasOwnProperty(
                'beforeSubmitFormatter'
            )
                ? item.beforeSubmitFormatter(form[item.name])
                : form[item.name]
        })
        return formattedForm
    }
    return {
        createForm,
        fillForm,
        beforeSubmitFormatter,
    }
}
