import { showSnackbar } from "./Snackbar";

export const API_URL = 'http://p48-preview.runhosting.com/unssinsurance.atwebpages.com'

function handleError(e: Error) {
    console.error(e);
    showSnackbar('Възникна грешка', 'Error')
}

export async function GET<T>(url: string, redir?: () => void, fePath?: string) {
    return fetch(API_URL + url, { credentials: 'include', headers: {'X-FRONTEND-URL': fePath ?? window.location.href } })
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

export async function POST<T>(url: string, data: any, redir?: any) {
    return fetch(API_URL + url, {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {'X-FRONTEND-URL': window.location.href }
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

export async function PUT<T>(url: string, data: any, redir?: any) {
    return fetch(API_URL + url, {
        method: 'PUT',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {'X-FRONTEND-URL': window.location.href }
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

export async function DELETE(url: string, redir?: any) {
    return fetch(API_URL + url, {
        method: 'DELETE',
        headers: {'X-FRONTEND-URL': window.location.href }
    })
        .then(() => {
            showSnackbar()
            if (redir) redir()
        })
        .catch(e => handleError(e))
}