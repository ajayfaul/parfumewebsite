import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Apakah Zest & Zo aman untuk anak?",
            answer: "Ya, sangat aman! Produk kami diformulasikan khusus untuk kulit sensitif anak, telah teruji dermatologi, dan terdaftar resmi di BPOM."
        },
        {
            question: "Berapa lama ketahanan wangi parfumnya?",
            answer: "Wangi Zest & Zo dapat bertahan hingga 6-8 jam, tergantung aktivitas anak. Formulasi khusus kami memastikan aroma tetap segar sepanjang hari."
        },
        {
            question: "Mulai usia berapa anak bisa menggunakan Zest & Zo?",
            answer: "Zest & Zo aman digunakan untuk anak usia 3 tahun ke atas. Untuk anak di bawah 3 tahun, konsultasikan dengan dokter terlebih dahulu."
        },
        {
            question: "Bagaimana cara penyimpanan yang benar?",
            answer: "Simpan di tempat kering, sejuk, dan terhindar dari sinar matahari langsung. Pastikan tutup botol tertutup rapat setelah digunakan."
        },
        {
            question: "Apakah tersedia dalam ukuran travel size?",
            answer: "Saat ini produk kami tersedia dalam ukuran 50ml yang praktis untuk dibawa kemana saja. Ukuran travel size sedang dalam pengembangan."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Pertanyaan <span className="text-gradient">Umum</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Temukan jawaban untuk pertanyaan yang sering ditanyakan
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`text-zest-yellow-dark transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
