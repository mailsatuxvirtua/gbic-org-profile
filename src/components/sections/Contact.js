import { Mail, Phone, MapPin, Clock } from 'lucide-react';
//import { Button } from './ui/button';
//import { Input } from './ui/input';
//import { Textarea } from './ui/textarea';
//import { Card, CardContent } from './ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      details: 'Jl. Krakatau No.RT.002, RW.006, Karang Tim., Kec. Karang Tengah, Kota Tangerang, Banten 15157',
    },
    {
      icon: Phone,
      title: 'Nomor Telepon',
      details: '+62 889-8864-8656',
    },
//    {
//      icon: Mail,
//      title: 'Surel',
//      details: 'mail.gbic@gmail.com',
//    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-3 md:mb-4 px-4">Kontak Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Silahkan kontak kami jika ada pertanyaan seputar ibadah dan persekutuan.
          </p>
        </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-1 text-base md:text-lg">{info.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">{info.details}</p>
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="mt-6 md:mt-8 h-48 sm:h-56 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <MapPin className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
