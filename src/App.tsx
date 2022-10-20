import React, { useEffect } from 'react';
import KUTE from 'kute.js';

function App(): JSX.Element {
    useEffect(() => {
        KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 3000, yoyo: true }
        ).start();
    }, []);

    return (
        <div>
            <head>
                <title>Minimalist ui page</title>
            </head>
            <main>
                <section className="blue">
                    <h1>Hi there</h1>
                </section>

                <section className="blue">
                    <h1>Nice Curves</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur earum esse pariatur
                        tenetur atque nostrum rem necessitatibus tempore consequatur dolor quisquam, consequuntur, quae,
                        quos optio reprehenderit excepturi! Facere, nemo.
                    </p>
                    <div className="curve" />
                </section>

                <section>
                    <h1>Nice Curves</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur earum esse pariatur
                        tenetur atque nostrum rem necessitatibus tempore consequatur dolor quisquam, consequuntur, quae,
                        quos optio reprehenderit excepturi! Facere, nemo.
                    </p>
                </section>

                <section className="bubble-top">
                    <h1>Nice Curves</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur earum esse pariatur
                        tenetur atque nostrum rem necessitatibus tempore consequatur dolor quisquam, consequuntur, quae,
                        quos optio reprehenderit excepturi! Facere, nemo.
                    </p>
                </section>

                <section className="dark">
                    <h1>Nice Curves</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur earum esse pariatur
                        tenetur atque nostrum rem necessitatibus tempore consequatur dolor quisquam, consequuntur, quae,
                        quos optio reprehenderit excepturi! Facere, nemo.
                    </p>
                </section>

                <section className="red">
                    <div className="wave">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                opacity=".25"
                                className="shape-fill"
                            />
                            <path
                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                opacity=".5"
                                className="shape-fill"
                            />
                            <path
                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                className="shape-fill"
                            />
                        </svg>
                    </div>
                </section>

                <section className="bubble-bottom">
                    <h1>Nice Curves</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur earum esse pariatur
                        tenetur atque nostrum rem necessitatibus tempore consequatur dolor quisquam, consequuntur, quae,
                        quos optio reprehenderit excepturi! Facere, nemo.
                    </p>
                </section>

                <div className="spacer layer" />
                <section className="magenta">
                    <h1>Nice Curves</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur earum esse pariatur
                        tenetur atque nostrum rem necessitatibus tempore consequatur dolor quisquam, consequuntur, quae,
                        quos optio reprehenderit excepturi! Facere, nemo.
                    </p>

                    <svg
                        id="visual"
                        viewBox="0 0 960 300"
                        width="960"
                        height="300"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                    >
                        <g transform="translate(467.89184748039236 158.7578361796499)">
                            <path
                                id="blob1"
                                d="M69.3 -69.7C89.2 -49.5 104.1 -24.7 109.4 5.3C114.7 35.4 110.4 70.7 90.5 83.2C70.7 95.7 35.4 85.4 4.7 80.6C-25.9 75.9 -51.9 76.9 -67 64.4C-82.2 51.9 -86.6 25.9 -87.2 -0.6C-87.8 -27.1 -84.5 -54.2 -69.4 -74.4C-54.2 -94.5 -27.1 -107.8 -1.2 -106.6C24.7 -105.4 49.5 -89.8 69.3 -69.7"
                                fill="#BB004B"
                            />
                        </g>

                        <g transform="translate(481.34400791409877 151.13199076789442)" className="hidden">
                            <path
                                id="blob2"
                                d="M80.4 -87C92.9 -67.9 83.9 -33.9 76.4 -7.5C68.9 18.9 62.7 37.7 50.2 56.7C37.7 75.7 18.9 94.9 -8.2 103.1C-35.4 111.4 -70.7 108.7 -83.2 89.7C-95.7 70.7 -85.4 35.4 -83.7 1.6C-82.1 -32.1 -89.1 -64.1 -76.6 -83.3C-64.1 -102.4 -32.1 -108.7 0.9 -109.7C33.9 -110.6 67.9 -106.2 80.4 -87"
                                fill="#BB004B"
                            />
                        </g>
                    </svg>
                </section>
                <div className="spacer layer flip" />

                <section>
                    <h1>Nice Curves</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur earum esse pariatur
                        tenetur atque nostrum rem necessitatibus tempore consequatur dolor quisquam, consequuntur, quae,
                        quos optio reprehenderit excepturi! Facere, nemo.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default App;
