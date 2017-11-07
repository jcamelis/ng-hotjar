
export interface HotjarConfig {
    version: string;
    trackingId: string;
}

export interface HotjarConfigMap {
    [id: string]: HotjarConfig
}
