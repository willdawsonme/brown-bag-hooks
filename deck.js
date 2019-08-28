import { slides as intro } from "./slides/intro.mdx";
import { slides as useState } from "./slides/useState.mdx";
import { slides as useEffect } from "./slides/useEffect.mdx";
import { slides as useRef } from "./slides/useRef.mdx";
import { slides as useContext } from "./slides/useContext.mdx";
import { slides as useReducer } from "./slides/useReducer.mdx";
import { slides as useCallbackMemo } from "./slides/useCallbackMemo.mdx";
import { slides as useCustomHook } from "./slides/useCustomHook.mdx";
import { slides as outro } from "./slides/outro.mdx";

export { default as themes } from "./themes";

export const slides = [
  ...intro,
  ...useState,
  ...useEffect,
  ...useRef,
  ...useContext,
  ...useCallbackMemo,
  ...useReducer,
  ...useCustomHook,
  ...outro
];
