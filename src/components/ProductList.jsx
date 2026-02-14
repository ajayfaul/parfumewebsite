import React, { useEffect, useState } from 'react';
import { client } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'parfumes'
                });
                setProducts(response.items);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-zest-yellow border-t-transparent"></div>
                <p className="mt-4 text-gray-600">Memuat produk...</p>
            </div>
        );
    }

    return (
        <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Koleksi <span className="text-gradient">Zest & Zo</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Pilih parfum favorit si kecil dari berbagai karakter menarik
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => {
                        const { name, description, price, category, image, featured } = product.fields;
                        const imageUrl = image;

                        return (
                            <div
                                key={product.sys.id}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden card-hover group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {imageUrl && (
                                    <div className="h-72 overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100">
                                        {featured && featured !== "No" && (
                                            <span className="absolute top-4 right-4 gradient-yellow text-white text-xs font-bold px-4 py-2 rounded-full z-10 shadow-lg flex items-center gap-1">
                                                <FontAwesomeIcon icon={faStar} className="text-sm" />
                                                Best Seller
                                            </span>
                                        )}
                                        <img
                                            src={imageUrl}
                                            alt={name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="inline-block px-3 py-1 bg-zest-yellow-light text-zest-yellow-dark text-xs font-semibold rounded-full mb-3">
                                        {category}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{name}</h3>
                                    <div className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                                        {description && description.nodeType === 'document'
                                            ? documentToReactComponents(description)
                                            : description}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                        <div>
                                            <span className="text-sm text-gray-500">Harga</span>
                                            <p className="text-2xl font-bold text-gray-900">
                                                Rp {price?.toLocaleString('id-ID')}
                                            </p>
                                        </div>
                                        <button className="gradient-yellow text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                                            Beli
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
