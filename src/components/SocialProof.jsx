import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SocialProof = () => {
    const testimonials = [
        {
            name: "Bunda Rina",
            location: "Jakarta",
            comment: "Zest & Zo wanginya enak banget! Anak saya jadi lebih percaya diri dan senang pakai parfum sendiri. Tahan lama pula!",
            rating: 5,
            avatar: "👩"
        },
        {
            name: "Mama Dito",
            location: "Bandung",
            comment: "Kemasan lucu dan aman buat anak. Sudah beli 3 varian, semuanya bagus. Recommended banget buat kado ulang tahun!",
            rating: 5,
            avatar: "👩‍🦱"
        },
        {
            name: "Ibu Susi",
            location: "Surabaya",
            comment: "Akhirnya nemu parfum anak yang wanginya gak nyengat. Lembut dan fresh. Anak-anak suka semua!",
            rating: 5,
            avatar: "👩‍🦰"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Apa Kata <span className="text-gradient">Bunda?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dipercaya oleh ribuan bunda di seluruh Indonesia
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-zest-yellow-light to-white p-8 rounded-3xl shadow-lg card-hover"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Avatar */}
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 gradient-yellow rounded-full flex items-center justify-center text-3xl shadow-md">
                                    {t.avatar}
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <p className="text-sm text-gray-600">{t.location}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 text-zest-yellow mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-700 italic leading-relaxed">"{t.comment}"</p>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
                    <div className="px-6">
                        <div className="text-4xl font-bold text-gradient mb-1">5000+</div>
                        <div className="text-gray-600">Bunda Puas</div>
                    </div>
                    <div className="px-6">
                        <div className="text-4xl font-bold text-gradient mb-1">4.9★</div>
                        <div className="text-gray-600">Rating Produk</div>
                    </div>
                    <div className="px-6">
                        <div className="text-4xl font-bold text-gradient mb-1">100%</div>
                        <div className="text-gray-600">Aman</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
