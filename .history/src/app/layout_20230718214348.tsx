import Header from '@/components/header'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import FirstDescription from '@/components/first-decription'
import AOS from 'aos';
import SecondDescription from '@/components/second-sedcription'
import Quote from '@/components/quote'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FirstDescription/>
        <SecondDescription/>
        <Quote/>
        <Card
        <Footer/>
        </body>
    </html>
  )
}
