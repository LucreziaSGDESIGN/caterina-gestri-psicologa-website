/**
 * Blog utility functions
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author?: string
  tags?: string[]
  content: string
  published?: boolean
}

const blogDir = path.join(process.cwd(), 'src/content/blog')

/**
 * Get all blog posts
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '')
    const filePath = path.join(blogDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author,
      tags: data.tags || [],
      content,
      published: data.published !== false,
    }
  })

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single blog post by slug
 */
export async function getPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(blogDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    const mdPath = path.join(blogDir, `${slug}.md`)
    if (!fs.existsSync(mdPath)) {
      return null
    }
  }

  const fileContent = fs.readFileSync(
    fs.existsSync(filePath) ? filePath : path.join(blogDir, `${slug}.md`),
    'utf-8'
  )
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    author: data.author,
    tags: data.tags || [],
    content,
    published: data.published !== false,
  }
}

/**
 * Get published blog posts only
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.published !== false)
}
