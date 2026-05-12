import Link from "next/link";
import { fruits } from "./data/fruits";

import {
  Apple,
  Search,
  Leaf,
  HeartPulse,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Apple className="text-pink-500 w-8 h-8" />

            <h1 className="text-2xl font-bold">
              BerryPedia
            </h1>
          </div>

          <div className="flex gap-8 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
          alt="berries"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-5 py-2 rounded-full mb-8">
            <Leaf className="w-5 h-5" />
            Natural Berry Encyclopedia
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Discover Amazing
            <span className="block text-pink-400">
              Berry Fruits
            </span>
          </h1>

          <p className="mt-8 text-xl text-white/90">
            Explore detailed information about berry fruits,
            nutrition, cultivation, and health benefits.
          </p>

        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex items-center gap-4 bg-white shadow-xl rounded-3xl p-5 border -mt-32 relative z-20">

          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search fruits..."
            className="w-full outline-none text-lg"
          />

        </div>

      </section>

      {/* FRUITS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Featured Fruits
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Detailed berry fruit encyclopedia.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {fruits.map((fruit) => (

            <div
              key={fruit.slug}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border hover:-translate-y-2 transition"
            >

              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-3xl font-bold mb-2">
                  {fruit.name}
                </h3>

                <p className="italic text-gray-500 mb-4">
                  {fruit.scientific}
                </p>

                <div className="space-y-2 text-sm text-gray-700">

                  <p>
                    <span className="font-semibold">
                      Origin:
                    </span>{" "}
                    {fruit.origin}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Calories:
                    </span>{" "}
                    {fruit.calories}
                  </p>

                </div>

                <Link
                  href={`/fruits/${fruit.slug}`}
                  className="mt-6 block text-center bg-black text-white py-3 rounded-2xl hover:bg-pink-600 transition"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* BENEFITS */}
      <section className="bg-pink-50 py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <HeartPulse className="mx-auto text-pink-500 w-16 h-16 mb-6" />

          <h2 className="text-5xl font-bold mb-6">
            Berry Health Benefits
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Berry fruits contain vitamins, minerals,
            antioxidants, and fibers beneficial for health.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 text-center">

        <h3 className="text-3xl font-bold mb-4">
          BerryPedia
        </h3>

        <p className="text-gray-400">
          © 2026 BerryPedia. All rights reserved.
        </p>

      </footer>

    </main>
  );
}