import Link from "next/link";

export const metadata = {
  title: "SMS Opt-In Consent | NIB Consulting",
  description: "Learn how customers opt in to receive SMS messages from NIB Consulting and our salon clients.",
};

export default function SmsOptInPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-[0.2em] font-sans mb-4">
            Compliance
          </span>
          <h1
            className="text-[#1a1a1a] text-4xl sm:text-5xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SMS Opt-In Consent
          </h1>
          <div className="h-px bg-gold/20 w-full" />
        </div>

        {/* How customers opt in */}
        <section className="mb-10">
          <h2
            className="text-[#1a1a1a] text-xl mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How Customers Opt In
          </h2>
          <p className="text-[#4a4a4a] font-sans text-base leading-relaxed">
            Customers can opt in to receive SMS messages from a salon or appointment-based
            business by entering their phone number through the business&apos;s website
            contact form, online booking form, or intake form. Customers may also opt in
            by directly messaging the business.
          </p>
          <p className="text-[#4a4a4a] font-sans text-base leading-relaxed mt-4">
            Consent is always explicit and voluntary. No phone number is enrolled in SMS
            communications without the customer actively submitting their information and
            agreeing to receive messages.
          </p>
        </section>

        {/* Types of messages */}
        <section className="mb-10">
          <h2
            className="text-[#1a1a1a] text-xl mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Types of Messages
          </h2>
          <p className="text-[#4a4a4a] font-sans text-base leading-relaxed mb-3">
            Once a customer opts in, they may receive SMS messages related to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#4a4a4a] font-sans text-base leading-relaxed">
            <li>Appointment scheduling and booking support</li>
            <li>Appointment confirmations</li>
            <li>Appointment reminders</li>
            <li>Customer service messages related to appointment requests</li>
          </ul>
        </section>

        {/* Compliance notice */}
        <section className="mb-10 bg-forest-dark rounded-xl px-6 py-5">
          <p className="text-cream/80 font-sans text-sm leading-relaxed">
            Message frequency may vary. Message and data rates may apply. Reply{" "}
            <strong className="text-cream">STOP</strong> to unsubscribe. Reply{" "}
            <strong className="text-cream">HELP</strong> for help.
          </p>
          <p className="text-cream/80 font-sans text-sm leading-relaxed mt-3">
            SMS opt-in consent and phone numbers collected for SMS purposes will not be
            shared with third parties or affiliates for marketing purposes.
          </p>
        </section>

        {/* Demo opt-in form */}
        <section className="mb-10">
          <h2
            className="text-[#1a1a1a] text-xl mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Example Opt-In Form
          </h2>
          <p className="text-[#4a4a4a] font-sans text-sm mb-6">
            Below is a representative example of how customer consent is collected before
            any SMS messages are sent.
          </p>

          <div className="bg-white border border-gold/20 rounded-xl p-6 sm:p-8 space-y-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1a1a1a] text-sm font-semibold font-sans">Full Name</label>
              <input
                type="text"
                disabled
                placeholder="Jane Smith"
                className="border border-[#d4cfc0] rounded-lg px-4 py-2.5 text-sm font-sans text-[#4a4a4a] bg-[#faf9f5] cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1a1a1a] text-sm font-semibold font-sans">Phone Number</label>
              <input
                type="tel"
                disabled
                placeholder="+1 (555) 000-0000"
                className="border border-[#d4cfc0] rounded-lg px-4 py-2.5 text-sm font-sans text-[#4a4a4a] bg-[#faf9f5] cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1a1a1a] text-sm font-semibold font-sans">Email Address</label>
              <input
                type="email"
                disabled
                placeholder="jane@example.com"
                className="border border-[#d4cfc0] rounded-lg px-4 py-2.5 text-sm font-sans text-[#4a4a4a] bg-[#faf9f5] cursor-not-allowed"
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                disabled
                defaultChecked={false}
                className="mt-0.5 shrink-0 w-4 h-4 accent-gold cursor-not-allowed"
              />
              <label className="text-[#4a4a4a] font-sans text-sm leading-relaxed">
                I agree to receive SMS messages from NIB-Consulting and its salon clients
                related to appointment scheduling, appointment confirmations, appointment
                reminders, booking support, and customer service. Message frequency may
                vary. Message and data rates may apply. Reply{" "}
                <strong>STOP</strong> to unsubscribe. Reply <strong>HELP</strong> for help.
              </label>
            </div>

            <button
              disabled
              className="w-full bg-gold/50 text-forest-dark font-semibold text-sm py-3 rounded-full font-sans cursor-not-allowed"
            >
              Submit
            </button>

            <p className="text-[#4a4a4a]/60 font-sans text-xs text-center leading-relaxed">
              This example form demonstrates how SMS consent is collected before customers
              receive text messages.
            </p>
          </div>
        </section>

        {/* Bottom links */}
        <div className="border-t border-gold/20 pt-6 flex gap-5 text-sm font-sans">
          <Link href="#" className="text-[#4a4a4a] hover:text-gold transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="#" className="text-[#4a4a4a] hover:text-gold transition-colors duration-200">
            Terms of Service
          </Link>
        </div>

      </div>
    </main>
  );
}
