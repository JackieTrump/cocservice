---
title: "部落冲突 coc 飞龙宝宝（小龙）升级数据"
navTitle: "飞龙宝宝"
shownTitle: "飞龙宝宝（小龙）"
description: "会喷火的飞龙宝宝在其他空中部队旁边时显得有些害羞，不过要是落单了，它可会大发雷霆。当周围没有其他空中部队时，飞龙宝宝会变得狂暴，攻击伤害和攻击速度都会提升。"
module: upgrade-home
imgFolder: home_tech/000a
wiki: https://clashofclans.fandom.com/wiki/Baby_Dragon
canonical: /upgrade/000a-Baby-Dragon
---

- *如想查看该兵种的强化版本，请访问：[地狱飞龙](/upgrade/0604-Inferno-Dragon)。*
- *如想查看夜世界的飞龙宝宝，请访问：[夜世界飞龙宝宝](/upgrade/baby-dragon-bh)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Baby_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2级" imgSrc="Baby_Dragon1.png" />
        <UnitImg imgTitle="3级" imgSrc="Baby_Dragon3.png" />
        <UnitImg imgTitle="4级" imgSrc="Baby_Dragon4.png" />
        <UnitImg imgTitle="5级" imgSrc="Baby_Dragon5.png" />
        <UnitImg imgTitle="6级" imgSrc="Baby_Dragon6.png" />
        <UnitImg imgTitle="7级" imgSrc="Baby_Dragon7.png" />
        <UnitImg imgTitle="8级" imgSrc="Baby_Dragon8.png" />
        <UnitImg imgTitle="9级" imgSrc="Baby_Dragon9.png" />
        <UnitImg imgTitle="10级" imgSrc="Baby_Dragon10.png" />
        <UnitImg imgTitle="11级" imgSrc="Baby_Dragon11.png" />
        <UnitImg imgTitle="12级" imgSrc="Baby_Dragon12.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

如果飞龙宝宝附近4.5格无空军会触发狂暴，狂暴时秒伤为原来的3倍，攻速为0.67秒/次，即每次伤害为原来的2倍。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="2.5格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.25格" />
    <UnitProperty pKey="所需训练营等级" pValue="11" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="5,5,15000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 |狂暴状态下<br>每秒伤害|狂暴状态下<br>每次伤害| 生命值 | 升级花费 |  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ---   |         ----       |         ----       |  ----  |    ----  |    ----   |       ---       |       ---     |
|   1  |    75   |         225        |         150        |  1200  |       \  |       \   |        1        |        9      |
|   2  |    85   |         255        |         170        |  1300  |    1.5M  |    1, 6   |        7        |        9      |
|   3  |    95   |         285        |         190        |  1400  |      2M  |    1,12   |        8        |       10      |
|   4  |   105   |         315        |         210        |  1500  |    2.8M  |    2      |        8        |       10      |
|   5  |   115   |         345        |         230        |  1600  |    3.7M  |    2,18   |        9        |       11      |
|   6  |   125   |         375        |         250        |  1700  |    4.8M  |    3      |       10        |       12      |
|   7  |   135   |         405        |         270        |  1800  |    6.2M  |    4      |       11        |       13      |
|   8  |   145   |         435        |         290        |  1900  |    9.5M  |    6      |       12        |       14      |
|   9  |   155   |         465        |         310        |  2000  |     11M  |    7      |       13        |       15      |
|  10  |   165   |         495        |         330        |  2100  |   13.5M  |    7, 6   |       14        |       16      |
|  11  |   175   |         525        |         350        |  2200  |   16.5M  |   10      |       15        |       17      |
|  12  |   185   |         555        |         370        |  2350  |     29M  |   15, 6   |       16        |       18      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>在18本新增12级飞龙宝宝。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/11/17">
        <TimelineRow>11级飞龙宝宝的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>5 ~ 10级飞龙宝宝的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>3 ~ 10级飞龙宝宝的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 7、9 ~ 10级飞龙宝宝的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>飞龙宝宝的训练时间由 1:30改为 1:25</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17本推出，并在17本新增11级飞龙宝宝。</TimelineRow>
        <TimelineRow>2 ~ 10级飞龙宝宝的升级时间减少。</TimelineRow>
        <TimelineRow>5、8 ~ 10级飞龙宝宝的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>9级飞龙宝宝的升级时间减少。</TimelineRow>
        <TimelineRow>9级飞龙宝宝的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16本新增10级飞龙宝宝。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>4 ~ 9级飞龙宝宝的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15本新增9级飞龙宝宝。</TimelineRow>
        <TimelineRow>6 ~ 7级飞龙宝宝的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>3 ~ 8级飞龙宝宝的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少0.5格（超级飞龙除外，这玩意削了1格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5、7级飞龙宝宝的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4、7级飞龙宝宝的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14本推出，并在14本新增8级飞龙宝宝。</TimelineRow>
        <TimelineRow>2 ~ 5级飞龙宝宝的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 3、5 ~ 6级飞龙宝宝的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13本新增7级飞龙宝宝。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>2 ~ 4级飞龙宝宝的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>2 ~ 6级飞龙宝宝的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级飞龙宝宝的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>