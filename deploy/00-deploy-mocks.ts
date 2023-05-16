import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { hardhatArguments, network } from 'hardhat';
import * as Config from "../scripts/config";
import {networkConfig} from "../helper-hardhat-config";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await Config.initConfig();
    const networkArg = hardhatArguments.network ? hardhatArguments.network : "dev";

    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer, user } = await getNamedAccounts();

    const chainId = network.config.chainId ? network.config.chainId : 31337;
}