import Link from "next/link"

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About", href: "#hero" },
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Insights", href: "#insights" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
              <span className="rounded-md bg-foreground px-2 py-1 text-xs font-medium uppercase text-background">MG</span>
              <span>MGTech</span>
            </div>
            <p className="max-w-sm text-sm text-foreground/70">
              Enterprise-grade technology partners delivering resilient platforms, performance, and clarity for modern teams.
            </p>
            <Link
              href="mailto:hello@mgtech.com"
              className="inline-flex text-sm font-semibold text-foreground underline-offset-4 transition hover:text-foreground/80 hover:underline"
            >
              hello@mgtech.com
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-foreground/80 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                  {column.title}
                </p>
                <div className="space-y-2">
                  {column.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block transition hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} MGTech. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="transition hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="transition hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
