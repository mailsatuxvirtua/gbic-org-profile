import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {

  const contactInfo = [
    {
      title: 'Alamat',
      details: 'Jl. Krakatau No.RT.002, RW.006, Karang Tim., Kec. Karang Tengah, Kota Tangerang, Banten 15157',
    },
    {
      title: 'Nomor Telepon',
      details: '+62 889-8864-8656',
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white">✝</span>
              </div>
              <span className="text-base md:text-lg">Gereja Baptis Ciledug</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              A place where faith meets fellowship and lives are transformed by God's grace.
            </p>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="mb-3 md:mb-4 text-base md:text-lg">Pelayanan</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-400 grid grid-cols-2">
              <li>Paduan Suara</li>
              <li>KPW</li>
              <li>Pelatihan Musik</li>
              <li>Sekolah Minggu</li>
              <li>KMBI & KRBI</li>
              <li>PBI & WBI</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-3 md:mb-4 text-base md:text-lg">Media Sosial Kami</h4>
            <div className="flex gap-3 md:gap-4 flex-wrap">
              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2026 Gereja Baptis Indonesia Ciledug.</p>
          <p>Powered by Satux Virtua</p>
        </div>
      </div>
    </footer>
  );
}
