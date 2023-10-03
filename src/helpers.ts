import { FormProps } from "./Components/FormInput";

export function inputsToForm(inputs: FormProps[], defaults?: Record<string, any>) {
    const result: any = {}
    inputs.map(i => {
        Object.defineProperty(result, i.name, { value: defaults?.[i.name] ?? '' })
    })
    console.log(result);
    
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