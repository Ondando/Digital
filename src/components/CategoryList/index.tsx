import { Categorias } from "@/context/CategoriasLista";

export default function CategoryList() {
  return (
    <>
      {Categorias.map((e, k) => {
        return (
          <button key={k} className="rounded border px-4 hover:scale-110">
            <p>{e}</p>
          </button>
        );
      })}
    </>
  );
}
