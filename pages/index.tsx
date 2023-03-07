import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Ready to discover the <br className="hidden sm:inline" />
            true depths of your books?
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Enter a new world of reading with BetterBooks. Upload your books,
            ask any question - no matter how complex - and get instant answers.
            Join us now for unparalleled insights and information.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.upload}
            className={buttonVariants({ size: "lg" })}
          >
            Upload
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.credentials}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            API Key
          </Link>
        </div>
      </section>
    </Layout>
  )
}
