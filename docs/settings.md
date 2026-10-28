---
title: "设置"
module: settings
lastUpdated: null
robots: noindex, nofollow
hasUpdateTime: false
---

<script>
/*
 * 根据月卡减免比例，给出 Option 的 value
 */
function loadGpValueFromDiscount(discount) {
    if (discount === 10) {
        return 1;
    } else if (discount === 15) {
        return 2;
    } else if (discount === 20) {
        return 3;
    }
    return 0;
}

/**
 * 根据 option 的 value 值确定月卡减免比例
 */
function getDiscountFromOptionValue(value) {
    if (value === "1") {
        return "10";
    } else if (value === "2") {
        return "15";
    } else if (value === "3") {
        return "20";
    } else {
        return "0";
    }
}

/*
 * 重置设置, 【新增】无感知刷新
 * 【优化版】重置设置：增加防冗余检测，如果本来就是默认状态则直接拦截
 */

function resetSettings() {
  // 1. 获取当前 Cookie 状态
    const oldGpCookie = getCookie("cp-gp-discount");
    const oldTheme = getCookie("cp-preferred-theme");
    const oldSearch = getCookie("cp-search-provider");
    // 2. 获取当前下拉菜单的选中值
    const trainVal = getSelectValue("cp-select-gp-training");
    const researchVal = getSelectValue("cp-select-gp-research");
    const buildingVal = getSelectValue("cp-select-gp-building");
    const themeVal = getSelectValue("cp-select-page-theme");
    const searchVal = getSelectValue("cp-select-search-provider");
    // 3. 判断是否“本来就已经全部是默认状态”
    // 条件：所有 Cookie 都不存在，且所有下拉菜单的值都为 "0"
    const isAlreadyDefault = !oldGpCookie && !oldTheme && !oldSearch &&
        trainVal === "0" && researchVal === "0" && buildingVal === "0" &&
        themeVal === "0" && searchVal === "0";
        // 4. 如果本来就是默认状态，直接拦截，不执行任何无用操作
    if (isAlreadyDefault) {
        generateToast("当前已经是默认设置，无需重置", {
            type: "warning",
            showDuration: 2600
        });
        return;
    }
    // 5. 只有在确实需要重置时，才执行清理和恢复操作，清除所有设置相关的 Cookie
    deleteCookie("cp-gp-discount");
    deleteCookie("cp-preferred-theme");
    deleteCookie("cp-search-provider");

    // 2. 使用前端组件的设置方法，将所有下拉菜单瞬间恢复为默认值 "0"
    setSelectValue("cp-select-gp-training", "0");
    setSelectValue("cp-select-gp-research", "0");
    setSelectValue("cp-select-gp-building", "0");
    setSelectValue("cp-select-page-theme", "0");
    setSelectValue("cp-select-search-provider", "0");

    // 3. 立即让网站主题恢复默认（跟随系统）
    if (typeof setUserTheme === 'function') {
        setUserTheme();
    }

    // 4. 弹出成功提示（全程无刷新）
    generateToast("已重置为默认设置", {
        type: "success",
        showDuration: 3000
    });
}

/*
 *  【新增】无感保存设置,防冗余变更检测,存储前检测数据是否变化
 */
function saveSettings() {
    // 月卡减免比例的设置
    const gpDiscountTrainingValue = getSelectValue("cp-select-gp-training");
    const gpDiscountTraining = getDiscountFromOptionValue(gpDiscountTrainingValue);

    const gpDiscountResearchValue = getSelectValue("cp-select-gp-research");
    const gpDiscountResearch = getDiscountFromOptionValue(gpDiscountResearchValue);

    const gpDiscountBuildingValue = getSelectValue("cp-select-gp-building");
    const gpDiscountBuilding = getDiscountFromOptionValue(gpDiscountBuildingValue);

    // let gpCookieValue;
    // if (gpDiscountTraining === "0" && gpDiscountResearch === "0" && gpDiscountBuilding === "0") {
    //     deleteCookie("cp-gp-discount");
    // } else {
    //     gpCookieValue = gpDiscountTraining + "-" + gpDiscountResearch + "-" + gpDiscountBuilding;
    //     setCookie("cp-gp-discount", gpCookieValue, "90", "days");
    // }

    // 网站主题设置
    const pageThemeValue = getSelectValue("cp-select-page-theme");
    // if (pageThemeValue === "1") {
    //     setCookie("cp-preferred-theme", "light", "10", "years");
    // } else if (pageThemeValue === "2") {
    //     setCookie("cp-preferred-theme", "dark", "10", "years");
    // } else {
    //     deleteCookie("cp-preferred-theme");
    // }

    // 搜索服务提供商设置
    const searchProviderValue = getSelectValue("cp-select-search-provider");
    // 【新增】检测新旧值是否变化并拦截
    const oldGpCookieValue = getCookie("cp-gp-discount") || null;
    const oldTheme = getCookie("cp-preferred-theme") || null;
    const oldSearch = getCookie("cp-search-provider") || null;

    let newGpCookieValue = (gpDiscountTraining === "0" && gpDiscountResearch === "0" && gpDiscountBuilding === "0") ? null : (gpDiscountTraining + "-" + gpDiscountResearch + "-" + gpDiscountBuilding);
    let newTheme = pageThemeValue === "1" ? "light" : (pageThemeValue === "2" ? "dark" : null);
    let newSearch = searchProviderValue === "1" ? "Google" : (searchProviderValue === "2" ? "DuckDuckGo" : (searchProviderValue === "3" ? "Yandex" : (searchProviderValue === "4" ? "Yahoo" : null)));

    // 2. 【直接取反 / 只要有一项发生改变】
    const hasChanged = (newGpCookieValue !== oldGpCookieValue) || (newTheme !== oldTheme) || (newSearch !== oldSearch);

    // 3. 如果没有任何地方改变，直接拦截
    if (!hasChanged) {
        generateToast("当前设置未发生更改,无须保存", { type: "warning", showDuration: 2600 });
        return;
    }
    // 修复bug，修改参数后无法保存
    if (gpDiscountTraining === "0" && gpDiscountResearch === "0" && gpDiscountBuilding === "0") {
        deleteCookie("cp-gp-discount");
    } else {
       let gpCookieValue = gpDiscountTraining + "-" + gpDiscountResearch + "-" + gpDiscountBuilding;
        setCookie("cp-gp-discount", gpCookieValue, "90", "days");
    }
     if (pageThemeValue === "1") {
        setCookie("cp-preferred-theme", "light", "10", "years");
    } else if (pageThemeValue === "2") {
        setCookie("cp-preferred-theme", "dark", "10", "years");
    } else {
        deleteCookie("cp-preferred-theme");
    }
    if (searchProviderValue === "1") {
        setCookie("cp-search-provider", "Google", "10", "years");
    } else if (searchProviderValue === "2") {
        setCookie("cp-search-provider", "DuckDuckGo", "10", "years");
    } else if (searchProviderValue === "3") {
        setCookie("cp-search-provider", "Yandex", "10", "years");
    } else if (searchProviderValue === "4") {
        setCookie("cp-search-provider", "Yahoo", "10", "years");
    } else {
        deleteCookie("cp-search-provider");
    }
    // 弹出提示信息
    generateToast("设置保存成功", {
        type: "success",
        showDuration: 3000
    });
    
/**
 * 【关键优化】保存完主题 Cookie 后，立即让全局主题生效，实现无感知切换！
 */
    if (typeof setUserTheme === 'function') {
        setUserTheme();
    }
}
</script>

<script setup>
import { onMounted, nextTick } from "vue";
import { inBrowser } from "vitepress";
import SelectContainer from "@/components/select/SelectContainer.vue";
import Select, { getSelectValue, setSelectValue } from "@/components/select/Select.vue";
import Option from "@/components/select/Option.vue";
import { generateToast } from "@/components/dialog/Toast.vue";
import { getCookie, setCookie, deleteCookie, isNumber,setUserTheme } from "@/assets/global/utils.js";

/*
 * 获取三个月卡减免比例
 */
const gpCookieValue = inBrowser ? getCookie("cp-gp-discount") : null;
let gpTrainingActiveValue = 0;
let gpResearchActiveValue = 0;
let gpBuildingActiveValue = 0;
// 如果 cookie 不存在，则认为没有减免比例，不进行任何操作
if (gpCookieValue) {
    // 月卡的数组长度一定是 3，如果不是则使用默认值
    let gpDiscountArr = gpCookieValue.split("-");
    if (gpDiscountArr.length !== 3) {
        gpDiscountArr = [0,0,0];
    }
    const gpDiscountTraining = parseInt(gpDiscountArr[0]);
    const gpDiscountResearch = parseInt(gpDiscountArr[1]);
    const gpDiscountBuilding = parseInt(gpDiscountArr[2]);
    gpTrainingActiveValue = loadGpValueFromDiscount(gpDiscountTraining);
    gpResearchActiveValue = loadGpValueFromDiscount(gpDiscountResearch);
    gpBuildingActiveValue = loadGpValueFromDiscount(gpDiscountBuilding);
}

/*
 * 加载用户当前的主题
 */
const preferredTheme = inBrowser ? getCookie("cp-preferred-theme") : null;
let pageThemeActiveValue = 0;
if (preferredTheme) {
    if (preferredTheme === "light") {
        pageThemeActiveValue = 1;
    } else if (preferredTheme === "dark") {
        pageThemeActiveValue = 2;
    }
}

/**
 * 加载当前使用的搜索服务提供商
 */
const searchProvider = inBrowser ? getCookie("cp-search-provider") : null;
let searchProviderActiveValue = 0;
if (searchProvider) {
    if (searchProvider === "Google") {
        searchProviderActiveValue = 1;
    } else if (searchProvider === "DuckDuckGo") {
        searchProviderActiveValue = 2;
    } else if (searchProvider === "Yandex") {
        searchProviderActiveValue = 3;
    } else if (searchProvider === "Yahoo") {
        searchProviderActiveValue = 4;
    }
}
</script>

网站的所有设置都需要重新刷新页面后才可生效。

## 月卡减免比例

在这个区域，你可以单独设置月卡的训练、研究和建筑加成。月卡减免比例的设置均保留 90 天。

<SelectContainer title="训练加成" selectId="cp-select-gp-training" aria-label="训练加成下拉菜单"
    :activeValue="gpTrainingActiveValue" selectWidth="12rem">
    <Option text="无" value="0" />
    <Option text="10%" value="1" />
    <Option text="15%" value="2" />
    <Option text="20%" value="3" />
</SelectContainer>
<SelectContainer title="研究加成" selectId="cp-select-gp-research" aria-label="研究加成下拉菜单"
    :activeValue="gpResearchActiveValue" selectWidth="12rem">
    <Option text="无" value="0" />
    <Option text="10%" value="1" />
    <Option text="15%" value="2" />
    <Option text="20%" value="3" />
</SelectContainer>
<SelectContainer title="建造加成" selectId="cp-select-gp-building" aria-label="建造加成下拉菜单"
    :activeValue="gpBuildingActiveValue" selectWidth="12rem">
    <Option text="无" value="0" />
    <Option text="10%" value="1" />
    <Option text="15%" value="2" />
    <Option text="20%" value="3" />
</SelectContainer>

## 网站主题

<SelectContainer title="切换网站主题" selectId="cp-select-page-theme" aria-label="切换网站主题的下拉菜单"
    :activeValue="pageThemeActiveValue" selectWidth="12rem">
    <Option text="跟随系统（默认）" value="0" />
    <Option text="始终使用浅色主题" value="1" />
    <Option text="始终使用深色主题" value="2" />
</SelectContainer>

<hr class="cp-light-row-division" />

## 搜索服务

<SelectContainer title="搜索服务提供商" selectId="cp-select-search-provider" aria-label="搜索服务提供商的菜单"
    :activeValue="searchProviderActiveValue" selectWidth="12rem"
    description="由于中国大陆的搜索引擎极少收录境外网站，即使提供了百度、搜狗这些选项也不能用，因此这里就不提供了。">
    <Option text="必应（默认）" value="0" />
    <Option text="谷歌" value="1" />
    <Option text="DuckDuckGo" value="2" />
    <Option text="Yandex" value="3" />
    <Option text="雅虎" value="4" />
</SelectContainer>

<hr class="cp-light-row-division" />

<div class="cp-settings-operation-btn">
    <button class="btn-secondary" @click="resetSettings">重置</button>
    <button class="btn-primary" @click="saveSettings">保存</button>
</div>

<style lang="scss">
.cp-settings-operation-btn {
    display: flex;
    justify-content: space-between;

    button {
        width: 5rem;
    }
}
</style>