export default function About() {
  return (
    <div className="w-full min-h-screen bg-pink-50 pt-24 px-6 pb-20 flex justify-center">
      <div className="max-w-5xl bg-white shadow-xl rounded-2xl p-10">
        
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6 text-center">
          About Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Our mission is to build awareness, provide support, and offer trusted information
          related to cancer. We aim to empower individuals through education, guidance,
          and emotional support.
        </p>

        {/* Image Section */}
        <div className="flex justify-center mb-10">
          <img
            src="https://imgs.search.brave.com/dcrglRAYqauelfbCP0vwVDIfDLz6VDXfQKwfvEd5iB0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/NjQyLzQ0NC9zbWFs/bC9vY3RvYmVyLWJy/ZWFzdC1jYW5jZXIt/YXdhcmVuZXNzLW1v/bnRoLXBpbmstcmli/Ym9uLXdpdGgtaG9w/ZS10ZXh0LW9uLXBp/bmstYmFja2dyb3Vu/ZC1mb3Itc3VwcG9y/dGluZy1wZW9wbGUt/bGl2aW5nLWFuZC1p/bGxuZXNzLWludGVy/bmF0aW9uYWwtd29t/ZW4tbW90aGVyLWFu/ZC13b3JsZC1jYW5j/ZXItZGF5LWNvbmNl/cHQtcGhvdG8uanBn
"            alt="Cancer Awareness"
            className="rounded-xl shadow-lg w-full md:w-3/4"
          />
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-pink-100 p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
              Our Purpose
            </h2>
            <p className="text-gray-700">
              We aim to spread awareness about early detection, prevention, and symptoms
              of cancer. Our website serves as a reliable source for individuals and families 
              seeking guidance.
            </p>
          </div>

          <div className="bg-pink-100 p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
              What We Do
            </h2>
            <p className="text-gray-700">
              We provide motivational quotes, educational resources, and emotional support.
              We believe no one should fight alone — awareness and unity save lives.
            </p>
          </div>

        </div>

        {/* Vision */}
        <div className="mt-12 bg-white p-8 rounded-xl border border-pink-200 shadow">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            To create a global community where knowledge, prevention, and compassion 
            come together to fight cancer and support everyone affected by it.
          </p>
        </div>

      </div>
    </div>
  );
}
