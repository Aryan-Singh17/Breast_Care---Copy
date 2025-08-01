"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/logo"

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm your breast health assistant. How can I help you today?" },
  ])
  const [isLoading, setIsLoading] = useState(false)

  async function sendMessage() {
    if (!input.trim()) return
    const userMessage = input.trim()
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })
      const data = await response.json()
      if (data.response) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.response }])
      } else {
        setMessages((prev) => [...prev, { sender: "ai", text: "Sorry, no response from server." }])
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "Error communicating with server." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b border-pink-200">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Logo 
              height={40} 
              width={180} 
              className="flex-shrink-0 md:w-48 md:h-14 w-36 h-8 leading-none" 
            />
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-pink-950 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="/blogs" className="text-pink-950 hover:text-pink-600 transition-colors">
              Blogs
            </Link>
            <Link href="/chat" className="text-pink-600 font-medium">
              Chat
            </Link>
            <Link href="/risk-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">
              Risk Assessment
            </Link>
            <Link href="/scan-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">
              Scan Assessment
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="text-pink-950">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
            </Button>
          </Link>

          <h1 className="text-3xl font-bold text-pink-900 mb-6">Chat with our AI Assistant</h1>

          <div className="bg-white rounded-lg shadow-sm border border-pink-100 p-6">
            <p className="text-gray-600 mb-8">
              Our AI assistant is here to answer your questions about breast cancer, symptoms, prevention, and more.
              Your conversation is private and secure.
            </p>

            <div className="bg-pink-50 rounded-lg p-4 mb-6 max-h-96 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 p-3 rounded-lg ${
                    msg.sender === "user" ? "bg-pink-100 text-pink-900 self-end" : "bg-pink-200 text-pink-800"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question here..."
                className="flex-1 px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg"
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-pink-900 mb-4">Example questions:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• What are the early signs of breast cancer?</li>
                <li>• How often should I get a mammogram?</li>
                <li>• What factors increase breast cancer risk?</li>
                <li>• How can I perform a self-examination?</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
