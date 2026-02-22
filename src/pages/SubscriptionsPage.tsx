import { motion } from "framer-motion"
import { Clock } from "lucide-react"

export default function SubscriptionsPage() {
    return (
        <div className="pt-24 pb-16 min-h-[60vh] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center bg-card backdrop-blur-md border-2 border-border rounded-xl p-12 max-w-md"
            >
                <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                    <Clock className="h-8 w-8 text-accent" />
                </div>
                <h1 className="text-3xl font-bold mb-3">Coming Soon</h1>
                <p className="text-muted-foreground">
                    Memberships and subscription plans are currently in development. Stay tuned for updates!
                </p>
            </motion.div>
        </div>
    )
}
