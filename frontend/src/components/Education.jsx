function Education({ education }) {
  return (
    <section className="mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      <div className="text-center">
        <div className="flex items-center justify-center gap-3">
          <h3 className="text-2xl font-semibold text-blue-400">{education.institution}</h3>
          <img src="/nuces.png" alt="FAST NUCES Logo" width="30" height="30"/>
        </div>
        <p className="text-xl font-bold text-green-400 mt-2">{education.degree}</p>
        <p className="text-yellow-400 font-medium mt-4 max-w-2xl mx-auto">{education.description}</p>
      </div>
    </section>
  );
}

export default Education;

