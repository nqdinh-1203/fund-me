type Config = {
    [chainId: number]: {
        name: string,
        ethUsdPriceFeed: string
    };
}

export const networkConfig: Config = {
    43113: {
        name: "fuji",
        ethUsdPriceFeed: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA"
    },
    31337: {
        name: "localhost",
        ethUsdPriceFeed: ""
    },
}
