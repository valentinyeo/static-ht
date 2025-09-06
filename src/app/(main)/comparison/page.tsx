
// Force static generation to reduce CPU usage on Cloudflare Workers
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour instead of 5 minutes

export default function ComparisonPage() {
  return (
    <section className="module-section py-16 bg-black text-white text-center">
      <div className="module-container max-w-5xl mx-auto px-4">
        <h1 className="module-headline text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">Feature Comparison</h1>
        <p className="module-subheadline text-lg text-gray-300 mb-8">See how Hypertask compares to other project management tools</p>
        <div className="comparison-table-container w-full max-w-5xl mx-auto overflow-x-auto rounded bg-transparent border border-white/10 p-4">
          <table className="comparison-table w-full text-left text-sm">
            <thead>
              <tr>
                <th className="py-2 px-4">FEATURES & SOLUTIONS</th>
                <th className="hypertask-column py-2 px-4">HYPERTASK</th>
                <th className="py-2 px-4">TRELLO</th>
                <th className="py-2 px-4">LINEAR</th>
                <th className="py-2 px-4">ASANA</th>
                <th className="py-2 px-4">NOTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">KANBAN BOARD VIEW</td>
                <td className="hypertask-column py-2 px-4 font-bold text-purple-400">✓</td>
                <td className="py-2 px-4">✓</td>
                <td className="py-2 px-4">✓</td>
                <td className="py-2 px-4">✓</td>
                <td className="py-2 px-4">✓</td>
              </tr>
              <tr>
                <td className="py-2 px-4">ADVANCED COMMUNICATION INBOX</td>
                <td className="hypertask-column py-2 px-4 font-bold text-purple-400">✓ (Superhuman-like)</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">Basic Inbox</td>
                <td className="py-2 px-4">• (Page Comments)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">KEYBOARD SHORTCUTS FOCUS</td>
                <td className="hypertask-column py-2 px-4 font-bold text-purple-400">✓ (High)</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">✓ (High)</td>
                <td className="py-2 px-4">Moderate</td>
                <td className="py-2 px-4">Moderate</td>
              </tr>
              <tr>
                <td className="py-2 px-4">SUPERFAST LOADING TIMES</td>
                <td className="hypertask-column py-2 px-4 font-bold text-purple-400">✓</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">✓</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">•</td>
              </tr>
              <tr>
                <td className="py-2 px-4">AI TASK WRITING/GENERATION</td>
                <td className="hypertask-column py-2 px-4 font-bold text-purple-400">✓ (RAG, Contextual)</td>
                <td className="py-2 px-4">Basic</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">✓</td>
                <td className="py-2 px-4">✓ (Add-on)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">AI SUMMARIZATION</td>
                <td className="hypertask-column py-2 px-4 font-bold text-purple-400">✓ (Contextual)</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">•</td>
                <td className="py-2 px-4">✓</td>
                <td className="py-2 px-4">✓ (Add-on)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">AI COST</td>
                <td className="hypertask-column py-2 px-4">Included</td>
                <td className="py-2 px-4">Included (Basic)</td>
                <td className="py-2 px-4">N/A</td>
                <td className="py-2 px-4">Included</td>
                <td className="py-2 px-4">Add-on ($8-10/user/mo)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">MULTIPLE PROJECT VIEWS</td>
                <td className="hypertask-column py-2 px-4">• (Kanban Focus)</td>
                <td className="py-2 px-4">Limited (via Power-Ups)</td>
                <td className="py-2 px-4">Limited</td>
                <td className="py-2 px-4">✓ (List, Timeline, Gantt)</td>
                <td className="py-2 px-4">✓ (List, Calendar, Timeline)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">CUSTOM AUTOMATIONS</td>
                <td className="hypertask-column py-2 px-4">Basic (Planned)</td>
                <td className="py-2 px-4">Basic (via Butler/Power-Ups)</td>
                <td className="py-2 px-4">Basic</td>
                <td className="py-2 px-4">✓ (Workflow Builder)</td>
                <td className="py-2 px-4">Basic</td>
              </tr>
              <tr>
                <td className="py-2 px-4">REPORTING/ANALYTICS</td>
                <td className="hypertask-column py-2 px-4">Basic (Planned)</td>
                <td className="py-2 px-4">Basic (via Power-Ups)</td>
                <td className="py-2 px-4">Basic</td>
                <td className="py-2 px-4">✓ (Advanced)</td>
                <td className="py-2 px-4">Basic</td>
              </tr>
              <tr>
                <td className="py-2 px-4">PRIMARY TARGET AUDIENCE</td>
                <td className="hypertask-column py-2 px-4">PMs, Marketing, Ops (Kanban)</td>
                <td className="py-2 px-4">General</td>
                <td className="py-2 px-4">Software Dev</td>
                <td className="py-2 px-4">Enterprise, Various Depts</td>
                <td className="py-2 px-4">General (Notes, Wiki, Project)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">FLEXIBILITY VS. FOCUS</td>
                <td className="hypertask-column py-2 px-4">Focused (Kanban + Comms)</td>
                <td className="py-2 px-4">Focused (Simple Kanban)</td>
                <td className="py-2 px-4">Focused (Software Dev)</td>
                <td className="py-2 px-4">Flexible (Multiple Use Cases)</td>
                <td className="py-2 px-4">Extremely Flexible (Workspace)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
} 