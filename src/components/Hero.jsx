import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center gradient-yellow-light overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-zest-yellow opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-zest-orange opacity-20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="animate-fade-in-up">
                        <span className="inline-block px-4 py-2 bg-white rounded-full text-zest-yellow-dark font-semibold text-sm mb-6 shadow-md">
                            ✨ Parfum Anak Terbaik Indonesia
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Zest & Zo
                        <span className="block text-gradient mt-2">Wangi Ceria Si Kecil</span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Parfum anak dengan karakter unik yang membuat hari-hari si kecil lebih berwarna dan percaya diri. 100% aman dan tahan lama.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <a
                            href="#products"
                            className="inline-block gradient-yellow text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                        >
                            Lihat Koleksi
                        </a>
                        <a
                            href="#why"
                            className="inline-block bg-white text-zest-yellow-dark font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-zest-yellow"
                        >
                            Kenapa Zest & Zo?
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
                <a href="#why" className="text-zest-yellow-dark text-2xl">
                    <FontAwesomeIcon icon={faChevronDown} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
