import React from "react";

export default function Portfolio() { return ( <div className="min-h-screen bg-gray-100 text-gray-800 p-6 font-sans"> {/* Header */} <header className="text-center py-10"> <h1 className="text-4xl font-bold mb-2">Hi, I'm JUMNA A</h1> <p className="text-lg text-gray-600">Frontend Developer & Tech Enthusiast</p> </header>

{/* Interests */}
  <section className="max-w-4xl mx-auto mt-12">
    <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-1">Interests</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Building beautiful and accessible UIs</li>
      <li>Learning new web technologies</li>
      <li>Exploring open-source projects</li>
      <li>Gaming and storytelling</li>
    </ul>
  </section>

  {/* Projects */}
  <section className="max-w-4xl mx-auto mt-12">
    <h2 className="text-2xl font-semibold mb-4 border-b-2 border-green-500 pb-1">Projects</h2>
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="bg-white rounded-2xl shadow p-4">
        <h3 className="text-xl font-bold">Portfolio Website</h3>
        <p className="text-gray-600">A personal website built using React and Tailwind CSS.</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-4">
        <h3 className="text-xl font-bold">To-Do App</h3>
        <p className="text-gray-600">A task manager using React Hooks and Tailwind for styling.</p>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="text-center mt-16 text-sm text-gray-500">
    <p>Made with React & Tailwind CSS</p>
  </footer>
</div>

); }