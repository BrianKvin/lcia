import { Link } from "react-router-dom";
import { Heart, Users, DollarSign, Shield, ArrowRight, Lock } from "lucide-react";
import { COMMUNITY_REGISTRATION_FEE, WELFARE_CONTRIBUTION, JOINING_TOTAL } from "@/constants/welfare";

const welfareServices = [
  {
    icon: Heart,
    title: "Bereavement Support",
    description: "Financial and emotional support during times of loss and bereavement",
  },
  {
    icon: DollarSign,
    title: "Financial Assistance",
    description: "Emergency financial support for community members in need",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Support for families during difficult times and life transitions",
  },
  {
    icon: Shield,
    title: "Community Care",
    description: "Mutual aid and support network for all community members",
  },
];

const supportProcess = [
  {
    title: "Contact Us",
    description: "Reach out through our community channels or leadership team",
  },
  {
    title: "Support Provided",
    description: "Receive the assistance you need with dignity and respect",
  },
];

const Welfare = () => (
  <section id="welfare" className="py-20 bg-white scroll-mt-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-12 lg:gap-16 items-start">
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-0.5 w-8 lg:w-10 bg-community-warm" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-community-warm">WELFARE FUND</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-[#17201b]">
            Standing together in <span className="italic font-semibold text-[#0f2c20]">times of need</span>
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            <p>
              Life in a new country brings joy and opportunity, but it can also bring challenges we never expect. In
              moments of loss, being far from home makes everything feel heavier. As a community, we believe no member
              should walk that journey alone.
            </p>
            <p>
              The Mulembe Community NSW Welfare Fund was created so that when difficult times arise, we can stand together
              in strength and compassion. Through member contributions and donations, the fund provides financial and
              emotional support to families during bereavement.
            </p>
          </div>
          <Link
            to="/welfare/apply"
            className="lg:hidden mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0f2c20] px-7 font-bold text-white hover:bg-[#1a4332] transition"
          >
            Apply to join · ${JOINING_TOTAL}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <h3 className="mt-12 mb-6 text-xs sm:text-sm font-bold tracking-[0.22em] text-[#0f2c20]">
            THIS SUPPORT CAN HELP COVER URGENT COSTS SUCH AS
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {welfareServices.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f6f2ea] text-[#0f2c20]">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold text-[#17201b]">{title}</div>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <figure className="mt-12 rounded-3xl bg-[#f6f2ea] p-6 sm:p-8">
            <div className="font-display text-6xl leading-none text-[#e0b75a]" aria-hidden="true">“</div>
            <blockquote className="-mt-4 font-display text-xl sm:text-2xl leading-snug text-[#17201b]">
              When life becomes heavy, your community will carry part of the weight with you.
            </blockquote>
            <figcaption className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Joining the Welfare Fund is not about expecting loss — it's about preparing with wisdom, unity, and love.
              Together we carry the weight, together we find strength.
            </figcaption>
          </figure>
        </div>

        <aside className="lg:sticky lg:top-28 flex flex-col gap-5">
          <div className="rounded-3xl bg-[#0f2c20] text-[#f4efe4] p-6 sm:p-8 shadow-xl">
            <div className="text-xs font-bold tracking-[0.22em] text-[#e0b75a]">JOIN THE WELFARE FUND</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-xl font-bold text-[#e0b75a]">$</span>
              <span className="font-display font-bold text-6xl leading-none text-[#e0b75a]">{JOINING_TOTAL}</span>
              <span className="ml-2 text-sm text-[#c9d3cc]">AUD, one-off</span>
            </div>
            <dl className="mt-6 space-y-3 border-t border-white/15 pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[#c9d3cc]">Community registration fee</dt>
                <dd className="font-semibold">${COMMUNITY_REGISTRATION_FEE}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#c9d3cc]">Welfare contribution</dt>
                <dd className="font-semibold">${WELFARE_CONTRIBUTION}</dd>
              </div>
            </dl>
            <Link
              to="/welfare/apply"
              className="mt-7 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e0b75a] px-6 font-bold text-[#0f2c20] hover:bg-[#ebc774] transition"
            >
              Apply now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#c9d3cc]">
              <Lock className="w-3.5 h-3.5" /> Fill in the form, then pay securely online
            </p>
          </div>

          <div className="rounded-3xl border border-[#e5e1d8] p-6 sm:p-8">
            <div className="text-xs font-bold tracking-[0.22em] text-[#0f2c20]">HOW OUR SUPPORT WORKS</div>
            <ol className="mt-5 space-y-5">
              {supportProcess.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0f2c20] font-display font-bold text-[#e0b75a]">
                    {index + 1}
                  </span>
                  <div>
                    <div className="font-semibold text-[#17201b]">{step.title}</div>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default Welfare;
