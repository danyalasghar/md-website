import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProductCard from "@/components/ProductCard"
import { scripts } from "@/data/products"

const allTags = [...new Set(scripts.flatMap((p) => p.tags))]

export default function ScriptsPage() {
    const [search, setSearch] = useState("")
    const [activeTag, setActiveTag] = useState<string | null>(null)

    const filtered = useMemo(() => {
        return scripts.filter((p) => {
            const matchSearch =
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.shortDescription.toLowerCase().includes(search.toLowerCase())
            const matchTag = !activeTag || p.tags.includes(activeTag)
            return matchSearch && matchTag
        })
    }, [search, activeTag])

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">Scripts</h1>

                    <div className="flex flex-col sm:flex-row gap-3 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search scripts..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="gap-2">
                                    <SlidersHorizontal className="h-4 w-4" />
                                    {activeTag || "Filter"}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setActiveTag(null)}>
                                    All
                                </DropdownMenuItem>
                                {allTags.map((tag) => (
                                    <DropdownMenuItem key={tag} onClick={() => setActiveTag(tag)}>
                                        {tag}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filtered.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="text-lg">No scripts found</p>
                        <p className="text-sm mt-1">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    )
}
