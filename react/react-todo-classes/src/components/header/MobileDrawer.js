import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icons from "../icons/Icons";
import { slideDrawer } from "../../utils/framerConfig";
import StateContext from "../context/StateContext";

const DrawerMenu = styled(motion.aside)`
  background-color: var(--clr-secondary);
  width: min(70vw, 400px);
  position: absolute;
  min-height: 100%;
  display: block;
  z-index: 4;
  left: 0;
  top: 0;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      svg {
        color: var(--clr-primary-accent);
      }
    }
  }
`;
const Inner = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const DrawerLink = styled(motion(Link))``;

export default class MobileNav extends React.Component {
  static contextType = StateContext;

  render() {
    const { isMenuOpen, handleToggleMenu } = this.context
    const DrawerAnimation = slideDrawer;

    const navLinks = [
      {
        navId: 0,
        icon: "All",
        title: "All Tasks",
        pathName: "/",
      },
      {
        navId: 1,
        icon: "Completed",
        title: "Completed",
        pathName: "/",
      },
      {
        navId: 2,
        icon: "Incomplete",
        title: "Incomplete",
        pathName: "/",
      },
      {
        navId: 3,
        icon: "Categories",
        title: "Categories",
        pathName: "/",
      },
    ];

    return (
      <>
        <AnimatePresence>
          {isMenuOpen && (
            <DrawerMenu
              variants={DrawerAnimation}
              initial="hidden"
              animate="show"
              exit="remove"
            >
              <Inner>
                <ul>
                  {navLinks.map(({ icon, title, pathName }, navId) => (
                    <li key={navId}>
                      <Icons name={icon} />
                      <DrawerLink to={pathName} onClick={handleToggleMenu}>
                        {title}
                      </DrawerLink>
                    </li>
                  ))}
                </ul>
              </Inner>
            </DrawerMenu>
          )}
        </AnimatePresence>
      </>
    );
  }
}
