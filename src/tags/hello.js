'use strict'

const riot = require('riot')
const name = 'hello'
const tmpl = require('./hello.html')
const css = require('./hello.scss')
const selector = 'hello'

riot.tag2(name, '', tmpl, css, function () {
    // <script>...</script>
})

class Hello {
    constructor() {
        this.instance = riot.mount(selector, 'hello')
    }
}

module.exports = Hello;
