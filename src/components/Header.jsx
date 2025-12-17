import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[60%] z-50 px-8 py-6 flex justify-between items-center bg-paper-base/90 border-b border-paper-border transition-all duration-300">
            <Link to="/" className="text-2xl font-serif font-bold text-ink-black tracking-tight cursor-pointer">
                tchu.blog
            </Link>
            <div className="flex gap-8">
                <a href="#experience" className="text-ink-light hover:text-ink-black font-medium transition duration-300 relative group">
                    Experience
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ink-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/blog" className="text-ink-light hover:text-ink-black font-medium transition duration-300 relative group">
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ink-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
