# Zest & Zo - Kids Perfume Landing Page 🍋

Welcome to the **Zest & Zo** project repository! This project is a modern, responsive, and vibrant landing page for a kids' perfume brand, built with **React**, **Vite**, and **TailwindCSS**. It features dynamic content management via **Contentful CMS** to showcase products effectively.

## ✨ Features

*   **Modern Design**: A fresh, playful, and premium yellow-themed UI tailored for a kids' brand.
*   **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices.
*   **Dynamic Product Catalog**: Fetches product data (names, images, descriptions, prices) directly from Contentful.
*   **Rich Text Support**: Renders formatted product descriptions using `@contentful/rich-text-react-renderer`.
*   **Smooth Animations**: Engaging scroll animations and hover effects for a delightful user experience.
*   **Interactive Sections**:
    *   **Hero**: Eye-catching introduction with call-to-action.
    *   **Why Us**: Highlights key benefits (Safe, Long-lasting, Unique).
    *   **Features**: Icon-based product advantages.
    *   **Product List**: Showcases available perfumes with "Best Seller" badges.
    *   **How to Use**: Step-by-step usage guide.
    *   **Social Proof**: Customer testimonials and trust badges.
    *   **FAQ**: Accordion-style frequently asked questions.
    *   **CTA**: Direct WhatsApp integration for easy purchasing.

## 🛠️ Tech Stack

*   **Frontend Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
*   **CMS**: [Contentful](https://www.contentful.com/)
*   **Icons**: [FontAwesome](https://fontawesome.com/)
*   **Fonts**: [Inter](https://fonts.google.com/specimen/Inter)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ajayfaul/parfumewebsite.git
    cd parfumewebsite
    ```

2.  **Install dependnecies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Visit `http://localhost:5173` to view the application.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory, ready for deployment.

## 📝 Content Management (Contentful)

This project uses Contentful to manage product data. The configuration is located in `src/lib/contentful.js`.

**Content Model (`parfumes`):**
*   `name` (Text): Name of the perfume.
*   `description` (Rich Text): Detailed description.
*   `price` (Number): Price in IDR.
*   `category` (Text): e.g., "Fruity - Floral".
*   `image` (Text): Direct URL string to the product image (S3 or similar).
*   `featured` (Text): Set to "Yes" to display the "Best Seller" badge.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Zest & Zo** - Wangi Ceria Si Kecil ✨
