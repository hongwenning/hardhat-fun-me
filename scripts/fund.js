const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FunMe",deployer)
    console.log(`Got contract FunMe at ${funMe.address}`)
    console.log("Funding contract..")

    const transactionResponse = await funMe.fund({
        value: ethers.utils.parseEther("0.1"),
    })
    await  transactionResponse.wait()
    console.log("Funded!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
