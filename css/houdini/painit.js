class CustomBackgroundPainter {
    static get inputProperties() {
        return [
            '--backgroundColor',
            '--mouse-x',
            '--mouse-y'
        ];
    }
    paint(ctx, size, properties) {
        const color = properties.get('--backgroundColor');
        const mouseX = parseInt(properties.get('--mouse-x').toString(), 10);
        const mouseY = parseInt(properties.get('--mouse-y').toString(), 10);
        const lineWidth = 4;
        const gap = 50;

        /**
         * 假设有 100 米
         * 1. 10 米一个，紧挨着，100 / 10 = 10
         * 2. 10 米一个，相邻两个相隔 5 米，
         * 
         * x = (100 + 5) / (10 + 5) = 7
         */
        const columCount = Math.floor((size.width + gap) / (lineWidth + gap));
        const rowCount = Math.floor((size.height + gap) / (gap + lineWidth));
        const radius = 300;

        for (let i = 0; i <= columCount; i++) {
            for (let j = 0; j <= rowCount; j ++) {
                const startPosX = i * (gap + lineWidth) + lineWidth / 2;
                const startPosY = (gap + lineWidth) * j + lineWidth / 2;
                const endPosX = startPosX + lineWidth / 2;
                
                // 鼠标和点之间的距离
                const distance = Math.sqrt(Math.pow((mouseX - startPosX), 2) + Math.pow((mouseY - startPosY), 2));

                // 这是一个移动的阈值
                const moveThreshold = distance < radius ? (1 - Math.pow(distance / radius, 2)) * gap * 0.4 : 0;

                // 两点直接与 x 轴之间的夹角
                const rotate = Math.atan2(mouseY - startPosY, mouseX - startPosX);

                ctx.save()
                ctx.beginPath();

                ctx.translate(startPosX, startPosY);
                // 不额外设置，旋转的中心点是 ctx 的起始点。如果要改变中心点，可以通过 translate
                ctx.rotate(rotate);
                // 旋转完毕需要将坐标系再还原
                ctx.translate(-startPosX, -startPosY);
        
                // 将画笔移动到指定的坐标 x,y 上
                ctx.moveTo(startPosX - moveThreshold * 0.5, startPosY);
        
                // 绘制一条从指定位置到当前位置的直线
                ctx.lineTo(endPosX + moveThreshold * 0.5, startPosY);
        
                ctx.strokeStyle = color;
                ctx.lineCap = 'round';
                ctx.lineWidth = lineWidth;
                ctx.stroke();
                ctx.closePath();
                ctx.restore()
            }
        }
    }
}

registerPaint('custom-background', CustomBackgroundPainter);
