// pages/services/Meeting.tsx
import React from "react"

const Meeting: React.FC = () => {
  return (
    <section className="pt-24 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Meeting Zone</h1>
      <p className="text-muted-foreground mb-4">
        Salles de réunion entièrement équipées, idéales pour les présentations, formations ou brainstormings.
      </p>
      <img src="/images/meeting.jpg" alt="Meeting Zone" className="rounded-lg shadow-lg w-full" />
    </section>
  )
}

export default Meeting
