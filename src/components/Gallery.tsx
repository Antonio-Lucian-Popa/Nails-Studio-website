export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Manichiură Elegantă'
    },
    {
      url: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Design French'
    },
    {
      url: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Culori Vibrante'
    },
    {
      url: 'https://images.pexels.com/photos/3992859/pexels-photo-3992859.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nail Art'
    },
    {
      url: 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pedichiură Perfectă'
    },
    {
      url: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Unghii cu Gel'
    }
  ];

  return (
    <section id="galerie" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galerie
          </h2>
          <p className="text-lg text-gray-600">
            Descoperă creativitatea și perfecțiunea în fiecare detaliu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-medium text-lg">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
