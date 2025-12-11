export function TrustStrip() {
  const logos = ["Shoply", "FitLab", "CourseNest", "HomeRoot"]

  return (
    <section className="bg-[#F1F2F6] py-12">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Built for e-commerce, coaches, and growth teams.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div key={logo} className="text-[#0B2340]/30 font-heading font-semibold text-lg">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
