import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, ArrowLeft, ExternalLink, Users, CheckCircle } from "lucide-react"

const charities = [
  {
    id: "educate-girls",
    name: "EducateGirls",
    category: "Education",
    description: "Empowering girls through education in rural India",
    impact: "12,000+ girls educated",
    totalRaised: 250000,
    goal: 500000,
    verified: true,
    wallet: "0x1234...5678",
    supporters: 150,
  },
  {
    id: "clean-water",
    name: "Clean Water Initiative",
    category: "Health",
    description: "Providing clean drinking water to remote villages",
    impact: "50 wells built, 5,000+ people served",
    totalRaised: 180000,
    goal: 300000,
    verified: true,
    wallet: "0x5678...9abc",
    supporters: 89,
  },
  {
    id: "tree-plantation",
    name: "Tree Plantation Drive",
    category: "Environment",
    description: "Fighting climate change through reforestation",
    impact: "25,000+ trees planted",
    totalRaised: 120000,
    goal: 200000,
    verified: true,
    wallet: "0x9abc...def0",
    supporters: 203,
  },
  {
    id: "healthcare",
    name: "Rural Healthcare Support",
    category: "Health",
    description: "Mobile healthcare units for underserved communities",
    impact: "10,000+ patients treated",
    totalRaised: 95000,
    goal: 150000,
    verified: true,
    wallet: "0xdef0...1234",
    supporters: 67,
  },
  {
    id: "animal-welfare",
    name: "Animal Welfare Foundation",
    category: "Animal Welfare",
    description: "Rescue and rehabilitation of street animals",
    impact: "500+ animals rescued",
    totalRaised: 75000,
    goal: 100000,
    verified: true,
    wallet: "0x2345...6789",
    supporters: 134,
  },
]

export default function CharitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                InvestFlow
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Verified Charities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully vetted list of transparent charities. All donations are tracked on-chain for
            complete transparency.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-sm text-gray-600">Verified Charities</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹7.2L</div>
              <div className="text-sm text-gray-600">Total Raised</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">643</div>
              <div className="text-sm text-gray-600">Active Supporters</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Transparency</div>
            </CardContent>
          </Card>
        </div>

        {/* Charities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {charities.map((charity) => {
            const progressPercentage = (charity.totalRaised / charity.goal) * 100

            return (
              <Card key={charity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        {charity.name}
                        {charity.verified && <CheckCircle className="w-4 h-4 ml-2 text-green-500" />}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {charity.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{charity.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Impact */}
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">Impact Achieved</p>
                    <p className="text-sm text-blue-700">{charity.impact}</p>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Raised: ₹{charity.totalRaised.toLocaleString()}</span>
                      <span>Goal: ₹{charity.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={progressPercentage} className="w-full" />
                    <p className="text-xs text-gray-500">{progressPercentage.toFixed(1)}% of goal reached</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {charity.supporters} supporters
                    </div>
                    <Link
                      href={`https://etherscan.io/address/${charity.wallet}`}
                      target="_blank"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      View Wallet <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full" variant="outline">
                    <Heart className="w-4 h-4 mr-2" />
                    Select This Charity
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Want to Add Your Charity?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking to partner with verified, transparent charities. Apply to join our platform and
                reach more supporters.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Apply to Join
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
