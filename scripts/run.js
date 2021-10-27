

async function main() {
  
  const PasswordManager = await hre.ethers.getContractFactory("PasswordManager");
  const passwordManager = await PasswordManager.deploy();

  await passwordManager.deployed();

  console.log("PasswordManager deployed to:", passwordManager.address);

  await passwordManager.setPassword('jimboblarry');
  const result = await passwordManager.getPassword();
  console.log("Password: ", result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
