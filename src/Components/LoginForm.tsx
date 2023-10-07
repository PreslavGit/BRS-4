import { useState } from "react"
import { FormInput } from "./FormInput"
import { useNavigate } from "react-router-dom"
import { POST } from "../FetchWrapper"
import Stack from "@mui/joy/Stack/Stack"
import Typography from "@mui/joy/Typography/Typography"
import Card from "@mui/joy/Card/Card"
import Button from "@mui/joy/Button/Button"

export function LoginForm({ setLogged }: any) {
    const [loginForm, setLoginForm] = useState({ username: '', password: '' })
    const navigator = useNavigate()

    async function handleLogin(e: Event | undefined) {
        e?.preventDefault()
        await POST('/login/login.php', loginForm, () => {
            localStorage.setItem('logged', 'true')
	        console.log(localStorage.getItem('logged'));
            setLogged(true)
            navigator('/')
        })
    }

    return (
        <div className="loginContainer h-screen pt-[10vh]">
            <Card variant="outlined" sx={{ maxWidth: 400, margin: 'auto', filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' }}>
                <form>
                    <Stack spacing={4} sx={{ width: '60%', margin: 'auto' }} alignItems={'center'}>
                        <Typography level="h1" textAlign={'center'}>Влезте в профила си</Typography>
                        <FormInput name='username' setForm={setLoginForm} form={loginForm} label='Име' />
                        <FormInput name='password' setForm={setLoginForm} form={loginForm} label='Парола' type='password' />
                        <Button onClick={() => handleLogin(event)} sx={{ width: '45%' }}>Влизане</Button>
                    </Stack>
                </form>
            </Card>
        </div>
    )
}