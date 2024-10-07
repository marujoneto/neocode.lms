"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  GraduationCap, 
  ClipboardList, 
  LayoutDashboard, 
  LogOut, 
  Settings
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-20 bg-gradient-to-b from-[#020520] to-[#2AAA9E] text-white">
        <nav className="flex flex-col items-center py-8 space-y-8">
          <Link href="/dashboard" className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg ${pathname === '/dashboard' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}>
            <LayoutDashboard className="h-6 w-6" />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
          <Link href="/dashboard/courses" className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg ${pathname === '/dashboard/courses' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}>
            <BookOpen className="h-6 w-6" />
            <span className="text-xs mt-1">Courses</span>
          </Link>
          <Link href="/dashboard/classes" className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg ${pathname === '/dashboard/classes' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}>
            <GraduationCap className="h-6 w-6" />
            <span className="text-xs mt-1">Classes</span>
          </Link>
          <Link href="/dashboard/assessment" className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg ${pathname === '/dashboard/assessment' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}>
            <ClipboardList className="h-6 w-6" />
            <span className="text-xs mt-1">Assessment</span>
          </Link>
          <Link href="/logout" className="flex flex-col items-center justify-center w-16 h-16 rounded-lg hover:bg-white hover:bg-opacity-10 mt-auto">
            <LogOut className="h-6 w-6" />
            <span className="text-xs mt-1">Logout</span>
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white bg-opacity-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white">Hello, Mira!</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-10">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-5">
          {children}
        </main>
      </div>
    </div>
  )
}