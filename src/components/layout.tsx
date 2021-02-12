import React from "react"

import RSSLink from "./rss-link"
import GitHubLink from "./github-link"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen sm:text-lg break-words">
    <main>{children}</main>
    <footer className="p-8 text-center text-base">
      <div>
        Subscribe by <RSSLink>RSS</RSSLink>
      </div>
      <div className="my-4 text-center">
        <GitHubLink />
      </div>
      <div>© {new Date().getFullYear()}</div>
    </footer>
  </div>
)

export default Layout
