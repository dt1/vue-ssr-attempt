const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const template = require('fs').readFileSync('index.html', 'utf-8')

const port = 8080;
const server = express();

const renderer = createBundleRenderer(serverBundle, {
    // runInNewContext: false, // recommended
    template
    //  clientManifest // (optional) client build manifest
})

server.get('*', (req, res) => {
    const context = { url: req.url }

    renderer.renderToString(context, (err, html) => {
        // handle error...
        if (err){
            console.log("err =" + err)
            console.log("err js =" + JSON.stringify(err))
        }
        res.end(html)
    })
})

server.listen(port , () => console.log('Listening on: ' + port))
