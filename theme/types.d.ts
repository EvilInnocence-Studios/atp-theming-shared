import { IStyleFontInput, IStyleVar } from "@theming/components/Style/Style";
import { ITheme as IThemeDef, IThemeSerialized as IThemeDefSerialized } from "@theming/lib/layout/layout";
import { NewObj } from "../../core-shared/express/types";

export declare interface IGlobalStyles {
    variables?: IStyleVar[];
    fonts?: IStyleFontInput[];
    sass?: string | null;
    css?: string | null;
}

export declare interface ITheme {
    id: string;
    name: string;
    description: string;
    imageUrl: string | null;
    globalStyles?: IGlobalStyles;
    json: IThemeDef | null;
    enabled: boolean;
}

export declare interface IThemeSerialized {
    name: string;
    description: string;
    imageUrl: string | null;
    json: IThemeDefSerialized | null;
    enabled: boolean;
}

export type NewTheme = NewObj<ITheme>;
