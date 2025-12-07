export default function Hero() {
  return (
    <div id="home" className="bg-pink-100 text-center py-28 px-4 mt-16">
      <h1 className="text-4xl font-bold text-pink-700">
        Cancer Awareness & Support
      </h1>

      <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
        Early detection saves lives. Spread awareness, support the fighters, 
        and bring hope to those who need it the most.
      </p>

      <img
        className="mt-10 w-full max-w-2xl mx-auto rounded-xl shadow-lg"
        src="https://images.unsplash.com/photo-1604881991720-f91add269bed"
        alt="Cancer Awareness Banner"
      />
    </div>
  );
}
