---
title: "部落冲突 coc 部落城堡升级数据"
navTitle: "部落城堡"
shownTitle: "部落城堡"
description: "宝库以及部落成员增援的部队和法术都会存放在您的部落城堡中。"
module: upgrade-home
imgFolder: home_buildings/0407
wiki: https://clashofclans.fandom.com/wiki/Clan_Castle
canonical: /upgrade/clan-castle
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Clan_Castle14_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="部落城堡" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Clan_Castle_Ruin.png" />
        <UnitImg imgTitle="1级" imgSrc="Clan_Castle1.png" />
        <UnitImg imgTitle="2级" imgSrc="Clan_Castle2.png" />
        <UnitImg imgTitle="3级" imgSrc="Clan_Castle3.png" />
        <UnitImg imgTitle="4级" imgSrc="Clan_Castle4.png" />
        <UnitImg imgTitle="5级" imgSrc="Clan_Castle5.png" />
        <UnitImg imgTitle="6级" imgSrc="Clan_Castle6.png" />
        <UnitImg imgTitle="7级" imgSrc="Clan_Castle7.png" />
        <UnitImg imgTitle="8级" imgSrc="Clan_Castle8.png" />
        <UnitImg imgTitle="9级" imgSrc="Clan_Castle9.png" />
        <UnitImg imgTitle="10级" imgSrc="Clan_Castle10.png" />
        <UnitImg imgTitle="11级" imgSrc="Clan_Castle11.png" />
        <UnitImg imgTitle="12级" imgSrc="Clan_Castle12.png" imgHd="Clan_Castle12_hd.png" />
        <UnitImg imgTitle="13级" imgSrc="Clan_Castle13.png" imgHd="Clan_Castle13_hd.png" />
        <UnitImg imgTitle="14级" imgSrc="Clan_Castle14.png" imgHd="Clan_Castle14_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 18" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 部落城堡内可存储的资源数量只与玩家的大本营等级和部落等级有关，而与部落城堡等级无关，详见页面下方的表格。
2. 部落城堡升级时仍然可以请求援兵。
3. [雷电法术](/upgrade/0100-Lightning-Spell) 不能对部落城堡造成伤害，[地震法术](/upgrade/0181-Earthquake-Spell) 可以。
4. 自2021年4月更新起，部落城堡可收到的兵种等级有限制，详见：[为什么我的满级兵捐出去之后等级变低了？援兵等级限制机制讲解](/p/2053)。

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="援兵触发距离" pValue="13格" />
    <UnitProperty pKey="掠夺比例" pValue="3% (无上限)" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |可容纳的<br>部队人口|可容纳的<br>法术空间|可容纳的<br>攻城机器数量|生命值|升级费用| 升级时间 |升级后可获<br>得的经验|所需<br>大本等级|
| ---- |      ----        |        ---        |          ---         | ---- |  ---- |    ---  |         ---         |      ---     |
|   1  |        10        |          0        |           0          |  600 |   10k |   0     |                     | 2<sup>①</sup>|
|   2  |        15        |          0        |           0          | 1200 |   50k |   0, 2  |                     |        4     |
|   3  |        20        |          0        |           0          | 1800 |  600k |   0,12  |                     |        6     |
|   4  |        25        |          1        |           0          | 2600 |  1.2M |   1     |                     |        8     |
|   5  |        30        |          1        |           0          | 3000 |    2M |   1,12  |                     |        9     |
|   6  |        35        |          1        |           1          | 3400 |    3M |   2     |                     |       10     |
|   7  |        35        |          2        |           1          | 4000 |    5M |   3     |                     |       11     |
|   8  |        40        |          2        |           1          | 4400 |    5M |   4     |                     |       12     |
|   9  |        45        |          2        |           1          | 4800 |    8M |   6     |                     |       13     |
|  10  |        45        |          3        |           1          | 5200 |   10M |   7     |                     |       14     |
|  11  |        50        |          3        |           1          | 5400 |   12M |   8     |                     |       15     |
|  12  |        50        |          3        |      2<sup>②</sup>   | 5600 | 14.5M |   9     |                     |       16     |
|  13  |        55        |          3        |           2          | 5800 |   19M |  11     |                     |       17     |
|  14  |        55        |          4        |           2          | 6000 |   28M |  14     |                     |       18     |
</UnitTable>

① 理论上来说，玩家只有升级到3级大本营才能达到10 000的资源储量用来修复城堡，但是如果玩家在2级大本营时遇到夯木节（升级建筑的费用减半）活动，或者购买资源礼包，那么就可以提前解锁城堡。  
② 将部落城堡升到12级并不意味着你能在战斗中同时使用两种攻城机器，只是可以装两种不同的攻城机器，供你在战斗时切换。

<SmallTitle>宝库可容纳的资源量</SmallTitle>

<SwitchTabs contentClass="cp-upgrade-clan-level">
    <SwitchTab tabId="cp-upgrade-clan-0" :activeTab="true">无部落或1级部落</SwitchTab>
    <SwitchTab tabId="cp-upgrade-clan-2">2 ~ 3级部落</SwitchTab>
    <SwitchTab tabId="cp-upgrade-clan-4">4 ~ 5级部落</SwitchTab>
    <SwitchTab tabId="cp-upgrade-clan-6">6 ~ 7级部落</SwitchTab>
    <SwitchTab tabId="cp-upgrade-clan-8">8 ~ 9级部落</SwitchTab>
    <SwitchTab tabId="cp-upgrade-clan-10">10级及以上部落</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 无部落或1级部落 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-clan-0" class="cp-upgrade-clan-level">
<Table maxWidth="25rem">

| 大本等级 | 金币和圣水储量 | 黑油储量 |
|   ---   |      ---      |   ---    |
|     1   |      5万     |       0  |
|     2   |     20万     |       0  |
|     3   |     40万     |       0  |
|     4   |     60万     |       0  |
|     5   |     80万     |       0  |
|     6   |    120万     |       0  |
|     7   |    160万     |   8 000  |
|     8   |    200万     |  10 000  |
|     9   |    240万     |  12 000  |
|    10   |    280万     |  14 000  |
|    11   |    320万     |  16 000  |
|    12   |    360万     |  18 000  |
|    13   |    400万     |  20 000  |
|    14   |    440万     |  22 000  |
|    15   |    480万     |  24 000  |
|    16   |    520万     |  26 000  |
|    17   |    560万     |  30 000  |
|    18   |    600万     |  32 000  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 2 ~ 3级部落 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-clan-2" class="cp-upgrade-clan-level">
<Table maxWidth="25rem">

| 大本等级 | 金币和圣水储量 | 黑油储量 |
|   ---   |      ---      |   ---    |
|     1   |    5.5万     |       0  |
|     2   |     22万     |       0  |
|     3   |     44万     |       0  |
|     4   |     66万     |       0  |
|     5   |     88万     |       0  |
|     6   |    132万     |       0  |
|     7   |    176万     |   8 800  |
|     8   |    220万     |  11 000  |
|     9   |    264万     |  13 200  |
|    10   |    308万     |  15 400  |
|    11   |    352万     |  17 600  |
|    12   |    396万     |  19 800  |
|    13   |    440万     |  22 000  |
|    14   |    484万     |  24 200  |
|    15   |    528万     |  26 400  |
|    16   |    572万     |  28 600  |
|    17   |    616万     |  33 000  |
|    18   |    660万     |  35 200  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 4 ~ 5级部落 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-clan-4" class="cp-upgrade-clan-level">
<Table maxWidth="25rem">

| 大本等级 | 金币和圣水储量 | 黑油储量 |
|   ---   |      ---      |   ---    |
|     1   |      6万     |       0  |
|     2   |     24万     |       0  |
|     3   |     48万     |       0  |
|     4   |     72万     |       0  |
|     5   |     96万     |       0  |
|     6   |    144万     |       0  |
|     7   |    192万     |   9 600  |
|     8   |    240万     |  12 000  |
|     9   |    288万     |  14 400  |
|    10   |    336万     |  16 800  |
|    11   |    384万     |  19 200  |
|    12   |    432万     |  21 600  |
|    13   |    480万     |  24 000  |
|    14   |    528万     |  26 400  |
|    15   |    576万     |  28 800  |
|    16   |    624万     |  31 200  |
|    17   |    672万     |  36 000  |
|    18   |    720万     |  38 400  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 6 ~ 7级部落 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-clan-6" class="cp-upgrade-clan-level">
<Table maxWidth="25rem">

| 大本等级 | 金币和圣水储量 | 黑油储量 |
|   ---   |      ---      |   ---    |
|     1   |    6.5万     |       0  |
|     2   |     26万     |       0  |
|     3   |     52万     |       0  |
|     4   |     78万     |       0  |
|     5   |    104万     |       0  |
|     6   |    156万     |       0  |
|     7   |    208万     |  10 400  |
|     8   |    260万     |  13 000  |
|     9   |    312万     |  15 600  |
|    10   |    364万     |  18 200  |
|    11   |    416万     |  20 800  |
|    12   |    468万     |  23 400  |
|    13   |    520万     |  26 000  |
|    14   |    572万     |  28 600  |
|    15   |    624万     |  31 200  |
|    16   |    676万     |  33 800  |
|    17   |    728万     |  39 000  |
|    18   |    780万     |  41 600  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 8 ~ 9级部落 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-clan-8" class="cp-upgrade-clan-level">
<Table maxWidth="25rem">

| 大本等级 | 金币和圣水储量 | 黑油储量 |
|   ---   |      ---      |   ---    |
|     1   |      7万     |       0  |
|     2   |     28万     |       0  |
|     3   |     56万     |       0  |
|     4   |     84万     |       0  |
|     5   |    112万     |       0  |
|     6   |    168万     |       0  |
|     7   |    224万     |  11 200  |
|     8   |    280万     |  14 000  |
|     9   |    336万     |  16 800  |
|    10   |    392万     |  19 600  |
|    11   |    448万     |  22 400  |
|    12   |    504万     |  25 200  |
|    13   |    560万     |  28 000  |
|    14   |    616万     |  30 800  |
|    15   |    672万     |  33 600  |
|    16   |    728万     |  36 400  |
|    17   |    784万     |  42 000  |
|    18   |    840万     |  44 800  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 10级及更高等级部落 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-clan-10" class="cp-upgrade-clan-level">
<Table maxWidth="25rem">

| 大本等级 | 金币和圣水储量 | 黑油储量 |
|   ---   |      ---      |   ---    |
|     1   |    7.5万     |       0  |
|     2   |     30万     |       0  |
|     3   |     60万     |       0  |
|     4   |     90万     |       0  |
|     5   |    120万     |       0  |
|     6   |    180万     |       0  |
|     7   |    240万     |  12 000  |
|     8   |    300万     |  15 000  |
|     9   |    360万     |  18 000  |
|    10   |    420万     |  21 000  |
|    11   |    480万     |  24 000  |
|    12   |    540万     |  27 000  |
|    13   |    600万     |  30 000  |
|    14   |    660万     |  33 000  |
|    15   |    720万     |  36 000  |
|    16   |    780万     |  39 000  |
|    17   |    840万     |  45 000  |
|    18   |    900万     |  48 000  |
</Table>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18本推出，并在18本新增14级部落城堡。</TimelineRow>
        <TimelineRow>13级部落城堡的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1 ~ 3级部落城堡的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2、5 ~ 8、11 ~ 12级部落城堡的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 3、5 ~ 12级部落城堡的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17本推出，并在17本新增13级部落城堡。</TimelineRow>
        <TimelineRow>6 ~ 12级部落城堡的升级时间减少。</TimelineRow>
        <TimelineRow>8、11 ~ 12级部落城堡的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8 ~ 11级部落城堡的升级时间减少。</TimelineRow>
        <TimelineRow>11级部落城堡的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>在16本新增12级部落城堡。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>10 ~ 11级部落城堡的升级时间减少。</TimelineRow>
        <TimelineRow>10级部落城堡的升级费用1800万减少至1260万。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>8 ~ 9级部落城堡的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9级部落城堡的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15本推出，并在15本新增11级部落城堡。</TimelineRow>
        <TimelineRow>6 ~ 10级部落城堡的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>现在所有等级的部落城堡均需使用圣水升级，所需圣水的数量与之前所需的金币数相同。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14本推出，并在14本新增10级部落城堡。</TimelineRow>
        <TimelineRow>现在部落城堡可收到的兵种等级有限制，援兵无法再碾压低本了。</TimelineRow>
        <TimelineRow>4 ~ 7级部落城堡的升级费用降低。</TimelineRow>
        <TimelineRow>7级部落城堡的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>雷电法术不再对部落城堡造成伤害。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13本推出，并在13本新增9级部落城堡。</TimelineRow>
        <TimelineRow>12级大本营的城堡可存储的资源量增加。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>6 ~ 7级部落城堡的升级费用降低。</TimelineRow>
        <TimelineRow>2级部落城堡的升级时间增加，4 ~ 6级部落城堡的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>