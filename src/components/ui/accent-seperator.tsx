import { cn } from "@/lib/utils"

export default function AccentSeparator({ className }: { className?: string }) {
    return (
        <div className={cn("max-w-screen-2xl mx-auto px-6 lg:px-12 w-full", className)}>
            <div
                className="h-[3px] w-full rounded-full"
                style={{
                    background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)",
                }}
            />
        </div>
    )
}
