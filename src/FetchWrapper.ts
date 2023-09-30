import { showSnackbar } from "./Snackbar";

export const API_URL = 'http://p48-preview.runhosting.com/unssinsurance.atwebpages.com'

function handleError(e: Error) {
    console.error(e);
    showSnackbar('Error with your request', 'Error')
}

export async function GET<T>(url: string, redir?: () => void) {
    return fetch(API_URL + url)
        .then(async res => {
            if (!res.ok) {
                throw new Error()
            }
            return await res.json()
        })
        .then(json => {
            showSnackbar()
            if (redir) redir()
            return json as T
        })
        .catch(e => handleError(e))
}

export async function POST<T>(url: string, data: any, redir?: () => void) {
    return fetch(API_URL + url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(async res => {
            if (!res.ok) {
                throw new Error()
            }
            return await res.json()
        })
        .then(json => {
            showSnackbar()
            if (redir) redir()
            return json as T
        })
        .catch(e => handleError(e))
}