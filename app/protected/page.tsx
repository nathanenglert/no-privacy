export const dynamic = 'force-dynamic'

import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Protected',
  description: 'You must be signed in.',
}

export default async function ProtectedPage() {
  const session = await getServerSession()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <main>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Protected</h2>
        </div>
      </div>
    </main>
  )
}
