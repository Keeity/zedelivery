import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';
import SigninPage from '../pages/Signin';
import SignupPage from '../pages/Signup';
import HomePage from '../pages/Home';

function RoutesComponent() {

    // const { isAuthenticated } = useAuth()
    const isAuthenticated = false

           function loginRedirect(component) {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />
        }
         return component
    }

    return (
        // isAuthenticated
        <Routes>
            <Route path='/login' element={loginRedirect(<SigninPage/>)} />
            <Route path='/cadastro' element={loginRedirect(<SignupPage/>)} />

            {isAuthenticated ? (
                <>
                    <Route path='/' Component={HomePage} />
                    <Route path='/home' Component={HomePage} />
            <Route path='/login' element={loginRedirect(<SigninPage/>)} />
            <Route path='/cadastro' element={loginRedirect(<SignupPage/>)} />
                </>
            ) : (
                <Route path='*' element={<Navigate replace to='/login' />} />
            )}

            {/* /nao-existente */}
            {/* <Route path='*' Component={App} /> */}
        </Routes>
    )
} 

export default RoutesComponent