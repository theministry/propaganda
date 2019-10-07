import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

export default class Visualisation extends Component {
    constructor() {
        super();

        this.center = {}

        this.renderer = new PIXI.autoDetectRenderer({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        this.ticker = new PIXI.Ticker();;

        this.stage = new PIXI.Container();
        this.stage.interactive = true;

        // this.titleStage = new PIXI.Container();
        // this.titleStage.interactive = true;

        this.resize();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.renderer.resize(this.width, this.height);

        this.center.x = window.innerWidth / 2;
        this.center.y = window.innerHeight / 2;

        this.stage.x = this.center.x;
        this.stage.y = this.center.y;
    }

    getRandCoordinates(){
        return [ Math.random() * this.width - this.center.x, Math.random() * this.height - this.center.y ];
    }

    loop() {
        this.renderer.render(this.stage);
        // this.renderer.render(this.titleStage);
    }

    run() {
        window.addEventListener("resize", () => this.resize())

        this.ticker.add(() => this.loop())
        this.ticker.start()
    }

    componentDidMount() {
        this.reactDOMNode.appendChild(this.renderer.view);
        this.run()

        const config = {
            numStars: 1000,
            speed: 10,
            texturePath: '/img/star.png',
            stretch: 5,
        }

        this.buildGalaxy(config)
        setTimeout(() => { this.showTitles() }, 500)
    }

    componentWillUnmount() {
        this.ticker.stop();
    }

    render() {
        const component = this;
        return (
            <div ref={(thisDiv) => {component.reactDOMNode = thisDiv}} />
        )
    }

    buildGalaxy(config) {
        this.warpSpeed = 0.5

        for(let i = 0; i < config.numStars; i++) {
            new Star(this, config)
        }

        setInterval(() => {
            if (this.warpSpeed > 0.01) {
                this.warpSpeed -= 0.002
            } else {
                this.warpSpeed = 0
            }
        }, 10)
    }

    showTitles() {
        const moonTexture = new PIXI.Texture.from('/img/moononly.png')
        const logoTexture = new PIXI.Texture.from('/img/logo.png')
        const moon = new PIXI.Sprite(moonTexture)
        const logo = new PIXI.Sprite(logoTexture)

        moon.anchor.set(0.5)
        moon.scale.set(0)
        moon.alpha = 0.95

        const noiseFilter = new PIXI.filters.NoiseFilter(0.2)
        moon.filters = [noiseFilter]

        // moon.x = this.center.x
        // moon.y = this.center.y

        logo.anchor.set(0.5)
        logo.scale.set(0)

        // logo.x = this.center.x
        // logo.y = this.center.y

        this.stage.addChild(moon)
        this.stage.addChild(logo)

        this.incrementer = 0.02

        this.ticker.add(delta => this.grow(delta, moon, 0.3))
        setTimeout(() => { this.ticker.add(delta => this.grow(delta, logo, 0.3)) }, 100)

        this.stage.on('pointermove', e => this.move(e, moon, 0.1))
        this.stage.on('pointermove', e => this.move(e, logo, 0.2))
    }

    move(event, title, move) {
        const data = event.data.getLocalPosition(this.stage)

        title.x = move * data.x
        title.y = move * data.y
    }

    grow(delta, title, max) {
        if (title.scale.x < max) {
            title.scale.set(title.scale.x + this.incrementer * delta)
            this.incrementer = this.incrementer > 0.001 ? this.incrementer - 0.0002 : 0.001
        }
    }
}

class Star {
    constructor(parent, config) {
        this.parent = parent;
        this.config = config

        this.texture = new PIXI.Texture.from(this.config.texturePath)
        this.sprite = new PIXI.Sprite(this.texture)

        this.reset(true);

        this.sprite.anchor.set(0.5, 0.5)

        this.parent.stage.addChild(this.sprite)
        this.parent.ticker.add(delta => this.update(delta))
    }

    reset(initial) {
        this.x = initial ? Math.random() * this.parent.width - this.parent.center.x : 0
        this.y = initial ? Math.random() * this.parent.height - this.parent.center.y : 0

        this.velocity = Math.random() * 0.5 + 0.05;

        // this.angle = Math.random() * Math.PI * 2;
        this.angle = initial ? Math.atan2(this.y, this.x) : Math.random() * Math.PI * 2

        this.size = this.velocity * 0.2;

        this.sprite.alpha = initial ? 1 : 0
    }

    update(delta) {
        let speed = this.parent.warpSpeed * 5 + this.velocity

        const dX = Math.cos(this.angle) * speed * delta;
        const dY = Math.sin(this.angle) * speed * delta;

        this.x += dX;
        this.y += dY;

        if (Math.abs(this.x) > (this.parent.center.x + this.sprite.width) || Math.abs(this.y) > (this.parent.center.y + this.sprite.height)) {
            this.reset()
        }

        this.sprite.x = this.x
        this.sprite.y = this.y

        this.sprite.alpha = this.sprite.alpha < 1 ? this.sprite.alpha + 0.01 : 1

        this.sprite.rotation = this.angle

        this.sprite.scale.x = this.parent.warpSpeed * this.config.stretch + this.size
        this.sprite.scale.y = this.size
    }
}