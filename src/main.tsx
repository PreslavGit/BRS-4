import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import { LoginForm } from './Components/LoginForm.tsx';
import { Layout } from './Components/Layout.tsx';
import { Policies } from './Components/Tabs/Policies.tsx';
import { Clients } from './Components/Tabs/Clients.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='*' element={<ErrorPage />} />
			<Route path='login' element={<LoginForm />} />

			<Route path='/' element={<Layout />}>
				<Route path='policies' element={<Policies />}/>
				<Route path='clients' element={<Clients />}/>
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
