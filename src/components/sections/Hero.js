import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1679513484176-a9a73876ed04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc2MTQwNDA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Church Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
        <p className="mb-4 md:mb-6 max-w-4xl mx-auto px-4 text-4xl">
          Gereja Baptis Indonesia Ciledug
        </p>
        <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-gray-200 px-4">
          Setia Sampai Akhir
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
          <button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto rounded-full px-8 py-3 ">
            Jadwal Ibadah
          </button>
          <button size="lg" variant="outline" className="text-white border-white border-2 hover:bg-white/10 w-full sm:w-auto rounded-full px-8 py-3">
            Nonton Online
          </button>
        </div>
      </div>
    </section>
  );
}
