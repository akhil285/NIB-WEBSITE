import Image from "next/image";

const tickerItems = [
  "Hair Salons", "Dental Clinics", "Beauty Studios", "Med Spas", "Barbershops",
  "Physiotherapy Clinics", "Nail Salons", "Wellness Centers", "Chiropractic Offices",
  "Skin Clinics", "Lash Studios", "Tattoo Studios", "Massage Therapy", "Cosmetic Clinics",
  "Fitness Studios", "Eyebrow Bars", "Pediatric Clinics", "Mental Health Practices",
  "Yoga Studios", "Aesthetic Clinics",
];

const industryImages: Record<string, string> = {
  "Hair Salons":            "/images/industries/hair_salon.jpg",
  "Dental Clinics":         "/images/industries/dental_clinic.webp",
  "Beauty Studios":         "/images/industries/beauty_studio.avif",
  "Med Spas":               "/images/industries/med_spas.avif",
  "Barbershops":            "/images/industries/barber_salon.jpg",
  "Physiotherapy Clinics":  "/images/industries/physio_therapy.jpg",
  "Nail Salons":            "/images/industries/nail_salon.webp",
  "Wellness Centers":       "/images/industries/wellness_center.jpg",
  "Chiropractic Offices":   "/images/industries/chiro_practic.jpg",
  "Skin Clinics":           "/images/industries/skin_clinic.jpg",
  "Lash Studios":           "/images/industries/lash_studio.jpg",
  "Fitness Studios":        "/images/industries/fitness_studio.webp",
  "Tattoo Studios":         "/images/industries/tattoo-studios.jpeg",
  "Massage Therapy":        "/images/industries/massage-therapy.jpeg",
  "Cosmetic Clinics":       "/images/industries/cosmetic-clinics.jpeg",
  "Eyebrow Bars":           "/images/industries/eyebrow-bars.jpeg",
  "Pediatric Clinics":      "/images/industries/pediatric-clinics.jpeg",
  "Mental Health Practices":"/images/industries/mental-health.jpeg",
  "Yoga Studios":           "/images/industries/yoga-studios.jpeg",
  "Aesthetic Clinics":      "/images/industries/aesthetic-clinics.jpeg",
};

const cardColors = [
  { bg: "#1e3828", accent: "rgba(150,108,54,0.35)" },
  { bg: "#2e543d", accent: "rgba(200,160,90,0.25)" },
  { bg: "#162e1e", accent: "rgba(150,108,54,0.4)" },
  { bg: "#253d2d", accent: "rgba(180,140,70,0.3)" },
];

export default function IndustriesTicker() {
  return (
    <div className="relative bg-forest-dark py-10 overflow-hidden ticker-wrapper">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #1e3828, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #1e3828, transparent)" }}
      />

      {/* Track */}
      <div className="ticker-track flex items-center">
        {[...tickerItems, ...tickerItems].map((item, i) => {
          const image = industryImages[item];
          const color = cardColors[i % cardColors.length];
          return (
            <div key={i} className="shrink-0 pr-4">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ width: "220px", height: "160px", background: color.bg }}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={item}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 30% 70%, ${color.accent} 0%, transparent 65%)`,
                    }}
                  />
                )}
                {/* Overlay — always present for text legibility */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Dot texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "16px 16px",
                    opacity: 0.05,
                  }}
                />
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gold/25" />
                {/* Label */}
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-cream/90 text-sm font-sans font-medium leading-snug">
                    {item}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
