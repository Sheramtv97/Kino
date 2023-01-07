import React from 'react';

const Loader = () => {
    return (
        <>
            <svg style={{ margin: '150px auto', display: 'block', shapeRendering: 'auto',
            }} width="104px" height="104px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="21" y="25" width="8" height="50" fill="#93dbe9">
                    <animate attributeName="y" repeatCount="indefinite" dur="0.78125s" calcMode="spline" keyTimes="0;0.5;1" values="7.499999999999993;25;25" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.15625s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="0.78125s" calcMode="spline" keyTimes="0;0.5;1" values="85.00000000000001;50;50" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.15625s"></animate>
                </rect>
                <rect x="46" y="25" width="8" height="50" fill="#689cc5">
                    <animate attributeName="y" repeatCount="indefinite" dur="0.78125s" calcMode="spline" keyTimes="0;0.5;1" values="11.875;25;25" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.078125s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="0.78125s" calcMode="spline" keyTimes="0;0.5;1" values="76.25;50;50" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.078125s"></animate>
                </rect>
                <rect x="71" y="25" width="8" height="50" fill="#5e6fa3">
                    <animate attributeName="y" repeatCount="indefinite" dur="0.78125s" calcMode="spline" keyTimes="0;0.5;1" values="11.875;25;25" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="0.78125s" calcMode="spline" keyTimes="0;0.5;1" values="76.25;50;50" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                </rect>
            </svg>
        </>

    );
};

export default Loader;