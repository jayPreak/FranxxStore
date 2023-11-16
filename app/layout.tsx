import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { Footer, Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FranxxStore',
  description: 'L9 FAKER HAS MY IP ADRESS PLEASE DONT @ HIM IN GENERAL ON RATIRL SERVER I BEG U',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <header>
            <Navbar />
          </header>
          <main className='main-container'>
            {children}

          </main>
          <footer>
            <Footer />
          </footer>
        </div>

      </body>
    </html>
  )
}
