export default function About() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              We&apos;re on a mission to revolutionize how teams work together.
              We have been helping organizations streamline their workflows and boost 
              productivity through intelligent collaboration tools.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To eliminate the friction in team collaboration and make it effortless 
                  for organizations to achieve their goals. We believe that great software 
                  should adapt to how people work, not the other way around.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  A world where every team can work at their full potential, unhindered 
                  by outdated tools and processes. We envision a future where collaboration 
                  is seamless, intuitive, and truly productive.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg border border-border p-4 mb-8">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Project management and task tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Real-time team collaboration tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Advanced analytics and reporting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Custom integrations and APIs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  24/7 customer support and training
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Team?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of teams who have already improved their productivity with FlowSync.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
