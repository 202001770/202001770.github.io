// 获取雪花容器
const snowContainer = document.querySelector('.snow');

// 创建雪花效果
function createSnowflakes() {
    let numberOfSnowflakes = 10; // 每次生成更多雪花
    for (let i = 0; i < numberOfSnowflakes; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // 随机设置雪花大小
        snowflake.style.width = `${Math.random() * 6 + 3}px`; // 从3px到9px之间的随机大小
        snowflake.style.height = snowflake.style.width;

        // 随机设置雪花初始位置
        snowflake.style.left = `${Math.random() * 100}%`; // 随机的水平位置

        // 随机设置雪花飘落的时间
        snowflake.style.animationDuration = `${Math.random() * 3 + 7}s`; // 每个雪花飘落的时间

        // 随机设置雪花的透明度
        snowflake.style.opacity = Math.random() * 0.5 + 0.2;  // 随机透明度，从0.2到0.7

        // 随机设置雪花飘落的速度（通过动画函数）
        snowflake.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

        // 将雪花添加到容器中
        snowContainer.appendChild(snowflake);

        // 设置雪花元素在完成动画后自动删除
        setTimeout(() => {
            snowContainer.removeChild(snowflake);
        }, 10000); // 在雪花飘落完后删除（与雪花的飘落时间同步）
    }
}

// 每隔一段时间生成更多雪花
setInterval(createSnowflakes, 100); // 每100毫秒生成10个雪花

// 监听鼠标移动事件
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const mouseRadius = 100; // 定义鼠标周围的圆形范围，半径为100px

    // 获取所有雪花
    const snowflakes = document.querySelectorAll('.snowflake');

    // 遍历每个雪花，检测与鼠标的距离
    snowflakes.forEach(snowflake => {
        const snowflakeX = snowflake.getBoundingClientRect().left + snowflake.offsetWidth / 2;
        const snowflakeY = snowflake.getBoundingClientRect().top + snowflake.offsetHeight / 2;

        // 计算鼠标与雪花的距离
        const distance = Math.sqrt(Math.pow(snowflakeX - mouseX, 2) + Math.pow(snowflakeY - mouseY, 2));

        // 如果距离小于圆形范围半径，消失雪花
        if (distance < mouseRadius) {
            snowflake.style.opacity = 0; // 使雪花消失
        } else {
            snowflake.style.opacity = 0.8; // 恢复透明度
        }
    });
});

// 获取音乐和按钮元素
const playPauseBtn = document.getElementById('playPauseBtn');
const music = document.getElementById('music');

// 控制播放/暂停的功能
playPauseBtn.addEventListener('click', function() {
    console.log('按钮点击触发'); // 添加日志以查看按钮是否被点击
    if (music.paused) {
        music.play(); // 播放音乐
        playPauseBtn.style.backgroundImage = 'url("musicOff.png")'; // 播放时更改为暂停图标
        playPauseBtn.style.display = 'block'; // 确保按钮始终可见
    } else {
        music.pause(); // 暂停音乐
        playPauseBtn.style.backgroundImage = 'url("musicOn.png")'; // 暂停时恢复播放图标
    }
});
