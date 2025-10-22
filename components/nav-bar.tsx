import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
    return (
        <div className="fixed  top-0 left-0 right-0 z-50 bg-background border-b border-border">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 ">
                            <div className="bg-neutral-400 h-5 w-2" />

                        <a href="/">
                            <span className="font-mono bg-gradient-to-r from-primary  to-primary/60 bg-clip-text text-transparent">BETTER-WALL.DEV</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" className="rounded-xl">
                            Login
                        </Button>
                        <Button variant="better" className="rounded-xl">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}