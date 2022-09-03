// function deployFunc() {
//     console.log("Hi")
// }

// module.exports.default = deployFunc

module.exports = async ({getNameAccounts, deployments}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNameAccounts()
    const chainId = network.config.chainId
}