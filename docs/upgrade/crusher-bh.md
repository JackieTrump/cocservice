---
title: "部落冲突 coc 夜世界撼地巨石升级数据"
navTitle: "撼地巨石"
shownTitle: "撼地巨石"
description: "撼地巨石非常在意自己的私人空间。这块巨石会凶狠地砸向入侵的地面部队，将他们碾压！"
module: upgrade-bh
imgFolder: bh_buildings/1105
wiki: https://clashofclans.fandom.com/wiki/Crusher
canonical: /upgrade/crusher-bh
---

- *如想查看都城的撼地巨石，请访问：[都城撼地巨石](/upgrade/crusher-capital)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Crusher10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1级" imgSrc="Crusher1.png" />
        <UnitImg imgTitle="2级" imgSrc="Crusher2.png" />
        <UnitImg imgTitle="3级" imgSrc="Crusher3.png" />
        <UnitImg imgTitle="4级" imgSrc="Crusher4.png" />
        <UnitImg imgTitle="5级" imgSrc="Crusher5.png" />
        <UnitImg imgTitle="6级" imgSrc="Crusher6.png" />
        <UnitImg imgTitle="7级" imgSrc="Crusher7.png" />
        <UnitImg imgTitle="8级" imgSrc="Crusher8.png" />
        <UnitImg imgTitle="9级" imgSrc="Crusher9.png" />
        <UnitImg imgTitle="10级" imgSrc="Crusher10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 5, 6 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,     1,      2" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="2.8格<sup>*</sup>" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="2.3格" />
    <UnitProperty pKey="攻速" pValue="3.5秒/次" />
</UnitProperties>

\* 不同于的其他范围溅射伤害，撼地巨石的溅射中心就在巨石中心，而其他的范围溅射伤害中心以弹药为中心。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |   ---   |   ---   |  ---   |   ---   |    ---  |         ---         |         ---        |
|  1   |   125   |   438   |  1000  |   120K  |   0, 2  |                     |          3         |
|  2   |   138   |   483   |  1100  |   180K  |   0, 5  |                     |          3         |
|  3   |   152   |   532   |  1250  |   220K  |   0,12  |                     |          3         |
|  4   |   167   |   585   |  1400  |   350K  |   1     |                     |          4         |
|  5   |   184   |   644   |  1600  |   1.2M  |   2     |                     |          5         |
|  6   |   202   |   707   |  1850  |   1.5M  |   4     |                     |          6         |
|  7   |   222   |   777   |  2100  |   2.4M  |   6     |                     |          7         |
|  8   |   244   |   854   |  2350  |   3.4M  |   8     |                     |          8         |
|  9   |   269   |   942   |  2600  |   4.4M  |   10    |                     |          9         |
| 10   |   296   |  1036   |  2900  |   5.4M  |   12    |                     |         10         |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9级撼地巨石的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界10本推出，撼地巨石可升至10级。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2020/06/22">
        <TimelineRow>撼地巨石的溅射半径从3.5格缩小至2.8格，现在它不再那么容易对范围外的单位造成伤害。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界9本推出，撼地巨石可升至9级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>