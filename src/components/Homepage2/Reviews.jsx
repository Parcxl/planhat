import { FiStar } from "react-icons/fi"

const MAX_REVIEW_LENGTH = 185

const reviews = [
  {
    name: "Mees",
    text: "Super software! Ward en Joep staan altijd klaar om je te helpen en tarieven zijn ook goed, zelfs voor lage schaal zendingen.",
    timeAgo: "3 maanden geleden",
  },
  {
    name: "Panc Eikelenboom",
    text: "Fijn samenwerken. Korte lijntjes en het team denkt goed mee, helemaal top!",
    timeAgo: "4 maanden geleden",
  },
  {
    name: "Chris van der Leeden",
    text: "Goede software, goede prijzen, fijn contact",
    timeAgo: "4 maanden geleden",
  },
  {
    name: "Sam",
    text: "A+ service van de mannen van Sendwise",
    timeAgo: "6 maanden geleden",
  },
  {
    name: "Ryan Rivera",
    text: "Topervaring met Sendwise! De software werkt overzichtelijk en bespaart ons veel tijd bij het verwerken van orders. Daarnaast reageren Ward en Joep altijd snel en denken ze actief mee wanneer je ergens tegenaan loopt. Erg fijn om met een partij samen te werken die afspraken nakomt.",
    timeAgo: "2 weken geleden",
  },
  {
    name: "Shawn Lancel",
    text: "Beste service",
    timeAgo: "2 weken geleden",
  },
  {
    name: "Dane Bakker",
    text: "Heel prettig: snel en laagdrempelig contact met Ward en Joep, waardoor je altijd snel kunt schakelen. In mijn ervaring een eerlijke partij om mee samen te werken - je wordt hier niet bedonderd, wat tegenwoordig helaas erg zeldzaam is. Ze denken goed mee en houden zich aan afspraken.",
    timeAgo: "2 weken geleden",
  },
]

const truncateReview = (text) => {
  if (text.length <= MAX_REVIEW_LENGTH) return text
  return `${text.slice(0, MAX_REVIEW_LENGTH).trim()}...`
}

const Reviews = () => {
  const marqueeReviews = [...reviews, ...reviews]

  return (
    <section className="overflow-hidden bg-white px-6 pb-14 pt-16 lg:pb-18 lg:pt-20">
      <style>{`
        @keyframes homepage2ReviewsMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-2 text-[#f5b301]" aria-label="5 sterren">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar key={index} className="h-7 w-7 fill-current stroke-[1.5]" aria-hidden="true" />
            ))}
          </div>

          <h2 className="mt-6 inter-semibold text-5xl leading-tight text-[#07115a] sm:text-6xl">
            Wat klanten zeggen over Sendwise
          </h2>
        </div>

        <div className="relative mt-10 overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max gap-5" style={{ animation: "homepage2ReviewsMarquee 42s linear infinite" }}>
            {marqueeReviews.map(({ name, text, timeAgo }, index) => (
              <article
                key={`${name}-${index}`}
                className="flex min-h-[250px] w-[330px] shrink-0 flex-col rounded-2xl border border-[#e4ecf8] bg-white p-6 shadow-[0_18px_55px_rgba(7,17,31,0.07)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-1 text-[#f5b301]" aria-label="5 sterren">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FiStar key={starIndex} className="h-4 w-4 fill-current stroke-[1.5]" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="rounded-full bg-[#f7faff] px-3 py-1 inter-medium text-xs text-[#667085] ring-1 ring-[#e1eaf7]">
                    {timeAgo}
                  </span>
                </div>

                <p className="mt-5 inter-medium text-base leading-7 text-[#3f4965]">“{truncateReview(text)}”</p>

                <div className="mt-auto pt-6">
                  <p className="inter-semibold text-lg text-[#07115a]">{name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
