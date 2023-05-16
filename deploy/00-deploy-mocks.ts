import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { hardhatArguments, network } from 'hardhat';
import * as Config from "../scripts/config";
import { developmentChains } from "../helper-hardhat-config";

const DECIMALS = "8"
const INITIAL_PRICE = "200000000000" // 2000

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await Config.initConfig();
    const networkArg = hardhatArguments.network ? hardhatArguments.network : "dev";

    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer, user } = await getNamedAccounts();

    // const chainId = network.config.chainId ? network.config.chainId : 31337;

    if (developmentChains.includes(networkArg)) {
        console.log("Local network detected! Deploying mocks...");

        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            args: [DECIMALS, INITIAL_PRICE],
            log: true,
        });

        console.log("Mocks Deployed!")
        console.log("------------------------------------------------")
    }
    console.log("Mocks not Deployed!")
}

export const tags: string[] = ["all", "mocks"];
export default func;