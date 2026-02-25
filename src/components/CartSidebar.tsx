import { Trash2, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"
import { useCart } from "@/context/CartContext"

const paymentMethods = ["PayPal", "GPay", "MC", "VISA", "AMEX"]

export default function CartSidebar() {
    const { items, removeItem, subtotal, totalItems, isCartOpen, setCartOpen } = useCart()
    const taxes = subtotal * 0.0
    const total = subtotal + taxes

    return (
        <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
            <SheetContent className="flex flex-col" open={isCartOpen}>
                <SheetHeader>
                    <SheetTitle>Your cart</SheetTitle>
                    <SheetDescription>{totalItems} item{totalItems !== 1 ? "s" : ""}</SheetDescription>
                </SheetHeader>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto -mx-6 px-6">
                    {items.length === 0 ? (
                        <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
                            Your cart is empty
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border-2 border-border"
                                >
                                    {/* Thumbnail placeholder */}
                                    <div className="w-16 h-16 rounded-lg bg-white/5 shrink-0 flex items-center justify-center text-muted-foreground text-xs">
                                        IMG
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-primary-foreground truncate">
                                            {item.product.name}
                                        </p>
                                        <p className="text-sm text-accent font-semibold mt-0.5">
                                            ${item.product.price.toFixed(2)}
                                        </p>
                                        <Button
                                            variant="destructive"
                                            className="mt-2 h-7 text-xs"
                                            onClick={() => removeItem(item.product.id)}
                                        >
                                            <Trash2 className="h-3 w-3" />
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t-2 border-border pt-4 -mx-6 px-6 space-y-4">
                    {/* Summary */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Taxes</span>
                            <span>${taxes.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-primary-foreground pt-2 border-t-2 border-border">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <Button variant="primary" className="w-full">
                        <CreditCard className="h-4 w-4" />
                        Checkout
                    </Button>

                    {/* Payment logos */}
                    <div className="flex justify-center gap-3 pb-2">
                        {paymentMethods.map((method) => (
                            <span
                                key={method}
                                className="text-[10px] text-muted-foreground bg-white/5 px-2 py-1 rounded font-medium"
                            >
                                {method}
                            </span>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
