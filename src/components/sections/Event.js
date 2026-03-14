import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export function Events() {
  const events = [
    {
      title: 'Community Food Drive',
      date: 'November 5, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Church Parking Lot',
      type: 'Outreach',
      description: 'Join us in collecting food donations for local families in need.',
    },
    {
      title: 'Christmas Celebration',
      date: 'December 24, 2025',
      time: '6:00 PM',
      location: 'Main Sanctuary',
      type: 'Special Service',
      description: 'A special candlelight service celebrating the birth of Jesus.',
    },
    {
      title: 'Youth Winter Retreat',
      date: 'January 15-17, 2026',
      time: 'All Weekend',
      location: 'Mountain View Camp',
      type: 'Youth',
      description: 'A transformative weekend for teens with worship, teaching, and fun.',
    },
  ];

  return (
    <section id="events" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="mb-3 lg:mb-4 px-4">Acara Mendatang</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 text-base md:text-lg">
            Bergabunglah! Mari beribadah dan bersekutu bersama di persekutuan berikutnya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={event.title}
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border-none shadow-lg group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex-1 p-5 md:p-6 lg:p-7">
                <div className="flex items-start justify-between mb-3 lg:mb-4">
                </div>
                <CardTitle className="text-lg lg:text-xl mb-2.5 group-hover:text-blue-600 transition-colors duration-200">{event.title}</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5 lg:space-y-3 p-5 md:p-6 lg:p-7 pt-0 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group/item">
                  <Calendar className="w-4 h-4 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs md:text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group/item">
                  <Clock className="w-4 h-4 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs md:text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group/item">
                  <MapPin className="w-4 h-4 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs md:text-sm">{event.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
