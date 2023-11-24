'use client'

import Providers from "@/app/redux/reducer/providers"

export default function RootLayout({ children }) {
  return (
        <Providers>
{children}
        </Providers>
        

  )
}
