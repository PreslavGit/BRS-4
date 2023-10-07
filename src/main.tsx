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
import { ManageForm } from './Components/ManageForm.tsx';
import { Company } from './Components/Tabs/Companies/Companies.ts';
import { Client } from './Components/Tabs/Clients/Clients.ts';


export function App() {
	const [isLogged, setIsLogged] = useState(localStorage.getItem('logged') == 'true')

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path='*' element={<ErrorPage />} />
				<Route path='login' element={<LoginForm setLogged={setIsLogged} />} />

				<Route path='/' element={isLogged ? <Layout /> : <Navigate to='/login' />}>
					<Route path='companies' element={<Companies />} />
					<Route path='companies/add' element={
						<ManageForm Entity={Company} caption='Добавяне на компания' actionLabel='Добавяне'
							labels={{
								INS_COMPANY_ID: 'ID',
								INS_COMPANY_NAME: 'Име',
								INS_COMPANY_ADDR: 'Адрес',
								INS_COMPANY_BULSTAT: 'БУЛСТАТ',
								INS_COMPANY_CONTACT: 'Контакт',
								INS_COMPANY_TEL: 'Телефон'
							}}
						/>}
					/>
					<Route path='companies/edit/:id' element={
						<ManageForm Entity={Company} caption='Редактиране на компания' actionLabel='Редактиране'
							labels={{
								INS_COMPANY_ID: 'ID',
								INS_COMPANY_NAME: 'Име',
								INS_COMPANY_ADDR: 'Адрес',
								INS_COMPANY_BULSTAT: 'БУЛСТАТ',
								INS_COMPANY_CONTACT: 'Контакт',
								INS_COMPANY_TEL: 'Телефон'
							}}
						/>}
					/>
					<Route path='policies' element={<Policies />} />
					<Route path='clients' element={<Clients />} />
					<Route path='clients/add' element={
						<ManageForm Entity={Client} caption='Добавяне на клиент' actionLabel='Добавяне'
							labels={{
								ADRESS_TEXT: 'Адрес',
								CLIENT_EGN_BULSTAT: 'ЕГН/БУЛСТАТ',
								CLIENT_FULLNAME: 'Име',
								CLIENT_ID: 'ID',
								CLIENT_TYPE: 'Тип',
								EMAIL: 'Е-mail',
								TELEPHONE: 'Телефон',
								CLIENT_NOTE: 'Забележки'
							}}
						/>}
					/>
					<Route path='clients/edit/:id' element={
						<ManageForm Entity={Client} caption='Редактиране на клиент' actionLabel='Редактиране'
							labels={{
								ADRESS_TEXT: 'Адрес',
								CLIENT_EGN_BULSTAT: 'ЕГН/БУЛСТАТ',
								CLIENT_FULLNAME: 'Име',
								CLIENT_ID: 'ID',
								CLIENT_TYPE: 'Тип',
								EMAIL: 'Е-mail',
								TELEPHONE: 'Телефон',
								CLIENT_NOTE: 'Забележки'
							}}
						/>}
					/>
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