'use client'

import useAuth from '@/store/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function withAuth<P>(
  Component: React.ComponentType<P>
) {
  
  const AuthComponent = (props: P) => {
    const { isAuthenticated} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated, router])

    return <Component { ...props } />;
  };

  return AuthComponent
}

export default withAuth