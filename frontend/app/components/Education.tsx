export default function Education() {
  const education = [
    {
      year: "2021 - 2025",
      title: "Bachelor of Engineering in Information Technology",
      subtitle: "Shantilal Shah Engineering College",
      description: "Focused on software engineering, data structures, algorithms, and web technologies. Active in coding competitions and hackathons.",
      position: "left"
    },
    {
      year: "2019 - 2021",
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Gujarat State Board",
      description: "Mathematics, Physics, Chemistry, and Computer Science as major subjects. Achieved outstanding academic results.",
      position: "right"
    }
  ]

  return (
    <section id="education" className="py-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest text-gray-900 dark:text-white">
            EDUCATION
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
            My academic background and qualification
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Vertical Line - Thinner */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Year Badge - Smaller */}
                <div className={`absolute top-0 ${edu.position === 'left' ? 'right-1/2 mr-6' : 'left-1/2 ml-6'} transform -translate-y-1/2 z-10`}>
                  <div className="bg-blue-600 text-white px-4 py-1.5 rounded shadow">
                    <span className="font-medium text-sm">{edu.year}</span>
                  </div>
                </div>

                {/* Timeline Dot - Smaller */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-3 border-white dark:border-gray-900 shadow"></div>

                {/* Content Card - Smaller */}
                <div className={`${edu.position === 'left' ? 'pr-1/2' : 'pl-1/2'} pl-6 pr-6`}>
                  <div className={`bg-white dark:bg-gray-800 p-5 rounded shadow border border-gray-200 dark:border-gray-700 ${edu.position === 'left' ? 'mr-4' : 'ml-4'}`}>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {edu.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                      {edu.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                      {edu.description}
                    </p>

                    {/* Grade Badge */}
                    <div className="inline-block">
                      <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded">
                        <span className="text-green-700 dark:text-green-400 text-sm font-medium">
                          {index === 0 ? "First Class with Distinction" : "92% Score"}
                        </span>
                      </div>
                    </div>

                    {/* Decorative Line - Smaller */}
                    <div className="mt-4 h-0.5 w-16 bg-blue-600"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Academic Achievements</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  <span>Published research paper on web optimization</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  <span>Led university coding club as President</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  <span>Multiple hackathon awards and recognitions</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technical Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "Python", "SQL", "Web Technologies", "Marketing"].map((course, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}