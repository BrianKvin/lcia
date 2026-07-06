import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type CulturePageLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const CulturePageLayout = ({ title, subtitle, children }: CulturePageLayoutProps) => {
  const handleBackToEvents = () => {
    sessionStorage.setItem("scrollTo", "events");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl min-w-0">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 -ml-1 sm:-ml-2 h-auto min-h-11 py-2 text-muted-foreground hover:text-luhya-navy whitespace-normal text-left"
            asChild
          >
            <Link to="/" onClick={handleBackToEvents}>
              <ArrowLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              <span className="sm:hidden">Back to Events</span>
              <span className="hidden sm:inline">Back to Culture & Heritage</span>
            </Link>
          </Button>

          <header className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-luhya-navy mb-3 sm:mb-4 break-words">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed break-words">
              {subtitle}
            </p>
          </header>

          <div className="min-w-0">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CulturePageLayout;
