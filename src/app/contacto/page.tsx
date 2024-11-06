import FormularioContacto from '@/components/FormularioContacto'
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'

export default function ContactPage() {
  return (
      <div className="flex flex-col min-h-screen font-lato">
    <main>
      <Navbar/>
      <FormularioContacto />
      <Footer/>
    </main>
      </div>
  )
}