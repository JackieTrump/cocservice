---
title: "部落冲突 coc 巨人升级数据"
navTitle: "巨人"
shownTitle: "巨人"
description: "这些大块头看上去沉默寡言，但倘若他们发现箭塔或加农炮，您将见识他们狂躁的一面！巨人行动缓慢，但是抗打击能力强，可用于吸引火力。"
module: upgrade-home
imgFolder: home_tech/0002
wiki: https://clashofclans.fandom.com/wiki/Giant
canonical: /upgrade/0002-Giant
---

- *如想查看该兵种的强化版本，请访问：[超级巨人](/upgrade/0602-Super-Giant)。*
- *如想查看夜世界的巨人拳击手，请访问：[夜世界巨人拳击手](/upgrade/boxer-giant-bh)。*
- *如想查看作为临时兵种以及英雄装备派生兵种的巨人终极强化版，请访问：[霸天巨人](/upgrade/0e17-Giant-Giant)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2级" imgSrc="Giant1.png" />
        <UnitImg imgTitle="3 - 4级" imgSrc="Giant3.png" />
        <UnitImg imgTitle="5级" imgSrc="Giant5.png" />
        <UnitImg imgTitle="6级" imgSrc="Giant6.png" />
        <UnitImg imgTitle="7级" imgSrc="Giant7.png" />
        <UnitImg imgTitle="8级" imgSrc="Giant8.png" />
        <UnitImg imgTitle="9级" imgSrc="Giant9.png" />
        <UnitImg imgTitle="10级" imgSrc="Giant10.png" />
        <UnitImg imgTitle="11级" imgSrc="Giant11.png" />
        <UnitImg imgTitle="12级" imgSrc="Giant12.png" />
        <UnitImg imgTitle="13级" imgSrc="Giant13.png" />
        <UnitImg imgTitle="14级" imgSrc="Giant14.png" imgHd="Giant14_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="1.5格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1格" />
    <UnitProperty pKey="所需训练营等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="2" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,9000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级花费 |  升级时间  |所需实验室等级| 所需大本等级 |
| ---- |  ----   |  ----   |  ----  |   ----  |    ----   |    ----     |     ---     |
|   1  |    12   |    24   |   400  |      \  |       \   |      \      |1<sup>#</sup>|
|   2  |    15   |    30   |   500  |    40k  |    0, 2   |      2      |      4      |
|   3  |    20   |    40   |   600  |   150k  |    0, 4   |      4      |      6      |
|   4  |    24   |    48   |   700  |   400k  |    0, 6   |      5      |      7      |
|   5  |    31   |    62   |   900  |   800k  |    0,12   |      6      |      8      |
|   6  |    43   |    86   |  1100  |   1.5M  |    1      |      7      |      9      |
|   7  |    55   |   110   |  1300  |   2.3M  |    1,12   |      8      |     10      |
|   8  |    62   |   124   |  1500  |   2.6M  |    2      |      9      |     11      |
|   9  |    70   |   140   |  1850  |   3.4M  |    2, 6   |     10      |     12      |
|  10  |    78   |   156   |  2000  |     5M  |    3      |     11      |     13      |
|  11  |    86   |   172   |  2200  |   7.5M  |    4      |     13      |     15      |
|  12  |    94   |   188   |  2400  |    10M  |    5,12   |     14      |     16      |
|  13  |   102   |   204   |  2600  |    15M  |    9,12   |     15      |     17      |
|  14  |   114   |   228   |  3000  |    25M  |  13,12   |     16      |     18      |
</UnitTable>

\# 根据安装包解析的结果，玩家可以在1本把训练营升到3级以解锁巨人，但这仅仅是理论上的，实际上新手教程会直接引导玩家升到2本，根本没有在1本升级训练营的机会。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18本推出，并在18本新增14级巨人。</TimelineRow>
        <TimelineRow>13级巨人的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>9 ~ 12级巨人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1 ~ 5级巨人的生命值提升。</TimelineRow>
        <TimelineRow>1 ~ 3级巨人的每秒伤害值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5、8 ~ 12级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 12级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17本推出，并在17本新增13级巨人。</TimelineRow>
        <TimelineRow>5 ~ 9、11 ~ 12级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 12级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8 ~ 11级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>11级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16本推出，同时在16本新增12级巨人。</TimelineRow>
        <TimelineRow>7 ~ 11级巨人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>9 ~ 10级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 10级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15本推出，并在15本新增11级巨人。</TimelineRow>
        <TimelineRow>7 ~ 10级巨人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>7 ~ 10级巨人的每秒伤害提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 10级巨人的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 9级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 7级巨人的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>1 ~ 4级巨人的训练费用：250/750/1250/1750圣水→ 150/300/750/1500圣水。</TimelineRow>
        <TimelineRow>2 ~ 9级的巨人的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 8级巨人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13本新增10级巨人。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020-03-30">
        <TimelineRow>5 ~ 9级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-12-09">
        <TimelineRow>13本开放，8到9级巨人的生命值从1480/1660增加到1500/1850。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-04-02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中5 ~ 8级巨人的升级时间下调。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
