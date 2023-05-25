'use client'

import { useSession } from 'next-auth/react'

export default function AccountWelcome() {
  const { data: session, status } = useSession()

  if (status === 'unauthenticated' || !session?.user) {
    return <></>
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Welcome Back, {session.user?.name}!
      </h1>

      <p className="mt-1.5 text-sm text-gray-500">
        Your website has seen a 52% increase in traffic in the last month. Keep
        it up! 🚀
      </p>
    </div>
  )
}
