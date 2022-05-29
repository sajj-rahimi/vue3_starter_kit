import useApi from '@/composables/api/useApi'
const { getItems, getItem, addItem, updateItem } = useApi('user')

const getUsers = async (variables: any): Promise<any> =>
    await getItems(variables)

const getUser = async (id: number | string): Promise<any> => await getItem(id)

const addUser = async (data: any): Promise<any> => await addItem(data)

const updateUser = async (config: any): Promise<any> => await updateItem(config)

export { getUsers, getUser, addUser, updateUser }
