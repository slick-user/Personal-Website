function SkillsSection({ skills }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Skills & Technologies
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg top-24">
            <h3 className="text-2xl font-bold mb-4 text-center"> 
              Skills 
            </h3>
          </div>
          {Object.entries(skills)
            .filter(([category]) => category !== "Technologies")
            .map(([category, value]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 capitalize">
                  {category.replace(/_/g, " ")}
                </h3>

                {Array.isArray(value) && (
                  <div className="flex flex-wrap gap-2">
                    {value.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg sticky top-24">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Technologies
            </h3>

            {Object.entries(skills.Technologies).map(
              ([subCategory, items]) => (
                <div key={subCategory}>
                  <h4 className="text-md font-semibold mb-2 text-gray-700">
                    {subCategory.replace(/([A-Z])/g, " $1")}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

