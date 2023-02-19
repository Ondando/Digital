export default function Sidebar() {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu bg-base-100 text-base-content w-80 p-4">
          <li>
            <p>Sidebar Item 1</p>
          </li>
          <li>
            <p>Sidebar Item 2</p>
          </li>
        </ul>
      </div>
    </>
  );
}
