export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            CloudOne AI Docs
          </span>
          <nav className="flex gap-4 text-sm font-medium text-zinc-600">
            <a href="/" className="hover:text-zinc-900">
              Home
            </a>
            <a href="/getting-started" className="hover:text-zinc-900">
              Getting started
            </a>
            <a href="/platform" className="hover:text-zinc-900">
              Platform guide
            </a>
            <a href="/api" className="hover:text-zinc-900">
              API reference
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
        <section className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            Automate phone calls with AI
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-zinc-700">
            Welcome to the CloudOne AI documentation hub. Whether you're a
            product owner, marketer, or developer, these guides will help you
            build, launch, and scale AI-powered voice experiences.
          </p>
          <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
            Need help getting started? Start with the{" "}
            <a
              href="/getting-started"
              className="font-semibold underline underline-offset-2"
            >
              core concepts guide
            </a>{" "}
            or{" "}
            <a
              href="https://cloudone-ai.com/contact"
              className="font-semibold underline underline-offset-2"
            >
              contact support
            </a>
            .
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            Get started in minutes
          </h2>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>
              <span className="font-medium">1. Sign up on CloudOne AI.</span>{" "}
              Create your free account and access your dashboard.
            </li>
            <li>
              <span className="font-medium">2. Create your first AI assistant.</span>{" "}
              Define the prompt, choose a voice, and connect any tools you need.
            </li>
            <li>
              <span className="font-medium">
                3. Start making and receiving calls.
              </span>{" "}
              Attach a phone number, launch a campaign, or route inbound calls
              to your assistant.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            Explore the docs
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <a
              href="/platform"
              className="rounded-lg border border-zinc-200 bg-white p-4 text-sm shadow-sm transition hover:border-zinc-400"
            >
              <h3 className="font-semibold">Platform guide</h3>
              <p className="mt-1 text-zinc-700">
                Learn the core concepts of CloudOne AI, including AI assistants,
                phone numbers, and call management.
              </p>
            </a>
            <a
              href="/automation"
              className="rounded-lg border border-zinc-200 bg-white p-4 text-sm shadow-sm transition hover:border-zinc-400"
            >
              <h3 className="font-semibold">No‑code automation</h3>
              <p className="mt-1 text-zinc-700">
                Build powerful automation workflows without writing code using
                our visual editor.
              </p>
            </a>
            <a
              href="/api"
              className="rounded-lg border border-zinc-200 bg-white p-4 text-sm shadow-sm transition hover:border-zinc-400"
            >
              <h3 className="font-semibold">API reference</h3>
              <p className="mt-1 text-zinc-700">
                Integrate CloudOne AI programmatically with our REST API and
                webhooks.
              </p>
            </a>
            <a
              href="/releases"
              className="rounded-lg border border-zinc-200 bg-white p-4 text-sm shadow-sm transition hover:border-zinc-400 md:col-span-3"
            >
              <h3 className="font-semibold">Product updates</h3>
              <p className="mt-1 text-zinc-700">
                See what's new — follow the latest features, improvements, and
                announcements.
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
