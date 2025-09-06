// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function Features2Page() {
  return (
    <>
      {/* Task Writer Section */}
      <section className="module-section py-16 bg-black text-white">
        <div className="module-container max-w-5xl mx-auto px-4">
          <h2 className="module-headline text-4xl font-bold mb-4">Task writer</h2>
          <p className="module-subheadline text-lg text-gray-300 mb-8">Teams on Hypertask do not write their own tasks. They transition to using our AI and can save 100s of hours every month.</p>
          <div className="module-gradient-container w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-8">
            <video className="module-content w-full rounded-lg" autoPlay loop muted playsInline>
              <source src="/zoom_taskwriter.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Task Writer Features Grid */}
          <div className="task-writer-features-container w-full max-w-4xl mx-auto mt-8">
            <div className="task-writer-features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="task-writer-feature-card bg-white/5 rounded-xl p-6 text-left">
                <p className="feature-text text-base text-white/90">Knows your complete board. In large boards better than your team.</p>
              </div>
              <div className="task-writer-feature-card bg-white/5 rounded-xl p-6 text-left">
                <p className="feature-text text-base text-white/90">Creates tasks on the basis of past tasks.</p>
              </div>
              <div className="task-writer-feature-card bg-white/5 rounded-xl p-6 text-left">
                <p className="feature-text text-base text-white/90">Can access the web for deep research</p>
              </div>
              <div className="task-writer-feature-card bg-white/5 rounded-xl p-6 text-left">
                <p className="feature-text text-base text-white/90">Uses custom instructions of your board to get the tickets right every time.</p>
              </div>
              <div className="task-writer-feature-card bg-white/5 rounded-xl p-6 text-left">
                <p className="feature-text text-base text-white/90">High adoption rate in Hypertask teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Custom Instructions Section */}
      <section className="module-section py-16 bg-black text-white">
        <div className="module-container max-w-5xl mx-auto px-4">
          <h2 className="module-headline text-4xl font-bold mb-4">Custom Instructions</h2>
          <p className="module-subheadline text-lg text-gray-300 mb-8">You can completely customize the AI in each board to your unique needs.</p>
          <div className="module-gradient-container w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-8">
            <video className="module-content w-full rounded-lg" autoPlay loop muted playsInline>
              <source src="/custominstructions.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
} 