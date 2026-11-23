---
title: "城墙升级数据与费用详情 - 部落冲突 COC"
navTitle: "城墙"
shownTitle: "城墙"
description: "城墙是保护村庄、阻挡敌军的最好防线。提供部落冲突（COC）家乡村庄全等级城墙升级所需的金币与圣水费用、壁垒之戒数量、生命值及各大本营建造数量上限查询。"
module: upgrade-home
imgFolder: home_buildings/0300
wiki: https://clashofclans.fandom.com/wiki/Wall
canonical: /upgrade/0300-Walls
---

- *如想查看夜世界的城墙，请访问：[夜世界城墙](/upgrade/110c-Walls)。*
- *如想查看都城的城墙，请访问：[都城城墙](/upgrade/2200-Walls)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wall19.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1级" imgSrc="Wall1.png" />
        <UnitImg imgTitle="2级" imgSrc="Wall2.png" />
        <UnitImg imgTitle="3级" imgSrc="Wall3.png" />
        <UnitImg imgTitle="4级" imgSrc="Wall4.png" />
        <UnitImg imgTitle="5级" imgSrc="Wall5.png" />
        <UnitImg imgTitle="6级" imgSrc="Wall6.png" />
        <UnitImg imgTitle="7级" imgSrc="Wall7.png" />
        <UnitImg imgTitle="8级" imgSrc="Wall8.png" />
        <UnitImg imgTitle="9级" imgSrc="Wall9.png" />
        <UnitImg imgTitle="10级" imgSrc="Wall10.png" />
        <UnitImg imgTitle="11级" imgSrc="Wall11.png" />
        <UnitImg imgTitle="12级" imgSrc="Wall12.png" />
        <UnitImg imgTitle="13级" imgSrc="Wall13.png" />
        <UnitImg imgTitle="14级" imgSrc="Wall14.png" />
        <UnitImg imgTitle="15级" imgSrc="Wall15.png" />
        <UnitImg imgTitle="16级" imgSrc="Wall16.png" />
        <UnitImg imgTitle="17级" imgSrc="Wall17_thumb.png" imgHd="Wall17.png"/>
        <UnitImg imgTitle="18级" imgSrc="Wall18.png" />
        <UnitImg imgTitle="19级" imgSrc="Wall19.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1,  2,  3,  4,   5,   6,   7,   8,   9,  10, 11 - 13, 14 - 18" />
    <BuildingNumRow title="建筑数量" num="0, 25, 50, 75, 100, 125, 175, 225, 250, 275,     300,     325" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="19级城墙最高可升级" pValue="200块" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Wall_Ring",
        "noGoldPass": true
    },
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 升级费用 | 升级所需<br>戒指数量 | 所需<br>大本等级 |
| ---- |  ---  |   ---   |    ---   |         ---        |       ---       |
|   1  |   100 |     0   |     \    |          \         |        2        |
|   2  |   200 |    1k   |     \    |          1         |        2        |
|   3  |   400 |    5k   |     \    |          1         |        3        |
|   4  |   800 |   10k   |     \    |          1         |        4        |
|   5  |  1200 |   20k   |    20k   |          1         |        5        |
|   6  |  1800 |   30k   |    30k   |          1         |        6        |
|   7  |  2400 |   50k   |    50k   |          1         |        7        |
|   8  |  3000 |   75k   |    75k   |          1         |        8        |
|   9  |  3500 |  100k   |   100k   |          1         |        9        |
|  10  |  4000 |  200k   |   200k   |          1         |        9        |
|  11  |  5000 |  500k   |   500k   |          1         |       10        |
|  12  |  7000 |    1M   |     1M   |          1         |       11        |
|  13  |  8000 |  1.5M   |   1.5M   |          2         |       12        |
|  14  |  9000 |    2M   |     2M   |          2         |       13        |
|  15  | 10000 |    3M   |     3M   |          3         |       14        |
|  16  | 11000 |    4M   |     4M   |          4         |       15        |
|  17  | 12000 |    5M   |     5M   |          5         |       16        |
|  18  | 13000 |    7M   |     7M   |          7         |       17        |
|  19  | 14000 |   10M   |    10M   |         10         |       18        |
</UnitTable>

注：升级城墙时，金币、圣水、戒指任选其一即可。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>18本新解锁75块19级城墙（共200块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/11/25">
        <TimelineRow>18本推出，并在18本新增19级城墙，目前游戏只开放了125块19级城墙。</TimelineRow>
        <TimelineRow>18级城墙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/30">
        <TimelineRow>13 ~ 18级城墙的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1 ~ 7级城墙的生命值减少。</TimelineRow>
        <TimelineRow>17本现可解锁全部18级城墙。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>13 ~ 17级城墙的升级费用降低。</TimelineRow>
        <TimelineRow>17本新解锁75块18级城墙（共250块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>建造1级城墙不再需要费用。</TimelineRow>
        <TimelineRow>17本新解锁75块18级城墙（共175块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17本推出，并在17本新增18级城墙，目前游戏只开放了100块18级城墙。</TimelineRow>
        <TimelineRow>16 ~ 17级城墙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>15 ~ 16级城墙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>16本可解锁全部17级城墙（共325块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16本可以再刷100块17级墙（共250块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16本推出，可升级150块17级城墙。</TimelineRow>
        <TimelineRow>14 ~ 15级城墙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>现在你可以把所有的城墙都升到16级了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15本推出，并在15本新增16级城墙，目前游戏只开放了200块16级城墙。</TimelineRow>
        <TimelineRow>13 ~ 14级城墙的升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>9 ~ 14级城墙的生命值减少。</TimelineRow>
        <TimelineRow>从5级大本营开始，就可以选择使用金币或圣水升级城墙（以前是9级大本营）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>6 ~ 14级城墙的升级费用降低。</TimelineRow>
        <TimelineRow>14本解锁全部15级城墙（325块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14本玩家可升至15级的城墙新增50块（更新后总共可以升200块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/14">
        <TimelineRow>14本玩家可升至15级的城墙新增50块（更新后总共可以升150块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14本推出，并在14本新增15级城墙，不过只能升级100块。</TimelineRow>
        <TimelineRow>12级城墙的升级费用由300万降低到200万，13级由500万降低到400万。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>编辑家乡村庄的阵型时，城墙也可以像建筑和陷阱那样互换位置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13本可以再刷100块14级墙（这次更新后全部开放了）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13本可以再刷50块14级墙（合计200块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>5 ~ 12级城墙的升级费用降低。</TimelineRow>
        <TimelineRow>11 ~ 12级城墙需要的戒指减少。</TimelineRow>
        <TimelineRow>13本可以再刷50块14级墙（合计150块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13本开放，新增14级城墙（但是只能升100块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>12本可以将所有城墙升至13级（之前只能升级250块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
