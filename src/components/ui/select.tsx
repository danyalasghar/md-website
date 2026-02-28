"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { BASE_INPUT_STYLES } from "@/lib/style-constants"

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
    return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
    return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return (
        <SelectPrimitive.Value
            data-slot="select-value"
            className={cn("text-primary-foreground", className)}
            {...props}
        />
    )
}

function SelectTrigger({
    className,
    size = "default",
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default"
}) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            data-size={size}
            className={cn(
                BASE_INPUT_STYLES,
                "flex items-center justify-between text-left",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronDownIcon className="size-4 opacity-50 shrink-0 mt-0.25" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
}

function SelectContent({
    className,
    children,
    position = "popper",
    sideOffset = 4,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                data-slot="select-content"
                sideOffset={sideOffset}
                className={cn(`
                    relative z-50 overflow-hidden rounded-sm
                    box-border max-h-96 w-full
                    ${position === "popper" && "w-(--radix-select-trigger-width) min-w-full"}
                    bg-popover-bg border-2 border-popover
                    text-primary-foreground
                    animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 ease-out
                    shadow-lg backdrop-blur-3xl
                `, className)}
                position={position}
                {...props}
            >
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-1",
                        position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] box-border"
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    )
}

function SelectItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(`
                relative rounded-xs
                w-auto py-1.5 mr-1 px-2
                flex items-center
                bg-transparent outline-none
                text-sm text-muted-foreground select-none
                focus:bg-accent-gradient focus:text-primary-foreground
                data-[state=checked]:text-primary-foreground
                data-disabled:pointer-events-none data-disabled:opacity-40
                cursor-pointer
            `, className)}
            {...props}
        >
            <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
}



export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
}