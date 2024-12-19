import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <section className="py-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold tracking-tighter text-neon-red mb-6">
            Ordinals NFT Auctions
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            Discover, bid, and collect rare Bitcoin Ordinals
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/auctions">
              <Button size="lg" className="bg-neon-red hover:bg-neon-red-dark text-lg px-8 py-6">
                Explore Auctions
              </Button>
            </Link>
            <Link href="/auctions/create">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-neon-red text-neon-red hover:bg-neon-red/10 text-lg px-8 py-6"
              >
                Create Auction
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-4xl font-bold mb-12 text-gray-100 border-l-4 border-neon-red pl-4">
          Featured Auctions
        </h2>
        {/* Add grid of featured auctions here */}
      </section>
    </div>
  )
}