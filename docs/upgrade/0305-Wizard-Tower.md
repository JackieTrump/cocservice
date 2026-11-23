---
title: "部落冲突 coc 法师塔升级数据"
navTitle: "法师塔"
shownTitle: "法师塔"
description: "感受神秘法术的威力吧！塔上的法师会施放威力强大的范围性攻击法术，抵御侵入领土和领空的敌军。"
module: upgrade-home
imgFolder: home_buildings/0305
wiki: https://clashofclans.fandom.com/wiki/Wizard_Tower
canonical: /upgrade/0305-Wizard-Tower
---

- *如想查看都城的超级法师塔，请访问：[都城超级法师塔](/upgrade/2207-Super-Wizard-Tower)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wizard_Tower17.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="法师塔" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1级" imgSrc="Wizard_Tower1.png" />
        <UnitImg imgTitle="2级" imgSrc="Wizard_Tower2.png" />
        <UnitImg imgTitle="3级" imgSrc="Wizard_Tower3.png" />
        <UnitImg imgTitle="4级" imgSrc="Wizard_Tower4.png" />
        <UnitImg imgTitle="5级" imgSrc="Wizard_Tower5.png" />
        <UnitImg imgTitle="6级" imgSrc="Wizard_Tower6.png" />
        <UnitImg imgTitle="7级" imgSrc="Wizard_Tower7.png" />
        <UnitImg imgTitle="8级" imgSrc="Wizard_Tower8.png" />
        <UnitImg imgTitle="9级" imgSrc="Wizard_Tower9.png" />
        <UnitImg imgTitle="10级" imgSrc="Wizard_Tower10.png" />
        <UnitImg imgTitle="11级" imgSrc="Wizard_Tower11.png" />
        <UnitImg imgTitle="12级" imgSrc="Wizard_Tower12.png" />
        <UnitImg imgTitle="13级" imgSrc="Wizard_Tower13.png" />
        <UnitImg imgTitle="14级" imgSrc="Wizard_Tower14.png" />
        <UnitImg imgTitle="15级" imgSrc="Wizard_Tower15.png" />
        <UnitImg imgTitle="16级" imgSrc="Wizard_Tower16.png" />
        <UnitImg imgTitle="17级" imgSrc="Wizard_Tower17.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5, 6 - 7, 8, 9 - 10, 11 - 17" />
    <BuildingNumRow title="建筑数量" num="    0, 1,     2, 3,      4,       5" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="7格" />
    <UnitProperty pKey="攻速" pValue="1.3秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |   ---     |        ---          |       ---      |
|   1  |    11   |   14.3  |   620  |   100k  |   0, 1    |                     |        5       |
|   2  |    13   |   16.9  |   650  |   150k  |   0, 1,30 |                     |        5       |
|   3  |    16   |   20.8  |   680  |   250k  |   0, 4    |                     |        6       |
|   4  |    20   |   26    |   730  |   400k  |   0, 8    |                     |        7       |
|   5  |    24   |   31.2  |   840  |   550k  |   0,10    |                     |        8       |
|   6  |    32   |   41.6  |   960  |   660k  |   0,12    |                     |        8       |
|   7  |    40   |   52    |  1200  |     1M  |   0,18    |                     |        9       |
|   8  |    45   |   58.5  |  1440  |   1.1M  |   0,20    |                     |       10       |
|   9  |    50   |   65    |  1600  |   1.3M  |   1       |                     |       10       |
|  10  |    62   |   80.6  |  1900  |     2M  |   1, 6    |                     |       11       |
|  11  |    70   |   91    |  2120  |   2.5M  |   1,12    |                     |       12       |
|  12  |    78   |  101.4  |  2240  |   2.6M  |   1,18    |                     |       13       |
|  13  |    84   |  109.2  |  2500  |     3M  |   2       |                     |       13       |
|  14  |    90   |  117    |  2800  |   4.5M  |   3       |                     |       14       |
|  15  |    95   |  123.5  |  3000  |   5.5M  |   4       |                     |       15       |
|  16  |   102   |  132.6  |  3150  |     8M  |   4,12    |                     |       16       |
|  17  |   110   |  143    |  3300  |    20M  |  14,18    |                     |       17       |
| ⚡1  |   114   |  148.2  |  3300  |     8M  |   3,12    |                     |       17       |
| ⚡2  |   114   |  148.2  |  3375  |     4M  |   5,12    |                     |       17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>16级法师塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1、3 ~ 5、7 ~ 8、10 ~ 12、14 ~ 16级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 16级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>2、6、9、13级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>13级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17本推出，并在17本新增17级法师塔。</TimelineRow>
        <TimelineRow>8 ~ 16级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 16级法师塔的升级费用降低。</TimelineRow>
        <TimelineRow>法师塔成为第二批可以充能的建筑。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>11 ~ 15级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>11 ~ 15级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>9 ~ 14级法师塔的生命值降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16本推出，并在16本新增16级法师塔。</TimelineRow>
        <TimelineRow>2 ~ 15级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 10、14级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>11 ~ 13级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>11 ~ 13级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15本推出，并在15本新增15级法师塔。</TimelineRow>
        <TimelineRow>8 ~ 14级法师塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 6、8 ~ 13级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2021/06/15">
        <TimelineRow>14本新增14级法师塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>3 ~ 8、10级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 8、10级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13本新增13级法师塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13本推出，并在13本新增12级法师塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>8 ~ 9级法师塔的伤害降低。</TimelineRow>
    </TimelineItem>    
        <TimelineItem date="2019/04/02">
        <TimelineRow>所有等级法师塔的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 9级法师塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
