import { useState } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useNavbarScroll } from './hooks/useNavbarScroll'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Specs } from './components/Specs'
import { Benefits } from './components/Benefits'
import { SeriesSection } from './components/SeriesSection'
import { ProductModal } from './components/ProductModal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import type { Series } from './data/product'
import './App.css'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Series | null>(null)

  useScrollReveal()
  useNavbarScroll()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Specs />
        <Benefits />
        <SeriesSection onProductClick={setSelectedProduct} />
        <Contact />
      </main>
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}

export default App
