import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import WelfareApplicationForm from "@/components/WelfareApplicationForm";
import { COMMUNITY_REGISTRATION_FEE, WELFARE_CONTRIBUTION, JOINING_TOTAL } from "@/constants/welfare";
import { EMAIL } from "@/constants/contact";

export default function WelfareApplyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Welfare Fund Application | Mulembe Community NSW";
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <header className="border-b border-[#e5e1d8] bg-white print:hidden">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b75a]">
            <img src={`${import.meta.env.BASE_URL}lcia-logo.jpg`} alt="" className="h-12 w-12 object-contain" />
            <span className="text-sm font-bold leading-5 text-[#17201b] sm:text-base">
              Mulembe Community<span className="block text-xs font-medium text-gray-500">NSW Incorporated</span>
            </span>
          </Link>
          <Link to="/" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-[#0f2c20] hover:bg-[#f6f2ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b75a]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to website
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-0.5 w-8 bg-community-warm" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-community-warm">WELFARE FUND</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] tracking-tight text-[#17201b]">
            Welfare membership <span className="italic font-semibold text-[#0f2c20]">application</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
            Complete this form to join the Welfare Fund. All information is kept confidential. After you submit, you'll pay
            your joining contribution online.
          </p>
          <div className="mt-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl bg-white px-4 py-3 text-sm text-[#17201b] border border-[#e5e1d8]">
            <span>Community registration fee <strong>${COMMUNITY_REGISTRATION_FEE}</strong></span>
            <span className="text-gray-300">+</span>
            <span>Welfare contribution <strong>${WELFARE_CONTRIBUTION}</strong></span>
            <span className="text-gray-300">=</span>
            <span className="font-bold text-[#0f2c20]">${JOINING_TOTAL} AUD</span>
          </div>
        </div>
        <WelfareApplicationForm />
      </main>

      <footer className="border-t border-[#e5e1d8] bg-white px-4 py-8 text-center text-sm text-gray-500 print:hidden">
        <p>Need help with your application?</p>
        <a href={`mailto:${EMAIL}`} className="mt-2 inline-block break-all text-[#0f2c20] underline underline-offset-4">{EMAIL}</a>
      </footer>
    </div>
  );
}
