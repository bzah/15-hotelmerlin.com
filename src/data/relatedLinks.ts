import type { RelatedLink } from "@/components/RelatedReads";

/**
 * Topical internal-link map.
 * - Anchor text = long-tail keyword phrases (no "click here", no brand-only).
 * - Blurbs are unique per usage so Google sees no duplicate snippets.
 * - Each destination links to 3 blog posts + 2 sister destinations.
 * - Each blog slug links to 2-3 most-relevant destinations.
 */

export const destinationRelated: Record<string, RelatedLink[]> = {
  bali: [
    {
      kind: "blog",
      to: "/blog/jakarta-vs-bali-which-to-visit-first",
      anchor: "Jakarta vs Bali: which Indonesian destination to visit first in 2026",
      blurb: "Honest comparison of culture, beaches, food, and budget to help you pick your first stop.",
    },
    {
      kind: "blog",
      to: "/blog/best-diving-spots-indonesia-2026",
      anchor: "Best diving spots in Indonesia 2026 — Bali, Komodo & beyond",
      blurb: "Where to dive Manta Point, Tulamben USS Liberty wreck, and Nusa Penida drift sites.",
    },
    {
      kind: "blog",
      to: "/blog/indonesia-travel-tips-first-timers",
      anchor: "Indonesia travel tips for first-time visitors planning a Bali trip",
      blurb: "Visa, SIM cards, scams to avoid, and insider etiquette for your first Bali holiday.",
    },
    {
      kind: "destination",
      to: "/hotels-lombok",
      anchor: "Best hotels in Lombok and the Gili Islands — Bali's quieter neighbour",
      blurb: "Skip the crowds: pristine beaches, Mount Rinjani, and turtle-filled snorkel reefs.",
    },
    {
      kind: "destination",
      to: "/hotels-yogyakarta",
      anchor: "Top boutique hotels in Yogyakarta near Borobudur and Prambanan",
      blurb: "Pair your Bali beaches with Java's cultural heart and UNESCO temples.",
    },
  ],

  jakarta: [
    {
      kind: "blog",
      to: "/blog/best-hotels-in-jakarta-2026",
      anchor: "Best hotels in Jakarta 2026 — luxury stays near Merlynn Park & Sudirman",
      blurb: "Five-star reviews, boutique gems in Menteng, and where to book for the best rates.",
    },
    {
      kind: "blog",
      to: "/blog/jakarta-vs-bali-which-to-visit-first",
      anchor: "Jakarta vs Bali — which capital experience suits your 2026 trip",
      blurb: "City buzz vs island calm: a side-by-side guide for first-time Indonesia travellers.",
    },
    {
      kind: "blog",
      to: "/blog/indonesia-travel-tips-first-timers",
      anchor: "Indonesia travel tips for first-time visitors arriving in Jakarta",
      blurb: "Airport transfers, Grab vs Gojek, money, and safety advice for landing in Soekarno-Hatta.",
    },
    {
      kind: "destination",
      to: "/hotel-merlin-batam",
      anchor: "Hotel Merlin Batam — easy weekend escape from Jakarta and Singapore",
      blurb: "Ferry-friendly resorts, golf courses, and seafood feasts an hour from the city.",
    },
    {
      kind: "destination",
      to: "/hotels-yogyakarta",
      anchor: "Hotels near Borobudur in Yogyakarta — Java's cultural counterpoint to Jakarta",
      blurb: "Trade Sudirman skyscrapers for sunrise temples and royal kraton heritage.",
    },
  ],

  yogyakarta: [
    {
      kind: "blog",
      to: "/blog/indonesia-travel-tips-first-timers",
      anchor: "Indonesia travel tips for first-timers visiting Yogyakarta and Java",
      blurb: "Train bookings, temple etiquette, and how to handle the Yogyakarta heat.",
    },
    {
      kind: "blog",
      to: "/blog/jakarta-vs-bali-which-to-visit-first",
      anchor: "Why Yogyakarta belongs on every Jakarta vs Bali itinerary",
      blurb: "The cultural middle ground that ties Indonesia's two biggest destinations together.",
    },
    {
      kind: "blog",
      to: "/blog/best-hotels-in-jakarta-2026",
      anchor: "Best hotels in Jakarta 2026 — perfect first stop before Yogyakarta",
      blurb: "Pair a city stay with a flight south to Borobudur and Prambanan.",
    },
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — Ubud, Seminyak & Uluwatu",
      blurb: "After temples and rice terraces in Java, continue to Bali's iconic island stays.",
    },
    {
      kind: "destination",
      to: "/hotel-merlin-jakarta",
      anchor: "Hotel Merlin Jakarta near Merlynn Park — gateway to Java",
      blurb: "Most Yogyakarta itineraries fly via Jakarta — here's where to stay overnight.",
    },
  ],

  batam: [
    {
      kind: "blog",
      to: "/blog/batam-weekend-guide-from-singapore",
      anchor: "Batam weekend guide from Singapore — 2026 ferry, food & spa edition",
      blurb: "Ferry tickets, visa rules, and the best resorts for a 48-hour Singapore escape.",
    },
    {
      kind: "blog",
      to: "/blog/top-things-to-do-in-batam",
      anchor: "Top things to do in Batam — full 2026 activities and attractions guide",
      blurb: "Mangrove tours, seafood kelongs, golf courses, and underrated cultural spots.",
    },
    {
      kind: "blog",
      to: "/blog/indonesia-travel-tips-first-timers",
      anchor: "Indonesia travel tips for first-time visitors crossing into Batam",
      blurb: "Money, SIM cards, and visa-on-arrival pointers for ferry arrivals from Singapore.",
    },
    {
      kind: "destination",
      to: "/hotel-merlin-jakarta",
      anchor: "Hotel Merlin Jakarta — extend your Batam trip into the capital",
      blurb: "Connect Batam to Jakarta in 90 minutes and keep the Merlin experience going.",
    },
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — pair Batam with island time",
      blurb: "From Singapore-friendly Batam to Bali's beach clubs — the ideal two-stop combo.",
    },
  ],

  lombok: [
    {
      kind: "blog",
      to: "/blog/best-diving-spots-indonesia-2026",
      anchor: "Best diving spots in Indonesia 2026 — Gili Islands and Lombok highlights",
      blurb: "Turtle-filled drifts off Gili Air, Manta sightings, and where to certify in Lombok.",
    },
    {
      kind: "blog",
      to: "/blog/jakarta-vs-bali-which-to-visit-first",
      anchor: "Why Lombok wins the 'is Bali too crowded?' debate in 2026",
      blurb: "How Lombok stacks up against Bali for beaches, prices and authentic culture.",
    },
    {
      kind: "blog",
      to: "/blog/indonesia-travel-tips-first-timers",
      anchor: "Indonesia travel tips for first-timers heading to Lombok and the Gilis",
      blurb: "Fast-boat safety, Rinjani permits, and which Gili Island fits your travel style.",
    },
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — easy combo with Lombok and the Gilis",
      blurb: "Most travellers pair Bali and Lombok — here are the resorts to bookend the trip.",
    },
    {
      kind: "destination",
      to: "/merlin-hotel-maumere",
      anchor: "Merlin Hotel Maumere on Flores — Indonesia's next dive frontier after Lombok",
      blurb: "If Gili diving hooks you, continue east to Maumere's untouched coral walls.",
    },
  ],

  maumere: [
    {
      kind: "blog",
      to: "/blog/maumere-hidden-paradise-flores",
      anchor: "Maumere: Flores' hidden paradise for divers and adventurers",
      blurb: "Why this east-Flores town is Indonesia's most underrated dive and culture base.",
    },
    {
      kind: "blog",
      to: "/blog/best-diving-spots-indonesia-2026",
      anchor: "Best diving spots in Indonesia 2026 — Maumere, Komodo and Alor",
      blurb: "Where the warm Flores Sea meets cold upwellings — and why divers keep coming back.",
    },
    {
      kind: "blog",
      to: "/blog/indonesia-travel-tips-first-timers",
      anchor: "Indonesia travel tips for first-timers planning a Flores adventure",
      blurb: "Flights via Bali, ATM scarcity, and packing essentials for remote eastern Indonesia.",
    },
    {
      kind: "destination",
      to: "/hotels-lombok",
      anchor: "Best hotels in Lombok and the Gili Islands — your stop before Flores",
      blurb: "Most Maumere travellers route via Lombok — find the right base for the journey east.",
    },
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — the launchpad for Flores and Maumere",
      blurb: "All flights to Maumere connect via Bali — pick a Denpasar-area resort for the layover.",
    },
  ],
};

/** Per blog-slug — relevant destinations + sister articles. */
export const blogRelated: Record<string, RelatedLink[]> = {
  "best-hotels-in-jakarta-2026": [
    {
      kind: "destination",
      to: "/hotel-merlin-jakarta",
      anchor: "Hotel Merlin Jakarta near Merlynn Park & Sudirman business district",
      blurb: "Our flagship Jakarta property — central location, walking distance to MRT and Thamrin.",
    },
    {
      kind: "destination",
      to: "/hotels-yogyakarta",
      anchor: "Hotels near Borobudur in Yogyakarta — Java's cultural escape from Jakarta",
      blurb: "Combine your Jakarta stay with sunrise at Borobudur and Prambanan temples.",
    },
    {
      kind: "blog",
      to: "/blog/jakarta-vs-bali-which-to-visit-first",
      anchor: "Jakarta vs Bali: which Indonesian destination to visit first in 2026",
      blurb: "Once you've booked Jakarta, decide whether to add Bali or save it for next trip.",
    },
  ],

  "top-things-to-do-in-batam": [
    {
      kind: "destination",
      to: "/hotel-merlin-batam",
      anchor: "Hotel Merlin Batam — best resorts for a Singapore weekend escape",
      blurb: "Where to base yourself for ferry-easy access to all the activities in this guide.",
    },
    {
      kind: "blog",
      to: "/blog/batam-weekend-guide-from-singapore",
      anchor: "Batam weekend guide from Singapore — 2026 ferry & itinerary edition",
      blurb: "The full 48-hour itinerary using the activities you just read about.",
    },
    {
      kind: "destination",
      to: "/hotel-merlin-jakarta",
      anchor: "Hotel Merlin Jakarta — extend your Batam trip into Indonesia's capital",
      blurb: "Short flights connect Batam to Jakarta for travellers wanting a longer Indonesia tour.",
    },
  ],

  "maumere-hidden-paradise-flores": [
    {
      kind: "destination",
      to: "/merlin-hotel-maumere",
      anchor: "Merlin Hotel Maumere on Flores Island — your dive-trip base",
      blurb: "The closest Merlin property to Maumere's coral walls and traditional Sikka villages.",
    },
    {
      kind: "blog",
      to: "/blog/best-diving-spots-indonesia-2026",
      anchor: "Best diving spots in Indonesia 2026 — Maumere ranked alongside Komodo",
      blurb: "See how Maumere stacks up against Raja Ampat, Komodo, and Bunaken for divers.",
    },
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — the layover stop before Flores",
      blurb: "All Maumere flights route via Bali — pick a stylish Denpasar-area resort for the night.",
    },
  ],

  "indonesia-travel-tips-first-timers": [
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — the easiest first-timer destination",
      blurb: "Most first-timers start in Bali — here are the resorts that match every budget.",
    },
    {
      kind: "destination",
      to: "/hotel-merlin-jakarta",
      anchor: "Hotel Merlin Jakarta — the right hotel for your Indonesia arrival",
      blurb: "Land at Soekarno-Hatta, transfer in 45 minutes, and recover before exploring Java.",
    },
    {
      kind: "destination",
      to: "/hotels-yogyakarta",
      anchor: "Top boutique hotels in Yogyakarta near Borobudur — culture-first base",
      blurb: "First-timers wanting culture over beaches should start in Yogya rather than Bali.",
    },
  ],

  "jakarta-vs-bali-which-to-visit-first": [
    {
      kind: "destination",
      to: "/hotel-merlin-jakarta",
      anchor: "Hotel Merlin Jakarta near Merlynn Park & Sudirman — the capital pick",
      blurb: "If you choose Jakarta first, this is where to stay for business and sightseeing.",
    },
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — Ubud, Seminyak, Uluwatu & Canggu",
      blurb: "If Bali wins your decision, here are the resorts to book in each iconic area.",
    },
    {
      kind: "destination",
      to: "/hotels-lombok",
      anchor: "Best hotels in Lombok and the Gili Islands — the third option to consider",
      blurb: "Many travellers find Lombok beats both Jakarta and Bali for value and beauty.",
    },
  ],

  "batam-weekend-guide-from-singapore": [
    {
      kind: "destination",
      to: "/hotel-merlin-batam",
      anchor: "Hotel Merlin Batam — top resort pick for the Singapore weekend",
      blurb: "Walking distance from spas, golf, and Nagoya nightlife — and shuttles from the ferry.",
    },
    {
      kind: "blog",
      to: "/blog/top-things-to-do-in-batam",
      anchor: "Top things to do in Batam — full 2026 attractions guide",
      blurb: "Once your hotel is booked, fill the weekend with these handpicked activities.",
    },
    {
      kind: "destination",
      to: "/hotel-merlin-jakarta",
      anchor: "Hotel Merlin Jakarta — pair your Batam weekend with the capital",
      blurb: "Got more time? Flights from Batam to Jakarta take just 90 minutes.",
    },
  ],

  "best-diving-spots-indonesia-2026": [
    {
      kind: "destination",
      to: "/merlin-hotel-maumere",
      anchor: "Merlin Hotel Maumere — base for diving Flores and the Alor archipelago",
      blurb: "Untouched coral walls, big-fish action, and quick boat access from this Maumere stay.",
    },
    {
      kind: "destination",
      to: "/hotels-lombok",
      anchor: "Best hotels in Lombok and the Gili Islands for diving and snorkelling",
      blurb: "Sea turtles, easy reef dives, and PADI courses straight off the beach in the Gilis.",
    },
    {
      kind: "destination",
      to: "/best-hotels-bali",
      anchor: "Best luxury hotels in Bali 2026 — diving USS Liberty, Manta Point & Crystal Bay",
      blurb: "Stay near Tulamben or Sanur to maximise dive days at Bali's most famous sites.",
    },
  ],
};
