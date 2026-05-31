import Link from "next/link";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

export default function ReactivationArticle() {
  return (
    <main>
      {/* Article */}
      <div className="bg-cream min-h-screen pt-32 pb-20">
        <div className="max-w-[680px] mx-auto px-6">

          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="text-gold text-sm font-sans hover:text-gold-light transition-colors duration-200"
            >
              ← Back to Blog
            </Link>
            <span className="inline-block border border-gold text-gold text-xs font-sans uppercase tracking-wide px-3 py-1 rounded-full">
              Client Retention
            </span>
          </div>

          <h1
            className="text-2xl sm:text-4xl text-[#1a1a1a] leading-tight mt-4 max-w-2xl"
            style={{ fontFamily: "var(--font-dm-serif), 'DM Serif Display', serif" }}
          >
            The Most Valuable Clients You&apos;re Ignoring Are Already in Your Database
          </h1>

          <p className="text-[#4a4a4a] text-sm font-sans mt-3">
            By Akhil Uchil · March 14, 2026 · 5 min read
          </p>

          <hr className="border-t border-gold/20 my-8" />

          <div className="text-[#1a1a1a] text-lg font-sans leading-relaxed">
            <p>
              Every appointment-based business owner I talk to says the same thing: they need more clients. More leads. More bookings coming in.
            </p>
            <p className="mt-6">
              But when I ask them when they last reached out to their past clients, the answer is almost always the same. Never. Or maybe once, by accident.
            </p>
            <p className="mt-6">
              Here is the thing nobody tells you: the hardest part of getting a new client is already done with your past ones. They found you. They trusted you enough to book. They showed up. They had a good experience. And then they disappeared — not because they found someone better, but because life got busy and nobody reached out.
            </p>
            <p className="mt-6">
              That is not a client acquisition problem. That is a reactivation problem.
            </p>
            <p className="mt-6">
              The average appointment-based business has hundreds of past clients sitting in a database, a booking system, or a spreadsheet somewhere. Most of them have not been contacted in months. Some in years. And yet these are the warmest leads you will ever have access to — people who already know your quality, already trust your name, and already know where to find you.
            </p>
            <p className="mt-6">
              The math is simple. If you have 200 past clients and even 15% of them rebook after a single outreach, that is 30 bookings you did not have to advertise for. At an average appointment value of $80, that is $2,400 from one message campaign. One.
            </p>
            <p className="mt-6">
              The reason most businesses never do this is not laziness. It is that nobody has a system for it. The idea of going through a client list and manually sending messages to hundreds of people is exhausting before it even starts. So it never happens.
            </p>
            <p className="mt-6">
              That is exactly what reactivation automation solves. A well-timed message — sent automatically when a client has not booked in 60 or 90 days — does not feel like spam. It feels like a business that remembers them. Something as simple as: &ldquo;We haven&apos;t seen you in a while. We have some availability next week if you&apos;d like to come back&rdquo; works because it is personal, relevant, and low pressure.
            </p>
            <p className="mt-6">
              The clients who were going to come back anyway will book immediately. Some who had drifted will be reminded you exist. A small percentage will not respond. But none of them cost you anything to reach.
            </p>
            <p className="mt-6">
              The biggest mistake I see is businesses spending money on ads to find new clients when the revenue they need is already sitting in their own database, untouched.
            </p>
            <p className="mt-6">
              Your next booking is not out there somewhere waiting to discover you. It is a past client who just hasn&apos;t heard from you in a while.
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
