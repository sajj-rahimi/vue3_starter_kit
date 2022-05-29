type Rule = (val: any) => boolean | string
type InputClass<T extends string> = { [T1 in T]: boolean }
type Option = { id?: number | string; label: string; value: any }
type Form = { [key in keyof Schema['fields']]: Schema['fields'][key] }
type functionalAttr<T extends any> = ({ vars: any, form: Form }) => T
type attr<T extends any> = T | functionalAttr<T>

interface Field {
    name: string
    size?: attr<number>
    title?: attr<string>
    defaultValue?: any
    error?: boolean
    'error-message'?: string
    loading?: attr<boolean>
    disable?: attr<boolean>
    beforeSubmitFormatter?: (val: any) => any
}

interface Input extends Field {
    type: 'input'
    attrs?: {
        inputType?:
            | 'text'
            | 'password'
            | 'textarea'
            | 'email'
            | 'search'
            | 'tel'
            | 'file'
            | 'number'
            | 'url'
            | 'time'
            | 'date'
        mask?: attr<string>
        label?: attr<string>
        filled?: attr<boolean>
        square?: attr<boolean>
        rounded?: attr<boolean>
        outlined?: attr<boolean>
        clearable?: attr<boolean>
        autofocus?: attr<boolean>
        borderless?: attr<boolean>
        standout?: attr<boolean | String>
        rules?: Array<Rule | string>
        'lazy-rules'?: boolean | 'ondemand'
        'unmasked-value'?: attr<boolean>
        'label-color'?: attr<string>
        'input-class'?: attr<string | string[] | InputClass<string>>
    }
}

interface Select extends Field {
    type: 'select'
    attrs?: {
        label?: attr<string>
        filled?: attr<boolean>
        square?: attr<boolean>
        rounded?: attr<boolean>
        outlined?: attr<boolean>
        multiple?: attr<boolean>
        borderless?: attr<boolean>
        autocomplete?: attr<string>
        options?: attr<Array<string | Option>>
        behavior?: attr<'default' | 'menu' | 'dialog'>
        rules?: Array<Rule | string>
        'lazy-rules'?: boolean | 'ondemand'
        'max-values'?: attr<number | string>
        'emit-value'?: attr<boolean>
        'options-dense'?: attr<boolean>
        'hide-dropdown-icon'?: attr<boolean>
    }
}

interface Checkbox extends Field {
    type: 'checkbox'
    attrs?: {
        label?: attr<string>
        color?: attr<string>
        rules?: Array<Rule | string>
        'lazy-rules'?: boolean | 'ondemand'
        'true-value'?: attr<any>
        'false-value'?: attr<any>
        'keep-color'?: attr<boolean>
        'checked-icon'?: attr<string>
        'unchecked-icon'?: attr<string>
    }
}

interface Schema {
    title?: string
    theme?: string
    defaultSize?: number
    showSubmitButton: boolean
    fields: Array<Input | Select | Checkbox>
}
export { Schema, Form }
