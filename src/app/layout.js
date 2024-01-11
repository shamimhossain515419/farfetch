import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/share/Header/Header'
import DashboardSidebar from '@/Components/sidebar/DashboardSidebar'
import ReduxProvider from '@/Components/reduxProvider/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keep react dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header></Header>
          <div className=' flex items-start gap-2 pt-16'>

            <DashboardSidebar></DashboardSidebar>

            <div className={` w-full  min-w-[50%] p-0 m-0  `}>
              <div>
                {children}
              </div>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
