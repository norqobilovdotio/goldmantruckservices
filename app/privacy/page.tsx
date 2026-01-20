import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-section">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Privacy Policy
            </h1>
            <div className="prose prose-slate max-w-none text-text-secondary space-y-4">
              <p className="text-sm text-text-muted mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p>
                Goldman Truck Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
              <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
                Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us, such as when you fill out our contact form, 
                including your name, phone number, email address, and message content.
              </p>
              <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
                How We Use Your Information
              </h2>
              <p>
                We use the information you provide to respond to your inquiries, provide services, and communicate with you 
                about your requests. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
              <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
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

