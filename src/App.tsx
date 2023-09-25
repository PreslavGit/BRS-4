import './App.css'
import { HttpAdapter } from './HttpAdapter'

function App() {
  
	async function handleLogin(e: Event | undefined) {
		e?.preventDefault()
		const username = document.getElementById('username').value;
  		const password = document.getElementById('password').value;
		HttpAdapter.POST('/login', { username: username, password: password})
	}

	return (
		<>
			<form className='flex-col flex gap-2 m-auto p-4 border-slate-400 border-2 rounded-xl'>
				<label htmlFor="username">Име</label>
				<input type="text" name="username" id="username" />
				<label htmlFor="password">Парола</label>
				<input type="text" name="password" id="password" />
				<button type="submit" className='bg-black rounded-lg mt-6' onClick={() => handleLogin(event)}>Login</button>
			</form>
		</>
	)
}

export default App
