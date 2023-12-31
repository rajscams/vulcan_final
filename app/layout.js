"use client"
import { RecoilRoot } from 'recoil'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <RecoilRoot>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </RecoilRoot>
    
  )
}
