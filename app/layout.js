import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'beta(v-0.01)',
  description: 'Nationale Deutschsprachige Schule',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/german.png'/>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
