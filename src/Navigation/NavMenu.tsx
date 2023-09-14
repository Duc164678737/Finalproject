import React, { useState } from "react";
import { INavLinkGroup, INavLink, Nav } from '@gui/fluent-ui-allure';

import anh8 from "../assest/a8.png";
import anh9 from "../assest/a9.png";
import { NavView } from "./NavView";
const sidebarStyle = {
  width: 'fit-content',
  height: 500,
  // background: '#171D24'
};

const logoStyle = {
  padding: "12px 16px"
};

const imageStyle: React.CSSProperties = {
  maxHeight: 48,
  maxWidth: 180
};

const navs: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Dashboard',
        url: '#/navigationmenu',
        key: 'k1',
        iconProps: {
          iconName: 'fas-chart-pie'
        },
      },
      {
        name: 'User Management',
        title: 'User Management',
        url: '',
        iconProps: {
          iconName: 'fas-user'
        },
        isExpanded: true,
        key: 'k2',
        links: [
          {
            name: 'Sub nav item1',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k21',
          },
          {
            name: 'Sub nav item2',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k22',
          },
          {
            name: 'Sub nav item3',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k23',
          }
        ]
      },
      {
        name: 'User Management with long title',
        title: 'User Management with long title',
        url: '',
        iconProps: {
          iconName: 'fas-user'
        },
        isExpanded: true,
        key: 'k202',
        links: [
          {
            name: 'Sub nav item1 with long long titlelong long titlelong long titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long title',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k212',
          },
          {
            name: 'Sub nav item2',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k222',
          }
        ]
      },
      {
        name: 'Templates',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-layer-group'
        },
        key: 'k5',
      }
    ]
  },
  {
    links: [
      {
        name: 'Help',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-circle-question'
        },
        key: 'k8',
      },
      {
        name: 'Settings',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-gear'
        },
        key: 'k9',
      }
    ]
  }
];


// interface IProps {
// }

interface IState {
  selectedKey: string;
  isCollapsed: boolean;
}
const NavMenu = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };
  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Navigation Menu</div>
      <div>
        Navigation menu is the list of links that the user can always access.
      </div>
      <div>
        <div className="usage margin-top-40">Usage</div>
        <p>
          1. Which contains the main functions links. A main function navigation
          can have sub-navigation items by using a hierarchy style.
        </p>
        <p>
          2. Icons in the navigation bar serve as a visual affordance that
          indicates the item is actionable. For example, when hovering a
          navigation item, it will appear lighter blue color as the background.
        </p>
        <p>
          3. If a navigation item is a group, it does not have the function to
          access other pages. Only can expand or collapse the navigation item
          group.
        </p>
        <div className="border-radius-1 padding-24"><NavView /></div>
        {hide && (
          <>
            <img src={anh8} alt="anh3" />
            <img src={anh9} alt="anh9" />
          </>
        )}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore}
        >
          {!hide ? "More" : "Less"}
        </button>
        <div>
          <div className="usage margin-top-40">Navigation-Collapsed</div>
          <p>The navigation menu is always collapsed.</p>
          <div className="border-radius-1 padding-24"><NavView /></div>
          {hide2 && (
            <>
              <img src={anh8} alt="anh3" />
              <img src={anh9} alt="anh9" />
            </>
          )}
          <button
            className="display-flex-2 border-radius-1 showMore"
            onClick={handleShowMore2}
          >
            {!hide2 ? "More" : "Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
