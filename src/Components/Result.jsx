import { useState } from 'react'
import Button from './Button'

const defaultResults = [
  {
    name: 'Lose 56kg weight',
    duration: 'in 12 weeks',
    beforeImage:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Healthy lifestyle',
    duration: '16 weeks',
    beforeImage:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Everyday energy',
    duration: '10 weeks',
    beforeImage:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Mindful movement',
    duration: '8 weeks',
    beforeImage:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Confident progress',
    duration: '20 weeks',
    beforeImage:
      'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1526401485004-2aa7f3b6e9c6?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Balanced routine',
    duration: '14 weeks',
    beforeImage:
      'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=85',
  },
]

const defaultResult = defaultResults[0]

const ResultCard = ({ result = defaultResult }) => {
  const [position, setPosition] = useState(50)

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1.5rem_4rem_rgba(22,58,28,0.12)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#dfe8df] sm:aspect-[16/10]">
        <img
          src={result.beforeImage}
          alt={`${result.name} before transformation`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={result.afterImage}
            alt={`${result.name} after transformation`}
            className="h-full w-full max-w-none object-cover"
            style={{ width: `${100 / (position || 1) * 100}%` }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_0_1rem_rgba(0,0,0,0.24)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#1d4e26] shadow-lg">
            <span aria-hidden="true" className="text-lg leading-none">↔</span>
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between p-4 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white sm:p-5 sm:text-xs">
          <span className="rounded-full bg-black/35 px-3 py-1.5 backdrop-blur-sm">After</span>
          <span className="rounded-full bg-black/35 px-3 py-1.5 backdrop-blur-sm">Before</span>
        </div>

        <label className="absolute inset-0 z-20 cursor-ew-resize" aria-label="Compare before and after result">
          <span className="sr-only">Drag to compare the before and after images</span>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </label>
      </div>

      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
        <h3 className="font-[font-3] text-lg uppercase leading-tight text-[#1d4e26] sm:text-xl">
          {result.name}
        </h3>
        <p className="shrink-0 text-xs uppercase tracking-[0.14em] text-black/55 sm:text-sm">
          {result.duration}
        </p>
      </div>
    </article>
  )
}

const Result = ({ results = defaultResults }) => {
  return (
    <section className="w-full bg-[#f4f7f1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28" aria-labelledby="results-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4e26]/65 sm:text-sm">
            Real progress
          </p>
          <h2 id="results-heading" className="font-[font-3] text-4xl uppercase leading-[0.95] text-[#1d4e26] sm:text-5xl lg:text-6xl">
            Results that speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {results.map((result) => (
            <ResultCard key={`${result.name}-${result.duration}`} result={result} />
          ))}
        </div>

        <p className="mx-auto mt-8 w-fit max-w-full rounded-xl uppercase bg-[#d9ead8] px-4 py-3 text-center text-sm tracking-tight  font-medium leading-5 text-[#1d4e26] sm:mt-10 sm:px-5 sm:text-sm">
          * Weight and timing may vary from person to person.
        </p>
      </div>

    </section>
  )
}

export default Result