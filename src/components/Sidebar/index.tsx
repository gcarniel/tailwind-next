'use client'

import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import { Logo } from './Logo'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import Profile from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import * as Collpasible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collpasible.Root
      className={`border-r border-zinc-200 p-4 flex flex-col gap-6 
                fixed top-0 left-0 right-0 data-[state=open]:bottom-0 z-20 bg-white border-b
                lg:right-auto lg:w-80 lg:border-r lg:py-8 lg:px-5 lg:data-[state=closed]:bottom-0 
                dark:border-zinc-800 dark:bg-zinc-900
                `}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collpasible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-5 w-5" />
          </Button>
        </Collpasible.Trigger>
      </div>

      <Collpasible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex "
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav>
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>

          <Profile />
        </div>
      </Collpasible.Content>
    </Collpasible.Root>
  )
}
