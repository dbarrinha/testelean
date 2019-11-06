import React from 'react';
import Lottie from 'react-lottie';

export default function Loader() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused} />
        </div>
    );
}
