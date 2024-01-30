import Link from 'next/link'

export default function MainNav({ children }) {
  return (
    <>
      <nav className="fixed left-1/2 transform -translate-x-1/2 z-20 w-[65%] border-b border-gray-700 rounded-b-lg bg-slate-900 flex">
        <div className="mx-auto p-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
          Vladyslav Savchyn
        </div>
        <div className="mx-auto p-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
          <Link href="/" passHref legacyBehavior>
            About me
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            My Projects
          </Link>
        </div>
      </nav>
      <br />
      {children}
    </>
  )
}



/*                    <div className="mb-4 md:mb-0">
                        Vladyslav Savchyn
                    </div>
                    <div className="mb-4 md:mb-0">
                        <Link href="/" passHref legacyBehavior>About me</Link>
                        <Link href="/projects" passHref legacyBehavior>My Projects</Link>
                    </div> */
