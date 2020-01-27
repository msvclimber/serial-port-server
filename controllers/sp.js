const spUtil = require("../utils/sp");

async function getComPorts(ctx) {
  try {
    const comPorts = await spUtil.getComPorts();
    ctx.body = {
      status: "success",
      data: comPorts.map(port => port.path)
    };
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getComPorts
};
