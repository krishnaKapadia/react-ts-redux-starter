import { IStyle } from 'fela';
import { isNil } from 'lodash';

const preSidebar = 200;
const scrollbarWidth = 20;
const screenXXLarge = 1440;
const screenXLarge = 960 + scrollbarWidth + preSidebar;
const screenLarge = 840 + scrollbarWidth + preSidebar;
const screenMedium = 640;
const screenSmall = 0;

export const breakpoints = {
    screenSmall,
    screenMedium,
    screenLarge,
    screenXLarge,
    screenXXLarge,
};

export const screenXXLargeOnly = (styles: IStyle) => makeMediaQuery(styles, screenXXLarge);
export const screenXXLargeBelow = (styles: IStyle) =>
    makeMediaQuery(styles, undefined, screenXXLarge);

export const screenXLargeAndAbove = (styles: IStyle) => makeMediaQuery(styles, screenXLarge);
export const screenXLargeOnly = (styles: IStyle) =>
    makeMediaQuery(styles, screenXLarge, screenXXLarge);
export const screenXLargeAndBelow = (styles: IStyle) =>
    makeMediaQuery(styles, undefined, screenXLarge);

export const screenLargeAndAbove = (styles: IStyle) => makeMediaQuery(styles, screenLarge);
export const screenLargeOnly = (styles: IStyle) =>
    makeMediaQuery(styles, screenLarge, screenXLarge);
export const screenLargeAndBelow = (styles: IStyle) =>
    makeMediaQuery(styles, undefined, screenLarge);

export const screenMediumAndAbove = (styles: IStyle) => makeMediaQuery(styles, screenMedium);
export const screenMediumOnly = (styles: IStyle) =>
    makeMediaQuery(styles, screenMedium, screenXLarge);
export const screenMediumAndBelow = (styles: IStyle) =>
    makeMediaQuery(styles, undefined, screenMedium);

export const screenSmallAndAbove = (styles: IStyle) => makeMediaQuery(styles, screenSmall);
export const screenSmallOnly = (styles: IStyle) =>
    makeMediaQuery(styles, screenSmall, screenMedium);

export const matchBreakpointOrAbove = (breakpoint: number) =>
    window.matchMedia(`only screen and (min-width: ${breakpoint}px)`).matches;
export const matchBreakpointOrBelow = (breakpoint: number) =>
    window.matchMedia(`only screen and (max-width: ${breakpoint}px)`);
export const matchBreakpoint = (breakpoint: number, nextBreakpoint: number) =>
    window.matchMedia(
        `only screen and (min-width: ${breakpoint}px) and (max-width: ${nextBreakpoint - 1}px)`,
    ).matches;

export const breakpointSmallOnly = () => matchBreakpoint(screenSmall, screenMedium);
export const breakpointSmallAndAbove = () => matchBreakpointOrAbove(screenSmall);

export const breakpointMediumOnly = () => matchBreakpoint(screenMedium, screenLarge);
export const breakpointMediumAndAbove = () => matchBreakpointOrAbove(screenMedium);

export const breakpointLargeOnly = () => matchBreakpoint(screenLarge, screenXLarge);
export const breakpointLargeAndAbove = () => matchBreakpointOrAbove(screenLarge);

export function makeMediaQuery(
    styles: IStyle,
    minWidth?: number,
    maxWidth?: number,
) {
    // breakpoint up
    if (minWidth >= 0 && isNil(maxWidth)) {
        return {
            [`@media only screen and (min-width: ${minWidth}px)`]: {
                ...styles,
            },
        };
    }
    // breakpoint down
    else if (isNil(minWidth) && maxWidth >= 0) {
        return {
            [`@media only screen and (max-width: ${maxWidth}px)`]: {
                ...styles,
            },
        };
    }
    // breakpoint only
    else if (minWidth >= 0 && maxWidth >= 0) {
        return {
            [`@media only screen and (min-width: ${minWidth + 1}px) and (max-width: ${maxWidth -
                1}px)`]: {
                ...styles,
            },
        };
    } else {
        throw new Error('must specify one of or both of minWidth/maxWidth');
    }
}