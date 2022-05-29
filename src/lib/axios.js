import axiosInstance from 'axios'

/**
 * We need a vue instance to toggle the loading during request
 * or set some values like errors and authentications
 * @param vm VueInstance
 * @return {AxiosInstance}
 * @constructor
 */
const Axios = function (vm) {
    /**
     * The configuration setup for current request
     * this can change on `axios.setConfig({key: value})`
     * @cfg loader: to enable or disable the loading
     * @cfg showError: if true, an error message will show after error
     * @cfg vm: the vue instance
     */

    /**
     * Create new axios instance
     */

    const baseUrl = 'https://628d1db23df57e983edc4811.mockapi.io/mockapi/'

    const Axios = axiosInstance.create({
        baseURL: baseUrl,
        timeout: 40000,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    Axios.interceptors.request.use(
        /**
         * handle request before send
         * @param config
         * @returns {AxiosRequestConfig}
         */
        function (config) {
            return config
        },
        /**
         * handle request failure before send
         * @param error
         * @returns {Promise.<*>}
         */
        function (error) {
            return Promise.reject(error)
        }
    )

    Axios.interceptors.response.use(
        /**
         * after request response
         * the request was successful
         * and we can parse response
         * @param response
         * @returns {any}
         */
        function (response) {
            const { data } = response
            return data
        },
        /**
         * after request response
         * the request failed
         * we can handle the error
         * @returns {Promise.<*>}
         */
        function (error) {
            return Promise.reject(error)
        }
    )

    return Axios
}

const ERRORS = {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CSRF: 419,
    VALIDATION: 422,
    SERVER: 500,
}

const handleErrors = (error) => {
    return error
}

export default Axios()
