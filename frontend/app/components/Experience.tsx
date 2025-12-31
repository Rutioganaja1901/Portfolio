export default function Experience() {
  const experiences = [
    {
      year: "2008 - 2012",
      title: "Master In Computer Science",
      subtitle: "Studied At Cambridge University",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      position: "left"
    },
    {
      year: "2012 - 2014",
      title: "UI/UX Designer",
      subtitle: "Adobe Corporation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      position: "right"
    },
    {
      year: "2014 - 2016",
      title: "Full Stack Developer",
      subtitle: "Google Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      position: "left"
    },
    {
      year: "2016 - Present",
      title: "Senior Software Engineer",
      subtitle: "Tech Solutions Inc.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      position: "right"
    }
  ]

  return (
    <section id="experience" className="pt-8 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest text-gray-900 dark:text-white">
            EXPERIENCE
          </h3>

          {/* Decorative Line */}
          <div className="flex items-center mt-3 mb-3">
            <span className="w-20 h-[2px] bg-blue-500"></span>

            <div className="flex items-center mx-3 gap-1">
              <span className="w-2 h-2 bg-blue-500 rotate-45"></span>
              <span className="w-2 h-2 bg-blue-500 rotate-45"></span>
              <span className="w-2 h-2 bg-blue-500 rotate-45"></span>
            </div>

            <span className="w-20 h-[2px] bg-blue-500"></span>
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            My professional journey and work history
          </p>
        </div>


        {/* Timeline Container */}
        <div className="relative">
          {/* Center Vertical Line - Thinner */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Year Badge - Smaller */}
                <div className={`absolute top-0 ${exp.position === 'left' ? 'right-1/2 mr-6' : 'left-1/2 ml-6'} transform -translate-y-1/2 z-10`}>
                  <div className="bg-blue-600 text-white px-4 py-1.5 rounded shadow">
                    <span className="font-medium text-sm">{exp.year}</span>
                  </div>
                </div>

                {/* Timeline Dot - Smaller */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-3 border-white dark:border-gray-900 shadow"></div>

                {/* Content Card - Smaller */}
                <div className={`${exp.position === 'left' ? 'pr-1/2' : 'pl-1/2'} pl-6 pr-6`}>
                  <div className={`bg-white dark:bg-gray-800 p-5 rounded shadow border border-gray-200 dark:border-gray-700 ${exp.position === 'left' ? 'mr-4' : 'ml-4'}`}>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                      {exp.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Decorative Line - Smaller */}
                    <div className="mt-4 h-0.5 w-16 bg-blue-600"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Full Resume Button - Smaller */}

      </div>
    </section>
  )
}