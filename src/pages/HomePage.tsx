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
import bg from "@/assets/bg.png"
import AccentSeparator from "@/components/ui/accent-seperator"
import discord from "@/assets/discord.svg"

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
        description: "We put a strong focus on delivering modern, sleek dark-themed UIs that feel both stylish and easy to use.",
    },
    {
        icon: RefreshCw,
        title: "Free Updates Forever",
        description: "From tiny tweaks to major version overhauls, every update is free — giving you the best version of your script, forever.",
    },
    {
        icon: Puzzle,
        title: "Modular Code",
        description: "We always provide open source functions to make integration with any other resource as easy as possible",
    },
    {
        icon: Headphones,
        title: "Active Support",
        description: "Whether you're setting things up, running into issues, or looking for customization ideas, our team is always here to help.",
    },
]

export default function HomePage() {
    return (
        <div className="flex flex-col gap-24">
            {/* Hero Section */}
            <section className=" flex flex-col gap-16 items-center justify-center">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-6"
                    >
                        {/* <motion.div variants={item}>
                            <Badge>
                                <MessageCircle className="h-3.5 w-3.5" />
                                Get 40% off by joining our discord
                            </Badge>
                        </motion.div> */}

                        <motion.h1
                            variants={item}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[4.25rem]"
                        >
                            Where Premium Scripts Meet{" "}
                            <span
                                className="text-transparent bg-clip-text bg-[image:var(--background-image-accent-gradient)]"
                                style={{ filter: "drop-shadow(0 0 24px color-mix(in srgb, var(--brand-base), transparent 70%))" }}
                            >
                                Flawless Aesthetics
                            </span>

                        </motion.h1>

                        <motion.p variants={item} className="text-lg text-secondary-foreground max-w-xl">
                            Midnight Dev offers premium FiveM scripts built around modern UI design,
                            reliable functionality and seamless integration for QBCore, QBox and ESX.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap gap-4 mt-4    ">
                            <Button variant="primary" asChild className="px-6! py-5!">
                                <Link to="/scripts">
                                    Explore Scripts
                                    <ArrowRight className="h-4 w-4" />

                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="px-6! py-5.25! mt-[-0.05rem]!">
                                <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
                                    <img src={discord} alt="Discord" className="h-5 w-5" />
                                    Join Discord
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="w-full h-80 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted-foreground text-sm">
                            <span className="opacity-40 tracking-widest uppercase text-xs">3D Visual Placeholder</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="relative overflow-hidden flex gap-4 p-5 rounded-md bg-card border-2 border-border hover:border-accent/20 transition-colors duration-300"
                        >
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    opacity: 0.15,
                                    filter: "blur(30px)",
                                }}
                            />
                            <div className="relative shrink-0 p-2.5 h-fit rounded-lg bg-accent/10">
                                <feature.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
                            </div>
                            <div className="relative">
                                <h4 className="font-semibold text-primary-foreground text-sm">{feature.title}</h4>
                                <p className="text-xs text-secondary-foreground mt-1 leading-normal">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <AccentSeparator />

            {/* Featured Products */}
            <section>
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
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
                    </Carousel>

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
