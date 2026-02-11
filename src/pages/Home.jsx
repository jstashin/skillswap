import { useEffect } from "react";
import { useLoaderData } from "react-router";
import AOS from "aos";
import Banner from "./Banner";
import Skills from "./Skills";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  const data = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div>
      <Banner />

      <div data-aos="fade-up">
        <Skills data={data} />
      </div>

     
      <section className="max-w-6xl mx-auto p-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3">Top Rated Providers</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Sara Hossain", skill: "English Practice", rating: 4.9 },
            { name: "Ravi Kumar", skill: "Python Data Analysis", rating: 4.8 },
            { name: "Anita Roy", skill: "Yoga", rating: 4.8 },
          ].map((p, id) => (
            <div key={id} className="card bg-base-100 shadow p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.skill}</p>
              <p className="text-sm"><FaStar />{p.rating}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto p-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow p-4">
            <h3 className="font-semibold">1. Browse Skills</h3>
            <p className="text-sm text-gray-500">Choose a skill you want to learn locally.</p>
          </div>
          <div className="card bg-base-100 shadow p-4">
            <h3 className="font-semibold">2. View Details</h3>
            <p className="text-sm text-gray-500">Login required to see details and book.</p>
          </div>
          <div className="card bg-base-100 shadow p-4">
            <h3 className="font-semibold">3. Book Session</h3>
            <p className="text-sm text-gray-500">Submit a simple form.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3">Community Guidelines</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Be respectful and punctual for sessions.</li>
          <li>Keep communication friendly and clear.</li>
          <li>Rate honestly to help others choose better.</li>
        </ul>
      </section>
    </div>
  );
}
