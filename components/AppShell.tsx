"use client"

import { usePathname } from 'next/dist/client/components/navigation';
import React from 'react'
import SiteHeader from './SiteHeader';

const AppShell = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();
    const isFullscreenRoute = pathname?.startsWith('/workspace') ||pathname?.startsWith('/shared/');

    if(isFullscreenRoute) {
        return (
            <div className="h-full w-full">
                {children}
            </div>
        )
    }

  return (
    <>  
    <SiteHeader/>
    <div className="flex flex-1 flex-col  pt-18">
        {children}
    </div>
    </>
  )
}

export default AppShell