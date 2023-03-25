import { Categorias } from "@/data/dumbData";

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay" />
      <ul className="menu w-80 bg-base-100 p-4 text-base-content">
        {Categorias.map((e, k) => {
          return (
            <li key={k}>
              <p>{e}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
