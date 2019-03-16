import { Container } from "nonaction";
import usePersistText from "./Hooks/usePersistText.js";
import useText from "./Hooks/useText.js";
export const PersistextContainer = Container(usePersistText);
export const TextContainer = Container(useText);
