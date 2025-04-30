import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

export function About() {
  const [fadeInAbout, setFadeInAbout] = useState(false);
  const [fadeInProjects, setFadeInProjects] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeInAbout(true), 150);
    const timer2 = setTimeout(() => setFadeInProjects(true), 400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-100 to-purple-100 py-10 px-4">
      {/* CARD CONTAINER */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl transition-all duration-700 ease-out">
        {/* ABOUT */}
        <div
          className={`flex flex-col items-center text-center mb-10 transition-all duration-1000 ease-out transform ${
            fadeInAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={profileImg}
            alt="Foto Sekar Avriliza Putri"
            className="w-40 h-40 rounded-full mb-4 shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
          <h2 className="text-3xl font-semibold mb-2 text-indigo-700 drop-shadow-md">
            Sekar Avriliza Putri
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Mahasiswa Informatika ITERA
          </p>
          <p className="text-justify text-gray-600 leading-relaxed">
            Mahasiswa Informatika ITERA dengan minat di bidang UI/UX dan pengembangan antarmuka digital.
            Berpengalaman dalam desain aplikasi dan website menggunakan Figma. Memahami prinsip usability dan
            user-centered design. Terbiasa bekerja dalam tim dan cepat beradaptasi dengan tantangan baru.
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/sekar-avrlz-862a49298/"
              className="text-indigo-600 hover:text-indigo-800 font-medium transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sekar.122140108@student.itera.ac.id"
              className="text-indigo-600 hover:text-indigo-800 font-medium transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* PROJECTS */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            fadeInProjects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700 text-center drop-shadow">
            Portofolio Proyek
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Website Pencegahan Stunting",
                link: "https://posyandukartika.vercel.app/beranda.html",
                label: "Lihat",
              },
              {
                title: "UI/UX Website Wisata",
                link: "https://www.figma.com/design/hSC4nexMf16l266U9BT4Z8/Sini-Geh-Design",
                label: "Figma",
              },
              {
                title: "EcoCash - Aplikasi Finansial",
                link: "https://www.figma.com/design/FdOPhl8ftvpn7wkGhPUV1K/EcoCash?node-id=2564-443",
                label: "Figma",
              },
              {
                title: "Book Binder - Aplikasi Manajemen Buku",
                link: "https://book-binder.vercel.app/",
                label: "Lihat",
              },
              {
                title: "Tugas Interaktif UI",
                link: "https://tugasin-six.vercel.app/",
                label: "Lihat",
              },
              {
                title: "UTS Pemrograman Web",
                link: "https://uts-pemrograman-web-122140108.vercel.app/",
                label: "Lihat",
              },
            ].map((project, index) => (
              <li
                key={index}
                className="p-4 rounded-lg border border-gray-200 bg-white hover:border-indigo-500 hover:shadow-xl hover:bg-indigo-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                <strong className="font-semibold text-lg block mb-2 text-gray-800">
                  {project.title}
                </strong>
                <a
                  href={project.link}
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
