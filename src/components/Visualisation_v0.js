import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

export default class Visualisation extends Component {
    constructor() {
        super();

        this.width = window.innerWidth
        this.height = window.innerHeight
        this.center = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }


        this.renderer = new PIXI.autoDetectRenderer({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        this.ticker = new PIXI.Ticker();
        this.ticker.add((delta) => this.renderer.render(this.stage));

        this.stage = new PIXI.Container()
    }

    buildStar(spriteContainer, starArray, config) {
        const star = {
            sprite: PIXI.Sprite.from(config.starImagePath),
            x: 0,
            y: 0,
            z: 0,
        }

        star.sprite.anchor.x = 0.5
        star.sprite.anchor.y = 0.7
        this.randomiseStar(star, 0, true)

        // star.sprite.scale.set(Math.random() * 0.05 + 0.05)

        starArray.push(star)
        spriteContainer.addChild(star.sprite)
    }

    randomiseStar(star, cameraZ, initial) {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

        const deg = Math.random() * Math.PI * 2
        const distance = Math.random() * 50 + 1

        star.x = Math.cos(deg) * distance
        star.y = Math.sin(deg) * distance
    }

    buildGalaxy(config) {
        let cameraZ = 0
        let speed = 0
        let warpSpeed = 0

        const spriteContainer = new PIXI.ParticleContainer(config.starAmount, {
            scale: true,
            position: true,
            rotation: true,
        })
        this.stage.addChild(spriteContainer)

        let stars = []
        for (let i = 0; i < config.starAmount; i++) {
            this.buildStar(spriteContainer, stars, config)
        }

        setInterval(() => {
            warpSpeed = warpSpeed > 0 ? 0 : 1;
        }, 5000);

        this.ticker.add((delta) => {
            // speed = (warpSpeed - speed) / 20;
            // cameraZ += delta * (speed + config.baseSpeed)

            speed += (warpSpeed - speed) / 20;
            cameraZ += delta * (speed + config.baseSpeed);

            console.log(speed, cameraZ)

            for (let i = 0; i < config.starAmount; i++) {
                const star = stars[i]
                if (star.z < cameraZ) {
                    this.randomiseStar(star, cameraZ, true)
                }

                const z = star.z - cameraZ
                star.sprite.x = star.x * (config.fov / z) * this.width + this.center.x
                star.sprite.y = star.y * (config.fov / z) * this.height + this.center.y

                const dxCenter = star.sprite.x - this.center.x
                const dyCenter = star.sprite.y - this.center.y
                const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter + dyCenter)
                const distanceScale = Math.max(0, (2000 - z) / 2000)

                star.sprite.scale.x = distanceScale * config.starBaseSize
                star.sprite.scale.y = distanceScale * config.starBaseSize + distanceScale * speed * config.starStretch * distanceCenter / this.width
                star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2
            }
        })
    }

    buildRocket() {
        const texture = PIXI.Texture.from('/rocket.png')
        const rocket = new PIXI.Sprite(texture)

        rocket.anchor.set(0.5)
        rocket.x = 100
        rocket.y = 100

        this.stage.addChild(rocket)

        console.log(rocket)

        this.ticker.add((delta) => {
            rocket.rotation += 0.01 * delta
        })
    }

    resize() {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.renderer.resize(this.width, this.height)

        this.center.x = window.innerWidth / 2
        this.center.y = window.innerHeight / 2
    }

    componentDidMount() {
        this.canvas.appendChild(this.renderer.view);
        window.addEventListener("resize", () => this.resize())

        this.buildGalaxy({
            starAmount: 1000,
            fov: 20,
            baseSpeed: 0.025,
            starStretch: 5,
            starBaseSize: 0.1,
            starImagePath: '/img/star.png',
        })

        this.buildRocket()

        this.ticker.start()
    }

    componentWillUnmount() {
        this.ticker.stop();
    }

    render() {
        const component = this;
        return (
            <div ref={(thisDiv) => {component.canvas = thisDiv}} />
        )
    }
}
