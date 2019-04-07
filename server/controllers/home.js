const path = require('path');
const { logger } = require('./../utils/logger');

exports.index = (req, res) => {
  logger.info('Rendering react app html file');
  console.log(`./../${process.env.BUILD_DIR}/index.html`);
  res.sendFile(path.resolve(`./../${process.env.BUILD_DIR}/index.html`));
};
