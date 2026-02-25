import { Link } from "react-router"
import { Youtube, Instagram, Mail, Globe } from "lucide-react"

const pageLinks = [
    { label: "Home", to: "/" },
    { label: "Scripts", to: "/scripts" },
    { label: "Bundles", to: "/bundles" },
    { label: "Subscriptions", to: "/subscriptions" },
    { label: "Documentation", to: "/docs" },
]

const socialLinks = [
    { label: "YouTube", icon: Youtube, href: "#" },
    { label: "Cfx.Re", icon: Globe, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "Email", icon: Mail, href: "mailto:contact@midnightdev.net" },
]

const legalLinks = [
    { label: "Tebex Terms", href: "https://www.tebex.io/legal/terms" },
    { label: "Tebex Privacy Policy", href: "https://www.tebex.io/legal/privacy" },
    { label: "Tebex Impressum", href: "https://www.tebex.io/legal/impressum" },
]

export default function Footer() {
    return (
        <footer className="pt-16 border-t-2 border-border">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Pages */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Pages</h4>
                            <ul className="space-y-2">
                                {pageLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Socials</h4>
                            <ul className="space-y-2">
                                {socialLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors flex items-center gap-2"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Legal</h4>
                            <ul className="space-y-2">
                                {legalLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Tebex Disclaimer */}
                    <div className="max-w-md lg:ml-auto">
                        <p className="text-sm text-muted-foreground mb-4">
                            This website and its operator are not affiliated, endorsed, or sponsored by Tebex Limited.
                            Tebex is a third-party platform used to process purchases made on this website. All transactions
                            are subject to Tebex's Terms of Service and Privacy Policy. For questions regarding billing,
                            refunds, or payment processing, please refer to Tebex's support channels.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Prices shown on this website may not reflect the exact amount charged due to currency
                            conversion rates, regional taxes, or fees applied by the payment provider. The final amount
                            will be displayed during checkout on the Tebex payment page.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6 border-t-2 border-border">
                    <p className="text-sm text-primary-foreground">
                        Copyright © 2025 Midnight Dev
                    </p>
                </div>
            </div>
        </footer>
    )
}
