const defaultResults = Array.from({ length: 5 }, (_, index) => ({
  image: `/Herbalife/image-${index + 1}.png`,
  name: `Transformation story ${index + 1}`,
}))

defaultResults.push({
  image: '/Herbalife/image-6.png',
  name: 'Transformation story 6',
})

const ResultCard = ({ result }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1.5rem_4rem_rgba(22,58,28,0.12)]">
      <div className="overflow-hidden bg-[#dfe8df]">
        <img
          src={result.image}
          alt={`${result.name} before and after result`}
          className="h-auto w-full object-cover"
        />
      </div>
    </article>
  )
}

const Result = ({ results = defaultResults }) => {
  return (
    <section id="results" className="w-full bg-[#f4f7f1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28" aria-labelledby="results-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4e26]/65 sm:text-sm">
            Real progress
          </p>
          <h2 id="results-heading" className="font-[font-3] text-4xl uppercase leading-[0.95] text-[#1d4e26] sm:text-5xl lg:text-6xl">
            Results that speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={`${result.name}-${result.duration}`}
              className={`lg:col-span-4 ${index === 5 ? 'hidden lg:block' : ''}`}
            >
              <ResultCard result={result} />
            </div>
          ))}
        </div>

        <a
          href="/results"
          className="mx-auto mt-10 block w-fit rounded-full bg-[#1d4e26] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#286b33] focus:outline-none focus:ring-2 focus:ring-[#1d4e26] focus:ring-offset-2"
        >
          View more results
        </a>

        <p className="mx-auto mt-8 w-fit max-w-full rounded-xl uppercase bg-[#d9ead8] px-4 py-3 text-center text-sm tracking-tight  font-medium leading-5 text-[#1d4e26] sm:mt-10 sm:px-5 sm:text-sm">
          * Weight and timing may vary from person to person.
        </p>
      </div>

    </section>
  )
}

export default Result