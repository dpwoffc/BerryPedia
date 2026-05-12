export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-6xl font-bold mb-10">
          About BerryPedia
        </h1>

        <p className="text-lg leading-9 text-gray-700">
          BerryPedia is a modern encyclopedia website focused
          on berry fruits from around the world.

          The platform provides detailed information about
          nutrition, vitamins, cultivation, health benefits,
          and scientific classifications.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-pink-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Nutrition
            </h2>

            <p className="text-gray-700">
              Learn nutritional values and vitamins.
            </p>
          </div>

          <div className="bg-pink-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Health
            </h2>

            <p className="text-gray-700">
              Discover berry fruit health benefits.
            </p>
          </div>

          <div className="bg-pink-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Encyclopedia
            </h2>

            <p className="text-gray-700">
              Explore berry species worldwide.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}