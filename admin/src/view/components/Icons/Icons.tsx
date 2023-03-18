import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface IconProps {
    name: string;
}
export const Icon = ({ name }: IconProps) => {
    return (
        <>
            {name === 'products' && <ShoppingCartIcon />}
            {name === 'users' && <GroupIcon />}
            {name === 'product-create' && <AddShoppingCartIcon />}
            {name === 'categories' && <CategoryIcon />}
        </>
    );
};
