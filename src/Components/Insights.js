"use client"; 

const insights = [
  {
    title: "Web Design VS Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aen dolor sit amet consectetur...",
    date: "25.01.2024",
    link: "#",
    image: "/is1.png", 
  },
  {
    title: "Websites Accessibility And Why It Matters",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aen dolor sit amet consectetur...",
    date: "25.01.2024",
    link: "#",
    image: "/is2.png",
  },
  {
    title: "Why Website Performance Is Important",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aen dolor sit amet consectetur...",
    date: "25.01.2024",
    link: "#",
    image: "/is3.png",
  },
];

export default function LatestInsight() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest Insight</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{insight.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>{insight.date}</span>
                  <a
                    href={insight.link}
                    className="fontcolor-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:underline bg-white"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
