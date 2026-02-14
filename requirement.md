Spec Bisnis, Desain, Teknis, Data

Buatkan saya website berbasis reactjs terbaru dengan vite versi javascript untuk brand parfum "Zest & Zo" dimana dia menyediakan produk parfume untuk anak yang beda dari yang lain dan memiliki karakter tersendiri. Dalam website ini atau landing page ini gunakan copywriting yang baik sehingga bisa menarik konsumen dalam mengklik tombol beli.

Dalam prinsipnya gunakan teknik marketing AIDA.

Gunakan flat design dalam css(tailwindcss) di web ini dengan basic warna (kuning dan turunannya) dengan color pallete yang sesuai, design responsive. Gunakan icon dari fontawesome, jangan gunakan emoji web.

Dalam struktur web ini gunakan section seperti:
- Hero
- Why
- Product List
- CTA (Tombol ini mengarah ke prefill text whatsapp ke nomor 085155399440)
- Social Proof
- Dan section lain yang relevan dalam konsep AIDA
Catatan : jangan terlalu banyak section sehingga membuat orang lama berifikir, mungkin max 6 saja.

Pada product list silahkan consume data dari Contentful CMS, gunakan library contentful yang sudah proven, jangan membuat fetch sendiri. Dengan credentials:
- Spaces ID "f30o17mmk4x4"
- Access Token "Wuvm6B9ODhLsm4qnExryZXK-ucIajaMPjArl0LSd9HM"
- Content Type: "parfumes"

Field yang digunakan dalam consume API ini adalah:
- name
- description
- price
- category
- image
- featured

Jangan ambil field lain karena tidak ada, ikuti yang tertulis saja.