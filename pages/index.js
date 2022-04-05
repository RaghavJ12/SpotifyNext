import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../Components/Sidebar'
import Center from '../Components/Center'

export default function Home(){
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Welcome to SpotifyNext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
            <Sidebar />
            <Center />
      </main>
      <div className=""></div>
    </div>
  )
}
