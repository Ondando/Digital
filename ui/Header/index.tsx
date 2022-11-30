import TabButton from '../TabButton';
import Handle from 'functions/OpenTab';
import Searcher from '../Searchear';
import WishlistLoveButton from '../Icons/WishlistLoveButton';
import AvatarButton from '../Icons/AvatarButton';
import ShopCartButton from '../Icons/ShopCartButton';
import CategoryList from './CategoryList';

export default function Header() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <div className="md:hidden">
            <TabButton size={24} evt={Handle} />
          </div>
          <div>
            <p>Ondando</p>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <Searcher />
        </div>
        <div className="flex flex-row gap-2">
          <WishlistLoveButton />
          <AvatarButton />
          <ShopCartButton />
        </div>
      </div>
      <div>
        <div className="md:hidden">
          <Searcher />
        </div>
        <div className="hidden md:block">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
