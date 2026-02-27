import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { BASE_INPUT_STYLES } from "@/lib/style-constants"

const buttonVariants = cva(
    `relative rounded
    whitespace-nowrap
    inline-flex items-center justify-center gap-3
    text-sm font-medium antialiased
    transform-gpu transition-all duration-300 ease-in-out
    backdrop-blur-md cursor-pointer
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
        variants: {
            variant: {
                outline:
                    `bg-black/10 border-2 border-input shadow-none
          text-primary-foreground
          hover:bg-black/30`,
                destructive:
                    `bg-gradient-to-r from-rose-500 to-red-600 border-2 border-white/5
          text-primary-foreground
          hover:scale-[1.02] hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.4)] active:scale-95`,
                primary:
                    `bg-accent-gradient border-2 border-white/5
          text-primary-foreground
          hover:scale-[1.02] hover:shadow-accent active:scale-95`,
                input: cn("backdrop-blur-none mt-0 h-auto !px-3 text-left justify-start gap-3", BASE_INPUT_STYLES),
                ghost: `p-0 backdrop-blur-none`,
                link: `text-primary underline-offset-4 hover:underline`,
            },
            size: {
                ghost: `p-0`,
                default: `h-9 px-4 py-2`,
                lg: `h-11 px-8 text-base`,
                icon: `h-9 w-9`,
            },
        },
        defaultVariants: {
            variant: "outline",
            size: "default",
        },
    }
)

function Button({
    className,
    variant = "primary",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }