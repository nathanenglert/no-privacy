export const revalidate = 420

interface Post {
  title: string
  slug: string
  content: string
}

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const posts: Post[] = await fetch(
    'http://localhost:3000/api/content',
  ).then((res) => res.json())
  const post = posts.find((post) => post.slug === params.slug)!

  return { title: post.title, description: post.content.substring(0, 200) }
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    'http://localhost:3000/api/content',
  ).then((res) => res.json())

  return posts.map((post) => {
    post.slug
  })
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch(
    'http://localhost:3000/api/content',
  ).then((res) => res.json())
  const post = posts.find((post) => post.slug === params.slug)!

  return (
    <main>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{post.title}</h2>
          <p className="mt-4 text-gray-800">{post.content}</p>
        </div>
      </div>
    </main>
  )
}
