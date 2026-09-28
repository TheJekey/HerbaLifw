import Footer from "./Footer"

const galleryImages = [
  ...[1, 2, 3, 4, 5, 6].map((index) => ({
    src: `/Herbalife/image-${index}.png`,
    alt: `Herbalife transformation result ${index}`,
  })),
  ...Array.from({ length: 42 }, (_, index) => ({
    src: `/Herbalife/image-${index}.jpg`,
    alt: `Herbalife transformation result ${index + 7}`,
  })),
]

const ResultsGallery = ({ onBack }) => {
  return (
    <main className="min-h-screen bg-[#f4f7f1] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <a
          href="/"
          onClick={(event) => {
            if (onBack) {
              event.preventDefault()
              onBack()
            }
          }}
          className="mb-10 inline-flex rounded-full border border-[#1d4e26]/25 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#1d4e26] transition hover:bg-[#1d4e26] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1d4e26] focus:ring-offset-2"
        >
          Back to home
        </a>

        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4e26]/65 sm:text-sm">
            More real progress
          </p>
          <h1 className="font-[font-3] text-4xl uppercase leading-[0.95] text-[#1d4e26] sm:text-5xl lg:text-6xl">
            Every result has a story
          </h1>
        </header>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
          {galleryImages.map((image) => (
            <figure key={image.src} className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1.5rem_4rem_rgba(22,58,28,0.1)] lg:mb-8">
              <img src={image.src} alt={image.alt} className="block h-auto w-full" loading="lazy" />
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-10 w-fit max-w-full rounded-xl bg-[#d9ead8] px-4 py-3 text-center text-sm font-medium leading-5 text-[#1d4e26] sm:px-5">
          * Weight and timing may vary from person to person.
        </p>
      </div>
      <div className="footer w-full h-full">
        <Footer />
      </div>
    </main>
  )
}

export default ResultsGallery