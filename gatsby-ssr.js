/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { renderStatic } from '@uifabric/merge-styles/lib/server'
import { renderToString } from 'react-dom/server'
import React from 'react'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { html, css } = renderStatic(() => {
    return renderToString(bodyComponent)
  })

  replaceBodyHTMLString(html)

  setHeadComponents([<style dangerouslySetInnerHTML={{ __html: css }} />])
}
