import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Search, TrendingUp, Heart, Shield, Calendar, Wallet } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "investment",
    from: "0x1234...5678",
    to: "Uniswap V3",
    amount: 100,
    token: "ETH",
    date: "2024-01-15T10:30:00Z",
    hash: "0x1234567890abcdef1234567890abcdef12345678",
    status: "confirmed",
    user: "Aarav",
  },
  {
    id: 2,
    type: "donation",
    from: "0x1234...5678",
    to: "0x5678...9abc",
    amount: 5,
    token: "USDT",
    date: "2024-01-15T10:35:00Z",
    hash: "0x5678901234abcdef5678901234abcdef56789012",
    status: "confirmed",
    charity: "EducateGirls",
    user: "Aarav",
  },
  {
    id: 3,
    type: "investment",
    from: "0x9abc...def0",
    to: "Uniswap V3",
    amount: 50,
    token: "ETH",
    date: "2024-01-14T15:20:00Z",
    hash: "0x9abcdef012345678abcdef012345678abcdef01",
    status: "confirmed",
    user: "Riya",
  },
  {
    id: 4,
    type: "donation",
    from: "0x9abc...def0",
    to: "0x2345...6789",
    amount: 3,
    token: "USDT",
    date: "2024-01-14T15:25:00Z",
    hash: "0xdef0123456789abcdef0123456789abcdef0123",
    status: "confirmed",
    charity: "Clean Water Initiative",
    user: "Riya",
  },
]

const platformStats = {
  totalTransactions: 1247,
  totalVolume: 875000,
  totalDonations: 87500,
  activeUsers: 156,
  charitiesSupported: 5,
}

export default function TransparencyPage() {
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
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Transparency Dashboard
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Complete Transparency</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every transaction on AutoInvest4Good is recorded on the blockchain. Track all investments and donations in
            real-time with full transparency.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {platformStats.totalTransactions.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Transactions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                ₹{(platformStats.totalVolume / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-gray-600">Total Volume</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                ₹{(platformStats.totalDonations / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-gray-600">Total Donations</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">{platformStats.activeUsers}</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">{platformStats.charitiesSupported}</div>
              <div className="text-sm text-gray-600">Charities Supported</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList>
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
            </TabsList>

            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-gray-400" />
              <Input placeholder="Search by hash or address..." className="w-64" />
            </div>
          </div>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Platform Transactions</CardTitle>
                <CardDescription>Real-time view of all investments and donations on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              tx.type === "investment" ? "bg-blue-100" : "bg-green-100"
                            }`}
                          >
                            {tx.type === "investment" ? (
                              <TrendingUp className="w-5 h-5 text-blue-600" />
                            ) : (
                              <Heart className="w-5 h-5 text-green-600" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">
                                {tx.type === "investment" ? "Investment" : "Donation"}
                              </span>
                              <Badge variant={tx.status === "confirmed" ? "default" : "secondary"}>{tx.status}</Badge>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>
                                From: {tx.from} {tx.user && `(${tx.user})`}
                              </div>
                              <div>To: {tx.charity || tx.to}</div>
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {new Date(tx.date).toLocaleDateString()}
                                </span>
                                <Link
                                  href={`https://etherscan.io/tx/${tx.hash}`}
                                  target="_blank"
                                  className="flex items-center text-blue-600 hover:underline"
                                >
                                  View on Etherscan <ExternalLink className="w-3 h-3 ml-1" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">₹{tx.amount}</div>
                          <div className="text-sm text-gray-500">{tx.token}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Investment Transactions</CardTitle>
                <CardDescription>All crypto investments made through the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter((tx) => tx.type === "investment")
                    .map((tx) => (
                      <div key={tx.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">Investment Transaction</div>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div>User: {tx.user}</div>
                                <div>Platform: {tx.to}</div>
                                <div className="flex items-center space-x-4">
                                  <span className="flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {new Date(tx.date).toLocaleDateString()}
                                  </span>
                                  <Link
                                    href={`https://etherscan.io/tx/${tx.hash}`}
                                    target="_blank"
                                    className="flex items-center text-blue-600 hover:underline"
                                  >
                                    View Transaction <ExternalLink className="w-3 h-3 ml-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">₹{tx.amount}</div>
                            <div className="text-sm text-gray-500">{tx.token}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Donation Transactions</CardTitle>
                <CardDescription>All charitable donations made through the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter((tx) => tx.type === "donation")
                    .map((tx) => (
                      <div key={tx.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <Heart className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">Donation to {tx.charity}</div>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div>Donor: {tx.user}</div>
                                <div>Charity Wallet: {tx.to}</div>
                                <div className="flex items-center space-x-4">
                                  <span className="flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {new Date(tx.date).toLocaleDateString()}
                                  </span>
                                  <Link
                                    href={`https://etherscan.io/tx/${tx.hash}`}
                                    target="_blank"
                                    className="flex items-center text-blue-600 hover:underline"
                                  >
                                    View Transaction <ExternalLink className="w-3 h-3 ml-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">₹{tx.amount}</div>
                            <div className="text-sm text-gray-500">{tx.token}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Trust Indicators */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">100% Transparent & Secure</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Every transaction is recorded on the blockchain and can be independently verified. Our smart contracts
                  are audited and all charity wallets are publicly viewable.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Wallet className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-medium">Multi-Sig Wallets</div>
                    <div className="text-sm text-gray-600">Enhanced security</div>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-medium">Smart Contract Audited</div>
                    <div className="text-sm text-gray-600">Verified by experts</div>
                  </div>
                  <div>
                    <ExternalLink className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-medium">Public Ledger</div>
                    <div className="text-sm text-gray-600">Always accessible</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
