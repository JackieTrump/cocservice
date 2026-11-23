---
title: "部落冲突 coc 掘地矿工升级数据"
navTitle: "掘地矿工"
shownTitle: "掘地矿工"
description: "聪明的掘地矿工可穿行于地底，钻过城墙，在攻击目标旁破土而出。他们在地底时不会受到任何伤害并且不会触发陷阱，不过即便在地下他们也能受到法术的增益效果。"
module: upgrade-home
imgFolder: home_tech/000b
wiki: https://clashofclans.fandom.com/wiki/Miner
canonical: /upgrade/miner
---

- *如想查看该兵种的强化版本，请访问：[超级矿工](/upgrade/060e-Super-Miner)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Miner_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2级" imgSrc="Miner1.png" />
        <UnitImg imgTitle="3 - 4级" imgSrc="Miner3.png" />
        <UnitImg imgTitle="5 - 6级" imgSrc="Miner5.png" />
        <UnitImg imgTitle="7级" imgSrc="Miner7.png" />
        <UnitImg imgTitle="8级" imgSrc="Miner8.png" />
        <UnitImg imgTitle="9级" imgSrc="Miner9.png" />
        <UnitImg imgTitle="10级" imgSrc="Miner10.png" />
        <UnitImg imgTitle="11级" imgSrc="Miner11.png" imgHd="Miner11_hd.png" />
        <UnitImg imgTitle="12级" imgSrc="Miner12.png" imgHd="Miner12_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 掘地矿工在地底下不会受到伤害，但是依然可以受到法术的增益效果。
2. 掘地矿工击败目标后，需要1到1.25秒才会再次钻地。这个延时依然能够躲避12到16级 [大本营](/upgrade/town-hall) 的爆炸伤害，但不能躲避 [炸弹塔](/upgrade/0308-Bomb-Tower) 被摧毁后的爆炸伤害。
3. 13到16级 [大本营](/upgrade/town-hall) 自爆后的毒雾伤害对处于地底的掘地矿工无效。
4. 掘地矿工能免疫 [飓风陷阱](/upgrade/0386-Tornado-Trap) 的转圈效果。
5. 掘地矿工在防守时不会钻地。
6. 掘地矿工仅在移动时会钻地，攻击时不会钻地，因此归类为地面近战单位。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="6" />
    <UnitProperty pKey="移动速度" pValue="4格/秒 (进攻)<br>2.8格/秒 (防守)" />
    <UnitProperty pKey="攻击速度" pValue="1.7秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5格" />
    <UnitProperty pKey="所需训练营等级" pValue="12" />
    <UnitProperty pKey="所需大本等级" pValue="10" />
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

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费 |  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ----  |  ----  |   ----  |    ----   |    ----     |   ----    |
|   1  |     80   |  136    |   550  |      \  |       \   |      1      |    10     |
|   2  |     88   |  149.6  |   610  |   1.5M  |    1      |      8      |    10     |
|   3  |     96   |  163.2  |   670  |   2.6M  |    2      |      8      |    10     |
|   4  |    104   |  176.8  |   730  |     3M  |    2, 6   |      9      |    11     |
|   5  |    112   |  190.4  |   800  |     4M  |    2,12   |      9      |    11     |
|   6  |    120   |  204    |   900  |   4.8M  |    3      |     10      |    12     |
|   7  |    128   |  217.6  |  1000  |     6M  |    4      |     11      |    13     |
|   8  |    136   |  231.2  |  1150  |   8.6M  |    6      |     12      |    14     |
|   9  |    144   |  244.8  |  1350  |  10.5M  |    6,12   |     13      |    15     |
|  10  |    160   |  272    |  1550  |  12.5M  |    7      |     14      |    16     |
|  11  |    175   |  297.5  |  1750  |  16.5M  |    9,20   |     15      |    17     |
|  12  |    195   |  331.5  |  2050  |    28M  |   14,12   |     16      |    18     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18本推出，并在18本新增12级掘地矿工。</TimelineRow>
        <TimelineRow>11级掘地矿工的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>4 ~ 10级掘地矿工的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/30">
        <TimelineRow>8 ~ 11级掘地矿工的生命值增加。</TimelineRow>
        <TimelineRow>10 ~ 11级掘地矿工的每秒伤害提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>4 ~ 10级掘地矿工的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 4、6 ~ 10级掘地矿工的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17本新增11级掘地矿工。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 10级掘地矿工的升级时间减少。</TimelineRow>
        <TimelineRow>5 ~ 10级掘地矿工的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6、8、9级掘地矿工的升级时间减少。</TimelineRow>
        <TimelineRow>8、9级掘地矿工的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16本推出，同时在16本新增10级掘地矿工。</TimelineRow>
        <TimelineRow>2 ~ 3、5 ~ 9级掘地矿工的升级时间减少。</TimelineRow>
        <TimelineRow>8级掘地矿工的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>6 ~ 7级掘地矿工的升级费用和升级时间减少。</TimelineRow>
    <TimelineRow>9级掘地矿工的生命值由1200提升到1250。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>地下单位于地面上行走（不包含进攻半身冒出地面）的移动速度降低30%，会影响防守时的掘地矿工和参观村庄时在兵营等地方看到的地下单位。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 8级掘地矿工的升级费用和升级时间减少。</TimelineRow>
        <TimelineRow>15本推出，并在15本新增9级掘地矿工。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 7级掘地矿工的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 6级掘地矿工的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14本新增8级掘地矿工。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 5级掘地矿工的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>2 ~ 3级掘地矿工的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13本新增7级掘地矿工。</TimelineRow>
        <TimelineRow>6级掘地矿工的生命值由870增加到900。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>