---
title: "部落冲突 coc 防空火箭升级数据"
navTitle: "防空火箭"
shownTitle: "防空火箭"
description: "防空火箭是歼灭敌军空中部队的利器，可惜它不能攻击地面上的敌人。请巧妙部署防空火箭，最大限度保护您的领空。"
module: upgrade-home
imgFolder: home_buildings/0304
wiki: https://clashofclans.fandom.com/wiki/Air_Defense
canonical: /upgrade/0304-Air-Defense
---

- *如想查看夜世界的多管防空火炮，请访问：[夜世界防空火炮](/upgrade/firecrackers-bh)。*
- *如想查看都城的多管防空火箭，请访问：[都城防空火箭](/upgrade/air-defense-capital)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Air_Defense16.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1级" imgSrc="Air_Defense1.png" />
        <UnitImg imgTitle="2级" imgSrc="Air_Defense2.png" />
        <UnitImg imgTitle="3级" imgSrc="Air_Defense3.png" />
        <UnitImg imgTitle="4级" imgSrc="Air_Defense4.png" />
        <UnitImg imgTitle="5级" imgSrc="Air_Defense5.png" />
        <UnitImg imgTitle="6级" imgSrc="Air_Defense6.png" />
        <UnitImg imgTitle="7级" imgSrc="Air_Defense7.png" />
        <UnitImg imgTitle="8级" imgSrc="Air_Defense8.png" />
        <UnitImg imgTitle="9级" imgSrc="Air_Defense9.png" />
        <UnitImg imgTitle="10级" imgSrc="Air_Defense10.png" />
        <UnitImg imgTitle="11级" imgSrc="Air_Defense11.png" />
        <UnitImg imgTitle="12级" imgSrc="Air_Defense12.png" />
        <UnitImg imgTitle="13级" imgSrc="Air_Defense13.png" />
        <UnitImg imgTitle="14级" imgSrc="Air_Defense14.png" />
        <UnitImg imgTitle="15级" imgSrc="Air_Defense15.png" />
        <UnitImg imgTitle="16级" imgSrc="Air_Defense16.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4 - 5, 6, 7 - 8, 9 - 18" />
    <BuildingNumRow title="建筑数量" num="    0,     1, 2,     3,      4" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅空中目标" />
    <UnitProperty pKey="射程" pValue="10格" />
    <UnitProperty pKey="攻速" pValue="1秒/次" />
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
| ---- |   ---   |   ---   |   ---  |   ---   |    ---    |        ---          |       ---      |
|   1  |    80   |    80   |   800  |   22k   |   0, 1    |                     |        4       |
|   2  |   110   |   110   |   850  |   90k   |   0, 2    |                     |        4       |
|   3  |   140   |   140   |   900  |  210k   |   0, 6    |                     |        5       |
|   4  |   160   |   160   |   950  |  500k   |   0,12    |                     |        6       |
|   5  |   190   |   190   |  1000  |  800k   |   0,18    |                     |        7       |
|   6  |   230   |   230   |  1050  |    1M   |   1       |                     |        8       |
|   7  |   280   |   280   |  1100  | 1.75M   |   2       |                     |        9       |
|   8  |   320   |   320   |  1210  |  2.3M   |   2,12    |                     |       10       |
|   9  |   360   |   360   |  1300  |  3.4M   |   3       |                     |       11       |
|  10  |   400   |   400   |  1400  |    5M   |   4       |                     |       12       |
|  11  |   440   |   440   |  1500  |  5.6M   |   4,12    |                     |       13       |
|  12  |   500   |   500   |  1650  |  6.5M   |   5       |                     |       14       |
|  13  |   540   |   540   |  1750  |    8M   |   6       |                     |       15       |
|  14  |   600   |   600   |  1850  |    9M   |   6,12    |                     |       16       |
|  15  |   650   |   650   |  1950  |   15M   |   9,12    |                     |       17       |
|  16  |   700   |   700   |  2000  |   26M   |   13,6    |                     |       18       |
| ⚡1  |   720   |   720   |  2000  |    6M   |  2,18    |                     |       18       |
| ⚡2  |   740   |   740   |  2000  |    3M   |   4,6    |                     |       18       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18本推出，并在18本新增16级防空火箭。</TimelineRow>
        <TimelineRow>15级防空火箭的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>14级防空火箭的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1、3 ~ 6、14级防空火箭的升级时间减少。</TimelineRow>
        <TimelineRow>3、10 ~ 14级防空火箭的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>1 ~ 2级防空火箭的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17本推出，并在17本新增15级防空火箭。</TimelineRow>
        <TimelineRow>10 ~ 14级防空火箭的升级时间减少。</TimelineRow>
        <TimelineRow>11 ~ 14级防空火箭的升级费用降低。</TimelineRow>
        <TimelineRow>防空火箭成为第二批可以充能的建筑。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 4、10 ~ 13级防空火箭的升级时间减少。</TimelineRow>
        <TimelineRow>12 ~ 13级防空火箭的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16本推出，并在15本新增14级防空火箭。</TimelineRow>
        <TimelineRow>2 ~ 13级防空火箭的升级时间减少。</TimelineRow>
        <TimelineRow>5 ~ 6、8 ~ 9、12 ~ 13级防空火箭的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>10 ~ 11级防空火箭的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 11级防空火箭的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15本推出，并在15本新增13级防空火箭。</TimelineRow>
        <TimelineRow>8 ~ 12级防空火箭的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/09/13">
        <TimelineRow>12级防空火箭的每秒伤害增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>12级防空火箭：生命值从1600提升至1650。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>6 ~ 11级防空火箭的升级费用降低。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2021/06/15">
        <TimelineRow>14本新增12级防空火箭。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>1、6 ~ 9级防空火箭的升级费用降低。</TimelineRow>
        <TimelineRow>8 ~ 9级防空火箭的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/01/20">
        <TimelineRow>修复了11级防空火箭的命中效果。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>10本的8级防空血量加10，这样一来必须要4个7级闪电才能打掉一个8级防空。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13本新增11级防空火箭。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>7 ~ 10级防空火箭的升级费用降低。</TimelineRow>
        <TimelineRow>3 ~ 7级防空火箭的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>