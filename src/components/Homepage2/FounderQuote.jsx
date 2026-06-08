const SENDWISE_BLUE = "#1a5ee5"

const FounderQuote = () => {
  return (
    <section className="bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:pb-32 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[24px] bg-[#07115a] px-5 py-6 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-16 lg:py-16">
          <div
            className="absolute bottom-0 right-24 hidden h-44 w-44 rotate-45 rounded-[34px] lg:block"
            style={{ backgroundColor: SENDWISE_BLUE }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-7 sm:gap-10 lg:grid-cols-[250px_1fr]">
            <div className="lg:-mt-32">
              <img
                src="/freek-blijenberg-boxxl.webp"
                alt="Freek Blijenberg van Boxxl Fulfilment"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-[260px] w-full rounded-2xl object-cover object-top shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:h-[320px] lg:h-[350px]"
              />
            </div>

            <div className="relative z-10">
              <p className="max-w-4xl inter-semibold text-2xl leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.35]">
                “Met Sendwise houden we ons fulfilmentproces strak en schaalbaar. Labels, tarieven en vervoerders komen samen in één overzichtelijke verzendlaag.”
              </p>

              <div className="mt-7">
                <div className="border-l-2 pl-4" style={{ borderColor: SENDWISE_BLUE }}>
                  <p className="inter-semibold text-lg text-white">Freek Blijenberg</p>
                  <p className="mt-1 inter-medium text-sm text-white/75">Founder Boxxl Fulfilment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderQuote
