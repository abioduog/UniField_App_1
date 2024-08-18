'use client'
import BackendInterfaceLayout from '../components/BackendInterfaceLayout'
import DashboardAnalytics from '../components/DashboardAnalytics'
import RetailerManagementPage from '../components/RetailerManagementPage'

export default function Home() {
  return (
    <BackendInterfaceLayout>
      <DashboardAnalytics />
    </BackendInterfaceLayout>
  )
}