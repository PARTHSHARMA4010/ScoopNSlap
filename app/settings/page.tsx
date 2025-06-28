"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Settings, Save, Trash2, AlertTriangle, Wallet } from "lucide-react"

export default function SettingsPage() {
  const [investmentAmount, setInvestmentAmount] = useState([100])
  const [frequency, setFrequency] = useState("weekly")
  const [donationPercentage, setDonationPercentage] = useState([10])
  const [selectedCharity, setSelectedCharity] = useState("educate-girls")
  const [reinvestProfits, setReinvestProfits] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(true)

  const handleSaveSettings = () => {
    console.log("Saving settings:", {
      investmentAmount: investmentAmount[0],
      frequency,
      donationPercentage: donationPercentage[0],
      selectedCharity,
      reinvestProfits,
      notifications,
      emailUpdates,
    })
    // Show success message and redirect
    alert("Settings saved successfully!")
  }

  const handlePauseInvestments = () => {
    console.log("Pausing investments...")
    alert("Investments paused. You can resume anytime.")
  }

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      console.log("Deleting account...")
      alert("Account deletion initiated. You will receive a confirmation email.")
    }
  }

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
              <Settings className="w-6 h-6 text-gray-600" />
              <span className="text-xl font-bold">Settings</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Investment Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Settings</CardTitle>
              <CardDescription>Modify your automated investment configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Investment Amount: ₹{investmentAmount[0]}</Label>
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

                <div className="space-y-2">
                  <Label>Frequency</Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="trigger">When wallet ₹500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="reinvest" checked={reinvestProfits} onCheckedChange={setReinvestProfits} />
                <Label htmlFor="reinvest">Automatically reinvest profits after donations</Label>
              </div>
            </CardContent>
          </Card>

          {/* Donation Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Donation Settings</CardTitle>
              <CardDescription>Configure your charitable giving preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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

              <div className="space-y-2">
                <Label>Selected Charity</Label>
                <Select value={selectedCharity} onValueChange={setSelectedCharity}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="educate-girls">EducateGirls - Education for All</SelectItem>
                    <SelectItem value="clean-water">Clean Water Initiative</SelectItem>
                    <SelectItem value="tree-plantation">Tree Plantation Drive</SelectItem>
                    <SelectItem value="healthcare">Rural Healthcare Support</SelectItem>
                    <SelectItem value="animal-welfare">Animal Welfare Foundation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-gray-500">Get notified about investments and donations</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Updates</Label>
                  <p className="text-sm text-gray-500">Receive weekly impact reports via email</p>
                </div>
                <Switch checked={emailUpdates} onCheckedChange={setEmailUpdates} />
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label>Connected Wallet</Label>
                  <div className="flex items-center space-x-2">
                    <Wallet className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">0x1234...5678</span>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleSaveSettings}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>

            <Button onClick={handlePauseInvestments} variant="outline">
              Pause Investments
            </Button>
          </div>

          <Separator />

          {/* Danger Zone */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Danger Zone
              </CardTitle>
              <CardDescription>Irreversible actions that will affect your account</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleDeleteAccount} variant="destructive" className="bg-red-600 hover:bg-red-700">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
              <p className="text-sm text-red-600 mt-2">
                This will permanently delete your account and all associated data. This action cannot be undone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
