import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-section">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Terms of Service
            </h1>
            <div className="prose prose-slate max-w-none text-text-secondary space-y-4">
              <p className="text-sm text-text-muted mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p>
                By accessing and using the Goldman Truck Services website, you agree to be bound by these Terms of Service.
              </p>
              <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
                Use of Website
              </h2>
              <p>
                This website is provided for informational purposes and to facilitate communication with Goldman Truck Services. 
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.
              </p>
              <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
                Service Information
              </h2>
              <p>
                While we strive to provide accurate information, we do not guarantee that all information on this website is 
                complete, current, or error-free. Service availability and pricing are subject to change.
              </p>
              <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p>
                Phone: <a href="tel:5139000000" className="text-accent hover:underline">513-900-0000</a><br />
                Email: <a href="mailto:service@goldmantruckservices.com" className="text-accent hover:underline">service@goldmantruckservices.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

