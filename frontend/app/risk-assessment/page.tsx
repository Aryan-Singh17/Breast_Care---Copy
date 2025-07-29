
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import quizData from '../../../breast_cancer_quiz.json'

export default function RiskAssessmentPage() {
  // Merge original questions with new ones
  const newQuestions = [
    {
      id: 1001,
      question: "How often do you perform breast self-examinations?",
      options: [
        { text: "Monthly", points: 0 },
        { text: "Occasionally", points: 1 },
        { text: "Rarely/Never", points: 2 },
        { text: "Not sure how", points: 2 }
      ]
    },
    {
      id: 1002,
      question: "How often do you attend regular breast cancer screening (mammogram/ultrasound) as recommended for your age group?",
      options: [
        { text: "Always, as recommended", points: 0 },
        { text: "Sometimes, but not regularly", points: 1 },
        { text: "Rarely/Never", points: 2 },
        { text: "Not eligible by age", points: 0 }
      ]
    }
  ]
  const questions = [...quizData.questions, ...newQuestions]
  const scoring = quizData.scoring

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [result, setResult] = useState<any>(null)

  const handleOptionChange = (questionId: number, points: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Sum points
    const total = Object.values(answers).reduce((sum, v) => sum + (typeof v === 'number' ? v : 0), 0)
    // Find risk level
    let risk = scoring[0]
    for (const s of scoring) {
      const [min, max] = s.range.includes('+') ? [parseInt(s.range), Infinity] : s.range.split('-').map(Number)
      if (total >= min && total <= max) {
        risk = s
        break
      }
    }
    setResult({ total, ...risk })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b border-pink-100">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-pink-600">BrestCare</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-pink-950 hover:text-pink-600 transition-colors">Home</Link>
            <Link href="/chat" className="text-pink-950 hover:text-pink-600 transition-colors">Chat</Link>
            <Link href="/risk-assessment" className="text-pink-600 font-medium">Risk Assessment</Link>
            <Link href="/scan-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">Scan Assessment</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
            </Button>
          </Link>

          <h1 className="text-3xl font-bold text-pink-900 mb-4">{quizData.title}</h1>
          <p className="text-gray-600 mb-4">{quizData.description}</p>
          <p className="text-sm text-pink-700 bg-pink-50 p-3 rounded-md mb-8">{quizData.disclaimer}</p>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {questions.map((q) => (
              <Card key={q.id} className="border-pink-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-pink-900">{q.question}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {q.options.map((opt: any, idx: number) => (
                    <label key={idx} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        value={opt.points}
                        checked={answers[q.id] === opt.points}
                        onChange={() => handleOptionChange(q.id, opt.points)}
                        className="accent-pink-600"
                        required
                      />
                      <span className="text-gray-800">{opt.text}</span>
                    </label>
                  ))}
                </CardContent>
              </Card>
            ))}
            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
              Submit Answers
            </Button>
          </form>
          {result && (
            <div className="mt-8 p-4 border border-pink-300 rounded-md bg-pink-50">
              <h2 className="text-xl font-bold text-pink-900 mb-2">Risk Assessment Result</h2>
              <p className="text-pink-900 font-semibold mb-2">Total Score: {result.total}</p>
              <p className="text-pink-900 font-semibold mb-2">{result.risk_level}</p>
              <p className="text-gray-800">{result.interpretation}</p>
            </div>
          )}
        </div>
      </main>

      <footer className="py-6 bg-pink-900 text-pink-100">
        <div className="container px-4 mx-auto text-center">
          <p className="text-pink-300">&copy; {new Date().getFullYear()} BrestCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
