import navigation from '../../configs/navigation'

export default function Layout(): JSX.Element {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="sm:flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <nav
          className="md:mt-0 md:order-1 -mx-5 leading-8 flex flex-wrap justify-center pb-4 sm:pb-0"
          aria-label="Footer"
        >
          {navigation.community.map((item) => (
            <div key={item.name} className="px-5">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
