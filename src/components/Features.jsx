import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faFlask, faCertificate, faTruck } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    const features = [
        {
            icon: faLeaf,
            title: "Bahan Alami",
            description: "Menggunakan ekstrak alami tanpa bahan kimia berbahaya"
        },
        {
            icon: faFlask,
            title: "Teruji Dermatologi",
            description: "Telah lulus uji dermatologi untuk kulit sensitif anak"
        },
        {
            icon: faCertificate,
            title: "Bersertifikat BPOM",
            description: "Terdaftar resmi dan aman untuk digunakan"
        },
        {
            icon: faTruck,
            title: "Gratis Ongkir",
            description: "Pengiriman gratis untuk pembelian minimal 2 botol"
        }
    ];

    return (
        <section className="py-20 gradient-yellow-light">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex-shrink-0 w-12 h-12 gradient-yellow rounded-lg flex items-center justify-center text-white text-xl">
                                <FontAwesomeIcon icon={feature.icon} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
