import axios from 'axios'


export function post( url, data= {}){
    return new Promise( (reslove, reject ) =>{
        axios.post(url, data).then(
            response => {
                reslove(response.data)
            }
            )}

        )
    }
        


