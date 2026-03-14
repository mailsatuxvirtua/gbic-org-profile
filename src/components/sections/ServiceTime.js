import { Clock, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export function ServiceTime() {
  const services = [
    {
      title: 'Ibadah Minggu',
      time: 'Minggu - 9:00',
      description: 'Mari kita beribadah',
      icon: Clock,
    },
    {
      title: 'Persekutuan Doa',
      time: 'Rabu - 19:00',
      description: 'Mari bersekutu dalam doa',
      icon: Calendar,
    },
    {
      title: 'Sekolah Minggu',
      time: 'Minggu - 11:00',
      description: 'Mari belajar alkitab berasama, terdapat kelas untuk semua umur',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="mb-3 lg:mb-4 px-4">Jadwal Persekutuan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 text-base md:text-lg">
            Mari beribadah dan bersekutu bersama
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-md group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3 pt-6 md:pt-8">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-blue-600">
                    {service.time}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6 md:pb-8">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
