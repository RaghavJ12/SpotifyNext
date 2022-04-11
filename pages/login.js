import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'

export default function Login({ providers }) {
  console.log(providers)
  return (
    <div className="flex flex-col items-center min-h-screen w-full justify-center bg-black">
      <Image src="/images/logo1.png" width={50} height={50} className="mb-5" alt="" /> 
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" }
            )}
          >Login with {provider.name}</button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}