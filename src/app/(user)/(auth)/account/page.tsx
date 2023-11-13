'use client';

import withAuth from '@/app/hoc/with-auth';
import useAuth from '@/store/auth';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react'

const AccountPage = () => {
    const {setIsAuthenticated} = useAuth();
    const router = useRouter();

    const logout = () => {
        setIsAuthenticated();
        localStorage.removeItem('token')
        localStorage.removeItem('user');
        router.push('/')
    }

    // return (
    //     <Fragment>
    //         {isAuthenticated ? <div>
    //             <h1>AccountPage</h1>
    //             <button onClick={logout}>Logout</button>
    //         </div> : <NotFoundPage />}
    //     </Fragment>
    // )

    return (
        <Fragment>
            <div>
                <h1>AccountPage</h1>
                <button onClick={logout}>Logout</button>
            </div>
        </Fragment>
    )
}

export default withAuth(AccountPage)