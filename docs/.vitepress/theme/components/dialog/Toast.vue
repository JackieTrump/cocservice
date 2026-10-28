<script>
/**
 * 根据提示信息的类型给出 div 的 class 字符串
 *
 * @param {String} type 提示信息的类型，含 info、success、warning、error 四种
 * @returns div 的 class 字符串
 */
function getToastClassFromType(type) {
    const map = {
        success: "cp-toast-success",
        warning: "cp-toast-warning",
        error: "cp-toast-error"
    };
    return "cp-toast " + (map[type] ?? "cp-toast-info");
}

const TOAST_HEIGHT_REM = 3.5;
const LEAVE_ANIMATION_MS = 300;

// 模块级定时器：新 Toast 出现时可以取消旧的，避免旧定时器误删新内容
let hideTimer = null;
let removeTimer = null;

function hideToast(container) {
    container.classList.remove("cp-toast-show");
    container.style.height = "0rem";
    // 等离场动画播完再移除
    removeTimer = setTimeout(() => {
        container.remove(); // 已被移除时 remove() 不会报错
        removeTimer = null;
    }, LEAVE_ANIMATION_MS);
}

/**
 * 生成一个提示信息（同一时间只显示一条，新的会替换旧的）
 *
 * @param {String} text 提示信息的文字
 * @param {Object} options 设置项
 * @param {Boolean} options.blocking 为 true 时，页面已有 Toast 则不再生成
 * @param {String} options.type info | success | warning | error
 * @param {Number} options.showDuration 显示时长（毫秒）
 * @param {String} options.position top | bottom
 * @param {Boolean} options.html 为 true 时按 HTML 渲染 text（默认按纯文本，避免 XSS）
 */
export function generateToast(text, options = {}) {
    const blocking = options.blocking ?? false;
    const type = options.type ?? "info";
    const showDuration = options.showDuration ?? 5000;
    const position = options.position ?? "bottom";
    const asHtml = options.html ?? false;

    let container = document.querySelector(".cp-toast-container");

    // 阻塞型：已有 Toast 时直接放弃，不能动已有的
    if (blocking && container && container.classList.contains("cp-toast-show")) return;

    // 取消旧定时器，防止它们对新内容生效
    clearTimeout(hideTimer);
    clearTimeout(removeTimer);
    removeTimer = null;

    if (container) {
        // 复用已有容器，只清空里面旧的 toast
        container.replaceChildren();
    } else {
        container = document.createElement("div");
        container.className = "cp-toast-container";
        document.body.appendChild(container);
    }

    // 位置
    container.classList.toggle("cp-fixed-top", position === "top");
    container.classList.toggle("cp-fixed-bottom", position !== "top");

    // 新的 toast
    const toastDiv = document.createElement("div");
    toastDiv.className = getToastClassFromType(type);
    if (asHtml) {
        toastDiv.innerHTML = text;
    } else {
        toastDiv.textContent = text;
    }
    container.appendChild(toastDiv);
    container.style.height = TOAST_HEIGHT_REM + "rem";

    // 触发入场动画（新建容器时需要先让浏览器渲染初始状态）
    requestAnimationFrame(() => {
        requestAnimationFrame(() => container.classList.add("cp-toast-show"));
    });

    hideTimer = setTimeout(() => hideToast(container), showDuration);
}
</script>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: ""
    }
});

const toastClass = getToastClassFromType(props.type);
</script>

<template>
    <div class="cp-toast-container">
        <div :class="toastClass"></div>
    </div>
</template>

<style lang="scss">
.cp-toast-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: unset;
    bottom: -4rem;
    z-index: 9999;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
    pointer-events: none; // 容器本身不挡住下方按钮

    > div {
        pointer-events: auto; // toast 本身仍可交互
    }

    &.cp-fixed-top {
        flex-direction: column-reverse;
        top: -4rem;
        bottom: unset;
    }

    &.cp-toast-show {
        bottom: 1.5rem;
    }

    &.cp-fixed-top.cp-toast-show {
        top: 4.5rem;
        bottom: unset;
    }

    &.cp-fixed-top .cp-toast {
        top: 0;
        bottom: unset;
    }
}

.cp-toast {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    padding: 0.375rem 0.5rem;
    border-radius: 0.5rem;
    position: relative;
    top: unset;
    bottom: 0;
}

.cp-toast-info {
    color: var(--cp-info-text-light);
    background-color: var(--cp-info-bg-light);
    border: var(--cp-info-border-light);
}

.cp-theme-dark .cp-toast-info {
    color: var(--cp-info-text-dark);
    background-color: var(--cp-info-bg-dark);
    border: var(--cp-info-border-dark);
}

.cp-toast-success {
    color: var(--cp-success-text-light);
    background-color: var(--cp-success-bg-light);
    border: var(--cp-success-border-light);
}

.cp-theme-dark .cp-toast-success {
    color: var(--cp-success-text-dark);
    background-color: var(--cp-success-bg-dark);
    border: var(--cp-success-border-dark);
}

.cp-toast-warning {
    color: var(--cp-warning-text-light);
    background-color: var(--cp-warning-bg-light);
    border: var(--cp-warning-border-light);
}

.cp-theme-dark .cp-toast-warning {
    color: var(--cp-warning-text-dark);
    background-color: var(--cp-warning-bg-dark);
    border: var(--cp-warning-border-dark);
}

.cp-toast-error {
    color: var(--cp-error-text-light);
    background-color: var(--cp-error-bg-light);
    border: var(--cp-error-border-light);
}

.cp-theme-dark .cp-toast-error {
    color: var(--cp-error-text-dark);
    background-color: var(--cp-error-bg-dark);
    border: var(--cp-error-border-dark);
}
</style>