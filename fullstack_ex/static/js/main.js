(() => {

    let yoffset = 0; // pageYoffset
    let preScrollHeight = 0; // 이전 스크롤 높이값의 합
    let currentScene = 0; // 현재 활성화된 씬
    enterNewScene = false; // 새로운 씬이 시작된 순간 true


    const sceneInfo = [
        {   //0
            type : 'sticky',
            heightNum : 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'),
                msgA: document.querySelector('#scroll-section-0 .main-message.a'),
                msgB: document.querySelector('#scroll-section-0 .main-message.b'),
                msgC: document.querySelector('#scroll-section-0 .main-message.c'),
                msgD: document.querySelector('#scroll-section-0 .main-message.d'),
                // video interaction
                canvas: document.querySelector('#video-canvas-0'),
				context: document.querySelector('#video-canvas-0').getContext('2d'),
				videoImages: []

            },
            values: {
                videoImageCount: 170,
                imageSequence: [0, 169],
                canvas_opacity: [1, 0, {start: 0.9, end: 1}],
                msgA_opacity_in: [0, 1, {start: 0.1, end: 0.2 }],
                msgA_opacity_out: [1, 0, {start: 0.25, end: 0.3 }],
                msgA_translateY_in: [20, 0, {start: 0.1, end: 0.2 }],
                msgA_translateY_out: [0, -20, {start: 0.25, end: 0.3 }],
                msgB_opactiy_in: [0, 1, {start: 0.3, end: 0.4}],
                msgB_opactiy_out: [1, 0, {start: 0.45, end: 0.5}],
                msgB_translateY_in: [20, 0, {start:0.3, end: 0.4}],
                msgB_translateY_out: [0, -20, {start:0.45, end: 0.5}],
                msgC_opacity_in: [0, 1, {start: 0.5, end: 0.6}],
                msgC_opacity_out: [1, 0, {start: 0.65, end: 0.7}],
                msgC_translateY_in: [20, 0, {start: 0.5, end: 0.6}],
                msgC_translateY_out: [0, -20, {start: 0.65, end: 0.7}],
                msgD_opacity_in: [0, 1, {start: 0.7, end: 0.8}],
                msgD_opacity_out: [1, 0, {start: 0.85, end: 0.9}],
                msgD_translate_in: [20, 0, {start: 0.7, end: 0.8}],
                msgD_translate_out: [0, -80, {start: 0.85, end: 0.9}]



               

            }
        },
        {   //1
            type : 'normal',
            heightNum : 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1'),
                descmsgA: document.getElementById('desc-msgA'),
                descmsgB: document.getElementById('desc-msgB'),
                descmsgC: document.getElementById('desc-msgC'),

            },
            values: {
                descmsgA_opacity_in : [0, 1, {start: 0.1, end: 0.2}],
                // descmsgA_opacity_out : [0, 1, {start: 0.2, end: 0.25}],
                descmsgB_opacity_in : [0, 1, {start: 0.35, end: 0.45}],
                // descmsgB_opacity_out : [0, 1, {start: 0, end: 0}],
                descmsgC_opacity_in : [0, 1, {start: 0.6, end: 0.7}],
                // descmsgC_opacity_out : [0, 1, {start: 0, end: 0}],
            }
        },
        {   //2
            type : 'sticky',
            heightNum : 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2'),
                msgA: document.querySelector('#scroll-section-2 .a'),
                msgB: document.querySelector('#scroll-section-2 .b'),
                msgC: document.querySelector('#scroll-section-2 .c'),
                msgD: document.querySelector('#scroll-section-2 .d'),
                pinB: document.querySelector('#scroll-section-2 .b .pin'),
                pinC: document.querySelector('#scroll-section-2 .c .pin'),
                canvas: document.querySelector('#video-canvas-1'),
				context: document.querySelector('#video-canvas-1').getContext('2d'),
				videoImages: []



            },
            values: {
                videoImageCount: 162,
                imageSequence: [0, 161],
                canvas_opacity: [1, 0, {start: 0.9, end: 1}],
                msgA_opacity_in: [0, 1, {start: 0.1, end: 0.2 }],
                msgA_opacity_out: [1, 0, {start: 0.25, end: 0.3 }],
                msgA_translateY_in: [20, 0, {start: 0.1, end: 0.2 }],
                msgA_translateY_out: [0, -20, {start: 0.25, end: 0.3 }],
                msgB_opactiy_in: [0, 1, {start: 0.3, end: 0.4}],
                msgB_opactiy_out: [1, 0, {start: 0.45, end: 0.5}],
                msgB_translateY_in: [30, 0, {start:0.3, end: 0.4}],
                msgB_translateY_out: [0, -20, {start:0.45, end: 0.5}],
                msgC_opacity_in: [0, 1, {start: 0.5, end: 0.6}],
                msgC_opacity_out: [1, 0, {start: 0.65, end: 0.7}],
                msgC_translateY_in: [30, 0, {start: 0.5, end: 0.6}],
                msgC_translateY_out: [0, -20, {start: 0.65, end: 0.7}],
                msgD_opacity_in: [0, 1, {start: 0.7, end: 0.8}],
                msgD_opacity_out: [1, 0, {start: 0.85, end: 0.9}],
                msgD_translateY_in: [30, 0, {start: 0.7, end: 0.8}],
                msgD_translateY_out: [0, -20, {start: 0.85, end: 0.9}],
                pinB_scaleY: [0.5, 1, {start: 0.3, end: 0.4}],
                pinC_scaleY: [0.5, 1, {start: 0.5, end: 0.6}],
                // pinB_opacity_in: [0, 1, {start: 0.3, end: 0.4}],
                // pinB_opacity_out: [1, 0, {start: 0.45, end: 0.5}],
                // pinC_opacity_in: [0, 1, {start: 0.5, end: 0.6}],
                // pinC_opacity_out: [1, 0, {start: 0.65, end: 0.7}]


            }
        },
        {   
            type : 'sticky',
            heightNum : 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3'),
                canvasCaption: document.querySelector('.canvas-caption'),
                canvas: document.querySelector('.image-blend-canvas'),
				context: document.querySelector('.image-blend-canvas').getContext('2d'),
				imagesPath: [
					'/static/images/blend-image-1.jpg',
					'/static/images/blend-image-2.jpg'
				],
				images2: []
            },
            values:{
                //좌표값 미리 세팅(whiteRect)
                rect1X: [0, 0, {start:0, end: 0}],
                rect2X: [0, 0, {start:0, end: 0}],
                //캔버스 값조정
                blendHeight: [0, 0, {start:0, end: 0}],
                canvas_scale3: [0, 0, {start:0, end: 0}],
                rectStartY: 0,
                canvasCaption_opacity : [0, 1, {start: 0, end: 0}],
                canvasCaption_translateY : [20, 0, {start: 0, end: 0}]

                
            }
        }
    ];

    function setCanvasImages() {
        let imgElem;
		for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
			imgElem = new Image();
			imgElem.src = `/static/video4/1 (${1  + i}).JPG`;
			sceneInfo[0].objs.videoImages.push(imgElem);
        }
        let imgElem2;
		for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
			imgElem2 = new Image();
			imgElem2.src = `/static/video5/2 (${1 + i}).JPG`;
			sceneInfo[2].objs.videoImages.push(imgElem2);
        }
        let imgElem3;
		for (let i = 0; i < sceneInfo[3].objs.imagesPath.length; i++) {
			imgElem3 = new Image();
			imgElem3.src = sceneInfo[3].objs.imagesPath[i];
			sceneInfo[3].objs.images2.push(imgElem3);
		}
        // console.log(sceneInfo[3].objs.images2);
        

    }
    setCanvasImages();

    function checkMenu() {
        if (yoffset > 44) {
            document.body.classList.add('local-nav-sticky');
        } else {
            document.body.classList.remove('local-nav-sticky');
        }
    }

    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        yoffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for (let i = 0; i< sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yoffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);

        const heightRatio = window.innerHeight / 1080;
        sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;


    }

    function calcValues(values, currentYoffset) {
        let rv;
        const scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        if (values.length === 3) {
            // start ~end 사이의 애니메이션 실행
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if (currentYoffset >= partScrollStart && currentYoffset <= partScrollEnd) {
                rv = ((currentYoffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0]);
            } else if (currentYoffset < partScrollStart) {
                rv = values[0];
            } else if (currentYoffset > partScrollEnd) {
                rv = values[1];
            }
        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }

        return rv;
    }
    function playAnimation() {
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYoffset = yoffset - preScrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = (yoffset-preScrollHeight) / scrollHeight;

        switch (currentScene) {
            case 0:

                let sequence = Math.round(calcValues(values.imageSequence, currentYoffset));
                objs.context.drawImage(objs.videoImages[sequence],0,0)
                objs.canvas.style.opacity = calcValues(values.canvas_opacity, currentYoffset);
                if (scrollRatio <= 0.22) {
                    // in
                    objs.msgA.style.opacity = calcValues(values.msgA_opacity_in, currentYoffset);
                    objs.msgA.style.transform = `translateY(${calcValues(values.msgA_translateY_in, currentYoffset)}%)`;
                } else{
                    // out
                    objs.msgA.style.opacity = calcValues(values.msgA_opacity_out, currentYoffset);
                    objs.msgA.style.transform = `translateY(${calcValues(values.msgA_translateY_out, currentYoffset)}%)`;
                }
                if (scrollRatio <= 0.42) {
                    // in
                    objs.msgB.style.opacity = calcValues(values.msgB_opactiy_in, currentYoffset);
                    objs.msgB.style.transform = `translateY(${calcValues(values.msgB_translateY_in, currentYoffset)}%)`;
                } else{
                    objs.msgB.style.opacity = calcValues(values.msgB_opactiy_out, currentYoffset);
                    objs.msgB.style.transform = `translateY(${calcValues(values.msgB_translateY_out, currentYoffset)}%)`;
                }
                if (scrollRatio <= 0.625) {
                    // in
                    objs.msgC.style.opacity = calcValues(values.msgC_opacity_in, currentYoffset);
                    objs.msgC.style.transform = `translateY(${calcValues(values.msgC_translateY_in, currentYoffset)}%)`;
                } else{
                    objs.msgC.style.opacity = calcValues(values.msgC_opacity_out, currentYoffset);
                    objs.msgC.style.transform = `translateY(${calcValues(values.msgC_translateY_out, currentYoffset)}%)`;
                }
                if (scrollRatio <= 0.82) {
                    // in
                    objs.msgD.style.opacity = calcValues(values.msgD_opacity_in, currentYoffset);
                    objs.msgD.style.transform = `translateY(${calcValues(values.msgD_translateY_in, currentYoffset)}%)`;
                } else{
                    // out
                    objs.msgD.style.opacity = calcValues(values.msgD_opacity_out, currentYoffset);
                    objs.msgD.style.transform = `translateY(${calcValues(values.msgD_translateY_out, currentYoffset)}%)`;
                }
                
            // let msgA_opacity_out = calcValues(values.msgA_opacity, currentYoffset);

                break;
            case 1:
                if (scrollRatio <= 0.22) {
                    // in 
                    
                    objs.descmsgA.style.opacity = calcValues(values.descmsgA_opacity_in, currentYoffset);
                    // objs.msgA.style.transform = `translateY(${calcValues(values.msgA_translateY_in, currentYoffset)}%)`;
                }
                if (scrollRatio <= 0.46) {
                    // in
                    objs.descmsgB.style.opacity = calcValues(values.descmsgB_opacity_in, currentYoffset);
                    // objs.msgA.style.transform = `translateY(${calcValues(values.msgA_translateY_in, currentYoffset)}%)`;
                }
                if (scrollRatio <= 0.72) {
                    // in
                    objs.descmsgC.style.opacity = calcValues(values.descmsgC_opacity_in, currentYoffset);
                    // objs.msgA.style.transform = `translateY(${calcValues(values.msgA_translateY_in, currentYoffset)}%)`;
                }
                // console.log(scrollRatio)
                break;
            case 2:

                let sequence2 = Math.round(calcValues(values.imageSequence, currentYoffset));
                objs.context.drawImage(objs.videoImages[sequence2],0,0)
                
                if (scrollRatio <= 0.22) {
                    // in
                    objs.msgA.style.opacity = calcValues(values.msgA_opacity_in, currentYoffset);
                    objs.msgA.style.transform = `translateY(${calcValues(values.msgA_translateY_in, currentYoffset)}%)`;
                } else{
                    // out
                    objs.msgA.style.opacity = calcValues(values.msgA_opacity_out, currentYoffset);
                    objs.msgA.style.transform = `translateY(${calcValues(values.msgA_translateY_out, currentYoffset)}%)`;
                }
                // if (scrollRatio <= 0.42) {
                //     // in
                //     objs.msgB.style.opacity = calcValues(values.msgB_opactiy_in, currentYoffset);
                //     objs.msgB.style.transform = `translateY(${calcValues(values.msgB_translateY_in, currentYoffset)}%)`;
                //     objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYoffset)})`;
                // } else{
                //     objs.msgB.style.opacity = calcValues(values.msgB_opactiy_out, currentYoffset);
                //     objs.msgB.style.transform = `translateY(${calcValues(values.msgB_translateY_out, currentYoffset)}%)`;
                //     objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYoffset)})`;
                // }
                if (scrollRatio <= 0.625) {
                    // in
                    objs.msgC.style.opacity = calcValues(values.msgC_opacity_in, currentYoffset);
                    objs.msgC.style.transform = `translateY(${calcValues(values.msgC_translateY_in, currentYoffset)}%)`;
                    objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYoffset)})`;

                } else{
                    objs.msgC.style.opacity = calcValues(values.msgC_opacity_out, currentYoffset);
                    objs.msgC.style.transform = `translateY(${calcValues(values.msgC_translateY_out, currentYoffset)}%)`;
                    objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYoffset)})`;

                }
                if (scrollRatio <= 0.82) {
                    // in
                    objs.msgD.style.opacity = calcValues(values.msgD_opacity_in, currentYoffset);
                    objs.msgD.style.transform = `translateY(${calcValues(values.msgD_translateY_in, currentYoffset)}%)`;
                } else{
                    // out
                    objs.msgD.style.opacity = calcValues(values.msgD_opacity_out, currentYoffset);
                    objs.msgD.style.transform = `translateY(${calcValues(values.msgD_translateY_out, currentYoffset)}%)`;
                }
                //미리 캔버스 그려주기
                if (scrollRatio > 0.9) {
					const objs = sceneInfo[3].objs;
					const values = sceneInfo[3].values;
					const widthRatio = window.innerWidth / objs.canvas.width;
					const heightRatio = window.innerHeight / objs.canvas.height;
					let canvasScaleRatio;

					if (widthRatio <= heightRatio) {
						// 캔버스보다 브라우저 창이 홀쭉한 경우
						canvasScaleRatio = heightRatio;
					} else {
						// 캔버스보다 브라우저 창이 납작한 경우
						canvasScaleRatio = widthRatio;
					}

					objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
					objs.context.fillStyle = 'red';
					objs.context.drawImage(objs.images2[0], 0, 0);

					// 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
					const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
					const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

					const whiteRectWidth = recalculatedInnerWidth * 0.15;
					values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
					values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
					values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
					values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

					// 좌우 흰색 박스 그리기
					objs.context.fillRect(
						parseInt(values.rect1X[0]),
						0,
						parseInt(whiteRectWidth),
						objs.canvas.height
					);
					objs.context.fillRect(
						parseInt(values.rect2X[0]),
						0,
						parseInt(whiteRectWidth),
						objs.canvas.height
					);
				}// currentScene 3에서 쓰는 캔버스를 미리 그려주기 시작
				

				break;

			case 3:
				// console.log('3 play');
				let step = 0;
				// 가로/세로 모두 꽉 차게 하기 위해 여기서 세팅(계산 필요)
				const widthRatio = window.innerWidth / objs.canvas.width;
				const heightRatio = window.innerHeight / objs.canvas.height;
				let canvasScaleRatio;

				if (widthRatio <= heightRatio) {
					// 캔버스보다 브라우저 창이 홀쭉한 경우
					canvasScaleRatio = heightRatio;
				} else {
					// 캔버스보다 브라우저 창이 납작한 경우
					canvasScaleRatio = widthRatio;
				}

				objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
				objs.context.fillStyle = 'white';
				objs.context.drawImage(objs.images2[0], 0, 0);

				// 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
				const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
				const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

				if (!values.rectStartY) {
					values.rectStartY = objs.canvas.getBoundingClientRect().top;
					// values.rectStartY = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
					
					values.rect1X[2].end = values.rectStartY / scrollHeight;
                    values.rect2X[2].end = values.rectStartY / scrollHeight;
                    // console.log(values.rect1X[2].start,values.rect1X[2].end)
				}

				const whiteRectWidth = recalculatedInnerWidth * 0.15;
				values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
				values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
				values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
				values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

				// 좌우 흰색 박스 그리기
				objs.context.fillRect(
					parseInt(calcValues(values.rect1X, currentYoffset)),
					0,
					parseInt(whiteRectWidth),
					objs.canvas.height
				);
				objs.context.fillRect(
					parseInt(calcValues(values.rect2X, currentYoffset)),
					0,
					parseInt(whiteRectWidth),
					objs.canvas.height
				);

				if (scrollRatio < 0.455) {
					step = 1;
					// console.log('캔버스 닿기 전');
					objs.canvas.classList.remove('sticky');
				} else {
                    step = 2;
                    // 캔버스 블렌딩 처리 하기
                    values.blendHeight[0] = 0;
                    values.blendHeight[1] = objs.canvas.height;
                    values.blendHeight[2].start = 0.456;
                    values.blendHeight[2].end =  values.blendHeight[2].start  + 0.2;

                    const blendHeight = calcValues(values.blendHeight, currentYoffset);
                    objs.context.drawImage(objs.images2[1],
                        0, objs.canvas.height-blendHeight, objs.canvas.width, blendHeight,
                        0, objs.canvas.height-blendHeight, objs.canvas.width, blendHeight
                         );
                    objs.canvas.classList.add('sticky');
                    objs.canvas.style.top = `${-163}px`

                    if (scrollRatio > values.blendHeight[2].end) {
                        values.canvas_scale3[0] = canvasScaleRatio;
                        values.canvas_scale3[1] = document.body.offsetWidth /  (1.5* objs.canvas.width);
                        // console.log(values.canvas_scale3[0],values.canvas_scale3[1])
                        values.canvas_scale3[2].start = values.blendHeight[2].end;
                        values.canvas_scale3[2].end = values.canvas_scale3[2].start + 0.2;

                        objs.canvas.style.transform = `scale(${calcValues(values.canvas_scale3, currentYoffset)})`;

                        objs.canvas.style.marginTop = 0;


                    }
                    if (scrollRatio >  values.canvas_scale3[2].end && values.canvas_scale3[2].end > 0) {
                        objs.canvas.classList.remove('sticky');
                        objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;
                        //아래 이미지 opacity ,translte 값 조정

                        values.canvasCaption_opacity[2].start = values.canvas_scale3[2].end;
                        values.canvasCaption_opacity[2].end = values.canvasCaption_opacity[2].start + 0.1;
                        values.canvasCaption_translateY[2].start = values.canvas_scale3[2].end;
                        values.canvasCaption_translateY[2].end = values.canvasCaption_opacity[2].start + 0.1;

                        objs.canvasCaption.style.opacity = calcValues(values.canvasCaption_opacity, currentYoffset);
                        objs.canvasCaption.style.transform = `translate3d(0, ${calcValues(values.canvasCaption_translateY, currentYoffset)}%, 0)`;
                        // console.log(scrollRatio)


                    }
                }
                // console.log(scrollRatio)
                break;
        }
    }

    function scrollLoop() {
        enterNewScene = false;
        preScrollHeight = 0;
        for (i = 0; i < currentScene; i++) {
            preScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yoffset > preScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
            enterNewScene = true;
            document.body.setAttribute('id', `show-scene-${currentScene}`);

        }
        if (yoffset < preScrollHeight) {
            if (currentScene === 0) return;
            currentScene--;
            enterNewScene = true;
            document.body.setAttribute('id', `show-scene-${currentScene}`);

        }
        if (enterNewScene) return;
        playAnimation();

        // document.body.setAttribute('id', `show-scene-${currentScene}`);



    }
    
    
    window.addEventListener('resize',setLayout);
    window.addEventListener('scroll',() => {
        yoffset = window.pageYOffset;
        scrollLoop();
        checkMenu();
    });
    window.addEventListener('load', () => {
        document.body.classList.remove('before-load')
        setLayout();
        sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);

    });
    window.addEventListener('resize', setLayout);
    window.addEventListener('orientationchange',setLayout);
    document.querySelector('.loading').addEventListener('transitionend', (e)=> {
        document.body.removeChild(e.currentTarget);
    });

})();