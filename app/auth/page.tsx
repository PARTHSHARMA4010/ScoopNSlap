"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Heart, Wallet, Mail, ArrowLeft } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleMetaMaskConnect = async () => {
    // MetaMask connection logic would go here
    console.log("Connecting to MetaMask...")
    // Redirect to setup page after successful connection
    window.location.href = "/setup"
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    // Email authentication logic would go here
    console.log("Email auth:", { email, password, isLogin })
    // Redirect to setup page after successful auth
    window.location.href = "/setup"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              InvestFlow
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <p className="text-gray-600">{isLogin ? "Sign in to your account" : "Start your investment journey"}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Connect Your Wallet</CardTitle>
            <CardDescription>Use MetaMask for the best experience with crypto investments</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleMetaMaskConnect} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <Wallet className="w-4 h-4 mr-2" />
              Connect MetaMask
            </Button>
          </CardContent>
        </Card>

        <div className="my-6">
          <Separator />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-50 px-2 text-gray-500">Or continue with email</span>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{isLogin ? "Sign In" : "Sign Up"}</CardTitle>
            <CardDescription>{isLogin ? "Enter your credentials" : "Create your account"}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} className="ml-2 text-blue-600 hover:text-blue-700 font-medium">
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        <div className="text-center mt-4 text-xs text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  )
}
