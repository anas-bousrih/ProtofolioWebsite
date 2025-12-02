import React, { useEffect, useMemo, useRef, useState } from "react";

const fallbackId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const MinimalChat = () => {
  const listRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const replies = useMemo(
    () => [
      "Shipped a Next.js front end, paired it with a Django API, and documented everything with short Looms.",
      "I focus on crisp UI, practical engineering tradeoffs, and keeping teams unblocked with clear notes.",
      "Highlights: TSA regional winner (web), Amazon Innovation Award, and peer-led coding sessions.",
    ],
    []
  );

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isTyping]);

  const sendMessage = async (e) => {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMsg = { id: fallbackId(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          audience: "general viewer",
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const answer = data?.answer || replies[Math.floor(Math.random() * replies.length)];
      setMessages((prev) => [...prev, { id: fallbackId(), role: "ai", text: answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: fallbackId(),
          role: "ai",
          text: "Sorry, I couldn't reach the assistant right now. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const idle = messages.length === 0;

  return (
    <div className="relative flex h-full flex-col gap-2 sm:gap-3 overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/95 via-[#0d132e] to-[#0a0f23] p-3 sm:p-5 shadow-xl shadow-black/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-32 sm:h-48 w-32 sm:w-48 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-6 h-40 sm:h-56 w-40 sm:w-56 rounded-full bg-[#33c2cc]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[radial-gradient(circle_at_30%_20%,#33c2cc20,transparent_35%),radial-gradient(circle_at_80%_0%,#57db9620,transparent_35%)]" />
      </div>

      <div className="relative flex flex-wrap items-start justify-between gap-2 sm:gap-3">
        <div className="space-y-1">
          <ul className="inline-flex flex-row items-center gap-2 sm:gap-[140px] mb-1">
            <li>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-emerald-200">Ask Anas · AI</p>
            </li>
            <li>
              <span className="rounded-full bg-white/10 px-3 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-neutral-100 shadow-inner shadow-black/20 inline-flex items-center gap-1.5 sm:gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-neutral-300">Short answers about projects, leadership, and awards.</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm h-[clamp(300px,60vh,460px)]">
        {idle && (
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-center text-neutral-300 px-4">
            <div className="relative h-20 sm:h-20 w-16 sm:w-20 rounded-full bg-gradient-to-br from-emerald-400/20 via-white/10 to-[#33c2cc]/15 shadow-lg shadow-black/30">
              <div className="absolute inset-1 rounded-full bg-[#0b122b]/80" />
              <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-400/10" />
              <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl text-emerald-200">
                ✦
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-semibold text-white">Drop your first prompt</p>
              <p className="text-[10px] sm:text-xs text-neutral-400">AI could make mistakes </p>
            </div>
          </div>
        )}

        <div
          ref={listRef}
          className="relative z-20 flex h-full flex-col gap-2 sm:gap-3 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 pr-2 sm:pr-3"
        >
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div key={msg.id} className={`flex items-start gap-2 sm:gap-3 ${isUser ? "justify-end text-right" : ""}`}>
                {!isUser && (
                  <div className="mt-0.5 flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-[9px] sm:text-[11px] font-semibold text-emerald-100">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm leading-relaxed shadow-sm shadow-black/20 ${
                    isUser
                      ? "bg-primary/70 text-neutral-100"
                      : "bg-white/5 text-neutral-50"
                  }`}
                >
                  {msg.text}
                </div>
                {isUser && (
                  <div className="mt-0.5 flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[9px] sm:text-[11px] font-semibold text-white">
                    You
                  </div>
                )}
              </div>
            );
          })}
          {isTyping && (
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="mt-0.5 flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-[9px] sm:text-[11px] font-semibold text-emerald-100">
                AI
              </div>
              <div className="flex items-center gap-1 rounded-xl sm:rounded-2xl bg-white/5 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-neutral-200">
                <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-300" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-300 [animation-delay:120ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-300 [animation-delay:240ms]" />
              </div>
            </div>
          )}
        </div>
      </div>

      <form
        onSubmit={sendMessage}
        className="relative z-20 mx-auto flex w-full max-w-3xl items-center gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-sm text-neutral-200 shadow-inner shadow-black/20"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(e)}
          className="h-8 flex-1 rounded-lg bg-white/10 px-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none"
          placeholder="Ask about projects, leadership, or awards..."
          disabled={isTyping}
          aria-label="Ask Anas a question"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="inline-flex h-8 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-[#33c2cc] px-2.5 text-xs sm:text-sm font-semibold text-black shadow-md shadow-emerald-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isTyping ? "…" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default MinimalChat;
