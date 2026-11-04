<template>
    <div id="cp-footer">
              <!-- 页面挂载前显示 2026，挂载后动态渲染当前真实年份 -->
        Copyright © 2018-{{ currentYear }}  部落驿站（原部落冲突指导）<br>
        <!-- <a href="/p/260">用户须知</a> | <a href="https://github.com/lemonicy/clashpost" target="_blank" rel="nofollow noreferrer noopener">Github 开源地址</a> | <a href="/faq">联系我们</a><br> -->
         <a href="/p/260">用户须知</a> | <a href="/faq">联系我们</a><br>
        本网站与 Supercell 没有任何关联，Supercell 对此不提供任何赞助或具体许可，也不对此承担任何责任。若要查看更多信息，请参阅 Supercell 玩家内容条款：
        <span style="font-style: italic">
            <a href="https://supercell.com/en/fan-content-policy/cn/" target="_blank" rel="nofollow">
                www.supercell.com/en/fan-content-policy
            </a>
        </span>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

// 初始值2026年份，防止打包时服务器和客户端 hydration 冲突
const currentYear = ref(2026)

onMounted(() => {
    // 只有在客户端浏览器运行、组件挂载后，才去获取真实年份
    currentYear.value = new Date().getFullYear()
})
</script>
<style lang="scss">
#cp-footer {
    font-size: 0.875rem;
    text-align: center;
    margin: 1.5rem auto;
}
</style>