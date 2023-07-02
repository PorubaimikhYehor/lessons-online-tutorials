import React from "react";
import { MenuItem } from "../../models/menu-item.model";
import Icon from "@mdi/react";
import { mdiHomeOutline, mdiAccountOutline, mdiCameraOutline, mdiCogOutline, mdiChatOutline } from '@mdi/js';

type State = {
  activeId: number;
}

export class NavigationMenu extends React.Component<object, State> {
  constructor(props: object | Readonly<object>) {
    super(props)
    this.state = {
      activeId: 1,
    }
  }

  menuList: MenuItem[] = [
    { title: "Home", icon: mdiHomeOutline, id: 1 },
    { title: "Profile", icon: mdiAccountOutline, id: 2 },
    { title: "Messages", icon: mdiChatOutline, id: 3 },
    { title: "Photos", icon: mdiCameraOutline, id: 5 },
    { title: "Settings", icon: mdiCogOutline, id: 4 },
  ]
  getTranslate() {
    const translate = this.menuList.findIndex(mi => mi.id == this.state.activeId);
    return `translateX(${translate * 70}px)`
  }

  render(): React.ReactNode {
    return (
      <>
        <section className="bg-[#222327] flex-center h-screen">
          <div className="w-[400px] h-[70px] flex-center bg-white rounded-[10px]">
            <ul className="flex w-[350px] relative">
              {this.menuList.map(mi => (
                <li key={mi.id} className="relative w-[70px] h-[70px] z-10" onClick={() => this.setState({ activeId: mi.id })}>
                  <a href="#" className="relative flex-center w-full h-full flex-col text-center ">
                    <span className={`icon relative ${mi.id == this.state.activeId && "-translate-y-[33px]"} duration-500 text-[#222327]`}><Icon path={mi.icon} size={1.5} ></Icon></span>
                    <span className={`absolute text-[#222327] text-xs duration-500 opacity-0 translate-y-5 ${mi.id == this.state.activeId && "translate-y-3 opacity-100"}`}>{mi.title}</span>
                  </a>
                </li>
              ))}
              <div style={{ transform: this.getTranslate() }} className={`absolute bg-[#29fd53] w-[70px] h-[70px] -top-1/2 rounded-full border-[6px] border-[#222327] duration-500`}>
                <span className="w-[20px] h-[20px] bg-transparent absolute top-1/2 -left-[22px] rounded-tr-full shadow-[0_-10px_0_0_#222327]"></span>
                <span className="w-[20px] h-[20px] bg-transparent absolute top-1/2 -right-[22px] rounded-tl-full shadow-[0_-10px_0_0_#222327]"></span>
              </div>
            </ul>
          </div>
        </section>
      </>
    )
  }
}