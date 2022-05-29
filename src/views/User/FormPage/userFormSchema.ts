import { Schema } from '@/types/components/QFormUi'
import { required } from '@/lib/validation'
const schema: Schema = {
    title: 'User Form',
    theme: 'cyan-8',
    defaultSize: 6,
    showSubmitButton: true,
    fields: [
        {
            name: 'name',
            type: 'input',
            size: 12,
            title: 'نام',

            defaultValue: 'سجاد',
            attrs: {
                'lazy-rules': true,
                rules: [required],
                label: 'نام',
            },
        },
        {
            name: 'lastname',
            type: 'input',
            size: 6,
            title: 'نام خانوداگی',
            attrs: {
                label: 'نام خانوداگی',
                rounded: true,
                outlined: true,
            },
        },
        {
            name: 'age',
            type: 'select',
            size: 6,
            title: 'سن',
            defaultValue: [],
            attrs: {
                multiple: true,
                'max-values': 3,
                'emit-value': true,
                options: [
                    { label: '29', value: 29 },
                    { label: '30', value: 30 },
                    { label: '31', value: 31 },
                ],
            },
        },
        {
            name: 'hasRule',
            type: 'checkbox',
            size: 3,
            title: 'فانون دارد',
            defaultValue: false,
            attrs: {
                label: 'فانون دارد',
            },
        },
    ],
}
export default schema
