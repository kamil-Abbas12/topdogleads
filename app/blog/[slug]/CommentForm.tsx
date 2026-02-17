"use client";

import { useState } from "react";

export default function CommentForm({ slug }: { slug: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name, email, comment }),
      });
      if (!res.ok) throw new Error("Failed");

      setName("");
      setEmail("");
      setComment("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name *"
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email *"
          type="email"
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
        />
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment *"
        required
        rows={5}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
      />

      <button
        disabled={status === "loading"}
        className="rounded-xl bg-[#1c2d56] hover:bg-[#1c2d56]/90 px-6 py-3 text-sm font-bold text-white disabled:opacity-60"
        type="submit"
      >
        {status === "loading" ? "Submitting..." : "Post Comment"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-green-700">Thanks! Your comment was submitted.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
