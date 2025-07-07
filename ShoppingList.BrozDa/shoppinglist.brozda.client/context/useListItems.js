import { useContext } from "react";
import { ListItemContext } from "./ListItemContext";


export const useListItems = () => useContext(ListItemContext);