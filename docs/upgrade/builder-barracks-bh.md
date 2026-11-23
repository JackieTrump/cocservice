---
title: "部落冲突 coc 夜世界建筑大师训练营升级数据"
navTitle: "建筑大师训练营"
shownTitle: "建筑大师训练营"
description: "建筑大师训练营为建筑大师基地战斗训练部队！您还可以在发动进攻前快速更换部队。升级建筑大师训练营以解锁更多兵种！"
module: upgrade-bh
imgFolder: bh_buildings/1280
wiki: https://clashofclans.fandom.com/wiki/Builder_Barracks
canonical: /upgrade/builder-barracks-bh
---

- *如想查看家乡的训练营，请访问：[训练营](/upgrade/barracks)。*
- *都城的训练营比较多，这里就不放链接了，如有需求请自行前往相关页面查看。*


<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Builder_Barracks12.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Builder_Barracks_Ruin.png" />    
        <UnitImg imgTitle="1级" imgSrc="Builder_Barracks1.png" />
        <UnitImg imgTitle="2级" imgSrc="Builder_Barracks2.png" />
        <UnitImg imgTitle="3级" imgSrc="Builder_Barracks3.png" />
        <UnitImg imgTitle="4级" imgSrc="Builder_Barracks4.png" />
        <UnitImg imgTitle="5级" imgSrc="Builder_Barracks5.png" />
        <UnitImg imgTitle="6级" imgSrc="Builder_Barracks6.png" />
        <UnitImg imgTitle="7级" imgSrc="Builder_Barracks7.png" />
        <UnitImg imgTitle="8级" imgSrc="Builder_Barracks8.png" />
        <UnitImg imgTitle="9级" imgSrc="Builder_Barracks9.png" />
        <UnitImg imgTitle="10级" imgSrc="Builder_Barracks10.png" />
        <UnitImg imgTitle="11级" imgSrc="Builder_Barracks11.png" />
        <UnitImg imgTitle="12级" imgSrc="Builder_Barracks12.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 10" />
    <BuildingNumRow title="建筑数量" num=" 1, 1" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, 1" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, 0" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

夜世界的训练营与家乡有些许不同，这里列举一些夜世界训练营的一些独有特性：
1. 在夜世界，训练部队不需要消耗圣水；
2. 在你用掉兵营中的部队后，训练营可以自动训练你上次使用的配置。
3. 夜世界造兵不需要时间，造兵可以瞬间完成。（在2020年3月30日更新之前，填满每个兵营需要的时间固定为1分钟）

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir2"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 升级时间 | 升级后可获<br>得的经验 | 所需<br>大本等级 | 解锁的兵种 | 
| ---- |  ---- |   ----  |    ---  |          ---          |       ---       |    ---    |
|    1 |  300  |   1000  |    \    |                       |         2       | <a href="/upgrade/raged-barbarian-bh">狂暴野蛮人</a> |
|    2 |  350  |   4000  | 0, 0, 1 |                       |         2       | <a href="/upgrade/sneaky-archer-bh">隐秘弓箭手</a> |
|    3 |  400  |    10k  | 0, 0,10 |                       |         3       | <a href="/upgrade/boxer-giant-bh">巨人拳击手</a> |
|    4 |  460  |    25k  | 0, 0,30 |                       |         3       | <a href="/upgrade/beta-minion-bh">异变亡灵</a> |
|    5 |  550  |   100k  | 0, 3    |                       |         4       | <a href="/upgrade/1004-Bomber">炸弹兵</a> |
|    6 |  650  |   150k  | 0, 6    |                       |         4       | <a href="/upgrade/baby-dragon-bh">飞龙宝宝</a> |
|    7 |  750  |   300k  | 0, 9    |                       |         5       | <a href="/upgrade/1006-Cannon-Cart">加农炮战车</a> |
|    8 |  850  |   500k  | 1       |                       |         6       | <a href="/upgrade/1007-Night-Witch">暗夜女巫</a> |
|    9 | 1000  |     1M  | 2       |                       |         7       | <a href="/upgrade/drop-ship-bh">骷髅气球</a> |
|   10 | 1150  |   1.5M  | 3       |                       |         8       | <a href="/upgrade/1009-Power-P.E.K.K.A">雷霆皮卡</a> |
|   11 | 1300  |     2M  | 4       |                       |         9       | <a href="/upgrade/100a-Hog-Glider">野猪飞骑</a> |
|   12 | 1450  |     3M  | 5       |                       |        10       | <a href="/upgrade/100b-Electrofire-Wizard">电火法师</a> |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>    
        <TimelineRow>7 ~ 11级建筑大师训练营的升级费用增加。</TimelineRow>
        <TimelineRow>夜世界10本推出，建筑大师训练营可升至12级，新增兵种: 电火法师。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/10/16">  
        <TimelineRow>夜世界造兵不需要时间了，造兵可以瞬间完成。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界9本推出，建筑大师训练营可升至11级，新增兵种野猪飞骑。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>