import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Header from "../../components/Header/Header";
import NavigationDrawer from "../../components/NavigationDrawer/NavigationDrawer";

import Settings from "../../Settings";

import Style from "./BasePage.module.css";

function BasePage(props) {
  const isNarrow = useMediaQuery({
    query: `(max-width: ${Settings.smallWidth}px)`,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const contentStyle = isNarrow
    ? Style.content_base_narrow
    : Style.content_base;

  return (
    <div id="page_base" className={Style.base}>
      <Header
        title={props.title}
        showBackButton={props.showBackButton}
        backUrl={props.backUrl}
        onMenuClick={toggleDrawer}
      />
      <NavigationDrawer open={drawerOpen} onClose={toggleDrawer} />
      <div id="page_content" className={contentStyle}>
        {props.content ?? "Provide a content prop"}
      </div>
    </div>
  );
}

export default BasePage;
