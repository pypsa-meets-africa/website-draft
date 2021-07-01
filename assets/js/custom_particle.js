tsParticles.load("tsparticles", {
    detectRetina: false,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: false,
                mode: "push"
            },
            // onDiv: {
            //     elementId: "repulse-div",
            //     enable: false,
            //     mode: "repulse"
            // },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10
                }
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 40,
                duration: 2,
                opacity: 1,
                size: 10,
                speed: 3
            },
            connect: {
                distance: 800,
                lineLinked: {
                    opacity: 0.5
                },
                radius: 60
            },
            grab: {
                distance: 300,
                lineLinked: {
                    opacity: 1
                }
            },
            push: {
                quantity: 4
            },
            remove: {
                quantity: 2
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            slow: {
                active: false,
                radius: 0,
                factor: 1
            }
        }
    },
    particles: {
        color: {
            // // value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
            value: ["#000000"]

        },
        lineLinked: {
            blink: false,
            color: "#E95828",
            consent: false,
            distance: 60,
            enable: true,
            opacity: 1,
            width: 2
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200
                }
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.7,
            straight: false
        },
        number: {
            density: {
                enable: false,
                area: 2000
            },
            limit: 0,
            value: 100
        },
        opacity: {
            animation: {
                enable: false,
                minimumValue: 0.3,
                speed: 2,
                sync: false
            },
            random: false,
            value: 0.8
        },
        shape: {
            // character: {
            //     fill: false,
            //     font: "Verdana",
            //     style: "",
            //     value: "*",
            //     weight: "400"
            // },
            // image: {
            //     height: 500,
            //     replaceColor: true,
            //     src: "https://particles.js.org/images/github.svg",
            //     width: 500
            // },
            polygon: {
                sides: 3
            },
            // stroke: {
            //     color: "#000000",
            //     width: 1
            // },
            type: "circle"
        },
        size: {
            animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 20,
                sync: false
            },
            random: true,
            value: 5
        }
    },
    responsive: [{
            maxWidth: 600,
            options: {
                polygon: {
                    draw: {
                        enable: true,
                        lineColor: "rgba(0,0,0,0.4)",
                        lineWidth: 5
                    },
                    move: {
                        radius: 10
                    },
                    inlineArrangement: "equidistant",
                    scale: 1.2,
                    type: "inside",
                    url: "assets/img/smalldeer_africa.svg"
                },
            }
        },
        {
            maxWidth: 1000,
            options: {
                polygon: {
                    draw: {
                        enable: true,
                        lineColor: "rgba(0,0,0,0.4)",
                        lineWidth: 5
                    },
                    move: {
                        radius: 10
                    },
                    inlineArrangement: "equidistant",
                    scale: 1.5,
                    type: "inside",
                    url: "assets/img/smalldeer_africa.svg"
                },
            }
        }
    ],

});