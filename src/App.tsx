import React from 'react'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl font-bold">AI for Sheets</h1>
      </header>
      <main className="flex-grow p-4">
        <h2 className="text-xl mb-4">Welcome to AI for Sheets</h2>
        <p>Transform your spreadsheets with the power of AI.</p>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} AI for Sheets</p>
      </footer>
    </div>
  )
}

export default App 