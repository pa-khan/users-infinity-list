import {useApi} from '@/composables/useApi.ts';

const {get, defaultGetListParams} = useApi()

/**
 * Композиция для взаимодействия с пользователями
 */
export default function useUsers() {
    /**
     * Получение списка пользователей по сети
     * @param params - параметры для смещения списка при загрузке
     */
    async function getList(params?: Partial<api.GetListParams>): Promise<api.Response<users.User[]>> {
        return get('', {
            ...defaultGetListParams,
            ...params,
            inc: 'picture,email,name,id'
        })
    }

    return {
        getList
    }
}