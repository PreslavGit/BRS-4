import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import { LoginForm } from './Components/LoginForm.tsx';
import { Layout } from './Components/Layout.tsx';
import { Policies } from './Components/Tabs/Policies/Policies.tsx';
import { Clients } from './Components/Tabs/Clients/Clients.tsx';
import { Companies } from './Components/Tabs/Companies/Companies.tsx';
import { ManageCompany } from './Components/Tabs/Companies/ManageCompany.tsx';
import { ManageClient } from './Components/Tabs/Clients/ManageClient.tsx';
import { Products } from './Components/Tabs/Products/Product.tsx';
import { ManageProduct } from './Components/Tabs/Products/ManageProduct.tsx';


export function App() {
	const [isLogged, setIsLogged] = useState(localStorage.getItem('logged') == 'true')

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path='*' element={<ErrorPage />} />
				<Route path='login' element={<LoginForm setLogged={setIsLogged} />} />

				<Route path='/' element={isLogged ? <Layout /> : <Navigate to='/login' />}>

					<Route path='companies' element={<Companies />} />
					<Route path='companies/add' element={<ManageCompany type='Add' />} />
					<Route path='companies/edit/:id' element={<ManageCompany type='Edit' />} />

					<Route path='products' element={<Products />} />
					<Route path='products/add' element={<ManageProduct type='Add' />} />
					<Route path='products/edit/:id' element={<ManageProduct type='Edit' />} />

					<Route path='policies' element={<Policies />} />

					<Route path='clients' element={<Clients />} />
					<Route path='clients/add' element={<ManageClient type='Add' />} />
					<Route path='clients/edit/:id' element={<ManageClient type='Edit' />} />
				</Route>
			</Route>
		)
	);

	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);