import Handle from '../../functions/OpenTab';
import CategoryList from './CategoryList';
import Searcher from '../../components/Searchear';
import { TabButton, WishlistLoveButton, AvatarButton, ShopCartButton } from 'ui';

export default function Header() {
    return (
        <div className="md:container md:mx-auto">
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
