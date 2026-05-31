import Link from "next/link";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

export default function GoogleReviewsArticle() {
  return (
    <main>
      {/* Article */}
      <div className="bg-cream min-h-screen pt-32 pb-20">
        <div className="max-w-[680px] mx-auto px-6">

          <Link
            href="/blog"
            className="inline-block text-gold text-sm font-sans mb-8 hover:text-gold-light transition-colors duration-200"
          >
            ← Back to Blog
          </Link>

          <span className="inline-block border border-gold text-gold text-xs font-sans uppercase tracking-wide px-3 py-1 rounded-full">
            Reviews &amp; Reputation
          </span>

          <h1
            className="text-4xl text-[#1a1a1a] leading-tight mt-4"
            style={{ fontFamily: "var(--font-dm-serif), 'DM Serif Display', serif" }}
          >
            One Extra Star on Google Is Worth More Than Any Ad You&apos;ll Ever Run
          </h1>

          <p className="text-[#4a4a4a] text-sm font-sans mt-3">
            By Akhil Uchil · May 8, 2026 · 5 min read
          </p>

          <hr className="border-t border-gold/20 my-8" />

          <div className="text-[#1a1a1a] text-lg font-sans leading-relaxed">
            <p>
              If I told you there was a way to significantly increase the number of new clients walking through your door without spending a single dollar on advertising, you would want to know what it is.
            </p>
            <p className="mt-6">
              It is your Google rating.
            </p>
            <p className="mt-6">
              Research from Harvard Business School found that a one-star increase in a business&apos;s Yelp rating led to a 5 to 9 percent increase in revenue. Similar patterns hold across Google. A business sitting at 4.2 stars and a business sitting at 4.7 stars are not close competitors in the eyes of a potential client searching locally. One feels safe. The other creates doubt.
            </p>
            <p className="mt-6">
              Most small businesses are sitting somewhere between 4.0 and 4.4. Not because their clients are unhappy, but because happy clients almost never leave reviews unprompted. The ones who do leave reviews without being asked are disproportionately the unhappy ones — because frustration is a stronger motivator than satisfaction.
            </p>
            <p className="mt-6">
              This creates a silent imbalance. Your best clients, the regulars, the ones who recommend you to their friends, the ones who have been coming back for years — they are the least likely to leave a review. Not because they do not want to. Because nobody ever asked them at the right moment.
            </p>
            <p className="mt-6">
              Timing is everything with review requests. Ask too early and the experience has not fully settled. Ask too late and the emotional peak has passed. Ask via a generic email and it gets ignored. But ask within an hour of a completed appointment, via SMS, with a direct link to your Google page — that converts.
            </p>
            <p className="mt-6">
              The message does not need to be complicated. Something like: &ldquo;Thank you for coming in today. If you have a moment, we would love to hear your feedback — it means a lot to us.&rdquo; With a link. That is it.
            </p>
            <p className="mt-6">
              Businesses that automate this process — sending a review request after every completed appointment, consistently, without relying on a staff member to remember — compound their rating over time in a way manual outreach never matches. Twenty extra reviews over three months can move a 4.2 to a 4.6. That shift changes how many people click on your listing, how many call, and how many book.
            </p>
            <p className="mt-6">
              The irony is that most businesses know reviews matter. They just never built a system to collect them. Every appointment that ends without a review request is a missed opportunity that compounds silently over months and years.
            </p>
            <p className="mt-6">
              Your clients are happy. They just need to be asked.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <section className="bg-forest-dark py-16 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2
            className="text-4xl text-cream leading-tight mb-8"
            style={{ fontFamily: "var(--font-dm-serif), 'DM Serif Display', serif" }}
          >
            Ready to stop losing revenue?
          </h2>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-forest-dark font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] font-sans text-base"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </main>
  );
}
