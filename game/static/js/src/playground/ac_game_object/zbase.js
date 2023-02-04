let AC_GAME_OBJECTS = [];


class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
    }

    start() {
        // 只会在第一帧执行
    }

    update() {
        // 每一帧均会执行一次
    }

    on_destroy() {
        // 在被销毁前执行一次
    }

    destroy() {
        this.on_destroy();
        // 删掉该物体
        for (let i = 0; i < AC_GAME_OBJECTS.length; i++) {
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}


let AC_GAME_ANIMATION = function (timestamp) {

    requestAnimationFrame(AC_GAME_ANIMATION)
}

requestAnimationFrame(AC_GAME_ANIMATION);
