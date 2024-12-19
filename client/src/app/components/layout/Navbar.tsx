import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WalletConnect } from "@/components/WalletConnect"

export default function Navbar() {
  return (
    <nav className="border-b border-neon-red/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-neon-red">Ordinals Auction</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/auctions"
              className="text-sm font-medium transition-colors hover:text-neon-red"
            >
              Explore
            </Link>
            <Link
              href="/auctions/create"
              className="text-sm font-medium transition-colors hover:text-neon-red"
            >
              Create Auction
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium transition-colors hover:text-neon-red"
            >
              Profile
            </Link>
          </nav>
          <WalletConnect />
        </div>
      </div>
    </nav>
  )
}