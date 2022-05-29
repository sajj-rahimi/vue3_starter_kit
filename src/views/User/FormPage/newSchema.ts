import { Schema } from '@/types/components/QFormUi'
import { required } from '@/lib/validation'
const schema: Schema = {
    title: 'User ',
    theme: 'cyan-8',
    defaultSize: 6,
    showSubmitButton: true,
    fields: [
        {
            name: 'name',
            type: 'input',
            size: 12,
            title: 'نام',
            'lazy-rules': true,
            rules: [required],
            defaultValue: 'سجاد',
            attrs: {
                label: 'نام',
            },
        },
    ],
}
export default schema
