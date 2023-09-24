import './App.css'

function App() {
  const DOMAIN = 'https://brockerDomain-4.com/login'

  function handleLogin(e: Event | undefined){
      e?.preventDefault()
      fetch(DOMAIN)
        .then(() => alert('Domain responded successfully'))
        .catch(() => alert('Domain responded unsuccessfully'))
  }

  return (
    <>
      <form action={DOMAIN} method="post" className='flex-col flex gap-2 m-auto p-4 border-slate-400 border-2 rounded-xl'>
        <label htmlFor="username">Име</label>
        <input type="text" name="username" id="username"/>
        <label htmlFor="password">Парола</label>
        <input type="text" name="password" id="password" />
        <button type="submit" className='bg-black rounded-lg mt-6' onClick={() => handleLogin(event)}>Login</button>
      </form>
    </>
  )
}

export default App
