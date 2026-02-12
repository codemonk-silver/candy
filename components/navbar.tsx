import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";


export default function Navbar() {
    return (
        <div className="w-full h-20 flex justify-between items-center px-60 fixed top-0 left-0 bg-transparent z-10">
            <div className="flex gap-20 items-center">
                <h1 className="text-3xl font-bold text-black">Candy</h1>
                <div className="flex gap-5 text-black">
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/docs">Docs</Link>
                </div>
            </div>
            <div className="flex gap-5">
                <ThemeToggle />
                <Button variant="ghost">Sign In</Button>
                <Button className="bg-orange-400">Sign Up</Button>
            </div>
        </div>
    )
}