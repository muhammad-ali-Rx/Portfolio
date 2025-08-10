"use client"

import React from "react"
import { useState, useEffect } from "react"

interface TypingCodeWindowProps {
  code: string
  typingSpeed?: number
}

interface CodeToken {
  text: string
  type: "keyword" | "string" | "property" | "number" | "operator" | "boolean" | "default" | "comment"
}

export default function TypingCodeWindow({ code, typingSpeed = 50 }: TypingCodeWindowProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex < code.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + code[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timer)
    } else if (currentIndex >= code.length) {
      setIsTyping(false)
    }
  }, [currentIndex, code, typingSpeed, isTyping])

  // Fixed tokenizer - consistent property recognition
  const tokenizeCode = (text: string): CodeToken[] => {
    const tokens: CodeToken[] = []
    const keywords = ["const", "function", "return"]
    const thisKeyword = ["this"]
    const booleans = ["true", "false"]
    // Specific property names that should ALWAYS be yellow
    const propertyNames = [
      "name",
      "title",
      "skills",
      "hardWorker",
      "quickLearner",
      "problemSolver",
      "yearsOfExperience",
      "hireable",
    ]

    const operators = [
      "&&",
      "||",
      ">=",
      "<=",
      "===",
      "!==",
      "==",
      "!=",
      ">",
      "<",
      "=",
      "+",
      "-",
      "*",
      "/",
      "%",
      "!",
      "?",
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      ":",
      ";",
      ",",
      ".",
      "=>",
    ]

    let currentToken = ""
    let i = 0

    while (i < text.length) {
      const char = text[i]

      // Handle strings
      if (char === "'" || char === '"' || char === "`") {
        if (currentToken) {
          // Check token type before adding
          let tokenType: CodeToken["type"] = "default"

          if (keywords.includes(currentToken)) {
            tokenType = "keyword"
          } else if (thisKeyword.includes(currentToken)) {
            tokenType = "keyword"
          } else if (booleans.includes(currentToken)) {
            tokenType = "boolean"
          } else if (propertyNames.includes(currentToken)) {
            tokenType = "property" // Always yellow for property names
          } else if (/^\d+$/.test(currentToken)) {
            tokenType = "number"
          }

          tokens.push({ text: currentToken, type: tokenType })
          currentToken = ""
        }

        const quote = char
        let stringToken = quote
        i++

        while (i < text.length && text[i] !== quote) {
          if (text[i] === "\\" && i + 1 < text.length) {
            stringToken += text[i] + text[i + 1]
            i += 2
          } else {
            stringToken += text[i]
            i++
          }
        }

        if (i < text.length) {
          stringToken += text[i]
        }

        tokens.push({ text: stringToken, type: "string" })
        i++
        continue
      }

      // Handle whitespace and operators
      if (/\s/.test(char) || operators.some((op) => text.substr(i, op.length) === op)) {
        if (currentToken) {
          // Check token type before adding
          let tokenType: CodeToken["type"] = "default"

          if (keywords.includes(currentToken)) {
            tokenType = "keyword"
          } else if (thisKeyword.includes(currentToken)) {
            tokenType = "keyword"
          } else if (booleans.includes(currentToken)) {
            tokenType = "boolean"
          } else if (propertyNames.includes(currentToken)) {
            tokenType = "property" // Always yellow for property names
          } else if (/^\d+$/.test(currentToken)) {
            tokenType = "number"
          }

          tokens.push({ text: currentToken, type: tokenType })
          currentToken = ""
        }

        if (/\s/.test(char)) {
          tokens.push({ text: char, type: "default" })
        } else {
          // Find the longest matching operator
          let matchedOp = ""
          for (const op of operators) {
            if (text.substr(i, op.length) === op && op.length > matchedOp.length) {
              matchedOp = op
            }
          }
          tokens.push({ text: matchedOp, type: "operator" })
          i += matchedOp.length - 1
        }
        i++
        continue
      }

      currentToken += char
      i++
    }

    // Handle remaining token
    if (currentToken) {
      let tokenType: CodeToken["type"] = "default"

      if (keywords.includes(currentToken)) {
        tokenType = "keyword"
      } else if (thisKeyword.includes(currentToken)) {
        tokenType = "keyword"
      } else if (booleans.includes(currentToken)) {
        tokenType = "boolean"
      } else if (propertyNames.includes(currentToken)) {
        tokenType = "property" // Always yellow for property names
      } else if (/^\d+$/.test(currentToken)) {
        tokenType = "number"
      }

      tokens.push({ text: currentToken, type: tokenType })
    }

    return tokens
  }

  const tokens = tokenizeCode(displayedText)

  // Exact image matching colors
  const getTokenColor = (type: CodeToken["type"]) => {
    switch (type) {
      case "keyword":
        return "text-[#c084fc]" // Pink/magenta for const, function, return, this
      case "string":
        return "text-[#60a5fa]" // Blue for strings and array values
      case "property":
        return "text-[#fbbf24]" // Yellow/orange for property names - ALWAYS
      case "number":
        return "text-[#fb923c]" // Orange for numbers
      case "boolean":
        return "text-[#22d3ee]" // Cyan for true/false
      case "operator":
        return "text-white" // White for operators
      default:
        return "text-gray-300" // Default gray
    }
  }

  return (
    <div className="gradient-border">
      <div className="code-window bg-[#091121]">
        <div className="window-header flex items-center px-4 py-3 bg-[#0f1629] border-b border-gray-700/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-gray-400 flex items-center gap-2">
            <i className="fas fa-code"></i>
            developer.js
          </span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
          <pre className="whitespace-pre-wrap">
            <code>
              {tokens.map((token, index) => (
                <span key={index} className={getTokenColor(token.type)}>
                  {token.text}
                </span>
              ))}
              {isTyping && <span className="animate-pulse text-white">|</span>}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
