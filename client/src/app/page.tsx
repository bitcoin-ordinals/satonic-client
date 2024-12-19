import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-24 text-center">
        <h1 className="text-6xl font-bold tracking-tighter text-neon-red mb-4">
          Ordinals NFT Auctions
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Discover, bid, and collect rare Bitcoin Ordinals
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/auctions">
            <Button size="lg" className="bg-neon-red hover:bg-neon-red-dark">
              Explore Auctions
            </Button>
          </Link>
          <Link href="/auctions/create">
            <Button size="lg" variant="outline" className="border-neon-red text-neon-red hover:bg-neon-red/10">
              Create Auction
            </Button>
          </Link>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Auctions</h2>
      </section>
    </div>
  )
}