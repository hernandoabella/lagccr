const HeroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="min-h-screen flex flex-col justify-center bg-white">
        <div data-theme="teal" className="mx-auto max-w-6xl">
          <h2 className="sr-only">Featured case study</h2>
          <section className="font-sans text-black">
            <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <img
                        className="h-full object-cover"
                        src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                        width="733"
                        height="412"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-6 bg-grey">
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-4xl font-bold">
                    Trade Facilitation
                  </h2>
                  <p className="mt-4">
                    Our second CXcon in October was dedicated to experience
                    transformation. The free one-day virtual event&nbsp;brought
                    together 230+ heads of digital, thought leaders, and UX
                    practitioners to discuss all aspects of experience design..
                  </p>
                  <p className="mt-4">
                    In a jam-packed day filled with keynote sessions, panels,
                    and virtual networking we explored topics including design
                    leadership, UX ethics, designing for emotion and innovation
                    at scale.
                  </p>
                  <p>
                    <a
                      className="mt-4 button button--secondary"
                      href="https://inviqa.com/cxcon-experience-transformation"
                    >
                      Book an Appointment
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container mx-auto text-center">
        <h1 className="font-bold py-3 text-5xl">Trade Facilitation</h1>
        <h2 className="text-3xl font-bold mb-4">
          Our organization makes it easy for your foreign trade operations,
          market research, and bilateral relations.
        </h2>
        <a
          href="https://calendly.com/lagccr/30min"
          className="bg-teal-200 hover:bg-teal-400 py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 inline-block"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
