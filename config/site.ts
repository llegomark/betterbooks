import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    upload: string
    credentials: string
  }
}

export const siteConfig: SiteConfig = {
  name: "BetterBooks",
  description:
    "Ready to discover the true depths of your books? Our AI-powered platform lets you do just that.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/markllego",
    github: "https://github.com/llegomark",
    upload: "https://betterbooks.llego.dev",
    credentials: "https://betterbooks.llego.dev",
  },
}
