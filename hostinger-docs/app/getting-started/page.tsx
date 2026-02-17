export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Getting started
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-zinc-700">
          This guide gives you a high‑level overview of how to get up and
          running with CloudOne AI.
        </p>
        <ol className="mt-6 space-y-3 text-sm text-zinc-800">
          <li>
            <span className="font-medium">1. Create your account.</span> Sign
            up on the CloudOne AI website and open your dashboard.
          </li>
          <li>
            <span className="font-medium">2. Configure an AI assistant.</span>{" "}
            Define the goal, prompt, and personality of your assistant and
            choose a voice.
          </li>
          <li>
            <span className="font-medium">3. Attach a phone number.</span>{" "}
            Provision a number for outbound campaigns or inbound routing.
          </li>
          <li>
            <span className="font-medium">4. Test calls.</span> Make a few test
            calls to validate the flows before going live with customers.
          </li>
        </ol>
      </main>
    </div>
  );
}

