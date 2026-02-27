import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    `rounded-full border-2
    px-4 py-1.5
    inline-flex gap-1 items-center
    text-xs font-medium
    transition-colors`,
    {
        variants: {
            variant: {
                default: "border-accent/20 bg-accent/15 text-accent-foreground",
                secondary: "border-border bg-white/5 text-secondary-foreground",
                outline: "border-border text-muted-foreground",
                destructive: "border-transparent bg-error/15 text-error-foreground",
                qbcore: "border-0 bg-red-500/15 text-red-300/80 px-2.5 py-0.5  text-[11px]",
                qbox: "border-0 bg-yellow-500/15 text-yellow-300/80 px-2.5 py-0.5 text-[11px]",
                esx: "border-0 bg-orange-500/15 text-orange-300/80 px-2.5 py-0.5 text-[11px]",
                standalone: "border-0 bg-green-500/15 text-green-300/80 px-2.5 py-0.5 text-[11px]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
