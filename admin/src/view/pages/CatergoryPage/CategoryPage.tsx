import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { CategoryList } from '../../components/Categories/CategoryList/CategoryList';
import { getAllCategories } from '../../components/Categories/CreateCategory/Category.helper';
import { Category } from '../../components/Categories/CreateCategory/Category.types';
import { CreateCategory } from '../../components/Categories/CreateCategory/CreateCategory';

export const CategoryPage = () => {
    const [categories, setCategories] = useState<Category[] | null>(null);
    useEffect(() => {
        getAllCategories().then((res: any) => setCategories(res.data));
    }, []);
    const rootCategories = categories?.filter(
        (category: any) => category.parentId === null || category.children.length,
    );
    const changeIsActive = (categoryID: any) => {
        setCategories((prevCategories: Category[] | null): Category[] | null =>
            prevCategories
                ? prevCategories?.map((elem) => {
                      const cat = elem?.children.find((category) => category.id === categoryID);
                      if (cat) {
                          cat.isActive = !cat.isActive;
                      }
                      elem.id === categoryID ? (elem.isActive = !elem.isActive) : null;
                      return elem;
                  })
                : null,
        );
    };
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
            <CategoryList categories={rootCategories} setIsActive={changeIsActive} />
            <CreateCategory rootCategories={categories} />
        </Box>
    );
};
