export default class HTMLDocument {

    constructor(props){
     
        this.document  = `<!doctype html>`;
        this.document  = `<html>`;
        this.document += `<head>`;

        this.document += `<title>${props.head.title}</title>`;
        this.document += `${props.head.styles}`;

        this.document += `<meta charset="utf-8"/>`;
        this.document += `<meta name="viewport" content="initial-scale=1, maximum-scale=1, ser-scalable=no">`;

        this.document += `<meta name="apple-mobile-web-app-title" content="${props.head.title}">`;
        this.document += `<meta name="apple-mobile-web-app-capable" content="yes">`;
        this.document += `<meta name="apple-mobile-web-app-status-bar-style" content="black">`;

        this.document += `<link rel="icon" type="image/png" href="static/favicon.png">`; 

        this.document += `<link rel="apple-touch-icon" href="static/favicon.png">`;
        this.document += `<link rel="apple-touch-icon" sizes="152x152" href="static/favicon-152.png">`;
        this.document += `<link rel="apple-touch-icon" sizes="180x180" href="static/favicon-180.png">`;
        this.document += `<link rel="apple-touch-icon" sizes="167x167" href="static/favicon-167.png">`;

        this.document += `</head>`;        
        this.document += `<body>`;
        this.document += `<div id="root">${props.body.root}</div>`;
        this.document += `<script src="/bundle.js"></script>`;
        this.document += `</body>`;
        this.document += `</html>`;
        
        return this;        
    }

    getDocument(){return this.document}
}