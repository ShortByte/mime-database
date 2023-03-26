export interface MimeType {
    source: string | 'iana' | 'apache' | 'nginx';
    charset?: string | 'UTF-8';
    compressible?: boolean;
    extensions?: string[];
}
