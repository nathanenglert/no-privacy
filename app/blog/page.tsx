export const revalidate = 420

import { Metadata } from 'next'
import { parseISO, format } from 'date-fns'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ramblings.',
}

interface Post {
  title: string
  slug: string
  publishDate: string
}

export default async function BlogPage() {
  const posts: Post[] = await fetch(
    'http://localhost:3000/api/content',
  ).then((res) => res.json())

  return (
    <main>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Ramblings</h2>

          <p className="mt-4 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              slug={post.slug}
              publishDate={post.publishDate}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

function BlogCard({ title, slug, publishDate }: any) {
  const date = parseISO(publishDate)

  return (
    <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm flex items-start gap-4">
      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <time dateTime={publishDate} className="block text-xs text-gray-500">
          {format(date, 'LLLL d, yyyy')}
        </time>

        <Link href={`blog/${slug}`}>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
        </Link>

        {/* <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            Snippet
          </span>

          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            JavaScript
          </span>
        </div> */}
      </div>
    </article>
  )
}
