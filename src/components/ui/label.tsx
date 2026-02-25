import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
    `transition-colors duration-200`,
    {
        variants: {
            variant: {
                input: `text-sm font-medium leading-none text-primary-foreground cursor-pointer`,
                regular: `text-medium leading-normal text-primary-foreground`,
                secondary: `text-sm font-normal leading-normal text-secondary-foreground`,
            },
        },
        defaultVariants: {
            variant: "regular",
        },
    }
)

const Label = ({
    className,
    variant,
    htmlFor,
    ...props
}: {
    className?: string;
    variant?: "input" | "regular" | "secondary";
    htmlFor?: string;
    [key: string]: any;
}) => {
    const Tag = htmlFor ? "label" : "p";
    return (
        <Tag
            className={cn(labelVariants({ variant, className }))}
            htmlFor={htmlFor}
            {...props}
        />
    )
}

export { Label, labelVariants }