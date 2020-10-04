const fs = require('fs');

fs.writeFileSync('./.env', `REACT_APP_BACKEND_URL=${process.env.REACT_APP_BACKEND_URL}\n`);