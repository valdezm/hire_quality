import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | AI Recruitment System",
  description: "Login to the AI recruitment system",
}

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {/* Login form implementation */}
      </div>
    </div>
  )
}

