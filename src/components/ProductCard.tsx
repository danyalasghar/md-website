import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import type { Product } from "@/data/products"
import { Link } from "react-router"

interface ProductCardProps {
    product: Product
    index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const { isLoggedIn, isDiscordConnected } = useAuth()
    const { addItem, setDiscordModalOpen } = useCart()

    const handleAddToCart = () => {
        if (!isLoggedIn) return
        if (!isDiscordConnected) {
            setDiscordModalOpen(true)
            return
        }
        addItem(product)
    }

    const detailPath = product.category === "bundle"
        ? `/bundles/${product.slug}`
        : `/scripts/${product.slug}`

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-card border-2 border-border rounded-md overflow-hidden group hover:border-accent/30 transition-colors duration-300"
        >
            {/* Image placeholder */}
            <Link to={detailPath}>
                <div className="aspect-video bg-white/[0.03] flex items-center justify-center text-muted-foreground text-sm cursor-pointer group-hover:bg-white/[0.05] transition-colors">
                    <span className="text-xs tracking-widest uppercase opacity-40">Preview Image</span>
                </div>
            </Link>

            {/* Info */}
            <div className="p-4.5">
                <div className="flex flex-wrap gap-1.5">
                    {product.tags
                        .filter((tag) => ["QBCore", "QBox", "ESX", "Standalone"].includes(tag))
                        .map((tag) => (
                            <Badge
                                key={tag}
                                variant={tag.toLowerCase() as "qbcore" | "qbox" | "esx" | "standalone"}
                                className="rounded-xs"
                            >
                                {tag.toUpperCase()}
                            </Badge>
                        ))}
                </div>

                <div className="flex items-center justify-between text-xl">
                    <Link to={detailPath} className="font-semibold text-primary-foreground  transition-colors truncate">
                        {product.name}
                    </Link>
                    <span className="text-accent-foreground  font-semibold whitespace-nowrap">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 leading-tight">
                    {product.shortDescription}
                </p>

                {/* Add to Cart */}
                <Button
                    variant="primary"
                    className="w-full mt-2"
                    onClick={handleAddToCart}
                >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                </Button>
            </div>
        </motion.div>
    )
}
