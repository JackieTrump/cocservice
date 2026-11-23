---
title: "部落冲突 coc 夜世界防空火炮升级数据"
navTitle: "防空火炮"
shownTitle: "防空火炮"
description: "发射一连串的小型火箭来驱赶“飞虫”！就像灭虫器一样，但它的造型更加美观。"
module: upgrade-bh
imgFolder: bh_buildings/1104
wiki: https://clashofclans.fandom.com/wiki/Firecrackers
canonical: /upgrade/firecrackers-bh
---

- *如想查看家乡的防空火箭，请访问：[防空火箭](/upgrade/0304-Air-Defense)。*
- *如想查看都城的防空火箭，请访问：[都城防空火箭](/upgrade/air-defense-capital)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Firecrackers10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1级" imgSrc="Firecrackers1.png" />
        <UnitImg imgTitle="2级" imgSrc="Firecrackers2.png" />
        <UnitImg imgTitle="3级" imgSrc="Firecrackers3.png" />
        <UnitImg imgTitle="4级" imgSrc="Firecrackers4.png" />
        <UnitImg imgTitle="5级" imgSrc="Firecrackers5.png" />
        <UnitImg imgTitle="6级" imgSrc="Firecrackers6.png" />
        <UnitImg imgTitle="7级" imgSrc="Firecrackers7.png" />
        <UnitImg imgTitle="8级" imgSrc="Firecrackers8.png" />
        <UnitImg imgTitle="9级" imgSrc="Firecrackers9.png" />
        <UnitImg imgTitle="10级" imgSrc="Firecrackers10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 4, 5 - 6, 7, 8, 9 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,     1,     2, 3, 4,      5" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅空中目标" />
    <UnitProperty pKey="射程" pValue="9格" />
    <UnitProperty pKey="攻速" pValue="约1秒/轮*" />
</UnitProperties>

\* 防空火炮的攻击节奏是0.064秒一发，4发后冷却0.8秒。

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
|   1  |    55   |    19   |   400  |    40K  |  0, 0,15|                     |          3         |
|   2  |    61   |    21   |   460  |    80K  |  0, 2   |                     |          3         |
|   3  |    67   |    23   |   530  |   120K  |  0, 4   |                     |          3         |
|   4  |    73   |    25   |   610  |   300K  |  0,12   |                     |          4         |
|   5  |    79   |    27   |   700  |   800K  |  1      |                     |          5         |
|   6  |    87   |    30   |   850  |   1.2M  |  2      |                     |          6         |
|   7  |    96   |    33   |  1000  |     2M  |  4      |                     |          7         |
|   8  |   105   |    36   |  1150  |     3M  |  6      |                     |          8         |
|   9  |   117   |    40   |  1300  |     4M  |  8      |                     |          9         |
|  10  |   128   |    44   |  1500  |     5M  |  9      |                     |         10         |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9级防空火炮的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界10本推出，防空火炮可升至10级。</TimelineRow>
        <TimelineRow>为配合更小的地图，防空火炮的射程由10格降低到9格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界9本推出，防空火炮可升至9级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>