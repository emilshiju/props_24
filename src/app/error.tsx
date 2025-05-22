


'use client'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col  min-h-screen px-4">
      <br></br>
      <h1 className="text-4xl font-bold text-black-600">Something went wrong! server</h1>
      <p className="mt-4 text-gray-700">{ "An unexpected error occurred. Try again after some time"}</p>
      <br></br>
      <button
        onClick={() => reset()}
        className=" w-32 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
           Try Again
      </button>
    </div>
  )
}