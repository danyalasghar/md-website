import HomePage from "@/pages/HomePage"
import ScriptsPage from "@/pages/ScriptsPage"
import BundlesPage from "@/pages/BundlesPage"
import SubscriptionsPage from "@/pages/SubscriptionsPage"
import ProductDetailPage from "@/pages/ProductDetailPage"

export interface PageConfig {
    path: string
    component: React.ComponentType<any>
    children?: PageConfig[]
}

export const pages: PageConfig[] = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/scripts",
        component: ScriptsPage,
    },
    {
        path: "/scripts/:slug",
        component: ProductDetailPage,
    },
    {
        path: "/bundles",
        component: BundlesPage,
    },
    {
        path: "/bundles/:slug",
        component: ProductDetailPage,
    },
    {
        path: "/subscriptions",
        component: SubscriptionsPage,
    },
    {
        path: "/docs",
        component: SubscriptionsPage,
    },
]
