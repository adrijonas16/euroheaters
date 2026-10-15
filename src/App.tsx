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
import { QuoteForm } from './components/QuoteForm'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import type { Series } from './data/product'
import './App.css'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Series | null>(null)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteSeries, setQuoteSeries] = useState<string | undefined>()

  useScrollReveal()
  useNavbarScroll()

  const openQuote = (seriesName?: string) => {
    setSelectedProduct(null)
    setQuoteSeries(seriesName)
    setQuoteOpen(true)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero onQuoteClick={() => openQuote()} />
        <Features />
        <Specs />
        <Benefits />
        <SeriesSection onProductClick={setSelectedProduct} />
        <Contact onQuoteClick={() => openQuote()} />
      </main>
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuoteClick={(name) => openQuote(name)}
      />
      <QuoteForm
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        preselectedSeries={quoteSeries}
      />
    </>
  )
}

export default App
