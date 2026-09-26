import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Images,
  MessageSquareQuote,
  Shapes,
  Users,
  Search,
  MapPin,
  Clock,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/photos/IMG_6463-Enhanced-NR.jpeg";

const events = [
  {
    title: "Community cultural gathering",
    category: "Culture",
    date: "14 Mar 2026",
    location: "Sydney, NSW",
    status: "Completed",
  },
  {
    title: "Members networking evening",
    category: "Networking",
    date: "22 Feb 2026",
    location: "Parramatta, NSW",
    status: "Completed",
  },
  {
    title: "Family picnic in the park",
    category: "Community",
    date: "8 Feb 2026",
    location: "Western Sydney, NSW",
    status: "Completed",
  },
  {
    title: "Heritage and storytelling day",
    category: "Culture",
    date: "18 Jan 2026",
    location: "Sydney, NSW",
    status: "Completed",
  },
];
const testimonials = [
  {
    quote:
      "Mulembe has given me a real sense of belonging. It feels wonderful to stay connected to our roots while building a life here in Australia.",
    name: "Grace W.",
    role: "Community member",
    initials: "GW",
  },
  {
    quote:
      "The events bring our families together in a way that feels genuine. Our children get to grow up knowing where they come from.",
    name: "Daniel M.",
    role: "Community member",
    initials: "DM",
  },
  {
    quote:
      "Through the community, I’ve met friends and fellow business owners who inspire and support one another.",
    name: "Anne N.",
    role: "Community member",
    initials: "AN",
  },
];
const categories = [
  {
    name: "Food & catering",
    description: "Flavours and hospitality from our community",
    count: "12 businesses",
    icon: "01",
  },
  {
    name: "Health & wellness",
    description: "Care for individuals and families",
    count: "8 businesses",
    icon: "02",
  },
  {
    name: "Professional services",
    description: "Expertise you can count on",
    count: "15 businesses",
    icon: "03",
  },
  {
    name: "Retail & lifestyle",
    description: "Locally owned shops and services",
    count: "9 businesses",
    icon: "04",
  },
  {
    name: "Education & learning",
    description: "Supporting the next generation",
    count: "6 businesses",
    icon: "05",
  },
];

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 text-[11px] font-bold uppercase  text-primary">
        {eyebrow}
      </div>
      <h2 className="text-2xl font-bold sm:text-[30px]">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  );
}
function Status({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

export function Dashboard() {
  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-3 text-[11px] font-bold uppercase  text-primary">
            Community overview
          </div>
          <h2 className="text-2xl font-bold sm:text-[30px]">
            Welcome back, Admin
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Here’s a look at your community workspace.
          </p>
        </div>
        <span className="rounded-md border border-border px-3 py-2 text-xs text-muted-foreground">
          Preview data
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Community members",
            value: "200+",
            icon: Users,
            foot: "Across 18 Luhya sub-tribes",
            to: "/admin",
          },
          {
            label: "Events & activities",
            value: "04",
            icon: CalendarDays,
            foot: "Community moments",
            to: "/admin/events",
          },
          {
            label: "Gallery photos",
            value: "06",
            icon: Images,
            foot: "Shared memories",
            to: "/admin/gallery",
          },
          {
            label: "Business categories",
            value: "05",
            icon: Shapes,
            foot: "Local connections",
            to: "/admin/business-categories",
          },
        ].map((stat) => (
          <Link
            key={stat.label}
            to={stat.to}
            className="group rounded-md border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-start justify-between">
              <span className="text-[13px] text-muted-foreground">
                {stat.label}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <stat.icon className="h-[18px] w-[18px]" />
              </span>
            </div>
            <div className="mt-4 text-[32px] font-bold leading-none text-card-foreground">
              {stat.value}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              {stat.foot}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 grid gap-8 xl:grid-cols-[1.55fr_1fr]">
        <section className="min-w-0">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Recent activities</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                A snapshot of community moments
              </p>
            </div>
            <Link
              to="/admin/events"
              className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-md border border-border bg-card">
            {events.slice(0, 3).map((event, i) => (
              <div
                key={event.title}
                className={`flex items-center gap-4 px-5 py-4 ${i ? "border-t border-border" : ""}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <CalendarDays className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold">
                    {event.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {event.date} <span className="px-1">·</span>{" "}
                    {event.location}
                  </div>
                </div>
                <Status>{event.status}</Status>
              </div>
            ))}
          </div>
        </section>
        <section className="min-w-0">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Community spotlight</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                The people at the heart of it all
              </p>
            </div>
          </div>
          <Link
            to="/admin/gallery"
            className="group block overflow-hidden rounded-md border border-border bg-card"
          >
            <div className="aspect-[2/1] overflow-hidden">
              <img
                src={communityImage}
                alt="Community members gathered together"
                width={1408}
                height={912}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <div className="text-sm font-semibold">
                  Moments worth sharing
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Explore the community gallery
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </Link>
        </section>
      </div>
      <div className="mt-8 border-t border-border pt-6">
        <div className="mb-4 text-sm font-semibold">Explore your workspace</div>
        <div className="flex flex-wrap gap-3">
          {[
            {
              title: "Testimonials",
              to: "/admin/testimonials",
              icon: MessageSquareQuote,
            },
            {
              title: "Business categories",
              to: "/admin/business-categories",
              icon: Shapes,
            },
          ].map(({ title, to, icon: Icon }) => (
            <Link
              to={to}
              key={title}
              className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium hover:border-primary/40"
            >
              <Icon className="h-4 w-4 text-primary" />
              {title}
              <ArrowRight className="ml-3 h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export function EventsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () =>
      events.filter(
        (event) =>
          (filter === "All" || event.category === filter) &&
          `${event.title} ${event.location}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, filter],
  );
  return (
    <>
      <SectionIntro
        eyebrow="Events & activities"
        title="Bringing our community together"
        text="Browse gatherings, connections, and celebrations across the Mulembe community."
      />
      <div className="mb-5 flex flex-wrap gap-3">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="h-10 pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events"
            aria-label="Search events"
          />
        </div>
        <div className="relative">
          <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <select
            className="h-10 rounded-md border border-input bg-background pl-9 pr-7 text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter events"
          >
            {["All", "Culture", "Networking", "Community"].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border border-border bg-card">
        <div className="hidden grid-cols-[2fr_1fr_1fr_100px] gap-4 border-b border-border bg-secondary/40 px-6 py-4 text-[11px] font-bold uppercase  text-muted-foreground md:grid">
          <span>Event</span>
          <span>Date</span>
          <span>Location</span>
          <span>Status</span>
        </div>
        {filtered.length ? (
          filtered.map((event) => (
            <div
              key={event.title}
              className="grid gap-2 border-b border-border px-6 py-5 last:border-0 md:grid-cols-[2fr_1fr_1fr_100px] md:items-center md:gap-4"
            >
              <div>
                <div className="text-sm font-semibold">{event.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {event.category}
                </div>
              </div>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 md:hidden" />
                {event.date}
              </span>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 md:hidden" />
                {event.location}
              </span>
              <div>
                <Status>{event.status}</Status>
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-sm text-muted-foreground">
            No events match your search.
          </div>
        )}
      </div>
    </>
  );
}

const galleryPhotos = [
  { label: "Cultural gathering", src: communityImage },
  {
    label: "Friends and family",
    src: new URL(
      "../../assets/photos/IMG_6473-Enhanced-NR.jpeg",
      import.meta.url,
    ).href,
  },
  {
    label: "Our shared heritage",
    src: new URL(
      "../../assets/photos/IMG_6412-Enhanced-NR.jpeg",
      import.meta.url,
    ).href,
  },
  {
    label: "Coming together",
    src: new URL(
      "../../assets/photos/IMG_6353-Enhanced-NR.jpeg",
      import.meta.url,
    ).href,
  },
  {
    label: "Community connections",
    src: new URL(
      "../../assets/photos/IMG_6201-Enhanced-NR.jpeg",
      import.meta.url,
    ).href,
  },
  {
    label: "A place to belong",
    src: new URL(
      "../../assets/photos/IMG_6002-Enhanced-NR.jpeg",
      import.meta.url,
    ).href,
  },
];

export function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (selected === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        setSelected((index) =>
          index === null
            ? null
            : (index +
                (event.key === "ArrowRight" ? 1 : galleryPhotos.length - 1)) %
              galleryPhotos.length,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);
  return (
    <>
      <SectionIntro
        eyebrow="Community gallery"
        title="Moments that bring us closer"
        text="A visual collection of the connections and celebrations that make our community special."
      />
      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {galleryPhotos.map((photo, index) => (
            <Dialog.Trigger asChild key={photo.label}>
              <button
                onClick={() => setSelected(index)}
                className="group overflow-hidden rounded-md border border-border bg-card text-left hover:border-primary/40"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.label + " at Mulembe Community NSW"}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{photo.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Mulembe Community NSW
                  </div>
                </div>
              </button>
            </Dialog.Trigger>
          ))}
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85" />
          <Dialog.Content
            className="admin-ui fixed inset-4 z-50 flex flex-col rounded-md bg-background p-4 sm:inset-10"
            aria-describedby={undefined}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <Dialog.Title className="text-sm font-semibold">
                {selected === null ? "" : galleryPhotos[selected].label}
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  title="Close photo"
                  aria-label="Close photo"
                >
                  <X />
                </Button>
              </Dialog.Close>
            </div>
            {selected !== null && (
              <img
                src={galleryPhotos[selected].src}
                alt={galleryPhotos[selected].label}
                className="min-h-0 flex-1 object-contain"
              />
            )}
            <div className="mt-4 flex items-center justify-center gap-5">
              <Button
                variant="outline"
                size="icon"
                title="Previous photo"
                aria-label="Previous photo"
                onClick={() =>
                  setSelected(
                    (index) =>
                      ((index ?? 0) + galleryPhotos.length - 1) %
                      galleryPhotos.length,
                  )
                }
              >
                <ChevronLeft />
              </Button>
              <span className="text-sm" aria-live="polite">
                {(selected ?? 0) + 1} / {galleryPhotos.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                title="Next photo"
                aria-label="Next photo"
                onClick={() =>
                  setSelected(
                    (index) => ((index ?? 0) + 1) % galleryPhotos.length,
                  )
                }
              >
                <ChevronRight />
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function TestimonialsPage() {
  const [query, setQuery] = useState("");
  const filtered = testimonials.filter((item) =>
    `${item.name} ${item.quote}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <SectionIntro
        eyebrow="Testimonials"
        title="Voices from our community"
        text="Stories and reflections from the people who make Mulembe feel like home."
      />
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="h-10 pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search testimonials"
          aria-label="Search testimonials"
        />
      </div>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.name}
            className="flex min-h-64 flex-col rounded-md border border-border bg-card p-6"
          >
            <MessageSquareQuote
              className="h-6 w-6 text-primary"
              strokeWidth={1.5}
            />
            <blockquote className="mt-5 flex-1 text-sm leading-7 text-card-foreground">
              “{item.quote}”
            </blockquote>
            <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                {item.initials}
              </span>
              <span>
                <strong className="block text-xs">{item.name}</strong>
                <span className="text-[11px] text-muted-foreground">
                  {item.role}
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No testimonials match your search.
        </p>
      )}
      <p className="mt-5 text-xs text-muted-foreground">
        Sample community stories.
      </p>
    </>
  );
}

export function CategoriesPage() {
  const [query, setQuery] = useState("");
  const filtered = categories.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <SectionIntro
        eyebrow="Business categories"
        title="Discover local businesses"
        text="Explore the skills, services, and enterprises within our community."
      />
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="h-10 pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search categories"
          aria-label="Search categories"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.name}
            className="rounded-md border border-border bg-card p-6"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                {item.icon}
              </span>
            </div>
            <h3 className="mt-6 text-base font-semibold">{item.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-6 border-t border-border pt-4 text-xs font-medium text-primary">
              {item.count}
            </div>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No categories match your search.
        </p>
      )}
      <p className="mt-5 text-xs text-muted-foreground">
        Sample business counts.
      </p>
    </>
  );
}
