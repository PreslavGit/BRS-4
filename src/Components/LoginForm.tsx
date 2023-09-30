import { useState } from "react"
import { Input } from "./Input"
import { useNavigate } from "react-router-dom"
import { POST } from "../FetchWrapper"

export function LoginForm() {
    const [loginForm, setLoginForm] = useState({ username: '', password: '' })
    const navigator = useNavigate()

    async function handleLogin(e: Event | undefined) {
        e?.preventDefault()
        await POST('/login/login.php', loginForm, () => navigator('/'))
    }

    return (
        <div className="h-screen w-screen bg-slate-800 text-white pt-12">
            <form className='flex-col flex gap-2 m-auto p-4 border-slate-400 border-2 rounded-xl items-center w-[300px]'>
                <Input name='username' setForm={setLoginForm} form={loginForm} label='Име' />
                <Input name='password' setForm={setLoginForm} form={loginForm} label='Парола' type='password' />
                <button type="submit" className='bg-slate-900 px-4 py-2 rounded-lg mt-6' onClick={() => handleLogin(event)}>Login</button>
            </form>
        </div>
    )
}