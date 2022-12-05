export default function CategoryList() {
    const Categorias = ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'];
    return (
        <div className="flex flex-row justify-between">
            {Categorias.map((e, k) => {
                return (
                    <button key={k} className="rounded border px-4">
                        <p>{e}</p>
                    </button>
                );
            })}
        </div>
    );
}
