"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Heart, ArrowLeft, ArrowRight } from "lucide-react"

export default function SetupPage() {
  const [investmentAmount, setInvestmentAmount] = useState([100])
  const [frequency, setFrequency] = useState("")
  const [donationPercentage, setDonationPercentage] = useState([10])
  const [selectedCharity, setSelectedCharity] = useState("")
  const [reinvestProfits, setReinvestProfits] = useState(true)

  const handleSetupComplete = () => {
    // Save configuration logic would go here
    console.log("Setup configuration:", {
      investmentAmount: investmentAmount[0],
      frequency,
      donationPercentage: donationPercentage[0],
      selectedCharity,
      reinvestProfits,
    })
    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/auth" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AutoInvest4Good
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Setup Your Investment Plan</h1>
          <p className="text-gray-600">Configure your automated investments and charitable giving</p>
        </div>

        <div className="space-y-6">
          {/* Investment Amount */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Amount</CardTitle>
              <CardDescription>How much would you like to invest each time?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Amount: ₹{investmentAmount[0]}</Label>
                <Slider
                  value={investmentAmount}
                  onValueChange={setInvestmentAmount}
                  max={1000}
                  min={10}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹10</span>
                  <span>₹1000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Frequency */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Frequency</CardTitle>
              <CardDescription>How often should we invest for you?</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="trigger">When wallet &gt; ₹500</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Donation Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Charitable Giving</CardTitle>
              <CardDescription>Automatically donate a percentage of your profits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Donation Percentage: {donationPercentage[0]}% of profits</Label>
                <Slider
                  value={donationPercentage}
                  onValueChange={setDonationPercentage}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1%</span>
                  <span>50%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charity Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Cause</CardTitle>
              <CardDescription>Select a charity to support with your donations</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedCharity} onValueChange={setSelectedCharity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a charity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="educate-girls">EducateGirls - Education for All</SelectItem>
                  <SelectItem value="clean-water">Clean Water Initiative</SelectItem>
                  <SelectItem value="tree-plantation">Tree Plantation Drive</SelectItem>
                  <SelectItem value="healthcare">Rural Healthcare Support</SelectItem>
                  <SelectItem value="animal-welfare">Animal Welfare Foundation</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Reinvestment Option */}
          <Card>
            <CardHeader>
              <CardTitle>Profit Reinvestment</CardTitle>
              <CardDescription>Automatically reinvest remaining profits after donations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch id="reinvest" checked={reinvestProfits} onCheckedChange={setReinvestProfits} />
                <Label htmlFor="reinvest">Reinvest profits after donation (recommended for compound growth)</Label>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <CardTitle>Setup Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Investment:</strong> ₹{investmentAmount[0]} {frequency}
              </p>
              <p>
                <strong>Donation:</strong> {donationPercentage[0]}% of profits to{" "}
                {selectedCharity || "selected charity"}
              </p>
              <p>
                <strong>Reinvestment:</strong> {reinvestProfits ? "Enabled" : "Disabled"}
              </p>
            </CardContent>
          </Card>

          {/* Complete Setup Button */}
          <Button
            onClick={handleSetupComplete}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            size="lg"
            disabled={!frequency || !selectedCharity}
          >
            Complete Setup & Start Investing
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
