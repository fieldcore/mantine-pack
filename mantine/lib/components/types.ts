import {
    BaseElement,
    BaseContainerElement,
    BaseFieldElement,
    DataType,
} from "@fieldcore/core";
import { StyleProp } from "@mantine/core";
import * as TablerIcons from "@tabler/icons-react";
import React from "react";

export type ElementTypes<TE, TS, TP> = StackElement<TE, TS, TP>;
export type MantineSize = "xs" | "sm" | "md" | "lg" | "xl";

export type IconKeys = keyof Omit<
    typeof TablerIcons,
    "TablerIconsProps" | "createReactComponent"
>;

// Containers
export interface MantineContainerElement<TE, TS, TP>
    extends BaseContainerElement<TE, TS, TP> {
    pack: "mantine";
    padding?: DataType | MantineSize;
}

export interface StackElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "stack";
    gap?: DataType | MantineSize;
}

export interface GroupElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "group";
    gap?: DataType | MantineSize;
    wrap?: DataType | StyleProp<React.CSSProperties["flexWrap"]>;
}

export interface FlexElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "flex";
    gap?: DataType | MantineSize;
    wrap?: DataType | StyleProp<React.CSSProperties["flexWrap"]>;
    direction?: DataType | StyleProp<React.CSSProperties["flexDirection"]>;
    align?: DataType | StyleProp<React.CSSProperties["alignItems"]>;
    justify?: DataType | StyleProp<React.CSSProperties["justifyContent"]>;
}

export interface SimpleGridElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "simpleGrid";
    gap?: DataType | MantineSize;
    cols?: DataType;
}

export interface BoxElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "box";
}

export interface PaperElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "paper";
    radius?: DataType | MantineSize;
    shadow?: DataType | MantineSize;
    border?: boolean;
}

export interface FieldsetElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "fieldset";
    disabled?: boolean | DataType;
    label?: DataType;
}

export interface AccordionElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "accordion";
    defaultExpanded?: boolean;
    icon?: IconKeys;
    label?: DataType;
    variant?: "default" | "contained" | "filled" | "separated";
}
