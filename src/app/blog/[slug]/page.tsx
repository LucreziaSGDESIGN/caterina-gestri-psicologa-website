import { Metadata } from 'next'
import Link from 'next/link'
import { formatDate, estimateReadTime } from '@/lib/utils'
import { getPost, getAllPosts } from '@/lib/blog'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

interface BlogPostProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Articolo non trovato',
      description: 'L\'articolo che cerchi non esiste',
    }
  }

  return {
    title: `${post.title} - Caterina Gestri`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Articolo non trovato</h1>
          <p className="text-neutral-600 mb-8">L'articolo che cerchi non esiste o è stato rimosso.</p>
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Torna al Blog
          </Link>
        </div>
      </div>
    )
  }

  const processedContent = await remark()
    .use(remarkHtml)
    .process(post.content)
  const htmlContent = processedContent.toString()
  const readTime = estimateReadTime(post.content)
  const allPosts = await getAllPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Back Link */}
      <div className="py-4 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-1">
            ← Torna al Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 pb-6 border-b border-neutral-200 mb-8">
            <span className="font-medium">{post.author || 'Caterina Gestri'}</span>
            <span>•</span>
            <time>{formatDate(new Date(post.date))}</time>
            <span>•</span>
            <span>{readTime} min di lettura</span>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12">Articoli Correlati</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group p-6 bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {relatedPost.description}
                  </p>
                  <span className="text-primary-600 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Leggi →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ti piacerebbe approfondire questi temi?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contattami per una consulenza iniziale gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+393381110142" className="button-primary bg-white text-primary-600 hover:bg-neutral-100">
              📞 Chiama
            </a>
            <a href="mailto:gestricaterina@gmail.com" className="button-secondary border-white text-white hover:bg-primary-600">
              📧 Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
