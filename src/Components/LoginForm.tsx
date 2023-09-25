import { useState } from "react"
import { HttpAdapter } from "../HttpAdapter"
import { Input } from "./Input"

export function LoginForm() {
    const [loginForm, setLoginForm] = useState({ username: '', password: '' })

    async function handleLogin(e: Event | undefined) {
        e?.preventDefault()
        HttpAdapter.POST('/login', loginForm)
    }

    return (
        <div>
            <form className='flex-col flex gap-2 m-auto p-4 border-slate-400 border-2 rounded-xl items-center'>
                <Input name='username' setForm={setLoginForm} form={loginForm} label='Име' />
                <Input name='password' setForm={setLoginForm} form={loginForm} label='Парола' type='password' />
                <button type="submit" className='bg-black rounded-lg mt-6' onClick={() => handleLogin(event)}>Login</button>
            </form>
        </div>
    )
}