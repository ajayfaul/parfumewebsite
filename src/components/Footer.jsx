import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-bold text-gradient mb-4">Zest & Zo</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Parfum anak dengan karakter unik yang membuat hari-hari si kecil lebih berwarna.
                            100% aman, teruji dermatologi, dan dipercaya ribuan bunda di Indonesia.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-zest-yellow rounded-full flex items-center justify-center transition-colors duration-300">
                                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                            </a>
                            <a href="https://wa.me/6285155399440" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-zest-yellow rounded-full flex items-center justify-center transition-colors duration-300">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-zest-yellow rounded-full flex items-center justify-center transition-colors duration-300">
                                <FontAwesomeIcon icon={faTiktok} className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Menu</h4>
                        <ul className="space-y-3">
                            <li><a href="#products" className="text-gray-400 hover:text-zest-yellow transition-colors">Produk</a></li>
                            <li><a href="#why" className="text-gray-400 hover:text-zest-yellow transition-colors">Tentang Kami</a></li>
                            <li><a href="#faq" className="text-gray-400 hover:text-zest-yellow transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Kontak</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-2">
                                <FontAwesomeIcon icon={faWhatsapp} className="mt-1" />
                                <span>0851-5539-9440</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
                                <span>hello@zestzo.id</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1" />
                                <span>Jakarta, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zest & Zo. All rights reserved.</p>
                    <p>Terdaftar resmi di BPOM RI</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
