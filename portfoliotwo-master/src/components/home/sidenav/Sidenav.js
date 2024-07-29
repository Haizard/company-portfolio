import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Church system</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">School management system</li>
        <li className="sidenavLi">Medical inventory system</li>
        <li className="sidenavLi">Business pos system</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">how to desing a poster</li>
        <li className="sidenavLi">how to design buildings</li>
        <li className="sidenavLi">
          how transform business 
                  </li>
        <li className="sidenavLi">Food derivering Management</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+255 693671032</li>
        <li className="sidenavLi">haithammisape@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav