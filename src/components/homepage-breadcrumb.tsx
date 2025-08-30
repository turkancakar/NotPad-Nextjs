"use client"

import Link from "next/link"
import { useTheme } from "@/lib/theme-context"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function HomepageBreadcrumb() {
  const { currentTheme } = useTheme()

  return (
    <Breadcrumb className={`${currentTheme.colors.textSecondary}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage>Ana Sayfa</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard" className={`hover:${currentTheme.colors.text}`}>
              Dashboard
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
} 