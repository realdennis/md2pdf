import { Container } from 'nonaction';
import useText from './Hooks/useText.js';
import useFileIn from './Hooks/useFileIn.js';
export const TextContainer = Container(useText);
export const FileTextContainer = Container(useFileIn);