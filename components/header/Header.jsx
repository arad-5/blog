import Link from 'next/link'
import Categories from './Categories'
import Search from './search/Search'
import Authors from './Authors'

const Header = () => {
    return (
        <div className="container mx-auto mb-8 px-10">
            <div className=" flex h-[5rem] w-full items-center justify-between border-b border-blue-400">
                <div className="md:float-left">
                    <Link href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 100 100"
                            version="1.1"
                            viewBox="0 0 100 100"
                            xmlSpace="preserve"
                            className="h-full w-[3rem] cursor-pointer text-3xl font-bold text-white"
                        >
                            <path
                                d="M61 44.6c0 5.9-5 10.8-11 10.8s-11-4.9-11-10.8v-5.4c0-5.9 5-10.8 11-10.8 3 0 5.8 1.2 7.8 3.2 2 1.9 3.3 4.6 3.3 7.6v5.4zm38.6-18.3c-.1-.3-.3-.6-.5-.9-1.4-2.8-3.1-5.4-5-7.8-.3-.4-.7-.9-1-1.3-2.1-2.6-5.4-4.1-8.7-4.1h-51c-6.1 0-11 4.9-11 10.8v32.4c0 5.9-5 10.8-11 10.8H5.5c-3 0-5.5 2.4-5.5 5.4 0 .8.2 1.5.4 2.1.1.3.3.6.5.9 1.4 2.8 3.1 5.4 5 7.8.3.4.7.9 1 1.3 2.1 2.6 5.4 4.1 8.7 4.1h17.8c6.1 0 11-4.9 11-10.8 0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4c0 3 1.2 5.7 3.3 7.6 2 2 4.7 3.2 7.8 3.2H72c6.1 0 11-4.9 11-10.8V44.6c0-5.9 5-10.8 11-10.8h.3c3 0 5.5-2.4 5.5-5.4.2-.8 0-1.5-.2-2.1z"
                                className="st0"
                                fill="#fff"
                            ></path>
                        </svg>
                    </Link>
                </div>
                <div className="float-right flex items-center space-x-10 h-full sticky top-0 left-0 z-50">
                    <Authors />
                    <Categories />
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Header