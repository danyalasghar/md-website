import { useState, useMemo } from "react"
import { Search, ChevronsUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ProductCard from "@/components/ProductCard"
import type { Product } from "@/data/products"

const SortType = {
    Default: "default",
    NameAsc: "name-asc",
    NameDesc: "name-desc",
    PriceAsc: "price-asc",
    PriceDesc: "price-desc",
} as const

type SortType = (typeof SortType)[keyof typeof SortType]

interface ProductsLayoutProps {
    title: string
    products: Product[]
    searchPlaceholder: string
    emptyStateTitle: string
}

export default function ProductsLayout({
    title,
    products,
    searchPlaceholder,
    emptyStateTitle,
}: ProductsLayoutProps) {
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState<SortType>(SortType.Default)

    const processedProducts = useMemo(() => {
        let result = products.filter((p) => {
            const matchSearch =
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.shortDescription.toLowerCase().includes(search.toLowerCase())
            return matchSearch
        })

        if (sortBy === SortType.NameAsc) {
            result.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sortBy === SortType.NameDesc) {
            result.sort((a, b) => b.name.localeCompare(a.name))
        } else if (sortBy === SortType.PriceAsc) {
            result.sort((a, b) => a.price - b.price)
        } else if (sortBy === SortType.PriceDesc) {
            result.sort((a, b) => b.price - a.price)
        }

        return result
    }, [products, search, sortBy])

    return (
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pt-8 lg:pt-12">
            <div>
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h1>

                    <div className="flex flex-col md:flex-row gap-3 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder={searchPlaceholder}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 py-2 w-full"
                            />
                        </div>
                        <Select
                            value={sortBy}
                            onValueChange={(value) => setSortBy(value as SortType)}
                        >
                            <SelectTrigger className="w-full md:w-3xs gap-2.5 py-2">
                                <div className="flex items-center gap-1.5">
                                    <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                                    <span className="text-muted-foreground whitespace-nowrap">Sort by:</span>
                                    <SelectValue />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={SortType.Default}>Default</SelectItem>
                                <SelectItem value={SortType.NameAsc}>Name (A - Z)</SelectItem>
                                <SelectItem value={SortType.NameDesc}>Name (Z - A)</SelectItem>
                                <SelectItem value={SortType.PriceDesc}>Price (High to Low)</SelectItem>
                                <SelectItem value={SortType.PriceAsc}>Price (Low to High)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {processedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {processedProducts.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="text-lg">{emptyStateTitle}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
