import axios from 'axios'


export function post(url, data = {}) {
    return new Promise((reslove, reject) => {
        axios.post(url, data).then(
            response => {
                reslove(response.data)
            }
        ).catch(err => {
            reject(err)
        })

    }

    )
}


export function get(url, params = {}) {
    return new Promise((reslove, reject) => {
        axios.get(url, params).then(
            response => {
                reslove(response.data)
            }
        ).catch(err => {
            reject(err)
        })
    }

    )
}
