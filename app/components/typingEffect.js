// components/TypingEffect.js

import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingEffect = () => {
    return (
        <div className="typing-effect">
            <h1 className="ffont-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-black">
                <Typewriter
                    options={{
                        strings: [
                            'Trade Facilitation',
                            'تسهيل التجارة',
                            'Facilitación del comercio',
                            'Facilitação do comércio',
                            'การให้บริการในการค้า',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 'natural',
                        deleteSpeed: 'natural',
                    }}
                /></h1>

        </div>
    );
};

export default TypingEffect;
