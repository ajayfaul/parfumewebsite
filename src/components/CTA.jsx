import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGift, faClock } from '@fortawesome/free-solid-svg-icons';

const CTA = () => {
    return (
        <section className="py-24 gradient-yellow relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-zest-orange opacity-20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Urgency Badge */}
                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-zest-yellow-dark font-bold mb-8 shadow-xl animate-pulse">
                        <FontAwesomeIcon icon={faClock} />
                        <span>Promo Terbatas Hari Ini!</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Berikan Keharuman Terbaik untuk Si Kecil
                    </h2>

                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Dapatkan gratis ongkir untuk pembelian 2 botol hari ini. Buruan pesan sebelum kehabisan!
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                            <FontAwesomeIcon icon={faGift} />
                            <span className="font-semibold">Gratis Ongkir</span>
                        </div>
                        <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                            <FontAwesomeIcon icon={faGift} />
                            <span className="font-semibold">Bonus Sticker</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/6285155399440?text=Halo%20Zest%20%26%20Zo%2C%20saya%20tertarik%20dengan%20produknya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-zest-yellow-dark font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-lg"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
                        <span>Beli Sekarang via WhatsApp</span>
                    </a>

                    <p className="mt-6 text-white/80 text-sm">
                        📱 Respon cepat | 💯 Terpercaya | 🚚 Pengiriman ke seluruh Indonesia
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
