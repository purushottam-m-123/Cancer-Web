export default function ContactForm() {
  return (
    <div id="contact" className="bg-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-pink-700">
        Contact Us
      </h2>

      <form className="max-w-xl mx-auto mt-10 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-200"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-200"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-200"
        ></textarea>

        <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
          Submit
        </button>
      </form>
    </div>
  );
}
