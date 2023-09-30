import { useState } from "react"
import { FormInput } from "./Input"
import { useNavigate } from "react-router-dom"
import { POST } from "../FetchWrapper"
import Stack from "@mui/joy/Stack/Stack"
import Typography from "@mui/joy/Typography/Typography"
import Card from "@mui/joy/Card/Card"
import Button from "@mui/joy/Button/Button"

export function LoginForm() {
    const [loginForm, setLoginForm] = useState({ username: '', password: '' })
    const navigator = useNavigate()

    async function handleLogin(e: Event | undefined) {
        e?.preventDefault()
        await POST('/login/login.php', loginForm, () => navigator('/'))
    }

    return (
        <div className="loginContainer h-screen pt-[10vh]">
            <Card variant="outlined" sx={{ maxWidth: 400, margin: 'auto' }}>
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