import { Routes, Route, Outlet, useLocation } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartSidebar from "@/components/CartSidebar"
import DiscordGateModal from "@/components/DiscordGateModal"
import HomePage from "@/pages/HomePage"
import ScriptsPage from "@/pages/ScriptsPage"
import BundlesPage from "@/pages/BundlesPage"
import SubscriptionsPage from "@/pages/SubscriptionsPage"
import ProductDetailPage from "@/pages/ProductDetailPage"

function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartSidebar />
      <DiscordGateModal />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/scripts" element={<ScriptsPage />} />
        <Route path="/scripts/:slug" element={<ProductDetailPage />} />
        <Route path="/bundles" element={<BundlesPage />} />
        <Route path="/bundles/:slug" element={<ProductDetailPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/docs" element={<SubscriptionsPage />} />
      </Route>
    </Routes>
  )
}

export default App
