type props = {
    name: string
    label: string
    setForm: React.SetStateAction<any>
    form: any
    classNames?: string[]
    type?: 'text' | 'password' | 'number'
}

export function Input({ name, label, form, setForm, classNames, type = 'text' }: props){
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} value={form[name]} 
                onChange={(e) => setForm({...form, [name]: e.target.value })} 
                name={name} id={name} 
                className={`p-2 ${classNames}`}/>
        </>
    )
}