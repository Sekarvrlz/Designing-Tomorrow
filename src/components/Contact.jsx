export function Contact() {
    return (
      <footer className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 text-center text-sm">
        <p>
          Kontak:{" "}
          <a
            href="mailto:sekar.122140108@student.itera.ac.id"
            className="underline hover:text-gray-200"
          >
            sekar.122140108@student.itera.ac.id
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/sekar-avrlz-862a49298"
            className="underline hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="mt-2 text-xs">© 2025 Sekar Avriliza Putri</p>
      </footer>
    );
  }
  