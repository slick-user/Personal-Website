function Certifications({ certifications }) {
  return (
    <section className="mt-12 px-8 py-10 bg-horizon4  rounded-3xl">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-horizon1 to-horizon3 text-transparent bg-clip-text text-center mb-12">
        Certifications
      </h2>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="flex flex-col">
            
            {/* Header */}
            <div className="flex items-center gap-6 mb-6">
              <h3 className="text-2xl font-bold text-black whitespace-nowrap">
                {cert.title}
              </h3>
              <div className="flex-grow border-t-2 border-horizon2"></div>
            </div>

            {/* Content Card */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-xl transition-transform hover:scale-[1.01]">
              
              {/* Image */}
              <div className="w-full md:w-2/4 flex-shrink-0">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-auto object-contain rounded-lg shadow-md border-4 border-white/10"
                />
              </div>

              {/* Larger Text Details */}
              <div className="flex flex-col flex-1 justify-center space-y-4 h-full">
                <div className="space-y-1">
                  <p className="text-xl text-horizon1">
                    <span className="font-semibold text-black">Date:</span> <u> {cert.date} </u>
                  </p>
                  <p className="text-xl text-horizon1">
                    <span className="font-semibold text-black"> Issuer:</span> <u> {cert.issuer} </u>
                  </p>

                  {/* Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block w-fit px-8 py-3 bg-horizon1 text-white rounded-xl font-bold text-lg hover:bg-wallsMaroon transition-all shadow-lg active:transform active:scale-95"
                  >
                    Verify Certificate </a>
                </div>
                
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
