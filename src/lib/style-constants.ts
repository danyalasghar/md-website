import { cn } from "./utils";

export const BASE_INPUT_STYLES = cn(
    `flex w-full px-3 py-1.5 rounded
    text-sm text-primary-foreground
    bg-input-bg border-2 border-input outline-hidden placeholder:text-muted-foreground
    hover:bg-input-hover-bg hover:border-input-hover
    focus-visible:bg-input-hover-bg focus-visible:border-input-active focus-visible:shadow-input-active
    disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50
    data-[state=open]:bg-input-hover-bg data-[state=open]:border-input-active data-[state=open]:shadow-input-active
    group-data-[invalid=true]/field:!border-error-foreground
    transition-all duration-300 ease-in-out`
);
