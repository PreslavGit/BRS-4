import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import { LoginForm } from './Components/LoginForm.tsx';
import { Layout } from './Components/Layout.tsx';
import { Policies } from './Components/Tabs/Policies/Policies.tsx';
import { Clients } from './Components/Tabs/Clients/Clients.tsx';
import { Companies } from './Components/Tabs/Companies/Companies.tsx';
import { ManageForm } from './Components/ManageForm.tsx';
import { Company } from './Components/Tabs/Companies/Companies.ts';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='*' element={<ErrorPage />} />
			<Route path='login' element={<LoginForm />} />

			<Route path='/' element={<Layout />}>
				<Route path='companies' element={<Companies />} />
				<Route path='policies' element={<Policies />} />
				<Route path='clients' element={<Clients />} />
				<Route path='form' element={<ManageForm Entity={Company} labels={{INS_COMPANY_ID: 'ID', INS_COMPANY_NAME: 'Име', INS_COMPANY_ADDR: 'Адрес', 
					INS_COMPANY_BULSTAT: 'БУЛСТАТ', INS_COMPANY_CONTACT: 'Контакт', INS_COMPANY_TEL: 'Телефон'}} />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
