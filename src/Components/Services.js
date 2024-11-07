import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Bespoke Web Design',
            description:
                'Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat',
            image: '/R3.png',
            buttonText: 'BESPOKE WEB DESIGN',
        },
        {
            title: 'App Development',
            description:
                'Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat',
            image: '/R2.png',
            buttonText: 'APP DEVELOPMENT',
        },
        {
            title: 'Digital Marketing',
            description:
                'Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat',
            image: '/R1.jpg',
            buttonText: 'DIGITAL MARKETING',
        },
    ];

    return (
        <section className="py-16 text-center bg-white">
            <h2 className="text-4xl font-semibold text-gray-900 mb-12 ">Overview Of Services</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
                    >
                        <img src={service.image} alt='' className="w-full h-56 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <button className="relative inline-block px-4 py-2 rounded-full overflow-hidden font-Montserrat">
                            <span className="absolute inset-0 Montserrat bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-full p-[6px]"></span>
                            <span className="relative bg-white text-purple-600 px-4 py-2 rounded-full">
                                {service.buttonText} &rarr;
                            </span>
                        </button>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
