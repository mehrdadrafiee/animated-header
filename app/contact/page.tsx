export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Tell us more about your project or question..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Email</h3>
                  <p className="text-muted-foreground mb-2">General inquiries and support</p>
                  <a 
                    href="mailto:hello@flowsync.com" 
                    className="text-primary hover:underline"
                  >
                    hello@flowsync.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Sales</h3>
                  <p className="text-muted-foreground mb-2">Speak with our sales team</p>
                  <a 
                    href="mailto:sales@flowsync.com" 
                    className="text-primary hover:underline"
                  >
                    sales@flowsync.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond to messages within 24-48 hours during business days.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-4">
                  <h3 className="text-lg font-medium mb-3">Ready to get started?</h3>
                  <p className="text-muted-foreground mb-4">
                    Whether you need a demo, have questions about our platform, 
                    or want to discuss enterprise solutions, we're here to help!
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Free trial and onboarding</li>
                    <li>• Custom integrations</li>
                    <li>• Enterprise solutions</li>
                    <li>• Training and support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
