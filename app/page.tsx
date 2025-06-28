import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Heart, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              InvestFlow
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/charities" className="text-gray-600 hover:text-gray-900">
              Charities
            </Link>
            <Link href="/transparency" className="text-gray-600 hover:text-gray-900">
              Transparency
            </Link>
            <Link href="https://huggingface.co/spaces/shreyankisiri/CDP-InvestFlow" className="text-gray-600 hover:text-gray-900">
              CDP-InvestFlow
            </Link>
            <Link href="/auth" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
          </nav>
          <Link href="/auth">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Invest Small, Impact Big
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Automate your crypto micro-investments and give back to causes you care about. Start with just ₹10 and watch
            your portfolio grow while making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                Start Investing <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/transparency">
              <Button size="lg" variant="outline">
                View Transparency
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Automate Investments</CardTitle>
                <CardDescription>
                  Set up recurring crypto investments from ₹10-₹100 daily, weekly, or monthly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Give Back Automatically</CardTitle>
                <CardDescription>Donate a percentage of your profits to verified charities you choose</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Track Transparently</CardTitle>
                <CardDescription>
                  Monitor your investments and donations with full blockchain transparency
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">₹2.5L+</div>
              <div className="text-blue-100">Total Invested</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₹25K+</div>
              <div className="text-blue-100">Donated to Charity</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Active Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Aarav, 24</CardTitle>
                <CardDescription>Software Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "I've invested ₹500 weekly for 3 months and donated ₹60 to education. Seeing 12 kids helped through my
                  investments feels amazing!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Riya, 26</CardTitle>
                <CardDescription>Marketing Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The transparency is incredible. I can see exactly where my donations go and track my crypto portfolio
                  growth in real-time."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Impact Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of investors who are building wealth while making a difference
          </p>
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InviteFlow</span>
              </div>
              <p className="text-gray-400">Automated crypto investing with charitable impact</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link href="/charities">Charities</Link>
                </li>
                <li>
                  <Link href="/transparency">Transparency</Link>
                </li>
                <li>
                  <Link href="/transparency">CDP-InvestFlow</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#">Help Center</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Security</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
                <li>
                  <Link href="#">Risk Disclosure</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 InvestFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
