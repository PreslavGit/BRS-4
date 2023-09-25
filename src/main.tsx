import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import { LoginForm } from './Components/LoginForm.tsx';

const BASE_PATH = '/BRS-4'

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />
	},
	{
		path: BASE_PATH + '/login',
		element: <LoginForm />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
