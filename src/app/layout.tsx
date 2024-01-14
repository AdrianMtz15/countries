'use client'

import './globals.css'
import type { Metadata } from 'next'
import Nav from '@components/Nav'
import { Providers } from './providers'
import { useStore } from "@src/store";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <html lang="en" className={`${darkMode ? 'dark' : ''}`}>
      <body className=''>
        <Nav/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
