const testimonials = [
  {
    quote: 'I stopped chasing quick fixes and finally built habits that fit my life.',
    name: 'Dilip Tak',
    detail: '12-week wellness plan',
    image: './Dilip.PNG',
  },
  {
    quote: 'The support made all the difference. I feel stronger, calmer, and more confident.',
    name: 'Krishna Jangid',
    detail: '6-week transformation',
    image: './Krishna.png',
  },
  {
    quote: 'Small changes became my routine. The results have lasted because they feel realistic.',
    name: 'Govind Tak',
    detail: '16-week transformation',
    image: './Govind.png',
  },
]

const Testimonial = () => {
  const [featured, ...cards] = testimonials

  return (
    <section
      id="testimonials"
      className="w-full overflow-hidden bg-[#d9ead8] px-5 py-16 text-[#1d4e26] sm:px-8 sm:py-20 lg:px-12 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4e26]/65 sm:text-sm">
              Kind words
            </p>
            <h2 id="testimonials-heading" className="font-[font-3] text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Real people. Real change.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#1d4e26]/70 sm:text-right">
            Progress feels better when you do not have to make the journey alone.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
          <article className="flex min-h-[22rem] flex-col justify-between rounded-[1.5rem] bg-[#1d4e26] p-6 text-white sm:min-h-[25rem] sm:p-10 lg:p-12">
            <p aria-hidden="true" className="font-[font-3] text-6xl leading-none text-[#b9d7b7] sm:text-8xl">“</p>
            <blockquote className="max-w-2xl font-[font-3] text-3xl uppercase leading-[1.03] sm:text-4xl lg:text-5xl">
              {featured.quote}
            </blockquote>
            <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-5">
              <img src={featured.image} alt="" className="size-11 rounded-full object-cover sm:size-12" />
              <div>
                <p className="text-sm font-semibold">{featured.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-white/60">{featured.detail}</p>
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((testimonial) => (
              <article key={testimonial.name} className="flex flex-col justify-between rounded-[1.5rem] bg-[#f4f7f1] p-6 sm:p-7">
                <div>
                  <p aria-hidden="true" className="font-[font-3] text-4xl leading-none text-[#83aa80]">“</p>
                  <blockquote className="mt-3 text-lg leading-7 text-[#1d4e26]">{testimonial.quote}</blockquote>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <img src={testimonial.image} alt="" className="size-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-[#1d4e26]">{testimonial.name}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.1em] text-[#1d4e26]/55">{testimonial.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial