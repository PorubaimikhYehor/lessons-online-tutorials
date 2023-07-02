import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../models/menu-item.model";

export default function Sidebar() {
  const [isShown, toggleMenu] = useState(true);
  const [activeId, setActive] = useState(0);

  const menuList: MenuItem[] = [
    { title: "Home", icon: "home-outline", active: false, id: 1 },
    { title: "Profile", icon: "person-outline", active: true, id: 2 },
    { title: "Messages", icon: "chatbubbles-outline", active: false, id: 3 },
    { title: "Settings", icon: "settings-outline", active: false, id: 4 },
    { title: "Help", icon: "help-outline", active: false, id: 5 },
    { title: "Password", icon: "lock-closed-outline", active: false, id: 6 },
    { title: "Sign Out", icon: "log-out-outline", active: false, id: 7 ,link:"/" },
  ]

  return (
    <>
      <section className="h-screen">

        <div className={`navigation fixed top-5 left-5 bottom-5 ${isShown ? 'w-[300px]' : 'w-[70px]'} rounded-xl border-l-4 bg-blue-600 overflow-hidden duration-500` }>
          <ul className="absolute top-0 left-0 w-full pl-1 pt-10">
            {
              menuList.map(item => (
                
                <li onClick={() => setActive(item.id)} className={"list relative rounded-l-2xl cursor-pointer text-white " + (item.id != activeId || " bg-white ")}>
                  <div className={(item.id != activeId && "hidden ") + " bg-white h-5 absolute w-5 right-0 -top-5 before:content-[''] before:rounded-br-full before:bg-blue-600 before:w-full before:h-full before:block"}></div>
                  <Link to={item.link || "#"} className={"relative flex w-full  " + (item.id != activeId || " text-blue-900 font-semibold")}>
                    <span className="icon relative block min-w-[60px] h-[60px] leading-[60px] text-2xl text-center"><ion-icon name={item.icon}></ion-icon></span>
                    <span className="title relative block pl-3 h-[60px] leading-[60px] whitespace-nowrap">{item.title}</span>
                  </Link>
                  <div className={(item.id != activeId && "hidden ") + " bg-white h-5 absolute w-5 right-0 -bottom-5 before:content-[''] before:rounded-tr-full before:bg-blue-600 before:w-full before:h-full before:block"}></div>
                </li>
              ))
            }
          </ul>
        </div>
        <div onClick={() => toggleMenu(!isShown)} className={"toggle text-white fixed top-5 right-5 w-12 h-12 text-2xl cursor-pointer rounded-xl flex items-center justify-center " + (isShown ? " bg-red-600" : "bg-blue-600")}>
          <ion-icon className="absolute " name={!isShown ? "menu-outline" : "close-outline"}></ion-icon>

       </div>
      </section>
    </>
  )
}
