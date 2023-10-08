import { FormProps } from "./Components/FormInput";

export function inputsToForm(inputs: FormProps[], defaults?: Record<string, any>) {
    const result: any = {}
    inputs.forEach(i => {
        result[i.name] = defaults?.[i.name] ?? ''
    })
    return result
}

export function appendQueryParams(url: string, form: any) {
    url += `?filtered=true`
    for (const input in form) {
        if(form[input]){
            url += `&${input}=${form[input]}`
        }
    }
    return url
}

export function getId(entity: any){
    return entity[Object.keys(entity)[0]] as number
}