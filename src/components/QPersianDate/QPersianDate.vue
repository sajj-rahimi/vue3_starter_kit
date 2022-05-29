<script lang="ts" setup>
const persianLocale = {
    days: [
        'یکشنبه',
        'دوشنبه',
        'سه شنبه',
        'چهارشنبه',
        'پنجشنبه',
        'جمعه',
        'شنبه',
    ],
    daysShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
    months: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split(
        '_'
    ),
    monthsShort:
        'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split(
            '_'
        ),
    firstDayOfWeek: 6,
}
</script>
<template>
    <q-date calendar="persian" :locale="persianLocale"></q-date>
</template>
