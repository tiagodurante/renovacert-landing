import React from "react"

export const SEO = () => {
  const seo = {
    title: 'Renova - Certificação Digital',
    description: 'Certificação Digital para empresas e pessoas físicas',
    // image: `${siteUrl}${image}`,
    // url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {/* {children} */}
    </>
  )
}