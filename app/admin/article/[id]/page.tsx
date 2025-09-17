"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, XCircle, Edit, Save } from "lucide-react"
import Link from "next/link"

export default function AdminArticleReview({ params }: { params: { id: string } }) {
  const [isEditing, setIsEditing] = useState(false)
  const [feedback, setFeedback] = useState("")

  // Mock article data - in real implementation, this would come from your database
  const article = {
    id: params.id,
    title: "Как да увеличите продажбите с качествен маркетинг",
    content: `
      <p>Качественият маркетинг е основата на всеки успешен бизнес. В днешната конкурентна среда не е достатъчно просто да имате добър продукт или услуга - трябва да знаете как да го представите пред правилната аудитория.</p>
      
      <h2>Разберете вашата аудитория</h2>
      <p>Първата стъпка към успешен маркетинг е дълбокото разбиране на вашите клиенти. Кои са те? Какви са техните нужди и проблеми? Къде прекарват времето си онлайн?</p>
      
      <h2>Създайте стойностно съдържание</h2>
      <p>Съдържанието, което създавате, трябва да решава реални проблеми на вашите клиенти. Не се фокусирайте само върху продажбите - предоставете стойност и доверието ще дойде естествено.</p>
    `,
    author: "Maria Petrova",
    email: "maria@example.com",
    package: "Monthly",
    submittedAt: "2024-12-15 14:30",
    status: "pending",
    wordCount: 850,
    category: "Маркетинг",
  }

  const handleApprove = () => {
    console.log("Approving article:", article.id)
    alert("Article approved and scheduled for publishing!")
  }

  const handleReject = () => {
    if (!feedback.trim()) {
      alert("Please provide feedback before rejecting the article.")
      return
    }
    console.log("Rejecting article:", article.id, "Feedback:", feedback)
    alert("Article rejected with feedback sent to author.")
  }

  const handleRequestChanges = () => {
    if (!feedback.trim()) {
      alert("Please provide feedback for the requested changes.")
      return
    }
    console.log("Requesting changes for article:", article.id, "Feedback:", feedback)
    alert("Change request sent to author with feedback.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="inline-flex items-center text-gray-600 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin Dashboard
            </Link>
            <h1 className="text-xl font-bold text-black">Article Review</h1>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                Pending Review
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{article.title}</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    <Edit className="w-4 h-4 mr-1" />
                    {isEditing ? "Cancel Edit" : "Edit"}
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>By {article.author}</span>
                  <span>•</span>
                  <span>{article.wordCount} words</span>
                  <span>•</span>
                  <span>Category: {article.category}</span>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <Textarea
                      value={article.content.replace(/<[^>]*>/g, "")}
                      className="min-h-[400px]"
                      placeholder="Edit article content..."
                    />
                    <Button>
                      <Save className="w-4 h-4 mr-1" />
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <div
                    className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-black prose-p:text-gray-700 prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Review Panel */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Article Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Article Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Author:</span>
                    <div className="mt-1">
                      <div className="font-medium">{article.author}</div>
                      <div className="text-sm text-gray-500">{article.email}</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Package:</span>
                    <div className="mt-1">
                      <Badge variant="outline">{article.package}</Badge>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Submitted:</span>
                    <div className="mt-1 text-sm">{article.submittedAt}</div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Word Count:</span>
                    <div className="mt-1 text-sm">{article.wordCount} words</div>
                  </div>
                </CardContent>
              </Card>

              {/* Review Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Review Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Feedback / Comments:</label>
                    <Textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Provide feedback for the author..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Button onClick={handleApprove} className="w-full bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve & Publish
                    </Button>

                    <Button onClick={handleRequestChanges} variant="outline" className="w-full bg-transparent">
                      <Edit className="w-4 h-4 mr-2" />
                      Request Changes
                    </Button>

                    <Button
                      onClick={handleReject}
                      variant="outline"
                      className="w-full text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject Article
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* SEO Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>SEO Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-blue-600 text-sm font-medium truncate">
                      reklamirai.net › blog › {article.id}
                    </div>
                    <div className="text-lg text-blue-800 font-medium line-clamp-2">{article.title}</div>
                    <div className="text-sm text-gray-600 line-clamp-3">
                      Качественият маркетинг е основата на всеки успешен бизнес. Научете най-ефективните стратегии за
                      привличане на клиенти...
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
