import Link from "next/link";
import { fruits } from "../../data/fruits";

export default async function FruitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const fruit = fruits.find(
    (f) => f.slug === slug
  );

  if (!fruit) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Fruit Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="relative h-[500px]">

        <img
          src={fruit.image}
          alt={fruit.name}
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">

          <div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              {fruit.name}
            </h1>

            <p className="italic text-2xl">
              {fruit.scientific}
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10">

          {/* INFO */}
          <div className="bg-pink-50 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Fruit Information
            </h2>

            <div className="space-y-4 text-lg">

              <p>
                <strong>Origin:</strong>{" "}
                {fruit.origin}
              </p>

              <p>
                <strong>Color:</strong>{" "}
                {fruit.color}
              </p>

              <p>
                <strong>Season:</strong>{" "}
                {fruit.season}
              </p>

              <p>
                <strong>Vitamin:</strong>{" "}
                {fruit.vitamin}
              </p>

              <p>
                <strong>Calories:</strong>{" "}
                {fruit.calories}
              </p>

            </div>

          </div>

          {/* NUTRITION */}
          <div className="bg-black text-white rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Nutrition Facts
            </h2>

            <div className="space-y-4 text-lg">

              <p>
                <strong>Fiber:</strong>{" "}
                {fruit.nutrition.fiber}
              </p>

              <p>
                <strong>Sugar:</strong>{" "}
                {fruit.nutrition.sugar}
              </p>

              <p>
                <strong>Water:</strong>{" "}
                {fruit.nutrition.water}
              </p>

            </div>

          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="mt-14 bg-white border rounded-3xl p-10 shadow-lg">

          <h2 className="text-4xl font-bold mb-6">
            Description
          </h2>

          <p className="text-gray-700 text-lg leading-9">
            {fruit.description}
          </p>

        </div>

        {/* BENEFITS */}
        <div className="mt-10 bg-pink-50 rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-6">
            Health Benefits
          </h2>

          <p className="text-gray-700 text-lg leading-9">
            {fruit.benefits}
          </p>

        </div>

        {/* BUTTON */}
        <Link
          href="/"
          className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-2xl hover:bg-pink-600 transition"
        >
          Back To Home
        </Link>

      </section>

    </main>
  );
}