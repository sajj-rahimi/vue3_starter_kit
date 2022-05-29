export const required = (val: string): boolean | string =>
    (val && val.split('').length > 0) || 'مقدار ضروری است'

export const number = (val: string): boolean | string =>
    /^\d+$/.test(val) || 'مقدار باید عددی باشد'

export const email = (val: string): boolean | string =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(val) ||
    'ایمیل صحیح نیست'

export const url = (val: string): boolean | string =>
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        val
    ) || 'آدرس معتبر نیست'
