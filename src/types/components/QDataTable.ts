interface Column {
    name: string
    field: string | ((row: any) => any)
    required?: boolean
    label?: string
    align?: string
    format?: (val: any, row: any) => any
    sortable?: boolean
    sort?: (a: any, b: any, rowA: any, rowB: any) => Number
}
interface Filter {
    name: string
    required: boolean
    label: string
    align: string
    field: string | ((row: any) => any)
    format: (val: any) => any
    sortable: boolean
}

interface Schema {
    filters: Array<Column>
    columns: Array<Column>
}

export { Schema }
