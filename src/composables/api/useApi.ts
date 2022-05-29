import axios from '@/lib/axios'

export default function useApi(entity = '') {
    const entities = entity + 's'

    const getItems = (variables: any) =>
        axios.get(`${entities}`, { params: variables })

    const getItem = (id: number | string) => axios.get(`/${entities}/${id}`)

    const addItem = (data: any) => axios.post(`/${entities}`, { ...data })

    const updateItem = (config: any) =>
        axios.put(`${entities}/${config.id}`, { ...config.data })

    const request = (config: any) =>
        axios({
            url: config.url,
            ...(config.data && { data: config.data }),
            ...(config.variables && { params: config.variables }),
            method: config.method,
        })

    return { getItems, getItem, addItem, updateItem, request }
}
