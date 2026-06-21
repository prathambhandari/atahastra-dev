import { useEffect } from 'react'

const BASE_URL = 'https://atahastra.com'
const DEFAULT_TITLE = 'Atahastra | Web Development, UI/UX Design & Mobile Apps'
const DEFAULT_DESCRIPTION =
  'Atahastra is a digital agency specializing in web development, UI/UX design, mobile apps, and no-code solutions for startups and growing brands. One team from idea to launch.'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function useSeo({ title, description, path = '/' } = {}) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE
    const resolvedDescription = description || DEFAULT_DESCRIPTION
    const url = `${BASE_URL}${path}`

    document.title = resolvedTitle

    setMeta('name', 'description', resolvedDescription)
    setMeta('property', 'og:title', resolvedTitle)
    setMeta('property', 'og:description', resolvedDescription)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', resolvedTitle)
    setMeta('name', 'twitter:description', resolvedDescription)
    setCanonical(url)
  }, [title, description, path])
}
