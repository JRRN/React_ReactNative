// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Providers(props) {
  return (
    <NextUIProvider>
      {props.children}
    </NextUIProvider>
  )
}