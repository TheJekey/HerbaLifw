import { useState } from 'react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide personalized health and wellness support including lifestyle coaching, nutrition guidance, fitness planning, and overall wellness consultations tailored to your goals.',
  },
  {
    question: 'Is the program suitable for beginners?',
    answer:
      'Yes. Our programs are designed for all levels, whether you are starting from scratch or already active. We customize the plan based on your fitness level, health needs, and daily routine.',
  },
  {
    question: 'Do you offer one-on-one guidance?',
    answer:
      'Absolutely. We focus on personal attention and practical guidance so you get recommendations that fit your body, schedule, and goals rather than a one-size-fits-all approach.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Results vary from person to person, but most clients begin noticing improvements in energy, routine, and wellbeing within a few weeks when they consistently follow the plan and stay engaged.',
  },
  {
    question: 'Can I book a consultation before joining?',
    answer:
      'Yes. We encourage a consultation first so we can understand your needs, answer your questions, and recommend the best path for your health and wellness goals.',
  },
]

const FQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="w-full bg-[#f4f7f2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4E26]">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-[#1B1B1B] sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ease-out ${
                  isOpen
                    ? 'border-[#1D4E26]/30 bg-[#ecf5ed] shadow-[0_10px_30px_rgba(29,78,38,0.08)]'
                    : 'border-[#dfe9df] bg-white shadow-sm hover:border-[#1D4E26]/20 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-[#f7faf7] sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
                    {item.question}
                  </span>

                  <span
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl font-medium transition-all duration-300 ease-out ${
                      isOpen
                        ? 'border-[#1D4E26] bg-[#1D4E26] text-white rotate-180'
                        : 'border-[#1D4E26]/50 bg-white text-[#1D4E26] rotate-0 hover:bg-[#eef7ee]'
                    }`}
                  >
                    <span className="absolute h-[2px] w-3 rounded-full bg-current" />
                    <span
                      className={`absolute h-[2px] w-3 rounded-full bg-current transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-0' : 'rotate-90'
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#dfe9df] px-5 py-4 sm:px-6">
                      <p className="text-sm leading-7 text-[#4d4d4d] sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FQ