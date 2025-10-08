const Education = () => {
  return (
    <section id="education" className="pt-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="lg:text-5xl text-orange  font-bold text-4xl mb-8 text-center">
          Education
        </h2>

        <div className="space-t-6">
          <div className="p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              M.Sc. in Botany
            </h3>
            <p>
              National University, Bangladesh <br /> Completed: 2012
            </p>
          </div>

          <div className="p-6 rounded-lg shadow">
            <h2 className="pb-6  text-orange  font-bold text-4xl mb-8 text-center">
              Certifications & Training
            </h2>
            <h3 className="text-xl font-semibold">
              Complete Web Development Course
            </h3>
            <p>
              Programming Hero <br />
              Completed: 2025 <br />
              Skills: HTML, CSS, JavaScript, React.js, <br /> Node.js, Express.js, MongoDB, Tailwind CSS, Firebase, <br /> JWT Authentication, Stripe Payment Integration <br/> Next.js, Mongoose, NextAuth (OTP), SSLCommerz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
