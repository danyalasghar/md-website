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
import bg from "@/assets/bg.png"

function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />

      </div>
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          filter: "blur(70px) hue-rotate(15deg)",
        }}
      />
      <Navbar />
      <CartSidebar />
      <DiscordGateModal />
      <main className="flex-1 mt-16 pt-24 pb-32">
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
