import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.tmdriveschool.co.uk'
  const pagesDir = path.join(process.cwd(), 'app')
  const urls: MetadataRoute.Sitemap = []

  urls.push({ url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 })

  const publicPages = ['contact', 'login', 'about', 'price', 'testimonials', 'gallery', 'terms']

  publicPages.forEach((page) => {
    urls.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: page === 'contact' ? 0.8 : 0.7,
    })
  })

  return urls
}