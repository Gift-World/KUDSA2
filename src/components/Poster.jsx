import ConferencePoster from './ConferencePoster'
import PosterHighlight from './PosterHighlight'
import PosterAnimation from './PosterAnimation'
// import './Poster.css'

function Poster() {
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Conference Showcase
        </h1>
        <p className="text-gray-600">
          Featuring the 1st International Multidisciplinary Conference
        </p>
      </header>
      
      <main className="relative max-w-5xl mx-auto">
        <PosterHighlight>
          <ConferencePoster />
          <PosterAnimation />
        </PosterHighlight>
        
        
      </main>
      
     
    </div>
  )
}

export default Poster