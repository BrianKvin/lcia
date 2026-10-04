import { useState } from "react";
import { ArrowUpRight, Check, Link2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LeadershipInterestForm from "@/components/LeadershipInterestForm";

export default function LeadershipInterest({ standalone = false }: { standalone?: boolean }) {
  const [shareStatus, setShareStatus] = useState("");
  const [showLink, setShowLink] = useState(false);
  const Heading = standalone ? "h1" : "h2";
  const shareUrl = new URL(document.baseURI);
  shareUrl.search = "";
  shareUrl.hash = "/leadership-interest";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl.href);
      setShareStatus("Link copied. Share it with anyone interested in a leadership role.");
    } catch {
      setShareStatus("Select and copy the link below to share this form.");
      setShowLink(true);
    }
  }

  return (
    <section id="leadership-interest" aria-labelledby="leadership-interest-heading" className="scroll-mt-24 bg-luhya-cream/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-luhya-gold/40 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-luhya-navy">
            <Users className="h-4 w-4" aria-hidden="true" />
            Serve your community
          </span>
          <Heading id="leadership-interest-heading" className="text-3xl font-bold leading-tight text-luhya-navy sm:text-4xl">
            Leadership Expression of Interest
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Help shape the future of Mulembe Community NSW. Read our constitution,
            explore the nine leadership roles, and let us know where you would like to contribute.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button type="button" variant="outline" className="border-luhya-navy/20 bg-white text-luhya-navy" onClick={copyLink}>
              {shareStatus.startsWith("Link copied") ? <Check aria-hidden="true" /> : <Link2 aria-hidden="true" />}
              Copy form link
            </Button>
            {!standalone && (
              <Button variant="ghost" className="text-luhya-navy" asChild>
                <Link to="/leadership-interest">
                  Open form on its own <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            )}
          </div>
          <p role="status" className="mt-3 text-sm text-luhya-navy">{shareStatus}</p>
          {showLink && (
            <label className="mx-auto mt-3 block max-w-xl text-left text-sm text-luhya-navy">
              Shareable form link
              <input
                type="text"
                readOnly
                value={shareUrl.href}
                onFocus={(event) => event.target.select()}
                className="mt-2 w-full rounded-lg border border-luhya-navy/20 bg-white px-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luhya-gold"
              />
            </label>
          )}
        </div>
        <LeadershipInterestForm />
      </div>
    </section>
  );
}
