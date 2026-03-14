"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export function Ministries() {
  const ministries = [
    {
      title: 'Paduan Suara',
      description: 'Mari berlatih bernyanyi untuk memuji Tuhan',
      image: 'https://images.unsplash.com/photo-1543702404-38c2035462ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjBwcmF5ZXJ8ZW58MXx8fHwxNzYxNDA0MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'KPW ()',
      description: 'Mari bersekutu bersama dengan kelompok kecil di sekitar kita',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYxMzk4NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Pelatihan Pemusik',
      description: 'Mari berlatih bersama untuk pelayanan musik',
      image: 'https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzYxMzc0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Sekolah Minggu',
      description: 'Mari belajar alkitab bersama, tersedia berbagai macam kelas kelompok umur, dari balita sampai dewasa',
      image: 'https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzYxMzc0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'KMBI & KRBI',
      description: 'Mari bersekutu bersama dengan kaum muda dan kaum remaja Baptis Ciledug',
      image: 'https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzYxMzc0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'WBI & PBI',
      description: 'Mari bersekutu bersama dengan wanita dan pria Baptis Ciledug',
      image: 'https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzYxMzc0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="ministries" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="mb-3 lg:mb-4 px-4">Pelayanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 text-base md:text-lg">
            Mari bertumbuh dan melayani bersama
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {ministries.map((ministry, index) => (
            <Card
              key={ministry.title}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-52 md:h-60 lg:h-64 overflow-hidden relative">
                <ImageWithFallback
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <CardHeader className="p-5 md:p-6 lg:p-7">
                <CardTitle className="text-lg lg:text-xl mb-2.5 group-hover:text-blue-600 transition-colors duration-200">{ministry.title}</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed">{ministry.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
