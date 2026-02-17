export default function Releases() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Product updates
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-zinc-700">
          This page is a simple placeholder for your public changelog. You can
          keep a timeline of important releases here.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-zinc-800">
          <li>
            <span className="font-medium">v1.0</span> – Initial public launch of
            CloudOne AI.
          </li>
        </ul>
      </main>
    </div>
  );
}

