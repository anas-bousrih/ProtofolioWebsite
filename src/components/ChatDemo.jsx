import React, { useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const sampleReplies = [
  "I designed the Next.js frontend, wired it to a Django API, and documented the handoff with Loom walkthroughs.",
  "For leadership, I organized peer coding sessions and kept scope tight with weekly check-ins.",
  "Awards include TSA regional winner (web) and an Amazon Innovation Award for security research.",
];

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      id: nanoid(),
      role: "assistant",
      content:
        "Hi! Ask anything about my projects, leadership, or awards. I keep answers short and specific.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  const scrollToBottom = () => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!input.trim() || isTyping) return;

      const userMsg = { id: nanoid(), role: "user", content: input.trim() };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      const reply = sampleReplies[Math.floor(Math.random() * sampleReplies.length)];
      const replyId = nanoid();
      setMessages((prev) => [...prev, { id: replyId, role: "assistant", content: "" }]);

      let idx = 0;
      const interval = setInterval(() => {
        idx += Math.max(1, Math.round(Math.random() * 3));
        setMessages((prev) =>
          prev.map((m) =>
            m.id === replyId ? { ...m, content: reply.slice(0, idx) } : m
          )
        );
        if (idx >= reply.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 40);
    },
    [input, isTyping]
  );

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Chat with Anas</p>
        <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-white/10 border border-white/15 text-neutral-200">
          Live
        </span>
      </div>

      <div className="flex-1 rounded-xl border border-white/10 bg-white/5/40 backdrop-blur px-3 py-3 shadow-inner shadow-black/30 overflow-y-auto space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "justify-end text-right" : ""
            }`}
          >
            {msg.role === "assistant" && (
              <div className="h-7 w-7 rounded-full border border-emerald-300/40 bg-emerald-400/10 flex items-center justify-center text-[10px] font-semibold text-emerald-100">
                AI
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-xl border px-3 py-2 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary/50 border-white/10 text-neutral-100"
                  : "bg-white/5 border-white/10 text-neutral-100"
              }`}
            >
              {msg.content || "…"}
            </div>
            {msg.role === "user" && (
              <div className="h-7 w-7 rounded-full border border-white/10 bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white">
                You
              </div>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 shadow-inner shadow-black/20"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
          placeholder="Ask about projects, leadership, or awards..."
          disabled={isTyping}
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="px-3 py-1.5 text-sm font-semibold rounded-full bg-emerald-400 text-black hover:bg-emerald-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isTyping ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ChatDemo;
