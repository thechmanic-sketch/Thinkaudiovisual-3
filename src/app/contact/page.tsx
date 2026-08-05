import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact & Booking | Think Audio Visual Durban Event Production",
  description:
    "Book Think Audio Visual for stage, sound, lighting or AV production in Durban and South Africa. Send your event details via WhatsApp or call +27 83 418 0085.",
};

const info = [
  { label: "Phone", value: "+27 31 811 1311", href: "tel:+27318111311" },
  { label: "WhatsApp / Cell", value: "+27 83 418 0085", href: "https://wa.me/27834180085" },
  { label: "Email", value: "admin@thinkaudiovisual.co.za", href: "mailto:admin@thinkaudiovisual.co.za" },
  { label: "Address", value: "78 Carnforth Avenue, Bonela, Durban, 4091" },
  { label: "Operating Area", value: "Durban & surrounds, available for events across South Africa" },
];

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <div className="glow left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s book your event.</h1>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="mb-2">Ready When You Are</h2>
            <p className="mb-8">Let&apos;s set the stage.</p>
            <ul className="space-y-0">
              {info.map((item) => (
                <li key={item.label} className="border-t border-[var(--border)] py-4 first:border-t-0">
                  <strong className="block text-sm text-text">{item.label}</strong>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted hover:text-accent">{item.value}</a>
                  ) : (
                    <span className="text-sm text-muted">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
