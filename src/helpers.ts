import { FormProps } from "./Components/FormInput";

export function inputsToForm(inputs: FormProps[]) {
    const result: any = {}
    return inputs.map(i => {
        return result[i.name] = ''
    })
}

export function appendQueryParams(url: string, form: any) {
    let seen = false
    for (const input in form) {
        if(form[input]){
            if(seen){
                url += `&${input}=${form[input]}`
            } else {
                url += `?${input}=${form[input]}`
                seen = !seen
            }
        }
    }
    return url
}