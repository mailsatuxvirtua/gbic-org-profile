import { Heart, Users, BookOpen, Globe } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Love',
      description: 'Sehat Dalam Iman (pendidikan)',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Erat Dalam Persaudaraan (persekutuan)',
    },
    {
      icon: BookOpen,
      title: 'Truth',
      description: 'Tekun Dalam  (penyembahan)',
    },
    {
      icon: Globe,
      title: 'Service',
      description: 'Inovatif Dalam Bersaksi (penginjilan)',
    },
    {
      icon: Globe,
      title: 'Service',
      description: 'Adil dan Benar Dalam Perbuatan (pelayanan)',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Image */}
          <div className="relative h-72 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] rounded-2xl lg:rounded-3xl overflow-hidden order-2 lg:order-1 shadow-2xl group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzYxMzc0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community Gathering"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-4 lg:mb-6">About Our Church</h2>
            <p className="mb-8 lg:mb-10 text-gray-600 text-base md:text-lg leading-relaxed">
              Grace Community Church has been a beacon of hope and faith in our community
              for over 30 years. We're a diverse family of believers committed to knowing
              Christ and making Him known.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex gap-3 lg:gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300 hover:shadow-md group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-11 h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1.5 lg:mb-2 text-base lg:text-lg">{value.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
