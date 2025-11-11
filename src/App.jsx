import React from 'react';
import logo from './assets/logo.jpg'; 
import { FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen antialiased text-gray-800">
      
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          <div>
            <h1 className="text-3xl font-bold text-green-700">CocoVoa</h1>
            <p className="text-gray-500 text-sm">Dari pangan lokal jadi solusi global untuk masyarakat menuju generasi tumbuh sehat</p>
          </div>

          <img 
            src={logo} 
            alt="Logo CocoVoa" 
            className="h-16" 
          />

        </div>
      </nav>

      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">CocoVoa</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Dari pangan lokal jadi solusi global untuk masyarakat menuju generasi tumbuh sehat.
          </p>
          <a 
            href="program" 
            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg
                       transition-all duration-300 transform 
                       hover:bg-orange-600 hover:scale-105 hover:shadow-xl"
          >
            Lihat Program Kami
          </a>
        </div>
      </header>

      <main id="program" className="container mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Lima Pilar Program CocoVoa
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 h-full">
            <h4 className="text-xl font-bold text-green-700 mb-4">1. Peningkatan Pengetahuan dan Keterampilan Masyarakat</h4>
            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 leading-relaxed">
              <li>Memberikan pelatihan pembuatan biskuit berprotein berbahan dasar Babavoa dan daging kelapa.</li>
              <li>Meningkatkan pengetahuan masyarakat tentang pengolahan bahan pangan lokal menjadi produk bergizi tinggi dan disukai anak-anak.</li>
              <li>Menumbuhkan inovasi lokal dalam pengembangan pangan fungsional untuk mendukung ketahanan pangan.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 h-full">
            <h4 className="text-xl font-bold text-green-700 mb-4">2. Penerapan Platform Digital "CocoVoa"</h4>
            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 leading-relaxed">
              <li>Platform digital digunakan untuk mencatat frekuensi konsumsi biskuit dan memantau pertumbuhan anak-anak secara real-time.</li>
              <li>Menjadi media komunikasi terpadu antara tim CocoVoa, kader posyandu, perangkat kelurahan, dan masyarakat.</li>
              <li>Mendukung edukasi interaktif dan literasi gizi masyarakat melalui fitur informasi dan pelaporan daring.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 h-full">
            <h4 className="text-xl font-bold text-green-700 mb-4">3. Pemberdayaan dan Partisipasi Aktif Masyarakat</h4>
            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 leading-relaxed">
              <li>Melibatkan kader posyandu, bidan kelurahan, dan warga setempat dalam seluruh tahapan program.</li>
              <li>Mendorong masyarakat menjadi pelaku aktif, bukan hanya penerima manfaat, dalam pemenuhan gizi keluarga.</li>
              <li>Meningkatkan kesadaran akan pentingnya konsumsi pangan bergizi dan pemanfaatan bahan lokal.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 h-full">
            <h4 className="text-xl font-bold text-green-700 mb-4">4. Pendampingan dan Evaluasi Berkelanjutan</h4>
            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 leading-relaxed">
              <li>Tim CocoVoa memberikan bimbingan teknis dan evaluasi rutin terhadap proses produksi biskuit dan hasil pemantauan digital.</li>
              <li>Menjamin keberlanjutan program melalui penguatan kapasitas masyarakat dalam pengolahan pangan dan penggunaan teknologi digital.</li>
              <li>Memastikan program berjalan efektif dan memberikan dampak nyata pada perbaikan status gizi anak-anak.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 md:col-span-2">
            <h4 className="text-xl font-bold text-green-700 mb-4">5. Dampak Sosial dan Ekonomi Lokal</h4>
            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 leading-relaxed">
              <li>Meningkatkan nilai tambah Babavoa dan kelapa sebagai komoditas lokal bernilai ekonomi tinggi.</li>
              <li>Mendukung kemandirian ekonomi masyarakat melalui peluang usaha kecil di bidang pangan bergizi.</li>
              <li>Berkontribusi terhadap penurunan prevalensi stunting, sekaligus memperkuat ketahanan pangan berbasis potensi lokal.</li>
            </ul>
          </div>
        </div>
      </main>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Keunggulan Gizi Bahan Baku
          </h3>
          <div className="max-w-4xl mx-auto bg-gray-50 p-6 md:p-10 rounded-lg shadow-lg border-t-4 border-green-500 
                          transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Informasi Nilai Gizi
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

              <div>
                <h5 className="text-xl font-semibold text-green-700 mb-4 pb-2 border-b border-green-200">
                  Babavoa
                </h5>
                <div className="divide-y divide-gray-200">
                  <div className="py-3">
                    <div className="flex justify-between text-gray-700">
                      <span className="mr-2">Protein:</span>
                      <span className="font-bold text-green-700 text-right">~31,2 g (~31,2 %)</span>
                    </div>
                    <div className="text-sm text-gray-500 text-right mt-1">
                      (jika berat kering per 100 g)
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="flex justify-between text-gray-700">
                      <span className="mr-2">Lemak (crude fat):</span>
                      <span className="font-bold text-right">~7,6 g (~7,6 %)</span>
                    </div>
                    <div className="text-sm text-gray-500 text-right mt-1">
                      (per 100 g)
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="flex justify-between text-gray-700">
                      <span className="mr-2">Karbohidrat:</span>
                      <span className="font-bold text-right">~36,9 g (~36,9 %)</span>
                    </div>
                    <div className="text-sm text-gray-500 text-right mt-1">
                      (per 100 g)
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="flex justify-between text-gray-700">
                      <span className="mr-2">Serat kasar (crude fibre):</span>
                      <span className="font-bold text-right">~9,9 g (~9,9 %)</span>
                    </div>
                    <div className="text-sm text-gray-500 text-right mt-1">
                      (per 100 g)
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="text-xl font-semibold text-orange-600 mb-4 pb-2 border-b border-orange-200">
                  Kelapa
                </h5>
                <ul className="space-y-3">
                  <li className="flex justify-between text-lg text-gray-700">
                    <span>Lemak:</span>
                    <span className="font-bold text-orange-600">~33 %</span>
                  </li>
                  <li className="flex justify-between text-lg text-gray-700">
                    <span>Karbohidrat:</span>
                    <span className="font-bold">~15 %</span>
                  </li>
                  <li className="flex justify-between text-lg text-gray-700">
                    <span>Protein:</span>
                    <span className="font-bold">~3 %</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Hubungi Kami
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Punya pertanyaan, masukan, atau tertarik untuk berkolaborasi dengan program kami? Kami sangat ingin mendengar dari Anda.
          </p>

          <a 
            href="mailto:emailanda@cocovoa.com"
            className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-10 rounded-full shadow-lg text-lg
                       transition-all duration-300 transform 
                       hover:bg-green-700 hover:scale-105 hover:shadow-xl"
          >
            <FaEnvelope className="mr-2" /> 
            Kirim Email
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-12 text-center">
        <div className="container mx-auto px-6">
          <p className="text-xl font-bold text-white mb-2">CocoVoa</p>
          <p>&copy; 2025 CocoVoa. Dari pangan lokal jadi solusi global untuk masyarakat menuju generasi tumbuh sehat</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
