import { categories } from "@/helpers/categories";
import { routes } from "@/routes";
import { ICategory } from "@/types";

const generateLinksCategories = (cates: ICategory[]) => {
  return cates.map((category) => ({
    href: `${routes.products}?category=${category.id}`,
    label: category.name,
  }));
};
export const NavLinks = [

  ...generateLinksCategories(categories).slice(0, 5),
];
