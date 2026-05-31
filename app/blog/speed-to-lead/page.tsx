import Link from "next/link";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

export default function SpeedToLeadArticle() {
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
              Lead Conversion
            </span>
          </div>

          <h1
            className="text-2xl sm:text-4xl text-[#1a1a1a] leading-tight mt-4 max-w-2xl"
            style={{ fontFamily: "var(--font-dm-serif), 'DM Serif Display', serif" }}
          >
            Why the First Business to Reply Wins the Booking
          </h1>

          <p className="text-[#4a4a4a] text-sm font-sans mt-3">
            By Akhil Uchil · April 22, 2026 · 5 min read
          </p>

          <hr className="border-t border-gold/20 my-8" />

          <div className="text-[#1a1a1a] text-lg font-sans leading-relaxed">
            <p>
              There is a study that every small business owner should read. It found that if you respond to a lead within the first five minutes, you are 100 times more likely to convert them than if you wait 30 minutes. Not twice as likely. One hundred times.
            </p>
            <p className="mt-6">
              Most appointment-based businesses respond within hours. Some within days. A few never respond at all.
            </p>
            <p className="mt-6">
              This is not a criticism. It is a structural problem. When you are with a client, you cannot be answering messages. When you are managing a team, you cannot be monitoring every inbox. When the enquiry comes in at 9pm on a Tuesday, nobody is sitting there waiting to reply.
            </p>
            <p className="mt-6">
              But the person who sent that message is not waiting either. They are searching. They might have messaged three businesses at once. Whoever replies first — clearly, warmly, and with a booking link — gets the appointment. The others get a polite &ldquo;I&apos;ve already sorted it, thanks.&rdquo;
            </p>
            <p className="mt-6">
              The speed-to-lead problem is not about effort. It is about the gap between when interest peaks and when a response arrives. Interest peaks the moment someone sends a message. It starts declining almost immediately. By the time most businesses reply, the emotional momentum is already fading.
            </p>
            <p className="mt-6">
              What makes this particularly painful is that these are warm leads. They are not cold prospects who need convincing. They already want what you offer. They reached out. The only question is whether you got back to them before their attention moved on.
            </p>
            <p className="mt-6">
              An AI receptionist changes this equation entirely. Not because it is smarter than a human response, but because it is instant. A lead sends a message at 11pm and within seconds receives a warm, professional reply that answers their question and offers a booking link. The lead books. By morning, the appointment is in the calendar.
            </p>
            <p className="mt-6">
              The business did nothing differently. The owner was asleep. But the system was working.
            </p>
            <p className="mt-6">
              Speed is not the only thing that converts a lead. Tone matters, clarity matters, the booking process matters. But none of those things get a chance if the reply takes four hours. You have to show up first before you can show up well.
            </p>
            <p className="mt-6">
              The businesses that win on enquiry conversion are not always the best at what they do. They are the fastest to respond. And right now, with AI handling first contact, fast is something any business can be — regardless of how busy the team is.
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
