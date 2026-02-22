import { motion } from "framer-motion"
import { Link } from "react-router"
import { Sparkles, ArrowRight, Palette, RefreshCw, Puzzle, Headphones, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/ProductCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"
import { featuredProducts } from "@/data/products"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

const features = [
    {
        icon: Palette,
        title: "Clean, Aesthetic Design",
        description: "Every script is designed with a premium glassmorphic UI that looks stunning.",
    },
    {
        icon: RefreshCw,
        title: "Free Updates Forever",
        description: "All purchased scripts receive lifetime updates at no additional cost.",
    },
    {
        icon: Puzzle,
        title: "Modular Code",
        description: "Easily customizable codebase with clear documentation and clean architecture.",
    },
    {
        icon: Headphones,
        title: "Active Support",
        description: "Dedicated Discord support with fast response times from our development team.",
    },
]

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-6"
                    >
                        <motion.div variants={item}>
                            <Badge className="w-fit gap-2 px-4 py-1.5">
                                <MessageCircle className="h-3.5 w-3.5" />
                                Get 40% off by joining our discord
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={item}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                        >
                            Midnight Dev: Where Premium Scripts Meet{" "}
                            <span className="text-transparent bg-clip-text bg-[image:var(--background-image-accent-gradient)]">
                                Flawless Aesthetics
                            </span>
                            .
                        </motion.h1>

                        <motion.p variants={item} className="text-lg text-muted-foreground max-w-xl">
                            Midnight Dev offers premium FiveM scripts built around modern UI design,
                            reliable functionality and seamless integration for QBCore, QBox and ESX.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap gap-4">
                            <Button variant="gradient" size="lg" asChild>
                                <Link to="/scripts">
                                    Explore Scripts
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="h-4 w-4" />
                                    Join Discord
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right — Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="w-full aspect-square max-w-md border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted-foreground text-sm">
                            <span className="opacity-40 tracking-widest uppercase text-xs">3D Visual Placeholder</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex gap-4 p-5 rounded-xl bg-card border-2 border-border hover:border-accent/20 transition-colors duration-300"
                            >
                                <div className="shrink-0 p-2.5 h-fit rounded-lg bg-accent/10">
                                    <feature.icon className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary-foreground text-sm">{feature.title}</h4>
                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        <Badge className="gap-2 px-4 py-1.5 mb-4">
                            <Sparkles className="h-3.5 w-3.5" />
                            Our most popular products
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold">Featured Products</h2>
                    </motion.div>

                    <div className="px-12">
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {featuredProducts.map((product, i) => (
                                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                                        <ProductCard product={product} index={i} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Button variant="outline" asChild>
                            <Link to="/scripts">
                                View all products
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
