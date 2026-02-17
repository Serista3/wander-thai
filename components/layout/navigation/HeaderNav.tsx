import Logo from '@/components/ui/Logo';
import SearchCommand from './SearchCommand';
import UserMenu from './UserMenu';

export default function HeaderNav() {
  return (
    <nav className="py-6 border-b border-gray-300">
      <div className="container flex justify-between gap-5 items-center">
        <Logo />
        <div className='flex gap-2 items-center'>
          <SearchCommand />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
