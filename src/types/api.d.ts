declare module api {
    type QueryParam = string | number | boolean
    interface QueryParams {
        [key: string]: QueryParam | (QueryParam)[]
    }

    interface Response<T, E = Meta> {
        results: T,
        info?: E
    }

    interface Meta {
        seed: string
        results: number
        page: number
        version: number
    }

    interface GetListParams {
        results: number
        page: number
    }
}