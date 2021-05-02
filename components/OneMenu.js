import Link from "next/link";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function OneMenu({ menu, cname, isArrowShow = true }) {
  const [open, setOpen] = useState(false);
  const handleOpen = (ev) => {
    if (ev.target.id === cname) {
      setOpen(!open);
    }
  };
  return (
    <div className={"flex flex-col"}>
      <div>
        {menu.link && (
          <Link href={menu.link}>
            <div
              onClick={handleOpen}
              className={`mb-0.5  px-3 py-2  rounded-sm cursor-pointer hover:bg-red-700 flex items-center`}
              id={cname}
            >
              {menu.name}
            </div>
          </Link>
        )}
      </div>
      <div
        className={`flex items-start transition-all ${
          open ? "max-h-96" : "max-h-0"
        } overflow-hidden `}
      >
        {menu.sublinks && (
          <div className={"py-2"}>
            <ChevronRightIcon className={"h-5 w-5"} />
          </div>
        )}

        {menu.sublinks && (
          <div className={""}>
            {menu.sublinks.map((submenu) => (
              <OneMenu menu={submenu} key={submenu.name} cname={submenu.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
