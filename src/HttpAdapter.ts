import { showSnackbar } from "./Snackbar"

export class HttpAdapter {
    static API_URL = 'https://unssinsurance.rf.gd'

    public static GET<T>(path: string) {
        return new Promise<T>((resolve, reject) => {
            fetch(this.API_URL + path)
                .then(async res => {
                    showSnackbar()
                    resolve(await res.json() as T)
                })
                .catch(e => { 
                    showSnackbar(e, 'Error')
                    reject(e)
                })
        })
    }

    public static POST<T>(path: string, data: any) {
        return new Promise<T>((resolve, reject) => {
            fetch(this.API_URL + path, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: [
                    ['Authorization', HttpAdapter.getJWT()]
                ]
            })
                .then(async res => {
                    showSnackbar()
                    resolve(await res.json() as T)
                })
                .catch(e => {
                    showSnackbar(e, 'Error')
                    reject(e)
                })
        })
    }

    private static getJWT() {
        return localStorage.getItem('jwt') ?? ''
    }
}
