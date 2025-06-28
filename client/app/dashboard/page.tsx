"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, TrendingUp, Wallet, Settings, ExternalLink, Calendar, Users, Award } from "lucide-react"

export default function DashboardPage() {
  const [user] = useState({
    name: "Aarav",
    totalInvested: 2500,
    currentValue: 2750,
    totalDonated: 60,
    livesImpacted: 12,
    streak: 8,
  })

  const profit = user.currentValue - user.totalInvested
  const profitPercentage = ((profit / user.totalInvested) * 100).toFixed(1)

  const recentTransactions = [
    {
      id: 1,
      type: "investment",
      amount: 100,
      date: "2024-01-15",
      hash: "0x1234...5678",
      status: "completed",
    },
    {
      id: 2,
      type: "donation",
      amount: 5,
      date: "2024-01-15",
      hash: "0x5678...9abc",
      charity: "EducateGirls",
      status: "completed",
    },
    {
      id: 3,
      type: "investment",
      amount: 100,
      date: "2024-01-08",
      hash: "0x9abc...def0",
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              InvestFlow
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome back, {user.name}!</span>
            <Link href="/settings">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{user.totalInvested.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all investments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{user.currentValue.toLocaleString()}</div>
              <p className="text-xs text-green-600">
                +₹{profit} ({profitPercentage}%)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donated</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{user.totalDonated}</div>
              <p className="text-xs text-muted-foreground">To verified charities</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lives Impacted</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.livesImpacted}</div>
              <p className="text-xs text-muted-foreground">Through your donations</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Investment Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Progress</CardTitle>
                <CardDescription>Your automated investment journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Monthly Goal: ₹2,000</span>
                  <span className="text-sm text-muted-foreground">₹1,600 / ₹2,000</span>
                </div>
                <Progress value={80} className="w-full" />
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Next investment: Tomorrow</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest investments and donations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            tx.type === "investment" ? "bg-blue-100" : "bg-green-100"
                          }`}
                        >
                          {tx.type === "investment" ? (
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                          ) : (
                            <Heart className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            {tx.type === "investment" ? "Investment" : "Donation"}
                            {tx.charity && ` to ${tx.charity}`}
                          </p>
                          <p className="text-sm text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{tx.amount}</p>
                        <Link
                          href={`https://etherscan.io/tx/${tx.hash}`}
                          target="_blank"
                          className="text-xs text-blue-600 hover:underline flex items-center"
                        >
                          View <ExternalLink className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">{user.streak}</div>
                  <p className="text-sm text-muted-foreground">Week Investment Streak</p>
                  <Badge variant="secondary" className="mt-2">
                    Consistent Investor
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Impact Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>Real-world change from your donations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Children educated</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Meals provided</span>
                  <span className="font-medium">50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Books donated</span>
                  <span className="font-medium">25</span>
                </div>
                <Link href="/transparency">
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Full Impact Report
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/settings">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Adjust Settings
                  </Button>
                </Link>
                <Link href="/charities">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Change Charity
                  </Button>
                </Link>
                <Link href="/transparency">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Blockchain
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
