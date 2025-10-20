export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Animated Top Navigation</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Scroll down to see the animated top navigation in action.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Smart Project Management</h2>
                <p className="text-muted-foreground">
                  Organize tasks, track progress, and collaborate seamlessly with your team. 
                  Our intelligent system adapts to your workflow and helps you stay on top 
                  of deadlines and deliverables.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Real-time Collaboration</h2>
                <p className="text-muted-foreground">
                  Work together in real-time with instant updates, shared workspaces, 
                  and integrated communication tools. Built for modern teams who need 
                  to move fast and stay connected.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Trusted by 10,000+ Teams</h2>
              <p className="text-muted-foreground mb-6">
                Join companies worldwide who have transformed their productivity 
                with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Free Trial
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-input text-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
