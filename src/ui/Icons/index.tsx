import * as React from "react";
interface IIcons {
  children: any;
  Event?: any;
}
export default function Icons({ children, Event }: IIcons) {
  return <div onClick={Event}>{children}</div>;
}
