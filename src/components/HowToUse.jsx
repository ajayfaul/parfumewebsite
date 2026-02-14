import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCan, faChild, faSmile } from '@fortawesome/free-solid-svg-icons';

const HowToUse = () => {
    const steps = [
        {
            icon: faSprayCan,
            title: "Kocok Botol",
            description: "Kocok botol parfum dengan lembut sebelum digunakan"
        },
        {
            icon: faChild,
            title: "Semprotkan",
            description: "Semprotkan pada pakaian atau rambut si kecil dari jarak 20cm"
        },
        {
            icon: faSmile,
            title: "Siap Beraktivitas",
            description: "Si kecil siap beraktivitas dengan wangi segar sepanjang hari"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Cara <span className="text-gradient">Penggunaan</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Mudah digunakan, aman untuk si kecil
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-zest-yellow via-zest-orange to-zest-yellow"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="flex flex-col items-center text-center">
                                    {/* Step Number */}
                                    <div className="w-16 h-16 gradient-yellow rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg relative z-10">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-20 h-20 bg-zest-yellow-light rounded-2xl flex items-center justify-center text-zest-yellow-dark text-3xl mb-4">
                                        <FontAwesomeIcon icon={step.icon} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToUse;
