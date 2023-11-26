import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";

export const DarkModeSwitch = () => {
  const { setTheme, theme } = useNextTheme();
  return (
    <Switch
      isSelected={theme === "light" ? true : false}
      onValueChange={(e) => setTheme(e ? "light" : "dark")}
    />
  );
};
