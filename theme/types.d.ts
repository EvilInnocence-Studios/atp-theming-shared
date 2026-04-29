import { ITheme as IThemeDef, IThemeSerialized as IThemeDefSerialized } from "@theming/lib/layout/layout";
import { NewObj } from "../../core-shared/express/types";

export declare interface ITheme {
    id: string;
    name: string;
    description: string;
    imageUrl: string | null;
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
