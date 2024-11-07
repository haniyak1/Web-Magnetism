"use client";

export default function ContactForm() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center">

        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Let’s Talk About Your Project
          </h2>
          <p className="text-gray-600 mb-6">
            Do you have a project in mind, that you feel our approach would work
            well for?
          </p>
          <p className="text-gray-600">
            We're always happy to discuss your project with you and put together
            a free proposal.
          </p>
        </div>


        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Just fill out the form below to get started.
          </h3>
          <form action="#" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex items-center">
              <input
                type="text"
                name="brief"
                placeholder="Send us your brief"
                className="w-full px-6 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              />
              <input
                type="file"
                name="file"
                className="ml-4"
              />
            </div>


            <textarea
              name="message"
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
            ></textarea>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                className="mr-2 focus:ring-2 focus:ring-purple-500"
              />
              <label htmlFor="agree" className="text-gray-600 text-sm">
                I agree to have my information stored{" "}
                <a href="#" className="text-purple-500 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Send your message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
