import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faShieldAlt, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

const Why = () => {
    const benefits = [
        {
            icon: faShieldAlt,
            title: "100% Aman untuk Anak",
            description: "Diformulasikan khusus dengan bahan alami yang aman dan lembut untuk kulit anak.",
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: faStar,
            title: "Wangi Tahan Lama",
            description: "Aroma segar yang menemani aktivitas bermain si kecil seharian penuh.",
            color: "bg-yellow-50 text-yellow-600"
        },
        {
            icon: faSmile,
            title: "Karakter Unik",
            description: "Setiap varian memiliki karakter unik yang disenangi anak-anak.",
            color: "bg-green-50 text-green-600"
        },
        {
            icon: faHeart,
            title: "Dipercaya Bunda",
            description: "Telah dipercaya ribuan bunda di seluruh Indonesia untuk si kecil.",
            color: "bg-pink-50 text-pink-600"
        }
    ];

    return (
        <section id="why" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Kenapa Memilih <span className="text-gradient">Zest & Zo?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dibuat dengan cinta untuk si kecil, dengan standar kualitas terbaik
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 card-hover group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`inline-flex items-center justify-center w-20 h-20 ${benefit.color} rounded-2xl mb-6 text-4xl transform group-hover:scale-110 transition-transform duration-300`}>
                                <FontAwesomeIcon icon={benefit.icon} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;
