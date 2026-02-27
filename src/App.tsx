import { useEffect } from "react"
import { useLocation, useRoutes } from "react-router"
import { pages, type PageConfig } from "@/pages.config"
import Layout from "@/components/Layout"
import { Toaster } from "@/components/ui/sonner"
import { AnimatePresence, motion } from "framer-motion"

function App() {
  const element = useRoutes(
    pages.map((page: PageConfig) => ({
      path: page.path,
      element: <page.component />,
    }))
  )

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          {element && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {element}
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
      <Toaster />
    </>
  )
}

export default App
