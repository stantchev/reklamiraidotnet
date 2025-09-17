"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  FileText,
  Users,
  TrendingUp,
  Search,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for admin dashboard
  const stats = {
    totalArticles: 156,
    pendingReview: 8,
    totalUsers: 342,
    monthlyRevenue: 12450,
  }

  const pendingArticles = [
    {
      id: 1,
      title: "Как да увеличите продажбите с качествен маркетинг",
      author: "Maria Petrova",
      email: "maria@example.com",
      package: "Monthly",
      submittedAt: "2024-12-15 14:30",
      status: "pending",
      wordCount: 850,
    },
    {
      id: 2,
      title: "SEO стратегии за малки бизнеси",
      author: "Ivan Georgiev",
      email: "ivan@company.bg",
      package: "Single",
      submittedAt: "2024-12-15 10:15",
      status: "pending",
      wordCount: 720,
    },
    {
      id: 3,
      title: "Дигитален маркетинг тенденции 2025",
      author: "Elena Dimitrova",
      email: "elena@agency.com",
      package: "Agency",
      submittedAt: "2024-12-14 16:45",
      status: "pending",
      wordCount: 1200,
    },
  ]

  const publishedArticles = [
    {
      id: 4,
      title: "Успешни примери за малки бизнеси в София",
      author: "Georgi Petrov",
      publishedAt: "2024-12-10 09:00",
      status: "published",
      views: 1250,
      engagement: "4.2%",
    },
    {
      id: 5,
      title: "Социални мрежи за бизнес в България",
      author: "Ana Stoeva",
      publishedAt: "2024-12-08 11:30",
      status: "published",
      views: 890,
      engagement: "3.8%",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            <Clock className="w-3 h-3 mr-1" />
            Pending Review
          </Badge>
        )
      case "published":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            <CheckCircle className="w-3 h-3 mr-1" />
            Published
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            <XCircle className="w-3 h-3 mr-1" />
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const handleApprove = (articleId: number) => {
    console.log("Approving article:", articleId)
    // Here you would implement the approval logic
  }

  const handleReject = (articleId: number) => {
    console.log("Rejecting article:", articleId)
    // Here you would implement the rejection logic
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">reklamirai.net Admin</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalArticles}</div>
              <p className="text-xs text-muted-foreground">+12 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingReview}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+23 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.monthlyRevenue} лв</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Articles ({stats.pendingReview})</TabsTrigger>
            <TabsTrigger value="published">Published Articles</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Pending Articles Tab */}
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Articles Pending Review</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Word Count</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingArticles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell className="font-medium max-w-xs">
                          <div className="truncate">{article.title}</div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{article.author}</div>
                            <div className="text-sm text-gray-500">{article.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{article.package}</Badge>
                        </TableCell>
                        <TableCell>{article.wordCount} words</TableCell>
                        <TableCell>{article.submittedAt}</TableCell>
                        <TableCell>{getStatusBadge(article.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              Review
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleApprove(article.id)}>
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Approve & Publish
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Request Changes
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleReject(article.id)}>
                                  <XCircle className="w-4 h-4 mr-2" />
                                  Reject
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Published Articles Tab */}
          <TabsContent value="published">
            <Card>
              <CardHeader>
                <CardTitle>Published Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Published</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Engagement</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {publishedArticles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell className="font-medium max-w-xs">
                          <div className="truncate">{article.title}</div>
                        </TableCell>
                        <TableCell>{article.author}</TableCell>
                        <TableCell>{article.publishedAt}</TableCell>
                        <TableCell>{article.views.toLocaleString()}</TableCell>
                        <TableCell>{article.engagement}</TableCell>
                        <TableCell>{getStatusBadge(article.status)}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Article
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash2 className="w-4 h-4 mr-2" />
                                Unpublish
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  User management interface would be implemented here.
                  <br />
                  Features: User list, subscription management, communication tools.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Analytics dashboard would be implemented here.
                  <br />
                  Features: Article performance, revenue tracking, user engagement metrics.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
