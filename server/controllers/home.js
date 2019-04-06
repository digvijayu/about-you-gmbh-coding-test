const path = require('path');
const { logger } = require('./../utils/logger');

exports.index = (req, res) => {
  logger.info('Rendering react app html file');
  res.sendFile(path.resolve(`./${process.env.BUILD_DIR}/index.html`));
};
