import { medAgentBenchEntries, type OrgTone } from "@/lib/medAgentBenchLeaderboard";

const MEDAL: Record<number, string> = { 2: "🥇", 3: "🥈", 4: "🥉" };

const ORG_BADGE: Record<OrgTone, string> = {
  medisight: "bg-primary-100 text-primary-700",
  xai: "bg-slate-100 text-slate-700",
  openai: "bg-emerald-100 text-emerald-700",
  google: "bg-blue-100 text-blue-700",
  meta: "bg-purple-100 text-purple-700",
};

export function MedAgentBenchLeaderboard() {
  return (
    <div className="flex flex-1 flex-col overflow-x-auto rounded-xl border border-slate-200">
      <table className="h-full w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
              Rank
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
              Model
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
              Org
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
              Accuracy
            </th>
            <th className="hidden px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 sm:table-cell">
              Run date
            </th>
          </tr>
        </thead>
        <tbody>
          {medAgentBenchEntries.map((entry) => (
            <tr
              key={entry.rank}
              className={
                entry.isMedisight
                  ? "border-b border-slate-100 border-l-2 border-l-primary-500 bg-primary-50/60"
                  : "border-b border-slate-100 last:border-b-0"
              }
            >
              {/* Rank */}
              <td className="px-3 py-4 text-center">
                {MEDAL[entry.rank] ? (
                  <span className="text-base leading-none" aria-label={`Rank ${entry.rank}`}>
                    {MEDAL[entry.rank]}
                  </span>
                ) : (
                  <span className="text-sm font-medium text-slate-500">{entry.rank}</span>
                )}
              </td>

              {/* Model */}
              <td className="px-3 py-4">
                <span
                  className={`text-sm font-semibold ${
                    entry.isMedisight ? "text-primary-700" : "text-ink"
                  }`}
                >
                  {entry.model}
                </span>
              </td>

              {/* Organization */}
              <td className="px-3 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                    ORG_BADGE[entry.organizationTone]
                  }`}
                >
                  {entry.organization}
                </span>
              </td>

              {/* Accuracy */}
              <td className="px-3 py-4">
                <div className="flex min-w-[100px] items-center gap-2">
                  <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${(entry.accuracyValue / 100) * 100}%` }}
                      aria-hidden
                    />
                  </div>
                  <span className="text-sm font-bold text-ink">{entry.accuracyLabel}</span>
                </div>
              </td>

              {/* Run date — hidden on mobile */}
              <td className="hidden px-3 py-4 text-xs text-slate-500 sm:table-cell">
                {entry.runDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
