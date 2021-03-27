const pkg = require("../../package.json");
hexo.on("generateBefore", () => {
  require("./data")(hexo);
  // Merge config.
  require("./config")(hexo);
});

hexo.on("ready", () => {
  const { version } = require("../../package.json");
  const title='Warming'
  hexo.log.info(`Myrized version ${version+" "+title}.　「今日も元気いっぱいね！」`);
  hexo.log.info("Myrized is processing your blog.URYYYYYYYYYYYYYYYYYYYYYY!");
});

hexo.on("exit",()=>{
	hexo.log.info("It seems finished!!!URYYYYYYYYYYYYYYYYYYYYYY!!Have a good time with Hexo & Myrized!!!!!!")
})

hexo.on("deployAfter",()=>{
	hexo.log.info("Deploy Finished..Please Sign on the website!")
})
