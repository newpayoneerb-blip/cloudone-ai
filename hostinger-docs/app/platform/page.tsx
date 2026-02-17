export default function PlatformGuide() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Platform guide
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-zinc-700">
          The platform guide explains the main building blocks of CloudOne AI:
          assistants, phone numbers, campaigns, and automation.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-zinc-800">
          <li>
            <span className="font-medium">AI assistants</span> – reusable voice
            agents that power your inbound and outbound calls.
          </li>
          <li>
            <span className="font-medium">Phone numbers</span> – local or
            toll‑free numbers you attach to assistants and campaigns.
          </li>
          <li>
            <span className="font-medium">Campaigns</span> – batches of
            outbound calls with shared configuration and reporting.
          </li>
          <li>
            <span className="font-medium">Automation</span> – visual workflows
            that connect calls with CRMs, spreadsheets, or other tools.
          </li>
        </ul>
      </main>
    </div>
  );
}

