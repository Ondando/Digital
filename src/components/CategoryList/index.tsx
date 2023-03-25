import { Categorias } from "@/context/CategoriasLista";
import { CategoryListButton } from "@/ui/Button";
import { Text } from "@/ui/Text";

export default function CategoryList() {
  return (
    <>
      {Categorias.map((e, k) => {
        return (
          <CategoryListButton key={k}>
            <Text text={e} />
          </CategoryListButton>
        );
      })}
    </>
  );
}
