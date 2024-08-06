import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { Analytics } from "@vercel/analytics/react"

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
