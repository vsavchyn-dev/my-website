import './globals.css'
import MainNav from './components/Navbar'
import { Orbitron } from 'next/font/google'
const font = Orbitron({ weight: '600', subsets: ['latin'] })

export const metadata = {
  title: 'Vladyslav Savchyn WebPage',
  description: 'Made with love by V.S.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MainNav />
        {children}
      </body>
    </html>
  )
}
