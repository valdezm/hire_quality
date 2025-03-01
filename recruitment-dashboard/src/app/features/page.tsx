import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | AI Talent Match",
  description: "Explore the powerful features of AI Talent Match",
}

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Talent Match Features</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced AI Matching</h2>
          <p>
            Our AI goes beyond traditional keyword matching, understanding the semantic meaning behind resumes and job
            requirements.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top Performer Analysis</h2>
          <p>
            We analyze your top performers to identify the unique traits that make them successful in your organization.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Predictive Performance Metrics</h2>
          <p>Our system predicts candidate performance based on data from your successful employees.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Customizable Hiring Criteria</h2>
          <p>Tailor the AI to your specific needs and company culture for more accurate matches.</p>
        </div>
      </div>
    </div>
  )
}

