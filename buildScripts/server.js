import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 5000;
const app = express();
const compiler = webpack(config);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    console.log(path.join(__dirname, '../src/index.html'));
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})
