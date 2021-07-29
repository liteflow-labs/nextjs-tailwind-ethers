import classNames from 'classnames'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'
import Footer from '../Footer'
import NavBottomBar from '../NavBottomBar'
import NavSidebar from '../NavSidebar'

export default function Layout(
  props: PropsWithChildren<{ className?: string }>,
): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <NavSidebar open={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          className={classNames(
            'flex-1 flex flex-col relative overflow-y-auto focus:outline-none',
          )}
        >
          <div className={classNames('flex-grow', props.className)}>
            {props.children}
          </div>
          <Footer />
        </main>
        <div className="md:hidden md:items-center md:justify-between">
          <NavBottomBar setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
    </div>
  )
}
