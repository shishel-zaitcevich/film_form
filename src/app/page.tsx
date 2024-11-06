'use client'

import { FilmForm } from './components/FilmForm'
import '../app/globals.css'

import localFont from 'next/font/local'
import { Header } from './components/Header'

const helveticaNeue = localFont({
  src: './fonts/HelveticaNeue.woff',
  variable: '--font-HelveticaNeue',
  weight: '400',
})

export default function Home() {
  return (
    <main className={helveticaNeue.variable}>
      <FilmForm />
    </main>
  )
}
