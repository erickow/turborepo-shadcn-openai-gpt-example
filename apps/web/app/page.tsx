"use client";
import { useChat } from "ai/react";
import { GithubIcon, OpenAIIcon } from "@ui/icons";
import { Input } from "@ui/components/ui/input";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="pt-4 pb-32">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`border-t border-black/10 ${
            message.role === "assistant" && "bg-gray-50"
          }`}
        >
          <div className="max-w-3xl mx-auto py-6 flex">
            <div className="min-w-4 min-h-4">
              {message.role === "assistant" ? <OpenAIIcon /> : <GithubIcon />}
            </div>
            <span className="ml-3">{message.content}</span>
          </div>
        </div>
      ))}

      <form className="fixed inset-x-0 bottom-10" onSubmit={handleSubmit}>
        <Input
          className="max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10"
          placeholder="Type your question here . . ."
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
