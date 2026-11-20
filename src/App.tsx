import { BrowserRouter, Navigate, Route, Routes } from "react-router"

import { SiteLayout } from "@/components/site/SiteLayout"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import { HomePage } from "@/pages/HomePage"
import { ImpactPage } from "@/pages/ImpactPage"
import { InstitutionsPage } from "@/pages/InstitutionsPage"
import { ProgramDetailPage } from "@/pages/ProgramDetailPage"
import { ProgramsPage } from "@/pages/ProgramsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="programs/:slug" element={<ProgramDetailPage />} />
          <Route path="institutions" element={<InstitutionsPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
