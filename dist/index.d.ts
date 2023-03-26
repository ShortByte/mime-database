import { MimeType } from './types/mime.type';
export declare const MimeTypes: {
    [key: string]: MimeType;
};
export declare function getType(mimeType: string): MimeType | undefined;
