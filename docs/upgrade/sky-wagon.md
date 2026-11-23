---
title: "部落冲突 coc 空中战车升级数据"
navTitle: "空中战车"
shownTitle: "空中战车"
description: "空中战车会在空中投放装有援军的木桶，木桶落地后会造成少量伤害并放出部队。它能飞行、会自己解体，而且法术对它无效。"
module: upgrade-home
imgFolder: home_tech/0248
wiki: https://clashofclans.fandom.com/wiki/Sky_Wagon
canonical: /upgrade/sky-wagon
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Sky_Wagon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1级" imgSrc="Sky_Wagon1.png" />
        <UnitImg imgTitle="2级" imgSrc="Sky_Wagon2.png" />
        <UnitImg imgTitle="3级" imgSrc="Sky_Wagon3.png" />
        <UnitImg imgTitle="4级" imgSrc="Sky_Wagon4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 空中战车会在空中飞行，并把装有援军的木桶投向目标。每个木桶落地时都会造成少量伤害，同时放出 [亡灵](/upgrade/0080-Minion)、[气球兵](/upgrade/0005-Balloon)、[飞龙宝宝](/upgrade/000a-Baby-Dragon) 和1个部落城堡援军（如果有）。
   - 空中战车的运作方式和 [部队发射器](/upgrade/troop-launcher) 类似，但它可以独立移动并自行寻找目标，而不是只对某一区域投放援军。
3. 木桶里的部队部署顺序遵循常规规则：先按人口从低到高，再按内部顺序；同类兵种则按等级从低到高部署。
4. 空中战车自带的部队等级取决于空中战车自身等级，而不是实验室里已经研究到的等级。
5. 空中战车的木桶数量有限，投完后会自动解体；如果它在投完前被摧毁，剩余木桶会消失，但它携带的部落城堡援军仍会在其被摧毁的位置释放出来。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="发射木桶" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="2格/秒" />
    <UnitProperty pKey="攻击速度" pValue="8秒/次" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="9" />
    <UnitProperty pKey="所需大本等级" pValue="17" />
    <UnitProperty pKey="建造时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,45000,Elixir" :isDonationCost="true" />
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

| 等级 |平均<br>每秒伤害<sup>*</sup>|每次伤害<sup>*</sup>| 生命值 | 木桶数量 | 升级花费 | 升级时间 |所需<br>实验室等级|所需<br>大本等级|
|  --- |            ---            |         ---       |  ---  |   ---    |    ---  |   ---   |       ---       |      ---      |
|   1  |             1             |          8        |  3600 |    5     |      \  |   \     |         1       |       17      |
|   2  |             2             |         16        |  3800 |    5     |    22M  |  10     |        15       |       17      |
|   3  |             3             |         24        |  4000 |    6     |    26M  |  13,12  |        16       |       17      |
|   4  |             4             |         32        |  4200 |    6     |    29M  |  16     |        16       |       17      |
</UnitTable>

\* 空中战车的面板里不会直接显示平均每秒伤害，这个伤害值实际上使用与等级相同的值。

<SmallTitle>木桶中的部队</SmallTitle>

<UnitTable>

| 木桶等级 |亡灵<br>数量|气球兵<br>数量|飞龙宝宝<br>数量|亡灵<br>等级|气球兵<br>等级|飞龙宝宝<br>等级|
|   ---   |     ---    |      ---    |      ---      |     ---   |     ---     |      ---      |
|    1    |      3     |       1     |       1       |     11    |      10     |       9       |
|    2    |      4     |       1     |       1       |     12    |      11     |      10       |
|    3    |      5     |       1     |       1       |     13    |      12     |      11       |
|    4    |      5     |       1     |       1       |     14    |      13     |      12       |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/04/27">
        <TimelineRow>新增攻城机器：空中战车。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
