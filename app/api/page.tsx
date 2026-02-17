export default function ApiReference() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">API reference</h1>
        <p className="mt-3 text-lg leading-relaxed text-zinc-700">
          Use the CloudOne AI HTTP API to programmatically create assistants,
          manage campaigns, and inspect call activity.
        </p>
        <div className="mt-6 rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
          <div className="mb-2 font-mono text-xs uppercase text-zinc-400">
            Example
          </div>
          <pre className="overflow-x-auto font-mono text-xs">
{`curl https://api.cloudone-ai.com/v1/assistants \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Sales follow-up assistant"
  }'`}
          </pre>
        </div>
      </main>
    </div>
  );
}

