import { Schema } from '@/types/components/QDataTable'
const schema: Schema = {
    filters: [],
    columns: [
        {
            name: 'name',
            required: true,
            label: 'نام',
            align: 'center',
            field: (row) => row.name,
            format: (val) => `${val} 😃`,
            sortable: true,
        },
        {
            name: 'username',
            align: 'center',
            label: 'نام کاربری',
            field: 'username',
            sortable: true,
        },
        {
            name: 'website',
            align: 'center',
            label: 'وب سایت',
            field: 'website',
            sortable: true,
        },
        {
            name: 'companyName',
            align: 'center',
            label: 'نام شرکت',
            field: 'companyName',
        },
        {
            name: 'email',
            align: 'center',
            label: 'ایمیل',
            field: 'email',
            sortable: true,
        },
    ],
}
export default schema
