import {
    BaseElement,
    BaseContainerElement,
    BaseFieldElement,
    DataType,
} from "@fieldcore/core";
import { StyleProp } from "@mantine/core";
import * as TablerIcons from "@tabler/icons-react";
import React from "react";

export type ElementTypes<TE, TS, TP> =
    | StackElement<TE, TS, TP>
    | GroupElement<TE, TS, TP>
    | FlexElement<TE, TS, TP>
    | SimpleGridElement<TE, TS, TP>
    | BoxElement<TE, TS, TP>
    | PaperElement<TE, TS, TP>
    | FieldsetElement<TE, TS, TP>
    | AccordionElement<TE, TS, TP>
    | ListElement<TE, TS, TP>
    | TabsElement<TE, TS, TP>
    | TabItemElement<TE, TS, TP>
    | TableElement<TE, TS, TP>
    | TableRowElement<TE, TS, TP>
    | TableCellElement<TE, TS, TP>
    | AlertElement<TE, TS, TP>
    | CodeElement<TE, TS, TP>
    | TextElement<TE, TS, TP>
    | TitleElement<TE, TS, TP>
    | QuoteElement<TE, TS, TP>
    | FormattedNumberElement<TE, TS, TP>;
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

export interface ListElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "list";
    offset?: DataType | boolean;
    ordered?: DataType | boolean;
    listStyleType?: DataType;
}

export interface TabsElement<TE, TS, TP>
    extends MantineContainerElement<TE, TabItemElement<TE, TS, TP>, TP> {
    subtype: "tabs";
    variant?: DataType | "default" | "outline" | "pills";
    radius?: DataType | MantineSize;
    tabs: { key: string; label: string; icon?: IconKeys }[];
}

export interface TabItemElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "tabItem";
    tabKey: string;
}

export interface TableElement<TE, TS, TP>
    extends MantineContainerElement<TableRowElement<TE, TS, TP>, TS, TP> {
    subtype: "table";
    highlight?: DataType | boolean;
    rowBorders?: DataType | boolean;
    columnBorders?: DataType | boolean;
    tableBorder?: DataType | boolean;
    striped?: DataType | boolean;
    caption?: DataType;
}

export interface TableRowElement<TE, TS, TP>
    extends MantineContainerElement<TableCellElement<TE, TS, TP>, TS, TP> {
    subtype: "tableRow";
}

export interface TableCellElement<TE, TS, TP>
    extends MantineContainerElement<TE, TS, TP> {
    subtype: "tableCell";
    header?: boolean | DataType;
}

// Output Elements
export interface MantineBaseElement<TE, TS, TP>
    extends BaseElement<TE, TS, TP> {
    pack: "mantine";
}
export interface AlertElement<TE, TS, TP>
    extends MantineBaseElement<TE, TS, TP> {
    subtype: "alert";
    color?: DataType;
    variant?:
        | DataType
        | "default"
        | "filled"
        | "light"
        | "outline"
        | "transparent"
        | "white";
    icon?: IconKeys;
    title?: DataType;
}

export interface CodeElement<TE, TS, TP>
    extends MantineBaseElement<TE, TS, TP> {
    subtype: "code";
    language?: DataType;
    expandable?: DataType | boolean;
    content?: DataType;
}

export interface TextElement<TE, TS, TP>
    extends MantineBaseElement<TE, TS, TP> {
    subtype: "text";
    bold?: DataType | number;
    italic?: DataType | boolean;
    content?: DataType;
    size?: DataType | MantineSize | number;
}

export interface TitleElement<TE, TS, TP>
    extends MantineBaseElement<TE, TS, TP> {
    subtype: "text";
    bold?: DataType | number;
    italic?: DataType | boolean;
    content?: DataType;
    order?: DataType | 1 | 2 | 3 | 4 | 5 | 6;
}

export interface QuoteElement<TE, TS, TP>
    extends MantineBaseElement<TE, TS, TP> {
    subtype: "quote";
    icon?: IconKeys;
    color?: DataType;
    citation?: DataType;
    content?: DataType;
}

export interface FormattedNumberElement<TE, TS, TP>
    extends MantineBaseElement<TE, TS, TP> {
    subtype: "formattedNumber";
    prefix?: DataType;
    suffix?: DataType;
    thousandSeparator?: boolean | DataType;
    decimalScale?: number | DataType;
    value: DataType;
}