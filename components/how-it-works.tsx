export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Изпратете статия",
      description: "Подгответе качествена статия за вашия бизнес",
    },
    {
      number: "2",
      title: "Ние я публикуваме",
      description: "Нашият екип прегледа и публикува статията",
    },
    {
      number: "3",
      title: "Вие получавате видимост",
      description: "Достигате до правилната аудитория и увеличавате продажбите",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-black mb-16">Как работи</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
