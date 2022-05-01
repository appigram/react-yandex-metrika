import {FunctionComponent} from 'react';

interface YMInitializerProps {
    accounts: number[];
    containerElement?: string;
    options?: {[name: string]: any};
    version?: '1' | '2' | '3';
    attrs?: Record<string, string | number>;
}

export const YMInitializer: FunctionComponent<YMInitializerProps>

declare const ym: (methodName: string, ...args: any[]) => void;

export const withId: (counterId: number) => typeof ym;
export const withFilter: (f: (counterId: number) => boolean) => typeof ym;

export default ym;
