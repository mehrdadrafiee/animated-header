import { Button } from "@/components/ui/button";

export default function DangerZone() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Danger Zone</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              These actions are irreversible. Please proceed with caution and ensure you 
              have backed up any important data before continuing.
            </p>
            
            <div className="space-y-8">
              {/* Destructive Actions */}
              <div className="bg-card rounded-lg border border-destructive/20 p-8">
                <h2 className="text-2xl font-semibold mb-4 text-destructive">Destructive Actions</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                    <div>
                      <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                      <p className="text-sm text-destructive/80 mt-1">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                    </div>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
