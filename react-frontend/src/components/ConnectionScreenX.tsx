import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ConnectionScreenX() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto max-w-md w-full space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Hackathon Jury</h1>
          <p className="mt-2 text-sm text-muted-foreground">April 15th - April 17th, 2024</p>
        </div>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="Enter your username"
              />
            </div>
            <Button type="submit" className="w-full">
              Proceed
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
