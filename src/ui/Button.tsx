export const Button = ({ children }: { children: any }) => {
  return <button className="btn-sm btn rounded border">{children}</button>;
};


// Move to components ?  
export const CategoryListButton = ({ children }: { children: any }) => {
  return (
    <button className=" btn-sm btn rounded border hover:scale-110">
      {children}
    </button>
  );
};
