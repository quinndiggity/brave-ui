/// <reference types="react" />
import * as React from 'react';
import './style.css';
export interface BrowserSelectProps {
    titleName?: string;
    id?: string;
    multiple?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (e: any) => void;
    children: React.ReactNode;
}
declare class BrowserSelect extends React.PureComponent<BrowserSelectProps, {}> {
    render(): JSX.Element;
}
export default BrowserSelect;