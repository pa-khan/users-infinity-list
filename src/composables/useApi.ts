const baseUrl = new URL(import.meta.env.VITE_API_URL)
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

/**
 * Преобразование строки к url
 * @type URL
 * @param path - относительный путь
 * @param query - опциональные query параметры
 */
function buildUrl(path: string, query?: api.QueryParams): URL {
    const url = new URL(path, baseUrl)

    if (query) {
        for (const [key, value] of Object.entries(query)) {
            url.searchParams.append(key, value.toString())
        }
    }

    return url
}

/**
 * Клиент-комозиция для взаимодействия с внешним Api
 */
function useApi() {
    /**
     * Параметры по умолчанию для списков
     */
    const defaultGetListParams: api.GetListParams = {
        results: 10,
        page: 1
    }

    /**
     * Служит для взаимодействия по типу запроса "GET"
     * @param path - относительный путь
     * @param query - опциональные query параметры
     */
    async function get(path: string = '', query?: api.QueryParams) {
        const url = buildUrl(path, query)
        const response = await fetch(url, { method: 'GET', headers })

        if (response.status < 300) {
            return await response.json()
        }

        return Promise.reject(response.status)
    }

    return {
        defaultGetListParams,
        get
    }
}

export {
    useApi
}